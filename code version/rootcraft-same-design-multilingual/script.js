const LANGUAGE_DATA = {
  kannada: {
    label: "Kannada",
    code: "kn-IN",
    ui: {
      nav: "Kannada Learning",
      heroButton: "Start Learning Kannada",
      eyebrow: "RootCraft Kannada",
      heading: "Learn Kannada through pictures, words and play.",
      description: "Choose a topic to begin. Progress is saved on this device.",
      search: "Search lessons...",
      quizPrompt: "Choose the correct Kannada word",
      memoryNote: "Match each picture with its Kannada word.",
      quizCard: "Choose the correct Kannada word.",
      memoryCard: "Match pictures with Kannada words.",
      test: "Test your Kannada"
    },
    lessons: {
      letters: { title: "Kannada Vowels", icon: "ಅ", description: "Learn basic Kannada vowels", items: [
        ["🌟","ಅ","A","ಅ ಅಕ್ಷರ"],["🌈","ಆ","Aa","ಆನೆ ದೊಡ್ಡದು."],["✨","ಇ","I","ಇದು ಮನೆ."],["🦅","ಈ","Ee","ಈ ಹಕ್ಕಿ."],
        ["🌼","ಉ","U","ಉಡುಪಿ ನಗರ."],["🎈","ಊ","Oo","ಊಟ ಮಾಡು."],["🍀","ಎ","E","ಎಲೆ ಹಸಿರು."],["🌞","ಏ","Ae","ಏಣಿ ಉದ್ದವಾಗಿದೆ."]
      ]},
      consonants: { title: "Kannada Consonants", icon: "ಕ", description: "Learn basic consonants", items: [
        ["🐦","ಕ","Ka","ಕಾಗೆ ಕಪ್ಪು."],["🏠","ಗ","Ga","ಗಡಿಯಾರ ಗೋಡೆಯ ಮೇಲೆ ಇದೆ."],["🌳","ಚ","Cha","ಚೆಂಡು ಕೆಂಪು."],
        ["🐘","ಜ","Ja","ಜಿಂಕೆ ವೇಗವಾಗಿ ಓಡುತ್ತದೆ."],["🍅","ಟ","Ta","ಟೊಮ್ಯಾಟೊ ಕೆಂಪು."],["🥁","ಡ","Da","ಡಮರು ಶಬ್ದ ಮಾಡುತ್ತದೆ."],
        ["🌴","ತ","Tha","ತಾಳೆಮರ ಎತ್ತರವಾಗಿದೆ."],["🏹","ದ","Da","ದನ ಹುಲ್ಲು ತಿನ್ನುತ್ತದೆ."],["🐍","ನ","Na","ನಾಯಿ ಸ್ನೇಹಿತ."],
        ["🍎","ಪ","Pa","ಪಪಾಯಿ ಹಣ್ಣು."],["🌸","ಬ","Ba","ಬಣ್ಣ ಸುಂದರ."],["🐒","ಮ","Ma","ಮಂಗ ಮರ ಏರುತ್ತದೆ."],
        ["🚗","ರ","Ra","ರಥ ಸಾಗುತ್ತದೆ."],["🦁","ಸ","Sa","ಸಿಂಹ ಬಲವಾದುದು."],["🐄","ಹ","Ha","ಹಸು ಹಾಲು ಕೊಡುತ್ತದೆ."]
      ]},
      numbers: { title: "Kannada Numbers", icon: "೧೨೩", description: "Count from one to twelve", items: [
        ["1️⃣","ಒಂದು","One","ಒಂದು ಸೇಬು."],["2️⃣","ಎರಡು","Two","ಎರಡು ಹಕ್ಕಿಗಳು."],["3️⃣","ಮೂರು","Three","ಮೂರು ಚೆಂಡುಗಳು."],
        ["4️⃣","ನಾಲ್ಕು","Four","ನಾಲ್ಕು ಹೂಗಳು."],["5️⃣","ಐದು","Five","ಐದು ಮಾವುಗಳು."],["6️⃣","ಆರು","Six","ಆರು ಪುಸ್ತಕಗಳು."],
        ["7️⃣","ಏಳು","Seven","ಏಳು ನಕ್ಷತ್ರಗಳು."],["8️⃣","ಎಂಟು","Eight","ಎಂಟು ಮೀನುಗಳು."],["9️⃣","ಒಂಬತ್ತು","Nine","ಒಂಬತ್ತು ಬಲೂನುಗಳು."],
        ["🔟","ಹತ್ತು","Ten","ಹತ್ತು ಪೆನ್ಸಿಲುಗಳು."],["11","ಹನ್ನೊಂದು","Eleven","ಹನ್ನೊಂದು ಮಕ್ಕಳು."],["12","ಹನ್ನೆರಡು","Twelve","ಹನ್ನೆರಡು ತಿಂಗಳುಗಳು."]
      ]},
      animals: { title: "Animals", icon: "🐘", description: "Learn animal names", items: [
        ["🐘","ಆನೆ","Elephant","ಆನೆ ದೊಡ್ಡ ಪ್ರಾಣಿ."],["🐶","ನಾಯಿ","Dog","ನಾಯಿ ಒಳ್ಳೆಯ ಸ್ನೇಹಿತ."],["🐱","ಬೆಕ್ಕು","Cat","ಬೆಕ್ಕು ಹಾಲು ಕುಡಿಯುತ್ತದೆ."],
        ["🐄","ಹಸು","Cow","ಹಸು ಹಾಲು ಕೊಡುತ್ತದೆ."],["🐯","ಹುಲಿ","Tiger","ಹುಲಿ ಕಾಡಿನಲ್ಲಿ ವಾಸಿಸುತ್ತದೆ."],["🦁","ಸಿಂಹ","Lion","ಸಿಂಹ ಬಲವಾದ ಪ್ರಾಣಿ."],
        ["🐒","ಕೋತಿ","Monkey","ಕೋತಿ ಮರ ಏರುತ್ತದೆ."],["🐇","ಮೊಲ","Rabbit","ಮೊಲ ವೇಗವಾಗಿ ಓಡುತ್ತದೆ."],["🐎","ಕುದುರೆ","Horse","ಕುದುರೆ ಓಡುತ್ತದೆ."],
        ["🐐","ಮೇಕೆ","Goat","ಮೇಕೆ ಹುಲ್ಲು ತಿನ್ನುತ್ತದೆ."]
      ]},
      fruits: { title: "Fruits", icon: "🥭", description: "Learn fruit names", items: [
        ["🥭","ಮಾವು","Mango","ಮಾವು ಸಿಹಿ ಹಣ್ಣು."],["🍎","ಸೇಬು","Apple","ಸೇಬು ಕೆಂಪಾಗಿದೆ."],["🍌","ಬಾಳೆಹಣ್ಣು","Banana","ಬಾಳೆಹಣ್ಣು ಹಳದಿ."],
        ["🍊","ಕಿತ್ತಳೆ","Orange","ಕಿತ್ತಳೆ ರಸ ಸಿಹಿ."],["🍇","ದ್ರಾಕ್ಷಿ","Grapes","ದ್ರಾಕ್ಷಿ ಗುಚ್ಛವಾಗಿ ಬೆಳೆಯುತ್ತದೆ."],["🍉","ಕಲ್ಲಂಗಡಿ","Watermelon","ಕಲ್ಲಂಗಡಿ ದೊಡ್ಡ ಹಣ್ಣು."],
        ["🍍","ಅನಾನಸ್","Pineapple","ಅನಾನಸ್ ಸಿಹಿ."],["🥥","ತೆಂಗಿನಕಾಯಿ","Coconut","ತೆಂಗಿನಕಾಯಿ ನೀರು ತಂಪು."]
      ]},
      vegetables: { title: "Vegetables", icon: "🥕", description: "Learn vegetable names", items: [
        ["🥕","ಗಜ್ಜರಿ","Carrot","ಗಜ್ಜರಿ ಕಿತ್ತಳೆ ಬಣ್ಣದದು."],["🥔","ಆಲೂಗಡ್ಡೆ","Potato","ಆಲೂಗಡ್ಡೆ ನೆಲದೊಳಗೆ ಬೆಳೆಯುತ್ತದೆ."],
        ["🍅","ಟೊಮ್ಯಾಟೊ","Tomato","ಟೊಮ್ಯಾಟೊ ಕೆಂಪು."],["🥒","ಸೌತೆಕಾಯಿ","Cucumber","ಸೌತೆಕಾಯಿ ಹಸಿರು."],
        ["🧅","ಈರುಳ್ಳಿ","Onion","ಈರುಳ್ಳಿ ಅಡುಗೆಯಲ್ಲಿ ಬಳಸುತ್ತಾರೆ."],["🌽","ಜೋಳ","Corn","ಜೋಳ ಹಳದಿ."]
      ]},
      colors: { title: "Colours", icon: "🎨", description: "Learn colour names", items: [
        ["🔴","ಕೆಂಪು","Red","ಗುಲಾಬಿ ಕೆಂಪಾಗಿದೆ."],["🔵","ನೀಲಿ","Blue","ಆಕಾಶ ನೀಲಿ."],["🟢","ಹಸಿರು","Green","ಎಲೆ ಹಸಿರು."],
        ["🟡","ಹಳದಿ","Yellow","ಸೂರ್ಯ ಹಳದಿ."],["⚫","ಕಪ್ಪು","Black","ಕಾಗೆ ಕಪ್ಪು."],["⚪","ಬಿಳಿ","White","ಹಾಲು ಬಿಳಿ."]
      ]},
      birds: { title: "Birds", icon: "🐦", description: "Learn bird names", items: [
        ["🐦","ಹಕ್ಕಿ","Bird","ಹಕ್ಕಿ ಆಕಾಶದಲ್ಲಿ ಹಾರುತ್ತದೆ."],["🦚","ನವಿಲು","Peacock","ನವಿಲು ಸುಂದರವಾಗಿ ಕುಣಿಯುತ್ತದೆ."],
        ["🦜","ಗಿಳಿ","Parrot","ಗಿಳಿ ಹಸಿರು."],["🦅","ಹದ್ದು","Eagle","ಹದ್ದು ಎತ್ತರದಲ್ಲಿ ಹಾರುತ್ತದೆ."],
        ["🦉","ಗೂಬೆ","Owl","ಗೂಬೆ ರಾತ್ರಿ ಎಚ್ಚರವಾಗಿರುತ್ತದೆ."],["🐓","ಕೋಳಿ","Hen","ಕೋಳಿ ಮೊಟ್ಟೆ ಇಡುತ್ತದೆ."]
      ]},
      family: { title: "Family", icon: "👨‍👩‍👧", description: "Learn family words", items: [
        ["👩","ಅಮ್ಮ","Mother","ಅಮ್ಮ ನನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತಾರೆ."],["👨","ಅಪ್ಪ","Father","ಅಪ್ಪ ನನ್ನ ಜೊತೆ ಆಟ ಆಡುತ್ತಾರೆ."],
        ["👦","ಅಣ್ಣ","Elder brother","ಅಣ್ಣ ಶಾಲೆಗೆ ಹೋಗುತ್ತಾನೆ."],["👧","ಅಕ್ಕ","Elder sister","ಅಕ್ಕ ಪುಸ್ತಕ ಓದುತ್ತಾಳೆ."],
        ["👵","ಅಜ್ಜಿ","Grandmother","ಅಜ್ಜಿ ಕಥೆ ಹೇಳುತ್ತಾರೆ."],["👴","ತಾತ","Grandfather","ತಾತ ಬೆಳಿಗ್ಗೆ ನಡೆಯುತ್ತಾರೆ."]
      ]},
      body: { title: "Body Parts", icon: "👀", description: "Learn body parts", items: [
        ["👀","ಕಣ್ಣು","Eye","ಕಣ್ಣಿನಿಂದ ನಾವು ನೋಡುತ್ತೇವೆ."],["👂","ಕಿವಿ","Ear","ಕಿವಿಯಿಂದ ನಾವು ಕೇಳುತ್ತೇವೆ."],
        ["👃","ಮೂಗು","Nose","ಮೂಗಿನಿಂದ ವಾಸನೆ ತಿಳಿಯುತ್ತದೆ."],["👄","ಬಾಯಿ","Mouth","ಬಾಯಿಯಿಂದ ನಾವು ಮಾತನಾಡುತ್ತೇವೆ."],
        ["🖐️","ಕೈ","Hand","ಕೈಯಿಂದ ನಾವು ಬರೆಯುತ್ತೇವೆ."],["🦶","ಕಾಲು","Leg","ಕಾಲಿನಿಂದ ನಾವು ನಡೆಯುತ್ತೇವೆ."]
      ]},
      shapes: { title: "Shapes", icon: "🔺", description: "Learn basic shapes", items: [
        ["⚪","ವೃತ್ತ","Circle","ಚೆಂಡು ವೃತ್ತಾಕಾರವಾಗಿದೆ."],["🟥","ಚೌಕ","Square","ಕಿಟಕಿ ಚೌಕವಾಗಿದೆ."],
        ["🔺","ತ್ರಿಭುಜ","Triangle","ತ್ರಿಭುಜಕ್ಕೆ ಮೂರು ಬದಿಗಳು."],["▭","ಆಯತ","Rectangle","ಬಾಗಿಲು ಆಯತವಾಗಿದೆ."],
        ["⭐","ನಕ್ಷತ್ರ","Star","ಆಕಾಶದಲ್ಲಿ ನಕ್ಷತ್ರ ಮಿನುಗುತ್ತದೆ."],["❤️","ಹೃದಯಾಕೃತಿ","Heart","ಇದು ಹೃದಯಾಕೃತಿ."]
      ]},
      days: { title: "Days of the Week", icon: "📅", description: "Learn days in Kannada", items: [
        ["1","ಭಾನುವಾರ","Sunday","ಇಂದು ಭಾನುವಾರ."],["2","ಸೋಮವಾರ","Monday","ನಾಳೆ ಸೋಮವಾರ."],["3","ಮಂಗಳವಾರ","Tuesday","ಮಂಗಳವಾರ ಶಾಲೆ ಇದೆ."],
        ["4","ಬುಧವಾರ","Wednesday","ಬುಧವಾರ ನಾವು ಓದುತ್ತೇವೆ."],["5","ಗುರುವಾರ","Thursday","ಗುರುವಾರ ಸಂಗೀತ ತರಗತಿ."],
        ["6","ಶುಕ್ರವಾರ","Friday","ಶುಕ್ರವಾರ ಆಟದ ದಿನ."],["7","ಶನಿವಾರ","Saturday","ಶನಿವಾರ ರಜೆ."]
      ]}
    },
    stories: {
      elephant: {title:"The Kind Elephant", text:"ಒಂದು ಕಾಡಿನಲ್ಲಿ ಒಂದು ದಯಾಳು ಆನೆ ವಾಸಿಸುತ್ತಿತ್ತು. ಒಂದು ದಿನ ಚಿಕ್ಕ ಹಕ್ಕಿಯ ಗೂಡು ಗಾಳಿಯಿಂದ ಕೆಳಗೆ ಬಿತ್ತು. ಆನೆ ತನ್ನ ಸೊಂಡಿಲಿನಿಂದ ಗೂಡನ್ನು ಎತ್ತಿ ಮರದ ಮೇಲೆ ಇಟ್ಟಿತು. ಹಕ್ಕಿ ಸಂತೋಷಪಟ್ಟಿತು. ಪಾಠ: ಸಹಾಯ ಮಾಡುವ ಹೃದಯವೇ ನಿಜವಾದ ಬಲ."},
      bird: {title:"The Clever Bird", text:"ಒಂದು ಚಿಕ್ಕ ಹಕ್ಕಿಗೆ ನೀರು ಬೇಕಾಯಿತು. ಪಾತ್ರೆಯಲ್ಲಿ ನೀರು ತುಂಬಾ ಕೆಳಗಿತ್ತು. ಹಕ್ಕಿ ಸಣ್ಣ ಕಲ್ಲುಗಳನ್ನು ಪಾತ್ರೆಗೆ ಹಾಕಿತು. ನೀರು ಮೇಲಕ್ಕೆ ಬಂತು. ಹಕ್ಕಿ ನೀರು ಕುಡಿತು. ಪಾಠ: ಬುದ್ಧಿ ಮತ್ತು ಸಹನೆ ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹರಿಸುತ್ತವೆ."},
      seed: {title:"The Little Seed", text:"ಒಂದು ಚಿಕ್ಕ ಬೀಜ ಮಣ್ಣಿನೊಳಗೆ ಮಲಗಿತ್ತು. ಮಳೆ ಬಂತು, ಸೂರ್ಯ ಬೆಳಗಿದ. ಬೀಜ ನಿಧಾನವಾಗಿ ಮೊಳಕೆಯೊಡೆದು ದೊಡ್ಡ ಗಿಡವಾಯಿತು. ಪಾಠ: ಸಣ್ಣ ಆರಂಭವೂ ದೊಡ್ಡ ಬೆಳವಣಿಗೆಗೆ ಕಾರಣವಾಗಬಹುದು."}
    }
  },

  english: {
    label: "English",
    code: "en-IN",
    ui: {
      nav: "English Learning",
      heroButton: "Start Learning English",
      eyebrow: "RootCraft English",
      heading: "Learn English through pictures, words and play.",
      description: "Choose a topic to begin. Progress is saved on this device.",
      search: "Search lessons...",
      quizPrompt: "Choose the correct English word",
      memoryNote: "Match each picture with its English word.",
      quizCard: "Choose the correct English word.",
      memoryCard: "Match pictures with English words.",
      test: "Test your English"
    },
    lessons: {
      letters: { title: "English Alphabet", icon: "ABC", description: "Learn basic English letters", items: [
        ["🍎","A","Apple","A is for Apple."],["⚽","B","Ball","B is for Ball."],["🐱","C","Cat","C is for Cat."],["🐶","D","Dog","D is for Dog."],
        ["🥚","E","Egg","E is for Egg."],["🐟","F","Fish","F is for Fish."],["🍇","G","Grapes","G is for Grapes."],["🏠","H","House","H is for House."]
      ]},
      consonants: { title: "English Phonics", icon: "🔊", description: "Learn basic letter sounds", items: [
        ["🍎","A","/æ/","Apple begins with A."],["⚽","B","/b/","Ball begins with B."],["🐱","C","/k/","Cat begins with C."],
        ["🐶","D","/d/","Dog begins with D."],["🐟","F","/f/","Fish begins with F."],["🌞","S","/s/","Sun begins with S."]
      ]},
      numbers: { title: "English Numbers", icon: "123", description: "Count from one to twelve", items: [
        ["1️⃣","One","1","One apple."],["2️⃣","Two","2","Two birds."],["3️⃣","Three","3","Three balls."],["4️⃣","Four","4","Four flowers."],
        ["5️⃣","Five","5","Five mangoes."],["6️⃣","Six","6","Six books."],["7️⃣","Seven","7","Seven stars."],["8️⃣","Eight","8","Eight fish."],
        ["9️⃣","Nine","9","Nine balloons."],["🔟","Ten","10","Ten pencils."],["11","Eleven","11","Eleven children."],["12","Twelve","12","Twelve months."]
      ]},
      animals: { title: "Animals", icon: "🐘", description: "Learn animal names", items: [
        ["🐘","Elephant","ಆನೆ","The elephant is big."],["🐶","Dog","ನಾಯಿ","The dog is friendly."],["🐱","Cat","ಬೆಕ್ಕು","The cat drinks milk."],
        ["🐄","Cow","ಹಸು","The cow gives milk."],["🐯","Tiger","ಹುಲಿ","The tiger lives in the forest."],["🦁","Lion","ಸಿಂಹ","The lion is strong."],
        ["🐒","Monkey","ಕೋತಿ","The monkey climbs trees."],["🐇","Rabbit","ಮೊಲ","The rabbit runs fast."],["🐎","Horse","ಕುದುರೆ","The horse runs."],["🐐","Goat","ಮೇಕೆ","The goat eats grass."]
      ]},
      fruits: { title: "Fruits", icon: "🥭", description: "Learn fruit names", items: [
        ["🥭","Mango","ಮಾವು","The mango is sweet."],["🍎","Apple","ಸೇಬು","The apple is red."],["🍌","Banana","ಬಾಳೆಹಣ್ಣು","The banana is yellow."],
        ["🍊","Orange","ಕಿತ್ತಳೆ","The orange is juicy."],["🍇","Grapes","ದ್ರಾಕ್ಷಿ","Grapes grow in bunches."],["🍉","Watermelon","ಕಲ್ಲಂಗಡಿ","The watermelon is big."],
        ["🍍","Pineapple","ಅನಾನಸ್","The pineapple is sweet."],["🥥","Coconut","ತೆಂಗಿನಕಾಯಿ","Coconut water is cool."]
      ]},
      vegetables: { title: "Vegetables", icon: "🥕", description: "Learn vegetable names", items: [
        ["🥕","Carrot","ಗಜ್ಜರಿ","The carrot is orange."],["🥔","Potato","ಆಲೂಗಡ್ಡೆ","The potato grows underground."],["🍅","Tomato","ಟೊಮ್ಯಾಟೊ","The tomato is red."],
        ["🥒","Cucumber","ಸೌತೆಕಾಯಿ","The cucumber is green."],["🧅","Onion","ಈರುಳ್ಳಿ","We use onion in cooking."],["🌽","Corn","ಜೋಳ","Corn is yellow."]
      ]},
      colors: { title: "Colours", icon: "🎨", description: "Learn colour names", items: [
        ["🔴","Red","ಕೆಂಪು","The rose is red."],["🔵","Blue","ನೀಲಿ","The sky is blue."],["🟢","Green","ಹಸಿರು","The leaf is green."],
        ["🟡","Yellow","ಹಳದಿ","The sun is yellow."],["⚫","Black","ಕಪ್ಪು","The crow is black."],["⚪","White","ಬಿಳಿ","Milk is white."]
      ]},
      birds: { title: "Birds", icon: "🐦", description: "Learn bird names", items: [
        ["🐦","Bird","ಹಕ್ಕಿ","The bird flies in the sky."],["🦚","Peacock","ನವಿಲು","The peacock dances beautifully."],["🦜","Parrot","ಗಿಳಿ","The parrot is green."],
        ["🦅","Eagle","ಹದ್ದು","The eagle flies high."],["🦉","Owl","ಗೂಬೆ","The owl stays awake at night."],["🐓","Hen","ಕೋಳಿ","The hen lays eggs."]
      ]},
      family: { title: "Family", icon: "👨‍👩‍👧", description: "Learn family words", items: [
        ["👩","Mother","ಅಮ್ಮ","My mother loves me."],["👨","Father","ಅಪ್ಪ","My father plays with me."],["👦","Elder brother","ಅಣ್ಣ","My brother goes to school."],
        ["👧","Elder sister","ಅಕ್ಕ","My sister reads a book."],["👵","Grandmother","ಅಜ್ಜಿ","Grandmother tells stories."],["👴","Grandfather","ತಾತ","Grandfather walks in the morning."]
      ]},
      body: { title: "Body Parts", icon: "👀", description: "Learn body parts", items: [
        ["👀","Eyes","ಕಣ್ಣು","We see with our eyes."],["👂","Ears","ಕಿವಿ","We hear with our ears."],["👃","Nose","ಮೂಗು","We smell with our nose."],
        ["👄","Mouth","ಬಾಯಿ","We speak with our mouth."],["🖐️","Hand","ಕೈ","We write with our hand."],["🦶","Leg","ಕಾಲು","We walk with our legs."]
      ]},
      shapes: { title: "Shapes", icon: "🔺", description: "Learn basic shapes", items: [
        ["⚪","Circle","ವೃತ್ತ","A ball is round."],["🟥","Square","ಚೌಕ","A window can be square."],["🔺","Triangle","ತ್ರಿಭುಜ","A triangle has three sides."],
        ["▭","Rectangle","ಆಯತ","A door is rectangular."],["⭐","Star","ನಕ್ಷತ್ರ","A star shines in the sky."],["❤️","Heart","ಹೃದಯಾಕೃತಿ","This is a heart shape."]
      ]},
      days: { title: "Days of the Week", icon: "📅", description: "Learn days in English", items: [
        ["1","Sunday","ಭಾನುವಾರ","Today is Sunday."],["2","Monday","ಸೋಮವಾರ","Tomorrow is Monday."],["3","Tuesday","ಮಂಗಳವಾರ","School is open on Tuesday."],
        ["4","Wednesday","ಬುಧವಾರ","We study on Wednesday."],["5","Thursday","ಗುರುವಾರ","Music class is on Thursday."],
        ["6","Friday","ಶುಕ್ರವಾರ","Friday is a play day."],["7","Saturday","ಶನಿವಾರ","Saturday is a holiday."]
      ]}
    },
    stories: {
      elephant: {title:"The Kind Elephant", text:"A kind elephant lived in a forest. One day a little bird's nest fell down. The elephant gently placed the nest back on the tree. The bird was happy. Moral: Helping others is true strength."},
      bird: {title:"The Clever Bird", text:"A small bird was thirsty. The water in a pot was too low. The bird dropped small stones into the pot. The water rose, and the bird drank it. Moral: Patience and ideas solve problems."},
      seed: {title:"The Little Seed", text:"A little seed slept under the soil. Rain came and the sun shone. Slowly the seed became a strong plant. Moral: Small beginnings can grow into something wonderful."}
    }
  },

  hindi: {
    label: "Hindi",
    code: "hi-IN",
    ui: {
      nav: "Hindi Learning",
      heroButton: "Start Learning Hindi",
      eyebrow: "RootCraft Hindi",
      heading: "Learn Hindi through pictures, words and play.",
      description: "Choose a topic to begin. Progress is saved on this device.",
      search: "Search lessons...",
      quizPrompt: "Choose the correct Hindi word",
      memoryNote: "Match each picture with its Hindi word.",
      quizCard: "Choose the correct Hindi word.",
      memoryCard: "Match pictures with Hindi words.",
      test: "Test your Hindi"
    },
    lessons: {
      letters: { title: "Hindi Vowels", icon: "अ", description: "Learn basic Hindi vowels", items: [
        ["🍎","अ","A","अ से अनार।"],["🥭","आ","Aa","आ से आम।"],["🏠","इ","I","इ से इमली।"],["🦅","ई","Ee","ई से ईख।"],
        ["🦉","उ","U","उ से उल्लू।"],["🧶","ऊ","Oo","ऊ से ऊन।"],["1️⃣","ए","E","ए से एक।"],["👓","ऐ","Ai","ऐ से ऐनक।"]
      ]},
      consonants: { title: "Hindi Consonants", icon: "क", description: "Learn basic consonants", items: [
        ["🕊️","क","Ka","क से कबूतर।"],["🐇","ख","Kha","ख से खरगोश।"],["🌴","ग","Ga","ग से गमला।"],["🏠","घ","Gha","घ से घर।"],
        ["🌙","च","Cha","च से चाँद।"],["☂️","छ","Chha","छ से छतरी।"],["🚢","ज","Ja","ज से जहाज।"],["🚩","झ","Jha","झ से झंडा।"]
      ]},
      numbers: { title: "Hindi Numbers", icon: "१२३", description: "Count from one to twelve", items: [
        ["1️⃣","एक","One","एक सेब।"],["2️⃣","दो","Two","दो पक्षी।"],["3️⃣","तीन","Three","तीन गेंदें।"],["4️⃣","चार","Four","चार फूल।"],
        ["5️⃣","पाँच","Five","पाँच आम।"],["6️⃣","छह","Six","छह किताबें।"],["7️⃣","सात","Seven","सात तारे।"],["8️⃣","आठ","Eight","आठ मछलियाँ।"],
        ["9️⃣","नौ","Nine","नौ गुब्बारे।"],["🔟","दस","Ten","दस पेंसिलें।"],["11","ग्यारह","Eleven","ग्यारह बच्चे।"],["12","बारह","Twelve","बारह महीने।"]
      ]},
      animals: { title: "Animals", icon: "🐘", description: "Learn animal names", items: [
        ["🐘","हाथी","Elephant","हाथी बड़ा जानवर है।"],["🐶","कुत्ता","Dog","कुत्ता अच्छा मित्र है।"],["🐱","बिल्ली","Cat","बिल्ली दूध पीती है।"],
        ["🐄","गाय","Cow","गाय दूध देती है।"],["🐯","बाघ","Tiger","बाघ जंगल में रहता है।"],["🦁","शेर","Lion","शेर शक्तिशाली है।"],
        ["🐒","बंदर","Monkey","बंदर पेड़ पर चढ़ता है।"],["🐇","खरगोश","Rabbit","खरगोश तेज दौड़ता है।"],["🐎","घोड़ा","Horse","घोड़ा दौड़ता है।"],["🐐","बकरी","Goat","बकरी घास खाती है।"]
      ]},
      fruits: { title: "Fruits", icon: "🥭", description: "Learn fruit names", items: [
        ["🥭","आम","Mango","आम मीठा फल है।"],["🍎","सेब","Apple","सेब लाल है।"],["🍌","केला","Banana","केला पीला है।"],
        ["🍊","संतरा","Orange","संतरा रसदार है।"],["🍇","अंगूर","Grapes","अंगूर गुच्छों में उगते हैं।"],["🍉","तरबूज","Watermelon","तरबूज बड़ा है।"],
        ["🍍","अनानास","Pineapple","अनानास मीठा है।"],["🥥","नारियल","Coconut","नारियल पानी ठंडा है।"]
      ]},
      vegetables: { title: "Vegetables", icon: "🥕", description: "Learn vegetable names", items: [
        ["🥕","गाजर","Carrot","गाजर नारंगी है।"],["🥔","आलू","Potato","आलू जमीन के नीचे उगता है।"],["🍅","टमाटर","Tomato","टमाटर लाल है।"],
        ["🥒","खीरा","Cucumber","खीरा हरा है।"],["🧅","प्याज","Onion","प्याज खाना बनाने में काम आता है।"],["🌽","मक्का","Corn","मक्का पीला है।"]
      ]},
      colors: { title: "Colours", icon: "🎨", description: "Learn colour names", items: [
        ["🔴","लाल","Red","गुलाब लाल है।"],["🔵","नीला","Blue","आसमान नीला है।"],["🟢","हरा","Green","पत्ता हरा है।"],
        ["🟡","पीला","Yellow","सूरज पीला है।"],["⚫","काला","Black","कौआ काला है।"],["⚪","सफेद","White","दूध सफेद है।"]
      ]},
      birds: { title: "Birds", icon: "🐦", description: "Learn bird names", items: [
        ["🐦","पक्षी","Bird","पक्षी आसमान में उड़ता है।"],["🦚","मोर","Peacock","मोर सुंदर नाचता है।"],["🦜","तोता","Parrot","तोता हरा है।"],
        ["🦅","चील","Eagle","चील ऊँचा उड़ती है।"],["🦉","उल्लू","Owl","उल्लू रात में जागता है।"],["🐓","मुर्गी","Hen","मुर्गी अंडे देती है।"]
      ]},
      family: { title: "Family", icon: "👨‍👩‍👧", description: "Learn family words", items: [
        ["👩","माँ","Mother","माँ मुझे प्यार करती हैं।"],["👨","पिता","Father","पिता मेरे साथ खेलते हैं।"],["👦","भैया","Elder brother","भैया स्कूल जाता है।"],
        ["👧","दीदी","Elder sister","दीदी किताब पढ़ती है।"],["👵","दादी","Grandmother","दादी कहानी सुनाती हैं।"],["👴","दादा","Grandfather","दादा सुबह चलते हैं।"]
      ]},
      body: { title: "Body Parts", icon: "👀", description: "Learn body parts", items: [
        ["👀","आँख","Eye","हम आँखों से देखते हैं।"],["👂","कान","Ear","हम कानों से सुनते हैं।"],["👃","नाक","Nose","हम नाक से सूँघते हैं।"],
        ["👄","मुँह","Mouth","हम मुँह से बोलते हैं।"],["🖐️","हाथ","Hand","हम हाथ से लिखते हैं।"],["🦶","पैर","Leg","हम पैरों से चलते हैं।"]
      ]},
      shapes: { title: "Shapes", icon: "🔺", description: "Learn basic shapes", items: [
        ["⚪","वृत्त","Circle","गेंद गोल है।"],["🟥","वर्ग","Square","खिड़की वर्गाकार है।"],["🔺","त्रिभुज","Triangle","त्रिभुज की तीन भुजाएँ होती हैं।"],
        ["▭","आयत","Rectangle","दरवाजा आयताकार है।"],["⭐","तारा","Star","आसमान में तारा चमकता है।"],["❤️","दिल","Heart","यह दिल का आकार है।"]
      ]},
      days: { title: "Days of the Week", icon: "📅", description: "Learn days in Hindi", items: [
        ["1","रविवार","Sunday","आज रविवार है।"],["2","सोमवार","Monday","कल सोमवार है।"],["3","मंगलवार","Tuesday","मंगलवार को स्कूल है।"],
        ["4","बुधवार","Wednesday","हम बुधवार को पढ़ते हैं।"],["5","गुरुवार","Thursday","गुरुवार को संगीत की कक्षा है।"],
        ["6","शुक्रवार","Friday","शुक्रवार खेल का दिन है।"],["7","शनिवार","Saturday","शनिवार छुट्टी है।"]
      ]}
    },
    stories: {
      elephant: {title:"The Kind Elephant", text:"एक जंगल में एक दयालु हाथी रहता था। एक दिन एक छोटी चिड़िया का घोंसला नीचे गिर गया। हाथी ने घोंसले को पेड़ पर वापस रख दिया। चिड़िया खुश हुई। सीख: दूसरों की मदद करना सच्ची ताकत है।"},
      bird: {title:"The Clever Bird", text:"एक छोटी चिड़िया प्यासी थी। घड़े में पानी बहुत नीचे था। चिड़िया ने छोटे पत्थर घड़े में डाले। पानी ऊपर आया और चिड़िया ने पानी पिया। सीख: धैर्य और बुद्धि से समस्या हल होती है।"},
      seed: {title:"The Little Seed", text:"एक छोटा बीज मिट्टी के नीचे सो रहा था। बारिश आई और सूरज चमका। धीरे-धीरे बीज एक मजबूत पौधा बन गया। सीख: छोटी शुरुआत भी बड़ी सफलता बन सकती है।"}
    }
  }
};

let selectedLanguage = localStorage.getItem("rootcraftLanguage") || "kannada";
let progress = JSON.parse(localStorage.getItem("rootcraftProgressMulti") || "{}");
let voices = [];
let selectedVoice = null;
let currentQuiz = [];
let quizIndex = 0;
let quizScore = 0;
let memoryFirst = null;
let memoryLock = false;

function languagePack(){ return LANGUAGE_DATA[selectedLanguage]; }
function lessons(){ return languagePack().lessons; }
function stories(){ return languagePack().stories; }

function ensureProgress(){
  if(!progress[selectedLanguage]){
    progress[selectedLanguage] = {words:0, stars:0, best:0, completed:[]};
  }
}
function currentProgress(){ ensureProgress(); return progress[selectedLanguage]; }
function saveProgress(){
  localStorage.setItem("rootcraftProgressMulti", JSON.stringify(progress));
  updateStats();
}
function updateStats(){
  const p = currentProgress();
  wordsLearned.textContent = p.words;
  starsEarned.textContent = p.stars;
  quizBest.textContent = p.best;
  rewardText.textContent = `You have ${p.stars} stars and learned ${p.words} words.`;
}
function toast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.remove("hidden");
  setTimeout(()=>t.classList.add("hidden"),2500);
}

function loadVoices(){
  if(!("speechSynthesis" in window)) return;
  voices = window.speechSynthesis.getVoices() || [];
  const code = languagePack().code.toLowerCase();
  const short = code.split("-")[0];
  selectedVoice =
    voices.find(v=>v.lang.toLowerCase() === code) ||
    voices.find(v=>v.lang.toLowerCase().startsWith(short)) ||
    null;
}
function speak(word, fallback){
  if(!("speechSynthesis" in window)){
    toast("Speech is not supported on this browser.");
    return;
  }
  window.speechSynthesis.cancel();
  loadVoices();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = languagePack().code;
  utterance.rate = selectedLanguage === "english" ? 0.85 : 0.75;
  if(selectedVoice) utterance.voice = selectedVoice;
  utterance.onerror = ()=>toast(`${languagePack().label} voice is not available on this device.`);
  window.speechSynthesis.speak(utterance);
}

function applyLanguageUi(){
  const pack = languagePack();
  navLearningLink.textContent = pack.ui.nav;
  heroLearningButton.textContent = pack.ui.heroButton;
  learningEyebrow.textContent = pack.ui.eyebrow;
  learningHeading.textContent = pack.ui.heading;
  learningDescription.textContent = pack.ui.description;
  lessonSearch.placeholder = pack.ui.search;
  quizPrompt.textContent = pack.ui.quizPrompt;
  memoryNote.textContent = pack.ui.memoryNote;
  quizCardDescription.textContent = pack.ui.quizCard;
  memoryCardDescription.textContent = pack.ui.memoryCard;
  languageSelector.value = selectedLanguage;
}

function renderLearningMenu(filter=""){
  const home = document.getElementById("learningHome");
  home.innerHTML = "";
  Object.entries(lessons())
    .filter(([,v])=>(v.title+" "+v.description).toLowerCase().includes(filter.toLowerCase()))
    .forEach(([key,v])=>{
      const b = document.createElement("button");
      b.className = "learning-card";
      b.innerHTML = `<span>${v.icon}</span><h3>${v.title}</h3><p>${v.description}</p><small>${v.items.length} cards</small>`;
      b.onclick = ()=>openLesson(key);
      home.appendChild(b);
    });
  const quiz = document.createElement("button");
  quiz.className = "learning-card";
  quiz.innerHTML = `<span>⭐</span><h3>Picture Quiz</h3><p>${languagePack().ui.test}</p><small>Earn stars</small>`;
  quiz.onclick = startQuiz;
  home.appendChild(quiz);
}

function openLesson(key){
  learningHome.classList.add("hidden");
  quizView.classList.add("hidden");
  memoryView.classList.add("hidden");
  lessonView.classList.remove("hidden");

  const lesson = lessons()[key];
  lessonTitle.textContent = lesson.title;
  lessonCards.innerHTML = "";

  lesson.items.forEach(item=>{
    const [pic,word,meaning,example] = item;
    const c = document.createElement("article");
    c.className = "lesson-card";
    c.innerHTML = `<div class="lesson-picture">${pic}</div><div class="kannada-word">${word}</div><div class="english-word">${meaning}</div><div class="example-sentence">${example}</div><button class="speak-button">🔊 Listen</button>`;
    c.querySelector("button").onclick = ()=>{
      speak(word,meaning);
      const p = currentProgress();
      const completionKey = `${selectedLanguage}:${word}`;
      if(!p.completed.includes(completionKey)){
        p.completed.push(completionKey);
        p.words++;
        p.stars++;
        saveProgress();
        toast("⭐ New word learned!");
      }
    };
    lessonCards.appendChild(c);
  });
}

function homeLearning(){
  lessonView.classList.add("hidden");
  quizView.classList.add("hidden");
  memoryView.classList.add("hidden");
  learningHome.classList.remove("hidden");
  if("speechSynthesis" in window) window.speechSynthesis.cancel();
}

function allQuizItems(){
  return Object.values(lessons()).flatMap(l=>l.items).filter(i=>String(i[0]).length<=4);
}
function shuffle(a){ return [...a].sort(()=>Math.random()-.5); }

function startQuiz(){
  document.getElementById("learning").scrollIntoView();
  learningHome.classList.add("hidden");
  lessonView.classList.add("hidden");
  memoryView.classList.add("hidden");
  quizView.classList.remove("hidden");
  currentQuiz = shuffle(allQuizItems()).slice(0,10);
  quizIndex = 0;
  quizScore = 0;
  renderQuiz();
}

function renderQuiz(){
  const q = currentQuiz[quizIndex];
  const [pic,answer] = q;
  quizPicture.textContent = pic;
  quizScore.textContent = `Score: ${quizScore}`;
  quizProgress.textContent = `Question ${quizIndex+1} of ${currentQuiz.length}`;
  quizMessage.textContent = "";
  nextQuestion.classList.add("hidden");
  quizOptions.innerHTML = "";

  const pool = shuffle([
    answer,
    ...shuffle(allQuizItems().map(i=>i[1]).filter(x=>x!==answer)).slice(0,3)
  ]);

  pool.forEach(opt=>{
    const b = document.createElement("button");
    b.className = "quiz-option";
    b.textContent = opt;
    b.onclick = ()=>checkQuiz(opt,b,answer);
    quizOptions.appendChild(b);
  });
}

function checkQuiz(selected,button,answer){
  [...document.querySelectorAll(".quiz-option")].forEach(b=>{
    b.disabled = true;
    if(b.textContent===answer) b.classList.add("correct");
  });

  const p = currentProgress();
  if(selected===answer){
    quizScore++;
    button.classList.add("correct");
    quizMessage.textContent = "Correct! Great job! ⭐";
    p.stars += 2;
  }else{
    button.classList.add("wrong");
    quizMessage.textContent = `Good try! The answer is ${answer}.`;
  }
  speak(answer,"Correct answer");
  document.getElementById("quizScore").textContent = `Score: ${quizScore}`;
  nextQuestion.classList.remove("hidden");
  saveProgress();
}

function nextQuiz(){
  quizIndex++;
  if(quizIndex>=currentQuiz.length){
    const p = currentProgress();
    p.best = Math.max(p.best,quizScore);
    p.stars += quizScore;
    saveProgress();
    quizView.querySelector(".quiz-box").innerHTML = `<div class="quiz-picture">🏆</div><h2>Quiz Completed!</h2><p class="quiz-message">You scored ${quizScore} out of ${currentQuiz.length}.</p><button class="btn primary" onclick="location.reload()">Play Again</button>`;
    return;
  }
  renderQuiz();
}

function startMemory(){
  document.getElementById("learning").scrollIntoView();
  learningHome.classList.add("hidden");
  lessonView.classList.add("hidden");
  quizView.classList.add("hidden");
  memoryView.classList.remove("hidden");
  memoryBoard.innerHTML = "";
  memoryFirst = null;
  memoryLock = false;

  const animals = lessons().animals.items;
  const pairs = shuffle(animals).slice(0,6);
  const cards = shuffle(pairs.flatMap((i,n)=>[
    {id:n,value:i[0]},
    {id:n,value:i[1]}
  ]));

  cards.forEach(card=>{
    const b = document.createElement("button");
    b.className = "memory-card";
    b.dataset.id = card.id;
    b.dataset.value = card.value;
    b.textContent = "?";
    b.onclick = ()=>flipMemory(b);
    memoryBoard.appendChild(b);
  });
}

function flipMemory(card){
  if(memoryLock || card.classList.contains("matched") || card===memoryFirst) return;
  card.classList.add("revealed");
  card.textContent = card.dataset.value;

  if(!memoryFirst){
    memoryFirst = card;
    return;
  }

  if(memoryFirst.dataset.id===card.dataset.id){
    memoryFirst.classList.add("matched");
    card.classList.add("matched");
    const p = currentProgress();
    p.stars += 3;
    saveProgress();
    memoryFirst = null;
    if([...document.querySelectorAll(".memory-card")].every(c=>c.classList.contains("matched"))){
      toast("🏆 Memory game completed!");
    }
  }else{
    memoryLock = true;
    setTimeout(()=>{
      memoryFirst.classList.remove("revealed");
      card.classList.remove("revealed");
      memoryFirst.textContent = "?";
      card.textContent = "?";
      memoryFirst = null;
      memoryLock = false;
    },800);
  }
}

function updateStoryContent(){
  const activeStories = stories();
  document.querySelectorAll(".story-btn").forEach(button=>{
    const story = activeStories[button.dataset.story];
    button.closest(".story-card").querySelector("h3").textContent = story.title;
  });
}

function changeLanguage(lang){
  selectedLanguage = lang;
  localStorage.setItem("rootcraftLanguage", lang);
  if("speechSynthesis" in window) window.speechSynthesis.cancel();
  lessonView.classList.add("hidden");
  quizView.classList.add("hidden");
  memoryView.classList.add("hidden");
  learningHome.classList.remove("hidden");
  applyLanguageUi();
  renderLearningMenu(lessonSearch.value);
  updateStoryContent();
  updateStats();
}

document.addEventListener("DOMContentLoaded",()=>{
  ensureProgress();
  applyLanguageUi();
  renderLearningMenu();
  updateStoryContent();
  updateStats();
  loadVoices();

  if("speechSynthesis" in window){
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  year.textContent = new Date().getFullYear();
  menuToggle.onclick = ()=>mainNav.classList.toggle("open");
  document.querySelectorAll(".main-nav a").forEach(a=>a.onclick=()=>mainNav.classList.remove("open"));

  themeToggle.onclick = ()=>{
    document.body.classList.toggle("dark");
    localStorage.setItem("rootcraftTheme",document.body.classList.contains("dark")?"dark":"light");
    themeToggle.textContent=document.body.classList.contains("dark")?"☀️":"🌙";
  };
  if(localStorage.getItem("rootcraftTheme")==="dark"){
    document.body.classList.add("dark");
    themeToggle.textContent="☀️";
  }

  languageSelector.value = selectedLanguage;
  languageSelector.onchange = e=>changeLanguage(e.target.value);
  lessonSearch.oninput = e=>renderLearningMenu(e.target.value);

  resetProgress.onclick = ()=>{
    if(confirm(`Reset saved ${languagePack().label} progress?`)){
      progress[selectedLanguage] = {words:0,stars:0,best:0,completed:[]};
      saveProgress();
      toast("Progress reset.");
    }
  };

  lessonBack.onclick = homeLearning;
  quizBack.onclick = homeLearning;
  memoryBack.onclick = homeLearning;
  nextQuestion.onclick = nextQuiz;
  startQuizCard.onclick = startQuiz;
  startMemory.onclick = startMemory;

  showRewards.onclick = ()=>{
    const p = currentProgress();
    toast(`🏆 ${p.stars} stars • ${p.words} words • Best quiz ${p.best}`);
  };

  document.querySelectorAll(".story-btn").forEach(button=>{
    button.onclick = ()=>{
      const story = stories()[button.dataset.story];
      storyTitle.textContent = story.title;
      storyText.textContent = story.text;
      storyReader.classList.remove("hidden");
      storyReader.scrollIntoView({behavior:"smooth"});
    };
  });
  closeStory.onclick = ()=>storyReader.classList.add("hidden");

  // Remove stale service workers from earlier versions.
  if("serviceWorker" in navigator){
    navigator.serviceWorker.getRegistrations().then(registrations=>{
      registrations.forEach(registration=>registration.unregister());
    });
  }
  if("caches" in window){
    caches.keys().then(keys=>Promise.all(keys.map(key=>caches.delete(key))));
  }
});