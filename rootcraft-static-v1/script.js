const lessons = {
  letters: { title: "Kannada Vowels", icon: "ಅ", description: "Learn basic Kannada vowels", items: [
    ["🌟","ಅ","A","ಅ ಅಕ್ಷರ"],
    ["🌈","ಆ","Aa","ಆನೆ ದೊಡ್ಡದು."],
    ["✨","ಇ","I","ಇದು ಮನೆ."],
    ["🦅","ಈ","Ee","ಈ ಹಕ್ಕಿ."],
    ["🌼","ಉ","U","ಉಡುಪಿ ನಗರ."],
    ["🎈","ಊ","Oo","ಊಟ ಮಾಡು."],
    ["🍀","ಎ","E","ಎಲೆ ಹಸಿರು."],
    ["🌞","ಏ","Ae","ಏಣಿ ಉದ್ದವಾಗಿದೆ."],
    ["⭐","ಐ","Ai","ಐದು ಹಣ್ಣುಗಳು."],
    ["🌸","ಒ","O","ಒಂದು ಹೂವು."],
    ["🌻","ಓ","Oo","ಓಡು ಬೇಗ."],
    ["🎵","ಔ","Au","ಔಷಧಿ ಕುಡಿ."]
  ]},
  consonants: { title: "Kannada Consonants", icon: "ಕ", description: "Learn basic consonants", items: [
    ["🐦","ಕ","Ka","ಕಾಗೆ ಕಪ್ಪು."],["🏠","ಗ","Ga","ಗಡಿಯಾರ ಗೋಡೆಯ ಮೇಲೆ ಇದೆ."],["🌳","ಚ","Cha","ಚೆಂಡು ಕೆಂಪು."],
    ["🐘","ಜ","Ja","ಜಿಂಕೆ ವೇಗವಾಗಿ ಓಡುತ್ತದೆ."],["🍅","ಟ","Ta","ಟೊಮ್ಯಾಟೊ ಕೆಂಪು."],["🥁","ಡ","Da","ಡಮರು ಶಬ್ದ ಮಾಡುತ್ತದೆ."],
    ["🌴","ತ","Tha","ತಾಳೆಮರ ಎತ್ತರವಾಗಿದೆ."],["🏹","ದ","Da","ದನ ಹುಲ್ಲು ತಿನ್ನುತ್ತದೆ."],["🐍","ನ","Na","ನಾಯಿ ಸ್ನೇಹಿತ."],
    ["🍎","ಪ","Pa","ಪಪಾಯಿ ಹಣ್ಣು."],["🌸","ಬ","Ba","ಬಣ್ಣ ಸುಂದರ."],["🐒","ಮ","Ma","ಮಂಗ ಮರ ಏರುತ್ತದೆ."],
    ["🚗","ರ","Ra","ರಥ ಸಾಗುತ್ತದೆ."],["🦁","ಸ","Sa","ಸಿಂಹ ಬಲವಾದುದು."],["🐄","ಹ","Ha","ಹಸು ಹಾಲು ಕೊಡುತ್ತದೆ."]
  ]},
  numbers: { title: "Kannada Numbers", icon: "೧೨೩", description: "Count from one to twenty", items: [
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
    ["🟡","ಹಳದಿ","Yellow","ಸೂರ್ಯ ಹಳದಿ."],["⚫","ಕಪ್ಪು","Black","ಕಾಗೆ ಕಪ್ಪು."],["⚪","ಬಿಳಿ","White","ಹಾಲು ಬಿಳಿ."],
    ["🟠","ಕಿತ್ತಳೆ ಬಣ್ಣ","Orange","ಕಿತ್ತಳೆ ಹಣ್ಣು ಕಿತ್ತಳೆ ಬಣ್ಣದದು."],["🟣","ನೇರಳೆ","Purple","ನೇರಳೆ ಹೂವು ಸುಂದರ."]
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
};

const stories = {
  elephant: {title:"The Kind Elephant", text:"ಒಂದು ಕಾಡಿನಲ್ಲಿ ಒಂದು ದಯಾಳು ಆನೆ ವಾಸಿಸುತ್ತಿತ್ತು. ಒಂದು ದಿನ ಚಿಕ್ಕ ಹಕ್ಕಿಯ ಗೂಡು ಗಾಳಿಯಿಂದ ಕೆಳಗೆ ಬಿತ್ತು. ಆನೆ ತನ್ನ ಸೊಂಡಿಲಿನಿಂದ ಗೂಡನ್ನು ಎತ್ತಿ ಮರದ ಮೇಲೆ ಇಟ್ಟಿತು. ಹಕ್ಕಿ ಸಂತೋಷಪಟ್ಟಿತು. ಪಾಠ: ಸಹಾಯ ಮಾಡುವ ಹೃದಯವೇ ನಿಜವಾದ ಬಲ."},
  bird: {title:"The Clever Bird", text:"ಒಂದು ಚಿಕ್ಕ ಹಕ್ಕಿಗೆ ನೀರು ಬೇಕಾಯಿತು. ಪಾತ್ರೆಯಲ್ಲಿ ನೀರು ತುಂಬಾ ಕೆಳಗಿತ್ತು. ಹಕ್ಕಿ ಸಣ್ಣ ಕಲ್ಲುಗಳನ್ನು ಪಾತ್ರೆಗೆ ಹಾಕಿತು. ನೀರು ಮೇಲಕ್ಕೆ ಬಂತು. ಹಕ್ಕಿ ನೀರು ಕುಡಿತು. ಪಾಠ: ಬುದ್ಧಿ ಮತ್ತು ಸಹನೆ ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹರಿಸುತ್ತವೆ."},
  seed: {title:"The Little Seed", text:"ಒಂದು ಚಿಕ್ಕ ಬೀಜ ಮಣ್ಣಿನೊಳಗೆ ಮಲಗಿತ್ತು. ಮಳೆ ಬಂತು, ಸೂರ್ಯ ಬೆಳಗಿದ. ಬೀಜ ನಿಧಾನವಾಗಿ ಮೊಳಕೆಯೊಡೆದು ದೊಡ್ಡ ಗಿಡವಾಯಿತು. ಪಾಠ: ಸಣ್ಣ ಆರಂಭವೂ ದೊಡ್ಡ ಬೆಳವಣಿಗೆಗೆ ಕಾರಣವಾಗಬಹುದು."}
};

let progress = JSON.parse(localStorage.getItem("rootcraftProgress") || '{"words":0,"stars":0,"best":0,"completed":[]}');
let voices = [];
let kannadaVoice = null;
let currentQuiz = [];
let quizIndex = 0;
let quizScore = 0;
let memoryFirst = null;
let memoryLock = false;

function saveProgress(){localStorage.setItem("rootcraftProgress",JSON.stringify(progress));updateStats()}
function updateStats(){wordsLearned.textContent=progress.words;starsEarned.textContent=progress.stars;quizBest.textContent=progress.best;rewardText.textContent=`You have ${progress.stars} stars and learned ${progress.words} words.`}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.remove("hidden");setTimeout(()=>t.classList.add("hidden"),2500)}
function loadVoices(){if(!("speechSynthesis" in window))return;voices=speechSynthesis.getVoices();kannadaVoice=voices.find(v=>v.lang.toLowerCase().startsWith("kn")||v.name.toLowerCase().includes("kannada"))||null}
function speak(kannada,english){if(!("speechSynthesis" in window)){toast("Speech is not supported on this browser.");return}speechSynthesis.cancel();loadVoices();const u=new SpeechSynthesisUtterance(kannadaVoice?kannada:english);if(kannadaVoice){u.voice=kannadaVoice;u.lang=kannadaVoice.lang}else{u.lang="en-US"}u.rate=.78;speechSynthesis.speak(u)}

function renderLearningMenu(filter=""){
  const home=document.getElementById("learningHome");home.innerHTML="";
  Object.entries(lessons).filter(([,v])=>(v.title+" "+v.description).toLowerCase().includes(filter.toLowerCase())).forEach(([key,v])=>{
    const b=document.createElement("button");b.className="learning-card";b.innerHTML=`<span>${v.icon}</span><h3>${v.title}</h3><p>${v.description}</p><small>${v.items.length} cards</small>`;
    b.onclick=()=>openLesson(key);home.appendChild(b)
  });
  const quiz=document.createElement("button");quiz.className="learning-card";quiz.innerHTML="<span>⭐</span><h3>Picture Quiz</h3><p>Test your Kannada</p><small>Earn stars</small>";quiz.onclick=startQuiz;home.appendChild(quiz)
}
function openLesson(key){
  learningHome.classList.add("hidden");quizView.classList.add("hidden");memoryView.classList.add("hidden");lessonView.classList.remove("hidden");
  const l=lessons[key];lessonTitle.textContent=l.title;lessonCards.innerHTML="";
  l.items.forEach(item=>{
    const [pic,kn,en,ex]=item;const c=document.createElement("article");c.className="lesson-card";c.innerHTML=`<div class="lesson-picture">${pic}</div><div class="kannada-word">${kn}</div><div class="english-word">${en}</div><div class="example-sentence">${ex}</div><button class="speak-button">🔊 Listen</button>`;
    c.querySelector("button").onclick=()=>{speak(kn,en);if(!progress.completed.includes(kn)){progress.completed.push(kn);progress.words++;progress.stars++;saveProgress();toast("⭐ New word learned!")}};lessonCards.appendChild(c)
  })
}
function homeLearning(){lessonView.classList.add("hidden");quizView.classList.add("hidden");memoryView.classList.add("hidden");learningHome.classList.remove("hidden");if("speechSynthesis" in window)speechSynthesis.cancel()}
function allQuizItems(){return Object.values(lessons).flatMap(l=>l.items).filter(i=>i[0].length<=4)}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function startQuiz(){
  document.getElementById("learning").scrollIntoView();learningHome.classList.add("hidden");lessonView.classList.add("hidden");memoryView.classList.add("hidden");quizView.classList.remove("hidden");
  currentQuiz=shuffle(allQuizItems()).slice(0,10);quizIndex=0;quizScore=0;renderQuiz()
}
function renderQuiz(){
  const q=currentQuiz[quizIndex];const [pic,answer]=q;quizPicture.textContent=pic;quizScoreEl.textContent=`Score: ${quizScore}`;quizProgress.textContent=`Question ${quizIndex+1} of ${currentQuiz.length}`;quizMessage.textContent="";nextQuestion.classList.add("hidden");quizOptions.innerHTML="";
  const pool=shuffle([answer,...shuffle(allQuizItems().map(i=>i[1]).filter(x=>x!==answer)).slice(0,3)]);
  pool.forEach(opt=>{const b=document.createElement("button");b.className="quiz-option";b.textContent=opt;b.onclick=()=>checkQuiz(opt,b,answer);quizOptions.appendChild(b)})
}
function checkQuiz(selected,button,answer){
  [...document.querySelectorAll(".quiz-option")].forEach(b=>{b.disabled=true;if(b.textContent===answer)b.classList.add("correct")});
  if(selected===answer){quizScore++;button.classList.add("correct");quizMessage.textContent="Correct! Great job! ⭐";progress.stars+=2}else{button.classList.add("wrong");quizMessage.textContent=`Good try! The answer is ${answer}.`}
  speak(answer,"Correct answer");quizScoreEl.textContent=`Score: ${quizScore}`;nextQuestion.classList.remove("hidden");saveProgress()
}
function nextQuiz(){quizIndex++;if(quizIndex>=currentQuiz.length){progress.best=Math.max(progress.best,quizScore);progress.stars+=quizScore;saveProgress();quizView.querySelector(".quiz-box").innerHTML=`<div class="quiz-picture">🏆</div><h2>Quiz Completed!</h2><p class="quiz-message">You scored ${quizScore} out of ${currentQuiz.length}.</p><button class="btn primary" onclick="location.reload()">Play Again</button>`;return}renderQuiz()}
function startMemory(){
  document.getElementById("learning").scrollIntoView();learningHome.classList.add("hidden");lessonView.classList.add("hidden");quizView.classList.add("hidden");memoryView.classList.remove("hidden");memoryBoard.innerHTML="";memoryFirst=null;memoryLock=false;
  const pairs=shuffle(lessons.animals.items).slice(0,6);const cards=shuffle(pairs.flatMap((i,n)=>[{id:n,value:i[0]},{id:n,value:i[1]}]));
  cards.forEach(card=>{const b=document.createElement("button");b.className="memory-card";b.dataset.id=card.id;b.dataset.value=card.value;b.textContent="?";b.onclick=()=>flipMemory(b);memoryBoard.appendChild(b)})
}
function flipMemory(card){
  if(memoryLock||card.classList.contains("matched")||card===memoryFirst)return;card.classList.add("revealed");card.textContent=card.dataset.value;
  if(!memoryFirst){memoryFirst=card;return}
  if(memoryFirst.dataset.id===card.dataset.id){memoryFirst.classList.add("matched");card.classList.add("matched");progress.stars+=3;saveProgress();memoryFirst=null;if([...document.querySelectorAll(".memory-card")].every(c=>c.classList.contains("matched")))toast("🏆 Memory game completed!")}
  else{memoryLock=true;setTimeout(()=>{memoryFirst.classList.remove("revealed");card.classList.remove("revealed");memoryFirst.textContent="?";card.textContent="?";memoryFirst=null;memoryLock=false},800)}
}
document.addEventListener("DOMContentLoaded",()=>{
  renderLearningMenu();updateStats();loadVoices();if("speechSynthesis" in window)speechSynthesis.onvoiceschanged=loadVoices;
  year.textContent=new Date().getFullYear();
  menuToggle.onclick=()=>mainNav.classList.toggle("open");document.querySelectorAll(".main-nav a").forEach(a=>a.onclick=()=>mainNav.classList.remove("open"));
  themeToggle.onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("rootcraftTheme",document.body.classList.contains("dark")?"dark":"light");themeToggle.textContent=document.body.classList.contains("dark")?"☀️":"🌙"};
  if(localStorage.getItem("rootcraftTheme")==="dark"){document.body.classList.add("dark");themeToggle.textContent="☀️"}
  lessonSearch.oninput=e=>renderLearningMenu(e.target.value);resetProgress.onclick=()=>{if(confirm("Reset all saved progress?")){progress={words:0,stars:0,best:0,completed:[]};saveProgress();toast("Progress reset.")}};
  lessonBack.onclick=homeLearning;quizBack.onclick=homeLearning;memoryBack.onclick=homeLearning;nextQuestion.onclick=nextQuiz;startQuizCard.onclick=startQuiz;startMemory.onclick=startMemory;
  showRewards.onclick=()=>toast(`🏆 ${progress.stars} stars • ${progress.words} words • Best quiz ${progress.best}`);
  document.querySelectorAll(".story-btn").forEach(b=>b.onclick=()=>{const s=stories[b.dataset.story];storyTitle.textContent=s.title;storyText.textContent=s.text;storyReader.classList.remove("hidden");storyReader.scrollIntoView({behavior:"smooth"})});closeStory.onclick=()=>storyReader.classList.add("hidden");
  if("serviceWorker" in navigator)navigator.serviceWorker.register("service-worker.js").catch(()=>{});
});
