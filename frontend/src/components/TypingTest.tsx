import React, { useEffect, useRef, useState } from "react";
import wordList from "../data/wordList";
import Timer from "./Timer";
import Stats from "./Stats";
import "../styles/TypingTest.css";

const TypingTest: React.FC = () => {
  const [words, setWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [testStarted, setTestStarted] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(30);
  const [wordResults, setWordResults] = useState<{ status: "correct" | "incorrect" | null; typed: string }[]>([]);
  const [bouncing, setBouncing] = useState(false);
  const [lastWrongIndex, setLastWrongIndex] = useState<number | null>(null);
  const [canUndo, setCanUndo] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const shuffled = shuffleWords(wordList).slice(0, 100);
    setWords(shuffled);
    setWordResults(new Array(shuffled.length).fill({ status: null, typed: "" }));
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (testStarted && !finished) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setFinished(true);
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [testStarted, finished]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey) {
        e.preventDefault();
        handleReset();
      }
      if (e.key === "Backspace" && canUndo && lastWrongIndex !== null && currentWordIndex === lastWrongIndex + 1) {
        setCurrentWordIndex(lastWrongIndex);
        setTyped(wordResults[lastWrongIndex].typed);
        const updated = [...wordResults];
        updated[lastWrongIndex] = { status: null, typed: "" };
        setWordResults(updated);
        setLastWrongIndex(null);
        setCanUndo(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [canUndo, lastWrongIndex, currentWordIndex, wordResults]);

  const shuffleWords = (words: string[]) => {
    return [...words].sort(() => Math.random() - 0.5);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (!testStarted) {
      setTestStarted(true);
    }

    if (value.endsWith(" ")) {
      const trimmed = value.trim();
      const isCorrect = trimmed === words[currentWordIndex];

      const updated = [...wordResults];
      updated[currentWordIndex] = { status: isCorrect ? "correct" : "incorrect", typed: trimmed };
      setWordResults(updated);

      if (isCorrect) {
        setCorrectCount((prev) => prev + 1);
        setCanUndo(false);
      } else {
        setLastWrongIndex(currentWordIndex);
        setCanUndo(true);
      }

      setTyped("");
      setCurrentWordIndex((prev) => {
        const next = prev + 1;
        if (next >= words.length) {
          setFinished(true);
        }
        return next;
      });
    } else {
      if (wordResults[currentWordIndex].status === null) {
        const clamped = value.slice(0, words[currentWordIndex].length);
        setTyped(clamped);
        setCanUndo(false); // disable undo once you start typing the next word
      }
    }
  };

  const getWPM = (): number => {
    const elapsed = selectedDuration - timeLeft;
    if (elapsed <= 0) return 0;
    return Math.round((correctCount / elapsed) * 60);
  };

  const handleReset = () => {
    setBouncing(true);

    setTimeout(() => {
      setBouncing(false);
      const shuffled = shuffleWords(wordList).slice(0, 100);
      setWords(shuffled);
      setWordResults(new Array(shuffled.length).fill({ status: null, typed: "" }));
      setCurrentWordIndex(0);
      setTyped("");
      setCorrectCount(0);
      setFinished(false);
      setTimeLeft(selectedDuration);
      setTestStarted(false);
      setLastWrongIndex(null);
      setCanUndo(false);

      setTimeout(() => {
        inputRef.current?.focus();
      }, 10);
    }, 300);
  };

  const renderWord = (word: string, index: number) => {
    if (index === currentWordIndex) {
      return (
        <span className="typing-word active" key={index}>
          {word.split("").map((char, i) => {
            const inputChar = typed[i];
            let className = "";

            if (inputChar == null) {
              className = "untyped-char";
            } else if (inputChar === char) {
              className = "correct-char";
            } else {
              className = "incorrect-char";
            }

            const isCursor = i === typed.length && !finished;

            return (
              <span key={i} className={`char-container ${className}`}>
                {isCursor && <span className="blinking-cursor" />}
                {char}
              </span>
            );
          })}
          {typed.length > word.length && !finished && (
            <span className="blinking-cursor">|</span>
          )}
        </span>
      );
    }

    if (wordResults[index]?.status === "correct") {
      return (
        <span className="typing-word correct-word" key={index}>
          {word}
        </span>
      );
    }

    if (wordResults[index]?.status === "incorrect") {
      return (
        <span className="typing-word" key={index}>
          {word.split("").map((char, i) => {
            const typedChar = wordResults[index]?.typed[i];
            const className = typedChar && typedChar !== char ? "incorrect-char" : "";
            return (
              <span key={i} className={`char-container ${className}`}>{char}</span>
            );
          })}
        </span>
      );
    }

    return (
      <span className="typing-word" key={index}>
        {word}
      </span>
    );
  };

  return (
    <div className={`typing-wrapper ${bouncing ? "bounce" : ""}`} key={bouncing ? "bounce" : "normal"}>
      <div className="typing-container">
        <h1 className="typing-title">TypQ </h1>

        {!testStarted && (
          <div className="typing-settings">
            <span>Select Test Duration: </span>
            <button onClick={() => { setSelectedDuration(30); setTimeLeft(30); }}>30s</button>
            <button onClick={() => { setSelectedDuration(60); setTimeLeft(60); }}>60s</button>
            <p style={{ fontSize: "0.8rem", color: "rgba(221, 221, 221, 0.3)", marginTop: "0.5rem" }}>
              Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> to restart
            </p>
          </div>
        )}

        <div className="typing-word-bank">
          {words.map((word, index) => index < currentWordIndex + 30 ? renderWord(word, index) : null)}
        </div>

        <div>
          <input
            ref={inputRef}
            type="text"
            value={typed}
            onChange={handleInputChange}
            disabled={finished}
            className="typing-input"
          />
        </div>

        <Timer timeLeft={timeLeft} />

        {finished && (
          <Stats
            wpm={getWPM()}
            accuracy={Math.round((correctCount / (currentWordIndex || 1)) * 100)}
            onRetry={handleReset}
          />
        )}
      </div>
    </div>
  );
};

export default TypingTest;
