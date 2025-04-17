const wordList: string[] = [
    // Fruits
    "apple", "banana", "grape", "orange", "pear", "peach", "melon", "kiwi", "plum", "mango",
    "strawberry", "watermelon", "pineapple", "cherry", "raspberry", "blackberry", "coconut", "lemon", "lime", "papaya",
    "apricot", "fig", "guava", "lychee", "passionfruit", "dragonfruit", "avocado", "pomegranate", "cranberry", "blueberry",
  
    // Colors
    "blue", "green", "red", "yellow", "purple", "black", "white", "brown", "pink", "gray",
    "teal", "maroon", "navy", "olive", "silver", "gold", "violet", "indigo", "turquoise", "magenta",
    "lavender", "crimson", "beige", "cyan", "amber", "coral", "salmon", "charcoal", "ivory", "emerald",
  
    // Animals
    "dog", "cat", "mouse", "bird", "fish", "horse", "sheep", "cow", "lion", "tiger",
    "elephant", "giraffe", "zebra", "monkey", "kangaroo", "rhino", "panda", "koala", "wolf", "fox",
    "deer", "bear", "rabbit", "squirrel", "frog", "turtle", "snake", "lizard", "shark", "whale",
    "dolphin", "octopus", "crab", "eagle", "owl", "parrot", "peacock", "penguin", "flamingo", "swan",
  
    // Weather & Nature
    "sky", "cloud", "rain", "storm", "wind", "snow", "ice", "fog", "sun", "moon",
    "star", "planet", "comet", "galaxy", "meteor", "lightning", "thunder", "hurricane", "tornado", "drizzle",
    "sunshine", "sunset", "sunrise", "twilight", "dawn", "dusk", "breeze", "cyclone", "typhoon", "hail",
    "rainbow", "dew", "frost", "mist", "haze", "smog", "blizzard", "avalanche", "earthquake", "tsunami",
  
    // Actions (Verbs)
    "run", "jump", "walk", "swim", "fly", "crawl", "climb", "dance", "sing", "laugh",
    "sleep", "eat", "drink", "cook", "write", "read", "paint", "draw", "build", "fix",
    "drive", "ride", "cycle", "sail", "surf", "ski", "skate", "roll", "spin", "twist",
    "throw", "catch", "kick", "hit", "push", "pull", "lift", "carry", "drop", "hold",
  
    // Adjectives (Descriptive Words)
    "fast", "slow", "hot", "cold", "bright", "dark", "clean", "dirty", "soft", "hard",
    "happy", "sad", "angry", "calm", "brave", "shy", "funny", "serious", "loud", "quiet",
    "big", "small", "tall", "short", "wide", "narrow", "heavy", "light", "strong", "weak",
    "sweet", "sour", "bitter", "salty", "spicy", "fresh", "stale", "raw", "ripe", "rotten",
  
    // Objects (Everyday Items)
    "book", "pen", "paper", "desk", "chair", "lamp", "clock", "phone", "bag", "shoe",
    "table", "bed", "mirror", "window", "door", "key", "lock", "box", "cup", "plate",
    "knife", "fork", "spoon", "bottle", "glass", "bowl", "pot", "pan", "oven", "fridge",
    "computer", "mouse", "keyboard", "screen", "speaker", "camera", "remote", "charger", "battery", "bulb",
  
    // Places & Transportation
    "city", "town", "village", "road", "car", "train", "bus", "bike", "bridge", "house",
    "school", "hospital", "park", "garden", "forest", "mountain", "river", "lake", "ocean", "beach",
    "airport", "station", "port", "hotel", "restaurant", "cafe", "mall", "market", "theater", "museum",
    "helicopter", "airplane", "ship", "subway", "taxi", "truck", "motorcycle", "scooter", "yacht", "jet",
  
    // Technology & Science
    "robot", "drone", "satellite", "rocket", "laser", "radar", "sensor", "chip", "wire", "cable",
    "internet", "website", "app", "software", "hardware", "data", "code", "program", "algorithm", "network",
    "electric", "battery", "solar", "nuclear", "atomic", "quantum", "digital", "virtual", "cyber", "neural",
  
    // Food & Drinks
    "bread", "rice", "pasta", "pizza", "burger", "sandwich", "soup", "salad", "cheese", "butter",
    "coffee", "tea", "juice", "milk", "water", "soda", "beer", "wine", "chocolate", "candy",
    "cake", "cookie", "pie", "icecream", "yogurt", "honey", "jam", "sauce", "oil", "vinegar",
  
    // Body Parts
    "head", "eye", "nose", "ear", "mouth", "hand", "arm", "leg", "foot", "toe",
    "hair", "face", "neck", "shoulder", "chest", "back", "stomach", "knee", "elbow", "finger",
  
    // Clothing
    "shirt", "pants", "dress", "skirt", "jacket", "coat", "sweater", "hat", "scarf", "gloves",
    "socks", "shoes", "boots", "sandals", "tie", "belt", "watch", "glasses", "ring", "necklace",
  
    // Emotions & Feelings
    "love", "hate", "fear", "joy", "anger", "sadness", "surprise", "excitement", "boredom", "confusion",
    "hope", "trust", "disgust", "guilt", "shame", "pride", "envy", "greed", "kindness", "patience",
  
    // Professions
    "doctor", "teacher", "engineer", "artist", "musician", "writer", "chef", "pilot", "soldier", "police",
    "farmer", "scientist", "athlete", "actor", "lawyer", "judge", "nurse", "driver", "builder", "designer",
  
    // Sports
    "soccer", "basketball", "tennis", "golf", "baseball", "cricket", "hockey", "rugby", "volleyball", "swimming",
    "boxing", "wrestling", "cycling", "running", "jumping", "surfing", "skiing", "skating", "fencing", "archery",
  
    // Music
    "guitar", "piano", "violin", "drums", "flute", "trumpet", "saxophone", "cello", "harp", "clarinet",
    "song", "melody", "rhythm", "beat", "note", "chord", "scale", "opera", "concert", "album",
  
    // Time & Calendar
    "second", "minute", "hour", "day", "week", "month", "year", "decade", "century", "millennium",
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "morning", "afternoon", "evening",
  
    // Math & Numbers
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "plus", "minus", "multiply", "divide", "equal", "sum", "total", "count", "number", "digit",
  
    // Shapes
    "circle", "square", "triangle", "rectangle", "oval", "pentagon", "hexagon", "cube", "sphere", "pyramid",
  
    // Miscellaneous
    "dream", "magic", "secret", "mystery", "adventure", "journey", "treasure", "victory", "defeat", "challenge",
    "future", "past", "present", "destiny", "fortune", "luck", "fate", "wisdom", "knowledge", "truth"
  ];
  
  export default wordList;
  