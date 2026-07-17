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
      <span className="brand-tree">🌳</span>
      <span className="brand-text">
        <span><b>RootCraft</b> <strong>Academy</strong></span>
        <small>Learn • Connect • Grow</small>
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
            <div className="mini-css-flag" aria-hidden="true"><b></b><b></b><b></b></div>
            <strong>Made for India’s<br/>young learners</strong>
            <span>♡</span>
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
                  <input type="search" value={stateSearch} onChange={event=>setStateSearch(event.target.value)} placeholder="Try Kannada, Assam, Bihu..." />
                </label>
                <label>
                  <span>Region</span>
                  <select value={selectedRegion} onChange={event=>setSelectedRegion(event.target.value)}>
                    {regions.map(region=><option key={region} value={region}>{region}</option>)}
                  </select>
                </label>
              </div>
              <div className="state-browser-results" aria-label="Choose a state or language">
                {filteredExploreStates.map(([key,state])=>
                  <button key={key} type="button" className={selectedExploreState===key?'active':''} onClick={()=>setSelectedExploreState(key)}>
                    <span>{state.icon}</span>
                    <div><b>{state.name}</b><small>{state.language}</small></div>
                  </button>
                )}
                {filteredExploreStates.length===0&&<p className="state-browser-empty">No matching state or language found.</p>}
              </div>
            </div>
          </div>
        </section>

        <aside className="state-detail-panel" aria-live="polite">
          <div className="state-detail-cover">
            <div className="state-detail-landmark">{selectedState.icon}</div>
            <div>
              <span>{selectedState.nativeName}</span>
              <h2>{selectedState.name}</h2>
            </div>
          </div>

          <div className="state-detail-list">
            <article><span>💬</span><div><b>Language</b><p>{selectedState.language}</p></div></article>
            <article><span>🏛️</span><div><b>Famous Place</b><p>{selectedState.place}</p></div></article>
            <article><span>🪔</span><div><b>Festival</b><p>{selectedState.festival}</p></div></article>
            <article><span>🍲</span><div><b>Food</b><p>{selectedState.food}</p></div></article>
            <article><span>🎭</span><div><b>Culture</b><p>{selectedState.culture}</p></div></article>
          </div>

          <button className="state-start-button" type="button" onClick={startSelectedState}>
            {selectedState.available?`Start Learning ${selectedState.language.split(' ')[0]}`:'Course Coming Soon'} →
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
      <div><strong>Support</strong><span>Parents</span><span>Teachers</span><span>Contact</span></div>
      <div><strong>Legal</strong><span>Privacy Policy</span><span>Terms of Use</span></div>
    </footer>
  </>;
}
