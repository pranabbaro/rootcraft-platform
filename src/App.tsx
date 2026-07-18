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



function scrollToSection(id:string){
  document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});
}

function speak(text:string,locale:string){
  if(!('speechSynthesis' in window)){
    alert('Speech is not supported on this device.');
    return;
  }
  speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(text);
  utterance.lang=locale;
  utterance.rate=.8;
  speechSynthesis.speak(utterance);
}

function Header(){
  const[open,setOpen]=useState(false);
  const links=[
    ['home','Home'],
    ['languages','Languages'],
    ['stories','Stories'],
    ['games','Games'],
    ['culture','Culture'],
    ['about','About India']
  ];

  return <header className="topbar">
    <button className="brand" type="button" onClick={()=>scrollToSection('home')}>
      <span className="brand-logo banyan-brand-logo" aria-hidden="true">
        <svg className="banyan-logo-svg" viewBox="0 0 190 155" role="img">
          <defs>
            <linearGradient id="banyanLeaves" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8bc442"/>
              <stop offset="100%" stopColor="#21683a"/>
            </linearGradient>
            <linearGradient id="banyanWood" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9a6b34"/>
              <stop offset="100%" stopColor="#59361f"/>
            </linearGradient>
          </defs>

          <ellipse cx="95" cy="143" rx="59" ry="5" fill="#dce9d8"/>

          <g fill="none" stroke="url(#banyanWood)" strokeLinecap="round" strokeLinejoin="round">
            <path d="M86 116C72 128 62 136 43 143M89 116C77 129 68 143 53 149M92 116C87 130 85 140 82 151M98 116C103 130 107 141 111 151M101 116C114 129 124 142 142 149M104 116C120 127 133 137 151 143" strokeWidth="3"/>
            <path d="M84 56C84 77 85 97 88 116M106 56C106 78 105 98 102 116" strokeWidth="11"/>
            <path d="M95 70C72 45 51 40 27 53M95 70C119 44 140 40 163 53M92 82C62 66 39 71 18 89M98 82C128 66 151 71 172 89M92 60C78 40 68 31 53 25M98 60C111 40 121 31 137 25" strokeWidth="6"/>
          </g>

          <g stroke="#80582f" strokeWidth="1.7" strokeLinecap="round">
            <path d="M35 60V103M52 48V93M70 43V87M120 43V87M138 48V94M155 60V104"/>
          </g>

          <g fill="url(#banyanLeaves)">
            <path d="M13 83C13 68 28 61 41 68C37 82 25 90 13 83Z"/>
            <path d="M22 54C24 39 42 33 54 43C49 58 35 64 22 54Z"/>
            <path d="M42 32C48 17 65 15 74 27C67 41 53 44 42 32Z"/>
            <path d="M66 20C75 5 92 7 97 21C88 33 75 32 66 20Z"/>
            <path d="M89 18C98 4 115 7 119 22C109 33 97 32 89 18Z"/>
            <path d="M114 27C123 14 140 18 145 33C134 44 121 41 114 27Z"/>
            <path d="M136 43C147 32 164 39 166 54C154 64 142 59 136 43Z"/>
            <path d="M150 68C162 60 177 68 176 82C165 90 153 83 150 68Z"/>
            <path d="M43 67C51 53 68 52 76 64C69 78 54 79 43 67Z"/>
            <path d="M114 64C122 52 139 53 147 67C136 79 121 78 114 64Z"/>
            <path d="M72 43C80 28 97 28 104 42C97 56 81 56 72 43Z"/>
            <path d="M85 31C94 18 111 20 116 35C106 47 93 45 85 31Z"/>
            <path d="M31 80C44 72 58 80 56 94C44 101 32 94 31 80Z"/>
            <path d="M134 80C147 72 161 79 161 94C149 101 136 94 134 80Z"/>
          </g>

          <g fill="#fffaf0" stroke="#bd914e" strokeWidth="1.5">
            <path d="M49 117Q72 99 94 117Q72 124 49 117Z"/>
            <path d="M141 117Q118 99 96 117Q118 124 141 117Z"/>
          </g>
          <path d="M95 102V120" stroke="#c59b53" strokeWidth="1.7"/>

          <g fill="#674224">
            <circle cx="72" cy="91" r="5"/>
            <path d="M67 97C61 102 61 110 64 116H80C82 108 79 100 74 97Z"/>
            <circle cx="118" cy="91" r="5"/>
            <path d="M113 97C107 102 107 110 110 116H126C128 108 125 100 120 97Z"/>
          </g>

          <g fill="#62b34a">
            <path d="M95 112C89 106 90 99 95 96C100 101 100 107 95 112Z"/>
            <path d="M95 112C101 106 107 105 110 109C104 114 100 115 95 112Z"/>
          </g>
        </svg>
      </span>

      <span className="brand-text banyan-brand-text">
        <span className="rootcraft-wordmark">RootCraft<i>◆</i></span>
        <strong className="academy-wordmark">ACADEMY</strong>
        <small>Deep Roots. Endless Learning.</small>
      </span>
    </button>

    <button
      className="menu-button"
      type="button"
      aria-label="Open navigation"
      onClick={()=>setOpen(!open)}
    >
      ☰
    </button>

    <nav className={open?'open':''}>
      {links.map(([id,label])=>
        <button
          key={id}
          type="button"
          onClick={()=>{setOpen(false);scrollToSection(id)}}
        >
          {label}
        </button>
      )}
    </nav>

    <button className="primary header-cta" type="button" onClick={()=>alert('Parent dashboard is coming soon.')}>
      👨‍👩‍👧 Parent Dashboard
    </button>
  </header>
}

function Memory({items}:{items:Item[]}){
  const tiles=useMemo(()=>items.slice(0,4).flatMap(i=>[
    {id:i.id+'p',pair:i.id,value:i.picture},
    {id:i.id+'w',pair:i.id,value:i.word}
  ]).sort(()=>Math.random()-.5),[items]);

  const[open,setOpen]=useState<string[]>([]);
  const[matched,setMatched]=useState<string[]>([]);

  function pick(tile:{id:string,pair:string,value:string}){
    if(open.includes(tile.id)||matched.includes(tile.pair)||open.length===2)return;
    const next=[...open,tile.id];
    setOpen(next);

    if(next.length===2){
      const first=tiles.find(x=>x.id===next[0]);
      const second=tiles.find(x=>x.id===next[1]);

      if(first&&second&&first.pair===second.pair){
        setMatched(value=>[...value,first.pair]);
        setTimeout(()=>setOpen([]),300);
      }else{
        setTimeout(()=>setOpen([]),700);
      }
    }
  }

  return <div className="memory-board">
    {tiles.map(tile=>{
      const visible=open.includes(tile.id)||matched.includes(tile.pair);
      return <button
        key={tile.id}
        type="button"
        className={visible?'memory-tile visible':'memory-tile'}
        onClick={()=>pick(tile)}
      >
        {visible?tile.value:'?'}
      </button>;
    })}
  </div>;
}

function Quiz({items}:{items:Item[]}){
  const question=items[0];
  const options=useMemo(
    ()=>items.slice(0,4).map(item=>item.word).sort(()=>Math.random()-.5),
    [items]
  );
  const[selected,setSelected]=useState<string|null>(null);

  if(!question)return <p>No quiz content is available.</p>;

  return <div className="quiz-panel">
    <div className="quiz-picture">{question.picture}</div>
    <h3>Choose the correct word</h3>
    <div className="quiz-options">
      {options.map(option=><button
        key={option}
        type="button"
        disabled={selected!==null}
        className={
          selected
            ? option===question.word
              ? 'correct'
              : selected===option
                ? 'wrong'
                : ''
            : ''
        }
        onClick={()=>setSelected(option)}
      >
        {option}
      </button>)}
    </div>
    {selected&&<p className="quiz-feedback">
      {selected===question.word?'Correct! ⭐':`Answer: ${question.word}`}
    </p>}
  </div>;
}

export default function App(){
  const[course,setCourse]=useState<Course|null>(null);
  const[topic,setTopic]=useState<Topic|null>(null);
  const[story,setStory]=useState<Story|null>(null);
  const[game,setGame]=useState<'memory'|'quiz'|null>(null);
  const[cultureModule,setCultureModule]=useState<string|null>(null);
  const[selectedExploreState,setSelectedExploreState]=useState('karnataka');
  const[stateSearch,setStateSearch]=useState('');
  const[selectedRegion,setSelectedRegion]=useState('All');
  const[showAllStates,setShowAllStates]=useState(false);
  const viewRef=useRef<HTMLElement>(null);

  useEffect(()=>{
    if(course||topic||story||game||cultureModule){
      viewRef.current?.scrollIntoView({behavior:'smooth',block:'start'});
    }
  },[course,topic,story,game,cultureModule]);

  const active=course||courses[0];
  const allItems=active.topics.flatMap(item=>item.items);

  const exploreStates:{[key:string]:{
    name:string; nativeName:string; language:string; place:string; festival:string;
    food:string; culture:string; icon:string; available:boolean; region:string; courseIndex?:number;
  }}={
    assam:{name:'Assam',nativeName:'অসম',language:'অসমীয়া (Assamese)',place:'Kaziranga',festival:'Bihu',food:'Assamese Thali',culture:'Bihu Dance',icon:'🦏',available:false,region:'North-East'},
    karnataka:{name:'Karnataka',nativeName:'ಕರ್ನಾಟಕ',language:'ಕನ್ನಡ (Kannada)',place:'Hampi',festival:'Mysuru Dasara',food:'Bisi Bele Bath',culture:'Yakshagana',icon:'🏛️',available:true,region:'South',courseIndex:0},
    tamilnadu:{name:'Tamil Nadu',nativeName:'தமிழ்நாடு',language:'தமிழ் (Tamil)',place:'Brihadisvara Temple',festival:'Pongal',food:'Dosa and Sambar',culture:'Bharatanatyam',icon:'🛕',available:false,region:'South'},
    telangana:{name:'Telangana',nativeName:'తెలంగాణ',language:'తెలుగు (Telugu)',place:'Charminar',festival:'Bathukamma',food:'Hyderabadi Biryani',culture:'Perini Dance',icon:'🕌',available:false,region:'South'},
    kerala:{name:'Kerala',nativeName:'കേരളം',language:'മലയാളം (Malayalam)',place:'Alappuzha Backwaters',festival:'Onam',food:'Sadya',culture:'Kathakali',icon:'🌴',available:false,region:'South'},
    punjab:{name:'Punjab',nativeName:'ਪੰਜਾਬ',language:'ਪੰਜਾਬੀ (Punjabi)',place:'Golden Temple',festival:'Vaisakhi',food:'Sarson da Saag',culture:'Bhangra',icon:'🌾',available:false,region:'North'},
    haryana:{name:'Haryana',nativeName:'हरियाणा',language:'हिन्दी (Hindi)',place:'Kurukshetra',festival:'Teej',food:'Bajra Khichdi',culture:'Saang Folk Theatre',icon:'🐂',available:true,region:'North',courseIndex:1},
    himachal:{name:'Himachal Pradesh',nativeName:'हिमाचल प्रदेश',language:'हिन्दी (Hindi)',place:'Shimla',festival:'Kullu Dussehra',food:'Dham',culture:'Nati Dance',icon:'🏔️',available:true,region:'North',courseIndex:1},
    jammu:{name:'Jammu & Kashmir',nativeName:'जम्मू और कश्मीर',language:'कश्मीरी (Kashmiri)',place:'Dal Lake',festival:'Tulip Festival',food:'Rogan Josh',culture:'Rouf Dance',icon:'🏔️',available:false,region:'North'},
    uttarakhand:{name:'Uttarakhand',nativeName:'उत्तराखण्ड',language:'हिन्दी (Hindi)',place:'Kedarnath',festival:'Harela',food:'Kafuli',culture:'Chholiya Dance',icon:'⛰️',available:true,region:'North',courseIndex:1},
    uttarpradesh:{name:'Uttar Pradesh',nativeName:'उत्तर प्रदेश',language:'हिन्दी (Hindi)',place:'Taj Mahal',festival:'Holi',food:'Kachori',culture:'Kathak',icon:'🕌',available:true,region:'North',courseIndex:1},
    rajasthan:{name:'Rajasthan',nativeName:'राजस्थान',language:'हिन्दी (Hindi)',place:'Hawa Mahal',festival:'Gangaur',food:'Dal Baati Churma',culture:'Ghoomar',icon:'🐪',available:true,region:'West',courseIndex:1},
    gujarat:{name:'Gujarat',nativeName:'ગુજરાત',language:'ગુજરાતી (Gujarati)',place:'Statue of Unity',festival:'Navratri',food:'Dhokla',culture:'Garba',icon:'🪘',available:false,region:'West'},
    maharashtra:{name:'Maharashtra',nativeName:'महाराष्ट्र',language:'मराठी (Marathi)',place:'Raigad Fort',festival:'Ganesh Chaturthi',food:'Puran Poli',culture:'Lavani',icon:'🏰',available:false,region:'West'},
    goa:{name:'Goa',nativeName:'गोवा',language:'कोंकणी (Konkani)',place:'Basilica of Bom Jesus',festival:'Shigmo',food:'Goan Fish Curry',culture:'Fugdi',icon:'🏖️',available:false,region:'West'},
    madhyapradesh:{name:'Madhya Pradesh',nativeName:'मध्य प्रदेश',language:'हिन्दी (Hindi)',place:'Sanchi Stupa',festival:'Khajuraho Festival',food:'Poha',culture:'Gond Art',icon:'🪷',available:true,region:'Central',courseIndex:1},
    chhattisgarh:{name:'Chhattisgarh',nativeName:'छत्तीसगढ़',language:'हिन्दी (Hindi)',place:'Chitrakote Falls',festival:'Bastar Dussehra',food:'Chila',culture:'Panthi Dance',icon:'🌿',available:true,region:'Central',courseIndex:1},
    westbengal:{name:'West Bengal',nativeName:'পশ্চিমবঙ্গ',language:'বাংলা (Bengali)',place:'Victoria Memorial',festival:'Durga Puja',food:'Mishti Doi',culture:'Baul Music',icon:'🎭',available:false,region:'East'},
    odisha:{name:'Odisha',nativeName:'ଓଡ଼ିଶା',language:'ଓଡ଼ିଆ (Odia)',place:'Konark Sun Temple',festival:'Rath Yatra',food:'Pakhala Bhata',culture:'Odissi',icon:'☀️',available:false,region:'East'},
    bihar:{name:'Bihar',nativeName:'बिहार',language:'मैथिली / हिन्दी',place:'Nalanda',festival:'Chhath',food:'Litti Chokha',culture:'Madhubani Art',icon:'📚',available:false,region:'East'},
    jharkhand:{name:'Jharkhand',nativeName:'झारखण्ड',language:'हिन्दी / Santali',place:'Hundru Falls',festival:'Sarhul',food:'Dhuska',culture:'Chhau Dance',icon:'🌳',available:false,region:'East'},
    manipur:{name:'Manipur',nativeName:'ꯃꯅꯤꯄꯨꯔ',language:'মৈতৈলোন্ (Manipuri)',place:'Loktak Lake',festival:'Yaoshang',food:'Eromba',culture:'Ras Lila',icon:'🛶',available:false,region:'North-East'},
    meghalaya:{name:'Meghalaya',nativeName:'Meghalaya',language:'Khasi',place:'Living Root Bridges',festival:'Wangala',food:'Jadoh',culture:'Shad Suk Mynsiem',icon:'🌧️',available:false,region:'North-East'},
    mizoram:{name:'Mizoram',nativeName:'Mizoram',language:'Mizo',place:'Reiek',festival:'Chapchar Kut',food:'Bai',culture:'Cheraw Dance',icon:'🎋',available:false,region:'North-East'},
    nagaland:{name:'Nagaland',nativeName:'Nagaland',language:'Naga Languages',place:'Kohima',festival:'Hornbill Festival',food:'Smoked Pork',culture:'Naga Folk Dance',icon:'🪶',available:false,region:'North-East'},
    tripura:{name:'Tripura',nativeName:'ত্রিপুরা',language:'বাংলা / Kokborok',place:'Ujjayanta Palace',festival:'Kharchi Puja',food:'Mui Borok',culture:'Hojagiri',icon:'🏯',available:false,region:'North-East'},
    sikkim:{name:'Sikkim',nativeName:'Sikkim',language:'Nepali',place:'Rumtek Monastery',festival:'Losar',food:'Momos',culture:'Cham Dance',icon:'🏔️',available:false,region:'North-East'},
    arunachal:{name:'Arunachal Pradesh',nativeName:'Arunachal Pradesh',language:'Multiple tribal languages',place:'Tawang Monastery',festival:'Losar',food:'Thukpa',culture:'Ponung Dance',icon:'🌄',available:false,region:'North-East'},
    english:{name:'English through India',nativeName:'English',language:'English',place:'Across India',festival:'Indian Festivals in English',food:'Indian Food Vocabulary',culture:'Stories and Communication',icon:'🌍',available:true,region:'All',courseIndex:2}
  };

  const regions=['All','North','South','East','West','Central','North-East'];

  const filteredExploreStates=Object.entries(exploreStates).filter(([_,state])=>{
    const regionMatch=selectedRegion==='All' || state.region===selectedRegion || state.region==='All';
    const query=stateSearch.trim().toLowerCase();
    const searchMatch=!query || [state.name,state.nativeName,state.language,state.place,state.festival,state.food,state.culture]
      .join(' ').toLowerCase().includes(query);
    return regionMatch && searchMatch;
  });

  const selectedState=exploreStates[selectedExploreState];

  function startSelectedState(){
    if(selectedState.available && selectedState.courseIndex!==undefined){
      chooseCourse(courses[selectedState.courseIndex]);
      return;
    }
    alert(`${selectedState.language} course is coming soon.`);
  }


  const cultureModules:{[key:string]:{icon:string,title:string,intro:string,examples:string[],words:{term:string,meaning:string}[]}}={
    festivals:{
      icon:'🪔',
      title:'Festivals of India',
      intro:'Discover how families celebrate seasons, stories, faith and community across India.',
      examples:['Diwali','Bihu','Pongal','Onam','Durga Puja','Holi'],
      words:[
        {term:'ಉತ್ಸವ',meaning:'Festival in Kannada'},
        {term:'त्योहार',meaning:'Festival in Hindi'},
        {term:'ಉತ್ಸವದ ಶುಭಾಶಯಗಳು',meaning:'Festival greetings in Kannada'}
      ]
    },
    art:{
      icon:'🎨',
      title:'Indian Art & Crafts',
      intro:'Explore traditional painting, textiles, handmade crafts and patterns from different regions.',
      examples:['Madhubani','Warli','Pattachitra','Kalamkari','Rangoli'],
      words:[
        {term:'ಕಲೆ',meaning:'Art in Kannada'},
        {term:'कला',meaning:'Art in Hindi'},
        {term:'ಚಿತ್ರ',meaning:'Picture in Kannada'}
      ]
    },
    dance:{
      icon:'💃',
      title:'Dance Traditions',
      intro:'Meet classical and folk dances that express stories, devotion, celebration and regional identity.',
      examples:['Bharatanatyam','Kathak','Bihu','Garba','Yakshagana'],
      words:[
        {term:'ನೃತ್ಯ',meaning:'Dance in Kannada'},
        {term:'नृत्य',meaning:'Dance in Hindi'},
        {term:'ಕುಣಿತ',meaning:'Dance movement in Kannada'}
      ]
    },
    music:{
      icon:'🥁',
      title:'Music of India',
      intro:'Learn about melodies, rhythms, folk traditions and instruments used across the country.',
      examples:['Carnatic','Hindustani','Tabla','Veena','Flute','Dhol'],
      words:[
        {term:'ಸಂಗೀತ',meaning:'Music in Kannada'},
        {term:'संगीत',meaning:'Music in Hindi'},
        {term:'ವಾದ್ಯ',meaning:'Musical instrument in Kannada'}
      ]
    },
    heritage:{
      icon:'🏛️',
      title:'Indian Heritage',
      intro:'Travel through monuments, landscapes and living traditions that preserve India’s history.',
      examples:['Taj Mahal','Hampi','Konark Temple','Kaziranga','Ajanta'],
      words:[
        {term:'ಪಾರಂಪರ್ಯ',meaning:'Heritage in Kannada'},
        {term:'विरासत',meaning:'Heritage in Hindi'},
        {term:'ಇತಿಹಾಸ',meaning:'History in Kannada'}
      ]
    },
    food:{
      icon:'🍛',
      title:'Food Across India',
      intro:'Discover regional dishes, family recipes and food words from different parts of India.',
      examples:['Assamese thali','Dosa','Biryani','Dhokla','Momos'],
      words:[
        {term:'ಆಹಾರ',meaning:'Food in Kannada'},
        {term:'भोजन',meaning:'Food in Hindi'},
        {term:'ರುಚಿ',meaning:'Taste in Kannada'}
      ]
    }
  };

  const chooseCourse=(selected:Course)=>{
    if(!selected.available){
      alert(`${selected.name} is coming soon.`);
      return;
    }
    setCourse(selected);
    setTopic(null);
  };

  return <>
    <Header/>

    {course&&topic?
      <section ref={viewRef} className="section learning-screen page-anchor">
        <button className="outline" type="button" onClick={()=>setTopic(null)}>← Back to Topics</button>
        <div className="section-heading">
          <span>{course.nativeName}</span>
          <h2>{topic.title}</h2>
          <p>{topic.description}</p>
        </div>
        <div className="lesson-grid">
          {topic.items.map(item=><article key={item.id} className="lesson-card">
            <div className="lesson-picture">{item.picture}</div>
            <h3>{item.word}</h3>
            <p>{item.meaning}</p>
            <small>{item.example}</small>
            <button className="primary" type="button" onClick={()=>speak(item.word,course.locale)}>
              🔊 Listen
            </button>
          </article>)}
        </div>
      </section>
    :course?
      <section ref={viewRef} className="section learning-screen page-anchor">
        <button className="outline" type="button" onClick={()=>setCourse(null)}>← Back to Languages</button>
        <div className="section-heading">
          <span>{course.name} Learning</span>
          <h2>{course.nativeName}</h2>
          <p>Choose a topic and start learning.</p>
        </div>
        <div className="topic-grid">
          {course.topics.map(item=><button
            key={item.id}
            type="button"
            className="topic-card"
            onClick={()=>setTopic(item)}
          >
            <span>{item.icon}</span>
            <b>{item.title}</b>
            <small>{item.description}</small>
          </button>)}
        </div>
      </section>
    :<>
      <main id="home" className="map-hero page-anchor">
        <section className="map-hero-copy">
          <span className="eyebrow">
            <i className="mini-india-flag" aria-hidden="true"><b></b><b></b><b></b></i>
            Made for India’s young learners
          </span>

          <h1>Learn Every<br/><em>Indian Language</em></h1>
          <p>
            Explore languages, stories, games and culture from every corner of India.
          </p>

          <div className="map-hero-actions">
            <button className="primary large" type="button" onClick={()=>scrollToSection('india-explorer')}>
              🗺 Explore India Map
            </button>
            <button className="outline large" type="button" onClick={()=>scrollToSection('languages')}>
              🚀 Start Learning Now
            </button>
          </div>

          <div className="map-hero-trust">
            <div className="family-illustration premium-kids" aria-hidden="true">
              <svg viewBox="0 0 260 120">
                <defs>
                  <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fff7de"/>
                    <stop offset="100%" stopColor="#eef8f1"/>
                  </linearGradient>
                  <linearGradient id="ground" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#9fd070"/>
                    <stop offset="100%" stopColor="#5ca95c"/>
                  </linearGradient>
                </defs>

                <rect x="1" y="1" width="258" height="118" rx="22" fill="url(#sky)"/>

                <path d="M0 98c28-12 52-10 78 0 33 13 70 8 104-2 29-8 54-5 78 5v19H0z" fill="url(#ground)"/>

                <g opacity=".95">
                  <path d="M148 87h24V54h-24z" fill="#d7a24f"/>
                  <path d="M144 54h32l-16-16z" fill="#e5b85f"/>
                  <path d="M154 87V63h12v24" fill="#8c623f"/>
                  <path d="M188 89h20V61h-20z" fill="#d98f4f"/>
                  <path d="M184 61h28l-14-14z" fill="#efb95c"/>
                  <path d="M214 91h18V67h-18z" fill="#c98a52"/>
                  <path d="M211 67h24l-12-12z" fill="#ecb76f"/>
                  <path d="M126 92h16V66h-16z" fill="#d5b06d"/>
                  <path d="M123 66h22l-11-11z" fill="#f0ce83"/>
                </g>

                <g transform="translate(18 18)">
                  <circle cx="42" cy="27" r="18" fill="#efb17f"/>
                  <path d="M24 27c0-15 10-24 21-24 12 0 20 8 20 21-8-8-20-10-41 3z" fill="#2d2a2a"/>
                  <path d="M23 84c2-25 11-37 27-37 16 0 26 11 28 37z" fill="#f3a83b"/>
                  <circle cx="36" cy="28" r="2.2" fill="#2d2a2a"/>
                  <circle cx="49" cy="28" r="2.2" fill="#2d2a2a"/>
                  <path d="M37 36c3 3 9 3 12 0" stroke="#8e4d38" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <rect x="44" y="58" width="36" height="25" rx="4" fill="#4f7fd8"/>
                  <path d="M62 58v25" stroke="#fff" strokeWidth="1.8"/>

                  <circle cx="96" cy="28" r="17" fill="#d99967"/>
                  <path d="M80 27c2-13 10-21 21-21 11 0 19 8 19 21-10-8-22-9-40 0z" fill="#1e1e1e"/>
                  <path d="M76 84c3-24 11-36 26-36 16 0 26 12 29 36z" fill="#2aa06a"/>
                  <circle cx="91" cy="29" r="2.2" fill="#1f1f1f"/>
                  <circle cx="103" cy="29" r="2.2" fill="#1f1f1f"/>
                  <path d="M92 36c3 3 8 3 11 0" stroke="#7d4432" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <rect x="66" y="59" width="38" height="25" rx="4" fill="#d94e4e"/>
                  <path d="M85 59v25" stroke="#fff4d8" strokeWidth="1.8"/>
                </g>

                <circle cx="239" cy="18" r="4" fill="#f2a13d"/>
                <path d="M236 18h6M239 15v6" stroke="#f2a13d" strokeWidth="1.5"/>
              </svg>
            </div>
            <strong>Made for India’s<br/>young learners</strong>
            <span className="trust-heart">♡</span>
          </div>
        </section>

        <section id="india-explorer" className="india-explorer" aria-label="Explore Indian states">
          <div className="explorer-map">
            <img
              src="/assets/india-language-hero.webp"
              alt="Map of India with regional language labels"
            />

            <div className="state-browser">
              <div className="state-browser-controls">
                <label>
                  <span>Search state or language</span>
                  <input
                    type="search"
                    value={stateSearch}
                    onChange={event=>{setStateSearch(event.target.value);setShowAllStates(false)}}
                    placeholder="Try Kannada, Assam, Bihu..."
                  />
                </label>
                <label>
                  <span>Region</span>
                  <select
                    value={selectedRegion}
                    onChange={event=>{setSelectedRegion(event.target.value);setShowAllStates(false)}}
                  >
                    {regions.map(region=><option key={region} value={region}>{region}</option>)}
                  </select>
                </label>
              </div>
              <div className="state-browser-results" aria-label="Choose a state or language">
                {(showAllStates?filteredExploreStates:filteredExploreStates.slice(0,6)).map(([key,state])=>
                  <button key={key} type="button" className={selectedExploreState===key?'active':''} onClick={()=>setSelectedExploreState(key)}>
                    <span>{state.icon}</span>
                    <div><b>{state.name}</b><small>{state.language}</small></div>
                  </button>
                )}
                {filteredExploreStates.length===0&&<p className="state-browser-empty">No matching state or language found.</p>}
              </div>
              {filteredExploreStates.length>6&&
                <button className="show-more-states" type="button" onClick={()=>setShowAllStates(!showAllStates)}>
                  {showAllStates?'Show Less ↑':`View All ${filteredExploreStates.length} States →`}
                </button>
              }
            </div>
          </div>
        </section>

        <aside className="state-detail-panel" aria-live="polite">
          <div className="state-detail-cover">
            <div className="state-landmark-card">
              <div className="state-detail-landmark">{selectedState.icon}</div>
            </div>
            <div className="state-title-block">
              <h2>{selectedState.name}</h2>
              <span>{selectedState.nativeName}</span>
            </div>
            <div className="state-pattern" aria-hidden="true">✦</div>
          </div>

          <div className="state-detail-list">
            <article><span className="detail-icon language-icon">💬</span><div><b>Language</b><p>{selectedState.language}</p></div></article>
            <article><span className="detail-icon place-icon">🏛️</span><div><b>Famous Place</b><p>{selectedState.place}</p></div></article>
            <article><span className="detail-icon festival-icon">🪔</span><div><b>Festival</b><p>{selectedState.festival}</p></div></article>
            <article><span className="detail-icon food-icon">🍲</span><div><b>Food</b><p>{selectedState.food}</p></div></article>
            <article><span className="detail-icon culture-icon">🎭</span><div><b>Culture</b><p>{selectedState.culture}</p></div></article>
          </div>

          <button className={selectedState.available?'state-start-button available':'state-start-button coming'} type="button" onClick={startSelectedState}>
            <b>{selectedState.available?`Start Learning ${selectedState.language.split(' ')[0]}`:'Course Coming Soon'}</b>
            <small>{selectedState.available?'Begin your language journey':'We’re creating this course for you!'}</small>
            <span>→</span>
          </button>
        </aside>
      </main>

      <section className="home-feature-row" aria-label="RootCraft features">
        <button type="button" onClick={()=>scrollToSection('games')}>
          <span>🎮</span><div><b>Fun Games</b><small>Play and learn with exciting games</small></div>
        </button>
        <button type="button" onClick={()=>scrollToSection('stories')}>
          <span>📖</span><div><b>Stories</b><small>Read stories in your favourite language</small></div>
        </button>
        <button type="button" onClick={()=>scrollToSection('culture')}>
          <span>🎭</span><div><b>Culture</b><small>Explore festivals, food, art and traditions</small></div>
        </button>
        <button type="button" onClick={()=>alert('Achievements are coming soon.')}>
          <span>🏆</span><div><b>Achievements</b><small>Earn badges and certificates</small></div>
        </button>
        <button type="button" onClick={()=>alert('The AI Tutor is coming soon.')}>
          <span>🤖</span><div><b>AI Tutor</b><small>Practice with a smart learning friend</small></div>
        </button>
        <button type="button" onClick={()=>scrollToSection('about')}>
          <span>👨‍👩‍👧</span><div><b>For Families</b><small>Designed for children and parents</small></div>
        </button>
      </section>

      <section className="section why-section">
        <div className="why-intro">
          <span>Why Learn Indian Languages?</span>
          <h2>Language connects children to family, identity and culture.</h2>
          <p>
            India’s languages carry centuries of stories, music, festivals,
            literature, knowledge and traditions. Learning them helps children
            communicate with family, understand regional culture and grow with
            confidence in a diverse world.
          </p>
        </div>
        <div className="why-grid">
          <article><span>🧠</span><h3>Stronger Thinking</h3><p>Language learning supports memory, attention and flexible thinking.</p></article>
          <article><span>👨‍👩‍👧</span><h3>Family Connection</h3><p>Children can communicate more naturally with family and community.</p></article>
          <article><span>📚</span><h3>Native Stories</h3><p>Discover poems, folk tales and literature in their original language.</p></article>
          <article><span>🌏</span><h3>Cultural Respect</h3><p>Understand India’s regions while appreciating unity in diversity.</p></article>
        </div>
      </section>

      <section id="languages" className="section state-first-section page-anchor">
        <div className="section-heading">
          <span>Explore India by State</span>
          <h2>Discover language through place and culture</h2>
          <p>
            Choose a state to explore its language, festivals, food, stories and traditions.
            State and language names below are matched to their correct regions.
          </p>
        </div>

        <div className="state-first-grid">
          <article className="state-first-card assam-state">
            <div className="state-first-icon">🦏</div>
            <span>Assam</span>
            <h3>অসমীয়া • Assamese</h3>
            <p>Bihu, tea gardens, Kaziranga, silk traditions and vibrant folk culture.</p>
            <ul>
              <li>Festival: Bihu</li>
              <li>Heritage: Kaziranga</li>
              <li>Food: Assamese thali</li>
            </ul>
            <button type="button" onClick={()=>alert('Assamese course is coming soon.')}>Coming Soon</button>
          </article>

          <article className="state-first-card karnataka-state featured-state-card">
            <div className="state-first-icon">🏛️</div>
            <span>Karnataka</span>
            <h3>ಕನ್ನಡ • Kannada</h3>
            <p>Hampi, Mysore, Yakshagana, classical music and a rich literary tradition.</p>
            <ul>
              <li>Festival: Mysuru Dasara</li>
              <li>Heritage: Hampi</li>
              <li>Food: Bisi bele bath</li>
            </ul>
            <button type="button" onClick={()=>chooseCourse(courses[0])}>Start Kannada Journey →</button>
          </article>

          <article className="state-first-card tamilnadu-state">
            <div className="state-first-icon">🛕</div>
            <span>Tamil Nadu</span>
            <h3>தமிழ் • Tamil</h3>
            <p>Pongal, temple architecture, Bharatanatyam and classical Tamil literature.</p>
            <ul>
              <li>Festival: Pongal</li>
              <li>Heritage: Chola temples</li>
              <li>Food: Dosa and sambar</li>
            </ul>
            <button type="button" onClick={()=>alert('Tamil course is coming soon.')}>Coming Soon</button>
          </article>

          <article className="state-first-card punjab-state">
            <div className="state-first-icon">🌾</div>
            <span>Punjab</span>
            <h3>ਪੰਜਾਬੀ • Punjabi</h3>
            <p>Bhangra, harvest celebrations, folk music and warm hospitality.</p>
            <ul>
              <li>Festival: Vaisakhi</li>
              <li>Culture: Bhangra</li>
              <li>Food: Sarson da saag</li>
            </ul>
            <button type="button" onClick={()=>alert('Punjabi course is coming soon.')}>Coming Soon</button>
          </article>

          <article className="state-first-card bengal-state">
            <div className="state-first-icon">🎭</div>
            <span>West Bengal</span>
            <h3>বাংলা • Bengali</h3>
            <p>Durga Puja, literature, music, theatre and a celebrated artistic heritage.</p>
            <ul>
              <li>Festival: Durga Puja</li>
              <li>Culture: Baul music</li>
              <li>Food: Mishti doi</li>
            </ul>
            <button type="button" onClick={()=>alert('Bengali course is coming soon.')}>Coming Soon</button>
          </article>

          <article className="state-first-card maharashtra-state">
            <div className="state-first-icon">🏰</div>
            <span>Maharashtra</span>
            <h3>मराठी • Marathi</h3>
            <p>Forts, Ganesh Chaturthi, Lavani, theatre and a strong literary tradition.</p>
            <ul>
              <li>Festival: Ganesh Chaturthi</li>
              <li>Heritage: Raigad Fort</li>
              <li>Food: Puran poli</li>
            </ul>
            <button type="button" onClick={()=>alert('Marathi course is coming soon.')}>Coming Soon</button>
          </article>

          <article className="state-first-card hindi-state featured-state-card">
            <div className="state-first-icon">🕌</div>
            <span>North & Central India</span>
            <h3>हिंदी • Hindi</h3>
            <p>Explore one of India’s most widely spoken languages through stories, everyday words and cultural themes.</p>
            <ul>
              <li>Learning: Greetings and conversation</li>
              <li>Stories: Folk tales and poems</li>
              <li>Practice: Words, pronunciation and games</li>
            </ul>
            <button type="button" onClick={()=>chooseCourse(courses[1])}>Start Hindi Journey →</button>
          </article>

          <article className="state-first-card english-state featured-state-card">
            <div className="state-first-icon">🏫</div>
            <span>Across India</span>
            <h3>English</h3>
            <p>Build strong English foundations through simple vocabulary, stories, pronunciation and interactive activities.</p>
            <ul>
              <li>Learning: Alphabet and vocabulary</li>
              <li>Stories: Reading and comprehension</li>
              <li>Practice: Speaking, quizzes and games</li>
            </ul>
            <button type="button" onClick={()=>chooseCourse(courses[2])}>Start English Journey →</button>
          </article>
        </div>

      </section>

      <section className="section play-section">
        <div className="section-heading">
          <span>Learn by Playing</span>
          <h2>Practice without feeling like homework</h2>
        </div>
        <div className="play-grid">
          <article><span>🎮</span><h3>Learning Games</h3><p>Memory, matching and picture challenges.</p></article>
          <article><span>📖</span><h3>Interactive Stories</h3><p>Learn words through meaningful stories.</p></article>
          <article><span>🎵</span><h3>Songs & Rhymes</h3><p>Build rhythm, recall and pronunciation.</p></article>
          <article><span>🎤</span><h3>Speaking Practice</h3><p>Listen and repeat common words confidently.</p></article>
          <article><span>🏆</span><h3>Challenges</h3><p>Earn stars and celebrate every milestone.</p></article>
        </div>
      </section>

      <section id="culture" className="section culture-section page-anchor">
        <div className="culture-copy">
          <span>Our Indian Culture</span>
          <h2>Many traditions. One shared heritage.</h2>
          <p>
            India is one of the world’s oldest civilizations, enriched by
            extraordinary diversity in languages, traditions, festivals, music,
            dance, art, food and storytelling. Every region carries a distinct
            identity and a valuable cultural legacy.
          </p>
          <p>
            RootCraft Academy brings this heritage to life through language
            lessons, regional stories, games and cultural experiences that
            encourage curiosity, respect and pride.
          </p>
        </div>

        <div className="culture-grid rich-culture-grid">
          <article className="culture-card festival-card">
            <div className="culture-icon">🪔</div>
            <h3>Festivals</h3>
            <p>Celebrate Diwali, Bihu, Pongal, Onam, Durga Puja and many more festivals that bring families and communities together.</p>
            <div className="culture-tags"><span>Diwali</span><span>Bihu</span><span>Pongal</span></div>
            <button type="button" onClick={()=>setCultureModule('festivals')}>Explore Festivals →</button>
          </article>

          <article className="culture-card art-card">
            <div className="culture-icon">🎨</div>
            <h3>Art & Crafts</h3>
            <p>Discover Madhubani paintings, Warli art, Pattachitra, Kalamkari, Rangoli and beautiful handmade traditions.</p>
            <div className="culture-tags"><span>Madhubani</span><span>Warli</span><span>Rangoli</span></div>
            <button type="button" onClick={()=>setCultureModule('art')}>Explore Art →</button>
          </article>

          <article className="culture-card dance-card">
            <div className="culture-icon">💃</div>
            <h3>Dance</h3>
            <p>Learn about Bharatanatyam, Kathak, Bihu, Garba, Yakshagana and other classical and folk dances.</p>
            <div className="culture-tags"><span>Kathak</span><span>Bihu</span><span>Garba</span></div>
            <button type="button" onClick={()=>setCultureModule('dance')}>Explore Dance →</button>
          </article>

          <article className="culture-card music-card">
            <div className="culture-icon">🥁</div>
            <h3>Music</h3>
            <p>Explore Carnatic and Hindustani music, folk songs and instruments such as tabla, veena, flute and dhol.</p>
            <div className="culture-tags"><span>Tabla</span><span>Veena</span><span>Dhol</span></div>
            <button type="button" onClick={()=>setCultureModule('music')}>Explore Music →</button>
          </article>

          <article className="culture-card heritage-card">
            <div className="culture-icon">🏛️</div>
            <h3>Heritage</h3>
            <p>Travel through the Taj Mahal, Hampi, Konark Temple, Kaziranga and countless places that preserve India’s history.</p>
            <div className="culture-tags"><span>Hampi</span><span>Konark</span><span>Kaziranga</span></div>
            <button type="button" onClick={()=>setCultureModule('heritage')}>Explore Heritage →</button>
          </article>

          <article className="culture-card food-card">
            <div className="culture-icon">🍛</div>
            <h3>Food</h3>
            <p>Discover India’s amazing cuisine—from Assamese thali and dosa to biryani, dhokla, momos and regional sweets.</p>
            <div className="culture-tags"><span>Dosa</span><span>Biryani</span><span>Momos</span></div>
            <button type="button" onClick={()=>setCultureModule('food')}>Explore Food →</button>
          </article>
        </div>
      </section>

      {cultureModule&&<section ref={viewRef} className="section culture-module page-anchor">
        <button className="outline" type="button" onClick={()=>setCultureModule(null)}>← Back to Culture</button>
        <div className="culture-module-hero">
          <div className="culture-module-icon">{cultureModules[cultureModule].icon}</div>
          <div>
            <span>Culture Explorer</span>
            <h2>{cultureModules[cultureModule].title}</h2>
            <p>{cultureModules[cultureModule].intro}</p>
          </div>
        </div>

        <div className="culture-module-grid">
          <article>
            <h3>Discover</h3>
            <div className="culture-example-list">
              {cultureModules[cultureModule].examples.map(item=><span key={item}>{item}</span>)}
            </div>
          </article>

          <article>
            <h3>Learn the Words</h3>
            <div className="culture-word-list">
              {cultureModules[cultureModule].words.map(item=><button key={item.term} type="button" onClick={()=>speak(item.term,'kn-IN')}>
                <b>{item.term}</b><small>{item.meaning}</small><span>🔊</span>
              </button>)}
            </div>
          </article>

          <article>
            <h3>Try a Quick Activity</h3>
            <p>Choose one example and say it aloud. Then share one thing you already know about it.</p>
            <button className="primary" type="button" onClick={()=>alert('Great job exploring Indian culture! ⭐')}>Complete Activity</button>
          </article>
        </div>
      </section>}


      <section className="section journey-section">
        <div className="section-heading">
          <span>Your Learning Journey</span>
          <h2>One joyful step at a time</h2>
        </div>
        <div className="journey">
          {[
            ['🌐','Choose Language'],
            ['🔤','Learn Alphabet'],
            ['🧩','New Words'],
            ['🎤','Pronunciation'],
            ['📖','Stories'],
            ['🎮','Games'],
            ['❓','Quiz'],
            ['🏅','Certificate']
          ].map(([icon,label],index)=><article key={label}>
            <span>{icon}</span><b>{label}</b>{index<7&&<em>→</em>}
          </article>)}
        </div>
      </section>
    </>}

    <section id="stories" className="section stories-section page-anchor">
      <div className="section-heading">
        <span>Story Library</span>
        <h2>Stories in {active.name}</h2>
        <p>Read, listen and discover simple lessons through story.</p>
      </div>
      <div className="story-grid">
        {active.stories.map(item=><article key={item.id}>
          <div>{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <button className="outline" type="button" onClick={()=>setStory(item)}>
            Read Story
          </button>
        </article>)}
      </div>
      {story&&<section ref={viewRef} className="panel page-anchor">
        <button className="outline" type="button" onClick={()=>setStory(null)}>← Back</button>
        <h3>{story.title}</h3>
        <p>{story.text}</p>
        <button className="primary" type="button" onClick={()=>speak(story.text,active.locale)}>
          🔊 Read Aloud
        </button>
      </section>}
    </section>

    <section id="games" className="section games-section page-anchor">
      <div className="section-heading">
        <span>Practice Through Play</span>
        <h2>Games in {active.name}</h2>
        <p>Review words and build confidence.</p>
      </div>
      <div className="game-grid">
        <article><div>🧠</div><h3>Memory Match</h3><p>Match pictures with words.</p><button className="primary" type="button" onClick={()=>setGame('memory')}>Play Game</button></article>
        <article><div>🎯</div><h3>Picture Quiz</h3><p>Choose the correct word.</p><button className="primary" type="button" onClick={()=>setGame('quiz')}>Play Game</button></article>
      </div>
      {game&&<section ref={viewRef} className="panel page-anchor">
        <button className="outline" type="button" onClick={()=>setGame(null)}>← Back</button>
        {game==='memory'?<Memory items={allItems}/>:<Quiz items={allItems}/>}
      </section>}
    </section>

    <section className="section why-rootcraft-section">
      <div className="section-heading">
        <span>Why RootCraft?</span>
        <h2>Built for joyful, meaningful learning</h2>
        <p>
          RootCraft Academy combines Indian languages, stories, culture and play
          in one safe learning experience for children and families.
        </p>
      </div>

      <div className="why-rootcraft-grid">
        <article>
          <div className="why-rootcraft-icon">🌳</div>
          <h3>Indian Languages</h3>
          <p>Children explore mother tongues and regional languages through simple, structured lessons.</p>
        </article>

        <article>
          <div className="why-rootcraft-icon">🎮</div>
          <h3>Learning Through Play</h3>
          <p>Games, quizzes and activities make practice enjoyable and easier to remember.</p>
        </article>

        <article>
          <div className="why-rootcraft-icon">🎭</div>
          <h3>Culture & Heritage</h3>
          <p>Festivals, food, dance, music, art and stories bring each language to life.</p>
        </article>

        <article>
          <div className="why-rootcraft-icon">📖</div>
          <h3>Stories That Connect</h3>
          <p>Age-appropriate stories help children build vocabulary while discovering Indian traditions.</p>
        </article>

        <article>
          <div className="why-rootcraft-icon">👨‍👩‍👧</div>
          <h3>Learn Together</h3>
          <p>Parents and children can explore words, stories and culture side by side.</p>
        </article>

        <article>
          <div className="why-rootcraft-icon">🛡️</div>
          <h3>Safe & Ad-Free</h3>
          <p>A focused, child-friendly environment without advertisements or unnecessary distractions.</p>
        </article>
      </div>
    </section>

<section id="about" className="section about-india-section page-anchor">
      <div className="about-india-copy">
        <span>About India</span>
        <h2>One country, many languages and countless stories.</h2>
        <p>
          India is home to extraordinary linguistic and cultural diversity. Across its
          states and regions, children grow up hearing different languages, celebrating
          different festivals, enjoying unique food traditions and sharing stories passed
          through generations.
        </p>
        <p>
          RootCraft Academy helps children explore this diversity in a simple and joyful
          way—through language lessons, stories, games, culture and discovery.
        </p>

        <div className="about-india-highlights">
          <article><b>22+</b><span>Scheduled languages</span></article>
          <article><b>28</b><span>States</span></article>
          <article><b>8</b><span>Union territories</span></article>
          <article><b>1</b><span>Shared national journey</span></article>
        </div>
      </div>

      <div className="about-india-panel">
        <div className="india-flag" role="img" aria-label="Indian national flag">
          <span className="flag-saffron"></span>
          <span className="flag-white"><i className="ashoka-chakra">✺</i></span>
          <span className="flag-green"></span>
        </div>
        <h3>Unity in Diversity</h3>
        <p>
          Every Indian language carries its own history, literature, music, humour and
          identity. Learning a language is also a way of understanding the people and
          culture connected to it.
        </p>

        <div className="about-india-values">
          <span>Respect every language</span>
          <span>Celebrate every culture</span>
          <span>Learn with curiosity</span>
          <span>Grow together</span>
        </div>

        <button className="primary" type="button" onClick={()=>scrollToSection('languages')}>
          Explore India →
        </button>
      </div>
    </section>

    <section className="benefit-band page-anchor">
      <article><span>🛡️</span><div><b>Safe & Kid Friendly</b><small>A focused, advertisement-free learning space.</small></div></article>
      <article><span>📈</span><div><b>Track Progress</b><small>Celebrate lessons, words and milestones.</small></div></article>
      <article><span>📱</span><div><b>Learn Anywhere</b><small>Responsive on desktop, tablet and mobile.</small></div></article>
      <article><span>⭐</span><div><b>Earn Rewards</b><small>Badges and stars encourage continued learning.</small></div></article>
    </section>

    <footer>
      <div className="footer-brand"><b>🌳 RootCraft Academy</b><p>Celebrating every Indian language and culture.</p></div>
      <div><strong>Learn</strong><span>Languages</span><span>Stories</span><span>Games</span></div>
      <div><strong>Explore</strong><span>Indian Culture</span><span>About India</span><span>Learning Journey</span></div>
      <div><strong>Support</strong><span>Parents</span><span>Teachers</span><span>Contact: Pranabbarokumar@gmail.com</span></div>
      <div><strong>Legal</strong><span>Privacy Policy</span><span>Terms of Use</span></div>
    </footer>
  </>;
}
