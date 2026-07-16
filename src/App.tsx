import { useEffect, useMemo, useRef, useState } from 'react';

type Item={id:string,picture:string,word:string,meaning:string,example:string};
type Topic={id:string,title:string,icon:string,description:string,items:Item[]};
type Story={id:string,icon:string,title:string,summary:string,text:string};
type Course={id:string,name:string,nativeName:string,locale:string,color:string,icon:string,available:boolean,topics:Topic[],stories:Story[]};

const courses:Course[]=[
{id:'kannada',name:'Kannada',nativeName:'ಕನ್ನಡ',locale:'kn-IN',color:'#32b44a',icon:'🏛️',available:true,topics:[
{id:'alphabet',title:'Alphabet',icon:'ಅ',description:'Learn Kannada vowels.',items:[
{id:'ka1',picture:'🌟',word:'ಅ',meaning:'A',example:'ಅ ಅಕ್ಷರ'},{id:'ka2',picture:'🐘',word:'ಆ',meaning:'Aa',example:'ಆನೆ ದೊಡ್ಡದು.'},{id:'ka3',picture:'🏠',word:'ಇ',meaning:'I',example:'ಇದು ಮನೆ.'},{id:'ka4',picture:'🦅',word:'ಈ',meaning:'Ee',example:'ಈ ಹಕ್ಕಿ.'}]},
{id:'numbers',title:'Numbers',icon:'೧೨೩',description:'Count in Kannada.',items:[{id:'kn1',picture:'1️⃣',word:'ಒಂದು',meaning:'One',example:'ಒಂದು ಸೇಬು.'},{id:'kn2',picture:'2️⃣',word:'ಎರಡು',meaning:'Two',example:'ಎರಡು ಹಕ್ಕಿಗಳು.'},{id:'kn3',picture:'3️⃣',word:'ಮೂರು',meaning:'Three',example:'ಮೂರು ಚೆಂಡುಗಳು.'},{id:'kn4',picture:'4️⃣',word:'ನಾಲ್ಕು',meaning:'Four',example:'ನಾಲ್ಕು ಹೂಗಳು.'}]},
{id:'animals',title:'Animals',icon:'🐘',description:'Learn animal names.',items:[{id:'ke',picture:'🐘',word:'ಆನೆ',meaning:'Elephant',example:'ಆನೆ ದೊಡ್ಡ ಪ್ರಾಣಿ.'},{id:'kd',picture:'🐶',word:'ನಾಯಿ',meaning:'Dog',example:'ನಾಯಿ ಸ್ನೇಹಿತ.'},{id:'kc',picture:'🐱',word:'ಬೆಕ್ಕು',meaning:'Cat',example:'ಬೆಕ್ಕು ಹಾಲು ಕುಡಿಯುತ್ತದೆ.'},{id:'kw',picture:'🐄',word:'ಹಸು',meaning:'Cow',example:'ಹಸು ಹಾಲು ಕೊಡುತ್ತದೆ.'}]},
{id:'fruits',title:'Fruits',icon:'🥭',description:'Learn fruit names.',items:[{id:'km',picture:'🥭',word:'ಮಾವು',meaning:'Mango',example:'ಮಾವು ಸಿಹಿ ಹಣ್ಣು.'},{id:'kap',picture:'🍎',word:'ಸೇಬು',meaning:'Apple',example:'ಸೇಬು ಕೆಂಪಾಗಿದೆ.'},{id:'kb',picture:'🍌',word:'ಬಾಳೆಹಣ್ಣು',meaning:'Banana',example:'ಬಾಳೆಹಣ್ಣು ಹಳದಿ.'},{id:'ko',picture:'🍊',word:'ಕಿತ್ತಳೆ',meaning:'Orange',example:'ಕಿತ್ತಳೆ ರಸ ಸಿಹಿ.'}]}],stories:[{id:'s1',icon:'🐘',title:'ದಯಾಳು ಆನೆ',summary:'Kindness and friendship.',text:'ಒಂದು ಕಾಡಿನಲ್ಲಿ ದಯಾಳು ಆನೆ ವಾಸಿಸುತ್ತಿತ್ತು. ಒಂದು ದಿನ ಚಿಕ್ಕ ಹಕ್ಕಿಯ ಗೂಡು ಕೆಳಗೆ ಬಿತ್ತು. ಆನೆ ಗೂಡನ್ನು ಮರದ ಮೇಲೆ ಇಟ್ಟಿತು.'},{id:'s2',icon:'🌱',title:'ಚಿಕ್ಕ ಬೀಜ',summary:'A story about growth.',text:'ಒಂದು ಚಿಕ್ಕ ಬೀಜ ಮಣ್ಣಿನೊಳಗೆ ಮಲಗಿತ್ತು. ಮಳೆ ಮತ್ತು ಸೂರ್ಯನ ಬೆಳಕಿನಿಂದ ಅದು ದೊಡ್ಡ ಗಿಡವಾಯಿತು.'}]},
{id:'hindi',name:'Hindi',nativeName:'हिंदी',locale:'hi-IN',color:'#ff8a16',icon:'🕌',available:true,topics:[
{id:'alphabet',title:'Alphabet',icon:'अ',description:'Learn Hindi vowels.',items:[{id:'ha1',picture:'🍎',word:'अ',meaning:'A',example:'अ से अनार।'},{id:'ha2',picture:'🥭',word:'आ',meaning:'Aa',example:'आ से आम।'},{id:'ha3',picture:'🏠',word:'इ',meaning:'I',example:'इ से इमली।'},{id:'ha4',picture:'🦅',word:'ई',meaning:'Ee',example:'ई से ईख।'}]},
{id:'numbers',title:'Numbers',icon:'१२३',description:'Count in Hindi.',items:[{id:'hn1',picture:'1️⃣',word:'एक',meaning:'One',example:'एक सेब।'},{id:'hn2',picture:'2️⃣',word:'दो',meaning:'Two',example:'दो पक्षी।'},{id:'hn3',picture:'3️⃣',word:'तीन',meaning:'Three',example:'तीन गेंदें।'},{id:'hn4',picture:'4️⃣',word:'चार',meaning:'Four',example:'चार फूल।'}]},
{id:'animals',title:'Animals',icon:'🐘',description:'Learn animal names.',items:[{id:'he',picture:'🐘',word:'हाथी',meaning:'Elephant',example:'हाथी बड़ा जानवर है।'},{id:'hd',picture:'🐶',word:'कुत्ता',meaning:'Dog',example:'कुत्ता अच्छा मित्र है।'},{id:'hc',picture:'🐱',word:'बिल्ली',meaning:'Cat',example:'बिल्ली दूध पीती है।'},{id:'hw',picture:'🐄',word:'गाय',meaning:'Cow',example:'गाय दूध देती है।'}]},
{id:'fruits',title:'Fruits',icon:'🥭',description:'Learn fruit names.',items:[{id:'hm',picture:'🥭',word:'आम',meaning:'Mango',example:'आम मीठा फल है।'},{id:'hap',picture:'🍎',word:'सेब',meaning:'Apple',example:'सेब लाल है।'},{id:'hb',picture:'🍌',word:'केला',meaning:'Banana',example:'केला पीला है।'},{id:'ho',picture:'🍊',word:'संतरा',meaning:'Orange',example:'संतरा रसदार है।'}]}],stories:[{id:'hs1',icon:'🐘',title:'दयालु हाथी',summary:'दयालुता की कहानी।',text:'एक जंगल में एक दयालु हाथी रहता था। उसने एक छोटी चिड़िया की मदद की।'},{id:'hs2',icon:'🌱',title:'छोटा बीज',summary:'विकास की कहानी।',text:'एक छोटा बीज मिट्टी में सो रहा था। बारिश और धूप से वह पौधा बन गया।'}]},
{id:'english',name:'English',nativeName:'English',locale:'en-IN',color:'#2e7eea',icon:'🏰',available:true,topics:[
{id:'alphabet',title:'Alphabet',icon:'ABC',description:'Learn English letters.',items:[{id:'ea',picture:'🍎',word:'A',meaning:'Apple',example:'A is for Apple.'},{id:'eb',picture:'⚽',word:'B',meaning:'Ball',example:'B is for Ball.'},{id:'ec',picture:'🐱',word:'C',meaning:'Cat',example:'C is for Cat.'},{id:'ed',picture:'🐶',word:'D',meaning:'Dog',example:'D is for Dog.'}]},
{id:'numbers',title:'Numbers',icon:'123',description:'Count in English.',items:[{id:'en1',picture:'1️⃣',word:'One',meaning:'1',example:'One apple.'},{id:'en2',picture:'2️⃣',word:'Two',meaning:'2',example:'Two birds.'},{id:'en3',picture:'3️⃣',word:'Three',meaning:'3',example:'Three balls.'},{id:'en4',picture:'4️⃣',word:'Four',meaning:'4',example:'Four flowers.'}]},
{id:'animals',title:'Animals',icon:'🐘',description:'Learn animal names.',items:[{id:'ee',picture:'🐘',word:'Elephant',meaning:'Animal',example:'The elephant is big.'},{id:'edg',picture:'🐶',word:'Dog',meaning:'Animal',example:'The dog is friendly.'},{id:'ect',picture:'🐱',word:'Cat',meaning:'Animal',example:'The cat drinks milk.'},{id:'ecw',picture:'🐄',word:'Cow',meaning:'Animal',example:'The cow gives milk.'}]},
{id:'fruits',title:'Fruits',icon:'🍎',description:'Learn fruit names.',items:[{id:'em',picture:'🥭',word:'Mango',meaning:'Fruit',example:'The mango is sweet.'},{id:'eap',picture:'🍎',word:'Apple',meaning:'Fruit',example:'The apple is red.'},{id:'ebn',picture:'🍌',word:'Banana',meaning:'Fruit',example:'The banana is yellow.'},{id:'eor',picture:'🍊',word:'Orange',meaning:'Fruit',example:'The orange is juicy.'}]}],stories:[{id:'es1',icon:'🐘',title:'The Kind Elephant',summary:'A story about kindness.',text:'A kind elephant helped a little bird put its nest back on the tree.'},{id:'es2',icon:'🌱',title:'The Little Seed',summary:'A story about growth.',text:'A little seed grew into a strong plant with rain and sunshine.'}]},
{id:'tamil',name:'Tamil',nativeName:'தமிழ்',locale:'ta-IN',color:'#7f42d9',icon:'🛕',available:false,topics:[],stories:[]},
{id:'telugu',name:'Telugu',nativeName:'తెలుగు',locale:'te-IN',color:'#16a89a',icon:'🏯',available:false,topics:[],stories:[]},
{id:'assamese',name:'Assamese',nativeName:'অসমীয়া',locale:'as-IN',color:'#ef4e91',icon:'🏡',available:false,topics:[],stories:[]}
];


function scrollToSection(id:string){document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});}
function speak(text:string,locale:string){if(!('speechSynthesis' in window)){alert('Speech is not supported on this device.');return;}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang=locale;u.rate=.8;speechSynthesis.speak(u);}


function Header(){
  const[open,setOpen]=useState(false);
  return <header className="topbar">
    <button className="brand" onClick={()=>scrollToSection('home')}>
      <span className="tree-logo">🌳</span>
      <span className="brand-copy"><b>RootCraft</b><strong> Academy</strong><small>Learn • Connect • Grow</small></span>
    </button>
    <button className="menu" aria-label="Open navigation" onClick={()=>setOpen(!open)}>☰</button>
    <nav className={open?'open':''}>
      {['home','languages','stories','games','culture','about'].map(x=>
        <button key={x} onClick={()=>{setOpen(false);scrollToSection(x)}}>{x==='about'?'About India':x[0].toUpperCase()+x.slice(1)}</button>
      )}
    </nav>
    <button className="primary header-start" onClick={()=>scrollToSection('languages')}>Start Learning →</button>
  </header>
}

function Memory({items}:{items:Item[]}){
  const tiles=useMemo(()=>items.slice(0,4).flatMap(i=>[
    {id:i.id+'p',pair:i.id,value:i.picture},{id:i.id+'w',pair:i.id,value:i.word}
  ]).sort(()=>Math.random()-.5),[items]);
  const[open,setOpen]=useState<string[]>([]);
  const[matched,setMatched]=useState<string[]>([]);
  function pick(t:{id:string,pair:string,value:string}){
    if(open.includes(t.id)||matched.includes(t.pair)||open.length===2)return;
    const n=[...open,t.id];setOpen(n);
    if(n.length===2){
      const a=tiles.find(x=>x.id===n[0]),b=tiles.find(x=>x.id===n[1]);
      if(a&&b&&a.pair===b.pair){setMatched(m=>[...m,a.pair]);setTimeout(()=>setOpen([]),300)}
      else setTimeout(()=>setOpen([]),700);
    }
  }
  return <div className="memory">{tiles.map(t=><button key={t.id} className={open.includes(t.id)||matched.includes(t.pair)?'show':''} onClick={()=>pick(t)}>{open.includes(t.id)||matched.includes(t.pair)?t.value:'?'}</button>)}</div>
}

function Quiz({items}:{items:Item[]}){
  const q=items[0];
  const opts=useMemo(()=>items.slice(0,4).map(i=>i.word).sort(()=>Math.random()-.5),[items]);
  const[s,setS]=useState<string|null>(null);
  if(!q)return <p>No quiz data available.</p>;
  return <div className="quiz">
    <div className="quiz-picture">{q.picture}</div><h3>Choose the correct word</h3>
    <div className="answers">{opts.map(o=><button key={o} disabled={!!s} className={s?(o===q.word?'correct':s===o?'wrong':''):''} onClick={()=>setS(o)}>{o}</button>)}</div>
    {s&&<p className="quiz-feedback">{s===q.word?'Correct! ⭐':`Answer: ${q.word}`}</p>}
  </div>
}

export default function App(){
  const[course,setCourse]=useState<Course|null>(null);
  const[topic,setTopic]=useState<Topic|null>(null);
  const[story,setStory]=useState<Story|null>(null);
  const[game,setGame]=useState<'memory'|'quiz'|null>(null);
  const viewRef=useRef<HTMLElement>(null);
  useEffect(()=>{if(course||topic||story||game)viewRef.current?.scrollIntoView({behavior:'smooth',block:'start'})},[course,topic,story,game]);
  const active=course||courses[0];
  const allItems=active.topics.flatMap(t=>t.items);

  return <><Header/>
    {course&&topic?
      <section ref={viewRef} className="section learning page-focus">
        <button className="outline" onClick={()=>setTopic(null)}>← Back to Topics</button>
        <div className="section-heading"><span>{course.nativeName}</span><h2>{topic.title}</h2><p>{topic.description}</p></div>
        <div className="lesson-grid">{topic.items.map(i=><article key={i.id}><div className="lesson-picture">{i.picture}</div><h3>{i.word}</h3><p>{i.meaning}</p><small>{i.example}</small><button className="primary" onClick={()=>speak(i.word,course.locale)}>🔊 Listen</button></article>)}</div>
      </section>
    :course?
      <section ref={viewRef} className="section learning page-focus">
        <button className="outline" onClick={()=>setCourse(null)}>← Back to Languages</button>
        <div className="section-heading"><span>{course.name} Learning</span><h2>{course.nativeName}</h2><p>Choose a topic and begin your journey.</p></div>
        <div className="topic-grid">{course.topics.map(t=><button key={t.id} onClick={()=>setTopic(t)}><span>{t.icon}</span><b>{t.title}</b><small>{t.description}</small></button>)}</div>
      </section>
    :<>
      <section id="home" className="hero">
        <div className="hero-copy">
          <span className="pill">🇮🇳 Made for India's young learners</span>
          <h1>Learn Every<br/><em>Indian Language</em></h1>
          <h2>One Country. Many Languages.<br/>One Learning Platform.</h2>
          <p>A joyful way for children to explore Indian languages, stories, culture and traditions through interactive lessons, games and pronunciation practice.</p>
          <div className="hero-actions">
            <button className="primary large" onClick={()=>scrollToSection('languages')}>Start Learning →</button>
            <button className="outline large" onClick={()=>scrollToSection('languages')}>Explore Languages</button>
          </div>
          <div className="safety-pills"><span>🛡️ Kid Friendly</span><span>✓ Simple Learning</span><span>🚫 Ad Free</span></div>
        </div>
        <div className="hero-visual">
          <img src="/assets/india-language-hero.webp" alt="Children from different regions learning languages around a colourful map of India"/>
        </div>
      </section>

      <section className="impact-strip">
        <article><span>🌍</span><b>22+</b><small>Scheduled Languages</small></article>
        <article><span>👨‍👩‍👧‍👦</span><b>1.4 Billion+</b><small>People Connected</small></article>
        <article><span>📚</span><b>Thousands</b><small>of Words</small></article>
        <article><span>🎮</span><b>Interactive</b><small>Learning Games</small></article>
        <article><span>📖</span><b>Engaging</b><small>Stories</small></article>
        <article><span>🏆</span><b>Progress</b><small>& Rewards</small></article>
      </section>

      <section id="culture" className="section culture-section">
        <div className="culture-copy">
          <span>Our Indian Culture</span>
          <h2>Many traditions. One shared heritage.</h2>
          <p>India is one of the world's oldest civilizations, enriched by extraordinary diversity in languages, traditions, festivals, music, dance, art, food and storytelling. From the Himalayas to the coastal regions, every community carries a distinct identity and a valuable cultural legacy.</p>
          <p>RootCraft Academy brings this heritage to life for children through language lessons, regional stories, games and cultural experiences that nurture curiosity, respect and pride.</p>
          <button className="primary" onClick={()=>scrollToSection('languages')}>Explore Our Culture →</button>
        </div>
        <div className="culture-cards">
          <article><div>💃</div><h3>Dance</h3><p>Classical and folk traditions</p></article>
          <article><div>🎨</div><h3>Festivals</h3><p>Colours, celebrations and customs</p></article>
          <article><div>🎶</div><h3>Music</h3><p>Rhythms from every region</p></article>
          <article><div>🏛️</div><h3>Heritage</h3><p>Monuments and living history</p></article>
          <article><div>🪷</div><h3>Art & Crafts</h3><p>Creative traditions passed through generations</p></article>
        </div>
      </section>

      <section className="section explore-india">
        <div className="explore-map">
          <h2>Explore India</h2><p>Click a language card to discover its alphabet, words, stories and culture.</p>
          <div className="mini-map">🇮🇳</div>
        </div>
        <article className="featured-state">
          <span>Karnataka</span><h2>Kannada</h2><p>ಕನ್ನಡ</p><div className="state-facts"><b>45 Million+</b><small>Speakers</small></div>
          <div className="state-icons"><span>ಅ<br/><small>Alphabet</small></span><span>📖<br/><small>Stories</small></span><span>🎭<br/><small>Culture</small></span></div>
          <button className="primary" onClick={()=>setCourse(courses[0])}>Explore Kannada →</button>
        </article>
      </section>

      <section id="languages" className="section language-section">
        <div className="section-heading"><span>Popular Languages</span><h2>Choose your learning journey</h2><p>Begin with Kannada, Hindi or English. More Indian languages are being prepared.</p></div>
        <div className="language-grid">{courses.map(c=><article key={c.id}>
          <div className="language-character">{c.icon}</div><h3>{c.nativeName}</h3><p>{c.name}</p>
          <span className={c.available?'available':'coming'}>{c.available?'Available Now':'Coming Soon'}</span>
          <button style={{background:c.color}} onClick={()=>c.available?setCourse(c):alert(`${c.name} is coming soon.`)}>{c.available?'Start Learning →':'Coming Soon'}</button>
        </article>)}</div>
      </section>

      <section className="journey section">
        <div className="section-heading"><span>Your Learning Journey</span><h2>Learn one joyful step at a time</h2></div>
        <div className="journey-row">
          {[
            ['🌐','Choose Language'],['🔤','Learn Alphabet'],['🧩','New Words'],['🎤','Pronunciation'],['📖','Stories'],['🎮','Games'],['❓','Quiz'],['🏅','Certificate']
          ].map((x,i)=><div key={x[1]} className="journey-step"><span>{x[0]}</span><b>{x[1]}</b>{i<7&&<em>→</em>}</div>)}
        </div>
      </section>
    </>}

    <section id="stories" className="section soft">
      <div className="section-heading"><span>Story Library</span><h2>Stories in {active.name}</h2><p>Read, listen and discover meaningful lessons.</p></div>
      <div className="story-grid">{active.stories.map(s=><article key={s.id}><div>{s.icon}</div><h3>{s.title}</h3><p>{s.summary}</p><button className="outline" onClick={()=>setStory(s)}>Read Story</button></article>)}</div>
      {story&&<section ref={viewRef} className="panel"><button className="outline" onClick={()=>setStory(null)}>← Back</button><h3>{story.title}</h3><p>{story.text}</p><button className="primary" onClick={()=>speak(story.text,active.locale)}>🔊 Read Aloud</button></section>}
    </section>

    <section id="games" className="section">
      <div className="section-heading"><span>Learn Through Play</span><h2>Games in {active.name}</h2><p>Practice words while having fun.</p></div>
      <div className="game-grid"><article><div>🧠</div><h3>Memory Match</h3><p>Match pictures with words.</p><button className="primary" onClick={()=>setGame('memory')}>Play Game</button></article><article><div>🎯</div><h3>Picture Quiz</h3><p>Choose the correct word.</p><button className="primary" onClick={()=>setGame('quiz')}>Play Game</button></article></div>
      {game&&<section ref={viewRef} className="panel"><button className="outline" onClick={()=>setGame(null)}>← Back</button>{game==='memory'?<Memory items={allItems}/>:<Quiz items={allItems}/>}</section>}
    </section>

    <section id="about" className="benefits">
      <article><span>🛡️</span><div><b>Safe & Kid Friendly</b><small>A focused, advertisement-free learning space.</small></div></article>
      <article><span>📈</span><div><b>Track Progress</b><small>Celebrate lessons, words and milestones.</small></div></article>
      <article><span>☁️</span><div><b>Learn Anywhere</b><small>A responsive experience for mobile and desktop.</small></div></article>
      <article><span>⭐</span><div><b>Earn Rewards</b><small>Badges and stars encourage continued learning.</small></div></article>
    </section>

    <footer><div><b>🌳 RootCraft Academy</b><p>Celebrating every Indian language and culture.</p></div><div><strong>Explore</strong><span>Languages</span><span>Stories</span><span>Games</span><span>Culture</span></div><div><strong>Support</strong><span>Parents</span><span>Teachers</span><span>Contact</span></div><div><strong>Legal</strong><span>Privacy Policy</span><span>Terms of Use</span></div></footer>
  </>;
}
