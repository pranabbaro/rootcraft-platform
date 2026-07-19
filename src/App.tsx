import { useEffect, useMemo, useRef, useState } from 'react';

type Item={id:string,picture:string,word:string,meaning:string,example:string};
type Topic={id:string,title:string,icon:string,description:string,items:Item[]};
type Story={id:string,icon:string,title:string,summary:string,text:string,english?:string,duration?:string};
type Course={id:string,name:string,nativeName:string,locale:string,color:string,icon:string,available:boolean,topics:Topic[],stories:Story[]};

function ItemVisual({value,className=''}:{value:string,className?:string}){
  const[image,setImage]=useState<string|null>(null);
  const[failed,setFailed]=useState(false);
  const isWiki=value.startsWith('wiki:');
  const title=isWiki?value.slice(5):'';

  useEffect(()=>{
    let active=true;

    if(!isWiki){
      setImage(null);
      setFailed(false);
      return;
    }

    setImage(null);
    setFailed(false);

    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`)
      .then(response=>{
        if(!response.ok)throw new Error('Image lookup failed');
        return response.json();
      })
      .then(data=>{
        if(!active)return;
        const source=data?.thumbnail?.source||data?.originalimage?.source;
        if(source)setImage(source);
        else setFailed(true);
      })
      .catch(()=>{
        if(active)setFailed(true);
      });

    return()=>{active=false};
  },[isWiki,title]);

  if(!isWiki)return <span className={className}>{value}</span>;

  if(image){
    return <img
      className={`fruit-real-image ${className}`}
      src={image}
      alt={title}
      loading="lazy"
    />;
  }

  return <span className={`fruit-image-placeholder ${className}`} aria-label={title}>
    {failed?'🍎':'…'}
  </span>;
}


const courses:Course[]=[
{id:'kannada',name:'Kannada',nativeName:'ಕನ್ನಡ',locale:'kn-IN',color:'#32b44a',icon:'🏛️',available:true,topics:[
{id:'alphabet',title:'Full Alphabet',icon:'ಅ',description:'Learn the complete Kannada alphabet with pronunciation.',items:[{id:'ka1',picture:'🔤',word:'ಅ',meaning:'a',example:'ಅಮ್ಮ (Mother)'},{id:'ka2',picture:'🔤',word:'ಆ',meaning:'aa',example:'ಆನೆ (Elephant)'},{id:'ka3',picture:'🔤',word:'ಇ',meaning:'i',example:'ಇಲಿ (Mouse)'},{id:'ka4',picture:'🔤',word:'ಈ',meaning:'ee',example:'ಈಚಲು (Date palm)'},{id:'ka5',picture:'🔤',word:'ಉ',meaning:'u',example:'ಉಡುಪು (Clothes)'},{id:'ka6',picture:'🔤',word:'ಊ',meaning:'oo',example:'ಊಟ (Meal)'},{id:'ka7',picture:'🔤',word:'ಋ',meaning:'ru',example:'ಋಷಿ (Sage)'},{id:'ka8',picture:'🔤',word:'ಎ',meaning:'e',example:'ಎಲೆ (Leaf)'},{id:'ka9',picture:'🔤',word:'ಏ',meaning:'ē',example:'ಏಣಿ (Ladder)'},{id:'ka10',picture:'🔤',word:'ಐ',meaning:'ai',example:'ಐದು (Five)'},{id:'ka11',picture:'🔤',word:'ಒ',meaning:'o',example:'ಒಂಟೆ (Camel)'},{id:'ka12',picture:'🔤',word:'ಓ',meaning:'ō',example:'ಓಟ (Run)'},{id:'ka13',picture:'🔤',word:'ಔ',meaning:'au',example:'ಔಷಧಿ (Medicine)'},{id:'ka14',picture:'🔤',word:'ಅಂ',meaning:'am',example:'ಅಂಗ (Body part)'},{id:'ka15',picture:'🔤',word:'ಅಃ',meaning:'aha',example:'ವಿಸರ್ಗ (Visarga)'},{id:'ka16',picture:'🔤',word:'ಕ',meaning:'ka',example:'ಕಮಲ (Lotus)'},{id:'ka17',picture:'🔤',word:'ಖ',meaning:'kha',example:'ಖಡ್ಗ (Sword)'},{id:'ka18',picture:'🔤',word:'ಗ',meaning:'ga',example:'ಗಡಿಯಾರ (Clock)'},{id:'ka19',picture:'🔤',word:'ಘ',meaning:'gha',example:'ಘಂಟೆ (Bell)'},{id:'ka20',picture:'🔤',word:'ಙ',meaning:'ṅa',example:'ಙ — Kannada consonant'},{id:'ka21',picture:'🔤',word:'ಚ',meaning:'cha',example:'ಚಂದ್ರ (Moon)'},{id:'ka22',picture:'🔤',word:'ಛ',meaning:'chha',example:'ಛತ್ರಿ (Umbrella)'},{id:'ka23',picture:'🔤',word:'ಜ',meaning:'ja',example:'ಜಿಂಕೆ (Deer)'},{id:'ka24',picture:'🔤',word:'ಝ',meaning:'jha',example:'ಝರಿ (Stream)'},{id:'ka25',picture:'🔤',word:'ಞ',meaning:'ña',example:'ಞ — Kannada consonant'},{id:'ka26',picture:'🔤',word:'ಟ',meaning:'ṭa',example:'ಟೊಮಾಟೊ (Tomato)'},{id:'ka27',picture:'🔤',word:'ಠ',meaning:'ṭha',example:'ಠಾಣೆ (Station)'},{id:'ka28',picture:'🔤',word:'ಡ',meaning:'ḍa',example:'ಡಮರು (Drum)'},{id:'ka29',picture:'🔤',word:'ಢ',meaning:'ḍha',example:'ಢಕ್ಕಾ (Push)'},{id:'ka30',picture:'🔤',word:'ಣ',meaning:'ṇa',example:'ಗಣ (Group)'},{id:'ka31',picture:'🔤',word:'ತ',meaning:'ta',example:'ತಟ್ಟೆ (Plate)'},{id:'ka32',picture:'🔤',word:'ಥ',meaning:'tha',example:'ಥರ್ಮಸ್ (Thermos)'},{id:'ka33',picture:'🔤',word:'ದ',meaning:'da',example:'ದನ (Cattle)'},{id:'ka34',picture:'🔤',word:'ಧ',meaning:'dha',example:'ಧನುಸ್ಸು (Bow)'},{id:'ka35',picture:'🔤',word:'ನ',meaning:'na',example:'ನದಿ (River)'},{id:'ka36',picture:'🔤',word:'ಪ',meaning:'pa',example:'ಪಕ್ಷಿ (Bird)'},{id:'ka37',picture:'🔤',word:'ಫ',meaning:'pha',example:'ಫಲ (Fruit)'},{id:'ka38',picture:'🔤',word:'ಬ',meaning:'ba',example:'ಬಾಳೆ (Banana)'},{id:'ka39',picture:'🔤',word:'ಭ',meaning:'bha',example:'ಭಾರತ (India)'},{id:'ka40',picture:'🔤',word:'ಮ',meaning:'ma',example:'ಮನೆ (House)'},{id:'ka41',picture:'🔤',word:'ಯ',meaning:'ya',example:'ಯಂತ್ರ (Machine)'},{id:'ka42',picture:'🔤',word:'ರ',meaning:'ra',example:'ರಥ (Chariot)'},{id:'ka43',picture:'🔤',word:'ಲ',meaning:'la',example:'ಲತೆ (Creeper)'},{id:'ka44',picture:'🔤',word:'ವ',meaning:'va',example:'ವನ (Forest)'},{id:'ka45',picture:'🔤',word:'ಶ',meaning:'sha',example:'ಶಂಖ (Conch)'},{id:'ka46',picture:'🔤',word:'ಷ',meaning:'ṣha',example:'ಷಟ್ಕೋಣ (Hexagon)'},{id:'ka47',picture:'🔤',word:'ಸ',meaning:'sa',example:'ಸಿಂಹ (Lion)'},{id:'ka48',picture:'🔤',word:'ಹ',meaning:'ha',example:'ಹಸು (Cow)'},{id:'ka49',picture:'🔤',word:'ಳ',meaning:'ḷa',example:'ಹಣ್ಣು (Fruit — contains ಳ)'},{id:'ka50',picture:'🔤',word:'ಕ್ಷ',meaning:'ksha',example:'ಕ್ಷಮೆ (Forgiveness)'},{id:'ka51',picture:'🔤',word:'ಜ್ಞ',meaning:'jña',example:'ಜ್ಞಾನ (Knowledge)'}]},
{id:'numbers',title:'Numbers 1–100',icon:'೧೨೩',description:'Learn Kannada numbers from 1 to 100.',items:[{id:'kn1',picture:'೧',word:'ಒಂದು',meaning:'1 — One',example:'Kannada numeral: ೧'},{id:'kn2',picture:'೨',word:'ಎರಡು',meaning:'2 — Two',example:'Kannada numeral: ೨'},{id:'kn3',picture:'೩',word:'ಮೂರು',meaning:'3 — Three',example:'Kannada numeral: ೩'},{id:'kn4',picture:'೪',word:'ನಾಲ್ಕು',meaning:'4 — Four',example:'Kannada numeral: ೪'},{id:'kn5',picture:'೫',word:'ಐದು',meaning:'5 — Five',example:'Kannada numeral: ೫'},{id:'kn6',picture:'೬',word:'ಆರು',meaning:'6 — Six',example:'Kannada numeral: ೬'},{id:'kn7',picture:'೭',word:'ಏಳು',meaning:'7 — Seven',example:'Kannada numeral: ೭'},{id:'kn8',picture:'೮',word:'ಎಂಟು',meaning:'8 — Eight',example:'Kannada numeral: ೮'},{id:'kn9',picture:'೯',word:'ಒಂಬತ್ತು',meaning:'9 — Nine',example:'Kannada numeral: ೯'},{id:'kn10',picture:'೧೦',word:'ಹತ್ತು',meaning:'10 — 10',example:'Kannada numeral: ೧೦'},{id:'kn11',picture:'೧೧',word:'ಹನ್ನೊಂದು',meaning:'11 — 11',example:'Kannada numeral: ೧೧'},{id:'kn12',picture:'೧೨',word:'ಹನ್ನೆರಡು',meaning:'12 — 12',example:'Kannada numeral: ೧೨'},{id:'kn13',picture:'೧೩',word:'ಹದಿಮೂರು',meaning:'13 — 13',example:'Kannada numeral: ೧೩'},{id:'kn14',picture:'೧೪',word:'ಹದಿನಾಲ್ಕು',meaning:'14 — 14',example:'Kannada numeral: ೧೪'},{id:'kn15',picture:'೧೫',word:'ಹದಿನೈದು',meaning:'15 — 15',example:'Kannada numeral: ೧೫'},{id:'kn16',picture:'೧೬',word:'ಹದಿನಾರು',meaning:'16 — 16',example:'Kannada numeral: ೧೬'},{id:'kn17',picture:'೧೭',word:'ಹದಿನೇಳು',meaning:'17 — 17',example:'Kannada numeral: ೧೭'},{id:'kn18',picture:'೧೮',word:'ಹದಿನೆಂಟು',meaning:'18 — 18',example:'Kannada numeral: ೧೮'},{id:'kn19',picture:'೧೯',word:'ಹತ್ತೊಂಬತ್ತು',meaning:'19 — 19',example:'Kannada numeral: ೧೯'},{id:'kn20',picture:'೨೦',word:'ಇಪ್ಪತ್ತು',meaning:'20 — 20',example:'Kannada numeral: ೨೦'},{id:'kn21',picture:'೨೧',word:'ಇಪ್ಪತ್ತಒಂದು',meaning:'21 — 21',example:'Kannada numeral: ೨೧'},{id:'kn22',picture:'೨೨',word:'ಇಪ್ಪತ್ತಎರಡು',meaning:'22 — 22',example:'Kannada numeral: ೨೨'},{id:'kn23',picture:'೨೩',word:'ಇಪ್ಪತ್ತಮೂರು',meaning:'23 — 23',example:'Kannada numeral: ೨೩'},{id:'kn24',picture:'೨೪',word:'ಇಪ್ಪತ್ತನಾಲ್ಕು',meaning:'24 — 24',example:'Kannada numeral: ೨೪'},{id:'kn25',picture:'೨೫',word:'ಇಪ್ಪತ್ತಐದು',meaning:'25 — 25',example:'Kannada numeral: ೨೫'},{id:'kn26',picture:'೨೬',word:'ಇಪ್ಪತ್ತಆರು',meaning:'26 — 26',example:'Kannada numeral: ೨೬'},{id:'kn27',picture:'೨೭',word:'ಇಪ್ಪತ್ತಏಳು',meaning:'27 — 27',example:'Kannada numeral: ೨೭'},{id:'kn28',picture:'೨೮',word:'ಇಪ್ಪತ್ತಎಂಟು',meaning:'28 — 28',example:'Kannada numeral: ೨೮'},{id:'kn29',picture:'೨೯',word:'ಇಪ್ಪತ್ತಒಂಬತ್ತು',meaning:'29 — 29',example:'Kannada numeral: ೨೯'},{id:'kn30',picture:'೩೦',word:'ಮೂವತ್ತು',meaning:'30 — 30',example:'Kannada numeral: ೩೦'},{id:'kn31',picture:'೩೧',word:'ಮೂವತ್ತಒಂದು',meaning:'31 — 31',example:'Kannada numeral: ೩೧'},{id:'kn32',picture:'೩೨',word:'ಮೂವತ್ತಎರಡು',meaning:'32 — 32',example:'Kannada numeral: ೩೨'},{id:'kn33',picture:'೩೩',word:'ಮೂವತ್ತಮೂರು',meaning:'33 — 33',example:'Kannada numeral: ೩೩'},{id:'kn34',picture:'೩೪',word:'ಮೂವತ್ತನಾಲ್ಕು',meaning:'34 — 34',example:'Kannada numeral: ೩೪'},{id:'kn35',picture:'೩೫',word:'ಮೂವತ್ತಐದು',meaning:'35 — 35',example:'Kannada numeral: ೩೫'},{id:'kn36',picture:'೩೬',word:'ಮೂವತ್ತಆರು',meaning:'36 — 36',example:'Kannada numeral: ೩೬'},{id:'kn37',picture:'೩೭',word:'ಮೂವತ್ತಏಳು',meaning:'37 — 37',example:'Kannada numeral: ೩೭'},{id:'kn38',picture:'೩೮',word:'ಮೂವತ್ತಎಂಟು',meaning:'38 — 38',example:'Kannada numeral: ೩೮'},{id:'kn39',picture:'೩೯',word:'ಮೂವತ್ತಒಂಬತ್ತು',meaning:'39 — 39',example:'Kannada numeral: ೩೯'},{id:'kn40',picture:'೪೦',word:'ನಲವತ್ತು',meaning:'40 — 40',example:'Kannada numeral: ೪೦'},{id:'kn41',picture:'೪೧',word:'ನಲವತ್ತಒಂದು',meaning:'41 — 41',example:'Kannada numeral: ೪೧'},{id:'kn42',picture:'೪೨',word:'ನಲವತ್ತಎರಡು',meaning:'42 — 42',example:'Kannada numeral: ೪೨'},{id:'kn43',picture:'೪೩',word:'ನಲವತ್ತಮೂರು',meaning:'43 — 43',example:'Kannada numeral: ೪೩'},{id:'kn44',picture:'೪೪',word:'ನಲವತ್ತನಾಲ್ಕು',meaning:'44 — 44',example:'Kannada numeral: ೪೪'},{id:'kn45',picture:'೪೫',word:'ನಲವತ್ತಐದು',meaning:'45 — 45',example:'Kannada numeral: ೪೫'},{id:'kn46',picture:'೪೬',word:'ನಲವತ್ತಆರು',meaning:'46 — 46',example:'Kannada numeral: ೪೬'},{id:'kn47',picture:'೪೭',word:'ನಲವತ್ತಏಳು',meaning:'47 — 47',example:'Kannada numeral: ೪೭'},{id:'kn48',picture:'೪೮',word:'ನಲವತ್ತಎಂಟು',meaning:'48 — 48',example:'Kannada numeral: ೪೮'},{id:'kn49',picture:'೪೯',word:'ನಲವತ್ತಒಂಬತ್ತು',meaning:'49 — 49',example:'Kannada numeral: ೪೯'},{id:'kn50',picture:'೫೦',word:'ಐವತ್ತು',meaning:'50 — 50',example:'Kannada numeral: ೫೦'},{id:'kn51',picture:'೫೧',word:'ಐವತ್ತಒಂದು',meaning:'51 — 51',example:'Kannada numeral: ೫೧'},{id:'kn52',picture:'೫೨',word:'ಐವತ್ತಎರಡು',meaning:'52 — 52',example:'Kannada numeral: ೫೨'},{id:'kn53',picture:'೫೩',word:'ಐವತ್ತಮೂರು',meaning:'53 — 53',example:'Kannada numeral: ೫೩'},{id:'kn54',picture:'೫೪',word:'ಐವತ್ತನಾಲ್ಕು',meaning:'54 — 54',example:'Kannada numeral: ೫೪'},{id:'kn55',picture:'೫೫',word:'ಐವತ್ತಐದು',meaning:'55 — 55',example:'Kannada numeral: ೫೫'},{id:'kn56',picture:'೫೬',word:'ಐವತ್ತಆರು',meaning:'56 — 56',example:'Kannada numeral: ೫೬'},{id:'kn57',picture:'೫೭',word:'ಐವತ್ತಏಳು',meaning:'57 — 57',example:'Kannada numeral: ೫೭'},{id:'kn58',picture:'೫೮',word:'ಐವತ್ತಎಂಟು',meaning:'58 — 58',example:'Kannada numeral: ೫೮'},{id:'kn59',picture:'೫೯',word:'ಐವತ್ತಒಂಬತ್ತು',meaning:'59 — 59',example:'Kannada numeral: ೫೯'},{id:'kn60',picture:'೬೦',word:'ಅರವತ್ತು',meaning:'60 — 60',example:'Kannada numeral: ೬೦'},{id:'kn61',picture:'೬೧',word:'ಅರವತ್ತಒಂದು',meaning:'61 — 61',example:'Kannada numeral: ೬೧'},{id:'kn62',picture:'೬೨',word:'ಅರವತ್ತಎರಡು',meaning:'62 — 62',example:'Kannada numeral: ೬೨'},{id:'kn63',picture:'೬೩',word:'ಅರವತ್ತಮೂರು',meaning:'63 — 63',example:'Kannada numeral: ೬೩'},{id:'kn64',picture:'೬೪',word:'ಅರವತ್ತನಾಲ್ಕು',meaning:'64 — 64',example:'Kannada numeral: ೬೪'},{id:'kn65',picture:'೬೫',word:'ಅರವತ್ತಐದು',meaning:'65 — 65',example:'Kannada numeral: ೬೫'},{id:'kn66',picture:'೬೬',word:'ಅರವತ್ತಆರು',meaning:'66 — 66',example:'Kannada numeral: ೬೬'},{id:'kn67',picture:'೬೭',word:'ಅರವತ್ತಏಳು',meaning:'67 — 67',example:'Kannada numeral: ೬೭'},{id:'kn68',picture:'೬೮',word:'ಅರವತ್ತಎಂಟು',meaning:'68 — 68',example:'Kannada numeral: ೬೮'},{id:'kn69',picture:'೬೯',word:'ಅರವತ್ತಒಂಬತ್ತು',meaning:'69 — 69',example:'Kannada numeral: ೬೯'},{id:'kn70',picture:'೭೦',word:'ಎಪ್ಪತ್ತು',meaning:'70 — 70',example:'Kannada numeral: ೭೦'},{id:'kn71',picture:'೭೧',word:'ಎಪ್ಪತ್ತಒಂದು',meaning:'71 — 71',example:'Kannada numeral: ೭೧'},{id:'kn72',picture:'೭೨',word:'ಎಪ್ಪತ್ತಎರಡು',meaning:'72 — 72',example:'Kannada numeral: ೭೨'},{id:'kn73',picture:'೭೩',word:'ಎಪ್ಪತ್ತಮೂರು',meaning:'73 — 73',example:'Kannada numeral: ೭೩'},{id:'kn74',picture:'೭೪',word:'ಎಪ್ಪತ್ತನಾಲ್ಕು',meaning:'74 — 74',example:'Kannada numeral: ೭೪'},{id:'kn75',picture:'೭೫',word:'ಎಪ್ಪತ್ತಐದು',meaning:'75 — 75',example:'Kannada numeral: ೭೫'},{id:'kn76',picture:'೭೬',word:'ಎಪ್ಪತ್ತಆರು',meaning:'76 — 76',example:'Kannada numeral: ೭೬'},{id:'kn77',picture:'೭೭',word:'ಎಪ್ಪತ್ತಏಳು',meaning:'77 — 77',example:'Kannada numeral: ೭೭'},{id:'kn78',picture:'೭೮',word:'ಎಪ್ಪತ್ತಎಂಟು',meaning:'78 — 78',example:'Kannada numeral: ೭೮'},{id:'kn79',picture:'೭೯',word:'ಎಪ್ಪತ್ತಒಂಬತ್ತು',meaning:'79 — 79',example:'Kannada numeral: ೭೯'},{id:'kn80',picture:'೮೦',word:'ಎಂಬತ್ತು',meaning:'80 — 80',example:'Kannada numeral: ೮೦'},{id:'kn81',picture:'೮೧',word:'ಎಂಬತ್ತಒಂದು',meaning:'81 — 81',example:'Kannada numeral: ೮೧'},{id:'kn82',picture:'೮೨',word:'ಎಂಬತ್ತಎರಡು',meaning:'82 — 82',example:'Kannada numeral: ೮೨'},{id:'kn83',picture:'೮೩',word:'ಎಂಬತ್ತಮೂರು',meaning:'83 — 83',example:'Kannada numeral: ೮೩'},{id:'kn84',picture:'೮೪',word:'ಎಂಬತ್ತನಾಲ್ಕು',meaning:'84 — 84',example:'Kannada numeral: ೮೪'},{id:'kn85',picture:'೮೫',word:'ಎಂಬತ್ತಐದು',meaning:'85 — 85',example:'Kannada numeral: ೮೫'},{id:'kn86',picture:'೮೬',word:'ಎಂಬತ್ತಆರು',meaning:'86 — 86',example:'Kannada numeral: ೮೬'},{id:'kn87',picture:'೮೭',word:'ಎಂಬತ್ತಏಳು',meaning:'87 — 87',example:'Kannada numeral: ೮೭'},{id:'kn88',picture:'೮೮',word:'ಎಂಬತ್ತಎಂಟು',meaning:'88 — 88',example:'Kannada numeral: ೮೮'},{id:'kn89',picture:'೮೯',word:'ಎಂಬತ್ತಒಂಬತ್ತು',meaning:'89 — 89',example:'Kannada numeral: ೮೯'},{id:'kn90',picture:'೯೦',word:'ತೊಂಬತ್ತು',meaning:'90 — 90',example:'Kannada numeral: ೯೦'},{id:'kn91',picture:'೯೧',word:'ತೊಂಬತ್ತಒಂದು',meaning:'91 — 91',example:'Kannada numeral: ೯೧'},{id:'kn92',picture:'೯೨',word:'ತೊಂಬತ್ತಎರಡು',meaning:'92 — 92',example:'Kannada numeral: ೯೨'},{id:'kn93',picture:'೯೩',word:'ತೊಂಬತ್ತಮೂರು',meaning:'93 — 93',example:'Kannada numeral: ೯೩'},{id:'kn94',picture:'೯೪',word:'ತೊಂಬತ್ತನಾಲ್ಕು',meaning:'94 — 94',example:'Kannada numeral: ೯೪'},{id:'kn95',picture:'೯೫',word:'ತೊಂಬತ್ತಐದು',meaning:'95 — 95',example:'Kannada numeral: ೯೫'},{id:'kn96',picture:'೯೬',word:'ತೊಂಬತ್ತಆರು',meaning:'96 — 96',example:'Kannada numeral: ೯೬'},{id:'kn97',picture:'೯೭',word:'ತೊಂಬತ್ತಏಳು',meaning:'97 — 97',example:'Kannada numeral: ೯೭'},{id:'kn98',picture:'೯೮',word:'ತೊಂಬತ್ತಎಂಟು',meaning:'98 — 98',example:'Kannada numeral: ೯೮'},{id:'kn99',picture:'೯೯',word:'ತೊಂಬತ್ತಒಂಬತ್ತು',meaning:'99 — 99',example:'Kannada numeral: ೯೯'},{id:'kn100',picture:'೧೦೦',word:'ನೂರು',meaning:'100 — 100',example:'Kannada numeral: ೧೦೦'}]},
{id:'animals',title:'100 Animals',icon:'🐘',description:'Learn nearly 100 animal names in Kannada and English.',items:[{id:'kan1',picture:'🐘',word:'ಆನೆ',meaning:'Elephant',example:'ಆನೆ — Elephant'},{id:'kan2',picture:'🐶',word:'ನಾಯಿ',meaning:'Dog',example:'ನಾಯಿ — Dog'},{id:'kan3',picture:'🐱',word:'ಬೆಕ್ಕು',meaning:'Cat',example:'ಬೆಕ್ಕು — Cat'},{id:'kan4',picture:'🐄',word:'ಹಸು',meaning:'Cow',example:'ಹಸು — Cow'},{id:'kan5',picture:'🐃',word:'ಎಮ್ಮೆ',meaning:'Buffalo',example:'ಎಮ್ಮೆ — Buffalo'},{id:'kan6',picture:'🐂',word:'ಎತ್ತು',meaning:'Ox',example:'ಎತ್ತು — Ox'},{id:'kan7',picture:'🐎',word:'ಕುದುರೆ',meaning:'Horse',example:'ಕುದುರೆ — Horse'},{id:'kan8',picture:'🫏',word:'ಕತ್ತೆ',meaning:'Donkey',example:'ಕತ್ತೆ — Donkey'},{id:'kan9',picture:'🐐',word:'ಮೇಕೆ',meaning:'Goat',example:'ಮೇಕೆ — Goat'},{id:'kan10',picture:'🐑',word:'ಕುರಿ',meaning:'Sheep',example:'ಕುರಿ — Sheep'},{id:'kan11',picture:'🐖',word:'ಹಂದಿ',meaning:'Pig',example:'ಹಂದಿ — Pig'},{id:'kan12',picture:'🐇',word:'ಮೊಲ',meaning:'Rabbit',example:'ಮೊಲ — Rabbit'},{id:'kan13',picture:'🐁',word:'ಇಲಿ',meaning:'Mouse',example:'ಇಲಿ — Mouse'},{id:'kan14',picture:'🐀',word:'ಹೆಗ್ಗಣ',meaning:'Rat',example:'ಹೆಗ್ಗಣ — Rat'},{id:'kan15',picture:'🐿️',word:'ಅಳಿಲು',meaning:'Squirrel',example:'ಅಳಿಲು — Squirrel'},{id:'kan16',picture:'🦌',word:'ಜಿಂಕೆ',meaning:'Deer',example:'ಜಿಂಕೆ — Deer'},{id:'kan17',picture:'🦁',word:'ಸಿಂಹ',meaning:'Lion',example:'ಸಿಂಹ — Lion'},{id:'kan18',picture:'🐯',word:'ಹುಲಿ',meaning:'Tiger',example:'ಹುಲಿ — Tiger'},{id:'kan19',picture:'🐆',word:'ಚಿರತೆ',meaning:'Leopard',example:'ಚಿರತೆ — Leopard'},{id:'kan20',picture:'🐆',word:'ಕರಿಚಿರತೆ',meaning:'Panther',example:'ಕರಿಚಿರತೆ — Panther'},{id:'kan21',picture:'🐻',word:'ಕರಡಿ',meaning:'Bear',example:'ಕರಡಿ — Bear'},{id:'kan22',picture:'🐼',word:'ಪಾಂಡಾ',meaning:'Panda',example:'ಪಾಂಡಾ — Panda'},{id:'kan23',picture:'🐨',word:'ಕೋಆಲಾ',meaning:'Koala',example:'ಕೋಆಲಾ — Koala'},{id:'kan24',picture:'🐒',word:'ಕೋತಿ',meaning:'Monkey',example:'ಕೋತಿ — Monkey'},{id:'kan25',picture:'🦍',word:'ಗೊರಿಲ್ಲಾ',meaning:'Gorilla',example:'ಗೊರಿಲ್ಲಾ — Gorilla'},{id:'kan26',picture:'🦧',word:'ಒರಾಂಗ್‌ಉಟಾನ್',meaning:'Orangutan',example:'ಒರಾಂಗ್‌ಉಟಾನ್ — Orangutan'},{id:'kan27',picture:'🦊',word:'ನರಿ',meaning:'Fox',example:'ನರಿ — Fox'},{id:'kan28',picture:'🐺',word:'ತೋಳ',meaning:'Wolf',example:'ತೋಳ — Wolf'},{id:'kan29',picture:'🐕',word:'ಕಾಡುನಾಯಿ',meaning:'Wild dog',example:'ಕಾಡುನಾಯಿ — Wild dog'},{id:'kan30',picture:'🐕',word:'ನರಿಗಾಯಿ',meaning:'Jackal',example:'ನರಿಗಾಯಿ — Jackal'},{id:'kan31',picture:'🦝',word:'ರಾಕೂನ್',meaning:'Raccoon',example:'ರಾಕೂನ್ — Raccoon'},{id:'kan32',picture:'🦨',word:'ಸ್ಕಂಕ್',meaning:'Skunk',example:'ಸ್ಕಂಕ್ — Skunk'},{id:'kan33',picture:'🦡',word:'ಬ್ಯಾಡ್ಜರ್',meaning:'Badger',example:'ಬ್ಯಾಡ್ಜರ್ — Badger'},{id:'kan34',picture:'🦦',word:'ನೀರುನಾಯಿ',meaning:'Otter',example:'ನೀರುನಾಯಿ — Otter'},{id:'kan35',picture:'🦫',word:'ಬೀವರ್',meaning:'Beaver',example:'ಬೀವರ್ — Beaver'},{id:'kan36',picture:'🦥',word:'ಸೋಮಾರಿ ಕರಡಿ',meaning:'Sloth',example:'ಸೋಮಾರಿ ಕರಡಿ — Sloth'},{id:'kan37',picture:'🦔',word:'ಮುಳ್ಳುಹಂದಿ',meaning:'Hedgehog',example:'ಮುಳ್ಳುಹಂದಿ — Hedgehog'},{id:'kan38',picture:'🦔',word:'ಮುಳ್ಳೆಲಿ',meaning:'Porcupine',example:'ಮುಳ್ಳೆಲಿ — Porcupine'},{id:'kan39',picture:'🦛',word:'ನೀರಾನೆ',meaning:'Hippopotamus',example:'ನೀರಾನೆ — Hippopotamus'},{id:'kan40',picture:'🦏',word:'ಖಡ್ಗಮೃಗ',meaning:'Rhinoceros',example:'ಖಡ್ಗಮೃಗ — Rhinoceros'},{id:'kan41',picture:'🦒',word:'ಜಿರಾಫೆ',meaning:'Giraffe',example:'ಜಿರಾಫೆ — Giraffe'},{id:'kan42',picture:'🦓',word:'ಜೀಬ್ರಾ',meaning:'Zebra',example:'ಜೀಬ್ರಾ — Zebra'},{id:'kan43',picture:'🐪',word:'ಒಂಟೆ',meaning:'Camel',example:'ಒಂಟೆ — Camel'},{id:'kan44',picture:'🐫',word:'ಎರಡು ಕುಬ್ಬಿನ ಒಂಟೆ',meaning:'Bactrian camel',example:'ಎರಡು ಕುಬ್ಬಿನ ಒಂಟೆ — Bactrian camel'},{id:'kan45',picture:'🦙',word:'ಲಾಮಾ',meaning:'Llama',example:'ಲಾಮಾ — Llama'},{id:'kan46',picture:'🦘',word:'ಕಂಗಾರು',meaning:'Kangaroo',example:'ಕಂಗಾರು — Kangaroo'},{id:'kan47',picture:'🐊',word:'ಮೊಸಳೆ',meaning:'Crocodile',example:'ಮೊಸಳೆ — Crocodile'},{id:'kan48',picture:'🐊',word:'ಘರಿಯಾಲ್',meaning:'Gharial',example:'ಘರಿಯಾಲ್ — Gharial'},{id:'kan49',picture:'🐢',word:'ಆಮೆ',meaning:'Turtle',example:'ಆಮೆ — Turtle'},{id:'kan50',picture:'🐢',word:'ನೆಲಆಮೆ',meaning:'Tortoise',example:'ನೆಲಆಮೆ — Tortoise'},{id:'kan51',picture:'🦎',word:'ಹಲ್ಲಿ',meaning:'Lizard',example:'ಹಲ್ಲಿ — Lizard'},{id:'kan52',picture:'🦎',word:'ಗೋಸುಂಬೆ',meaning:'Chameleon',example:'ಗೋಸುಂಬೆ — Chameleon'},{id:'kan53',picture:'🐍',word:'ಹಾವು',meaning:'Snake',example:'ಹಾವು — Snake'},{id:'kan54',picture:'🐍',word:'ನಾಗರಹಾವು',meaning:'Cobra',example:'ನಾಗರಹಾವು — Cobra'},{id:'kan55',picture:'🐍',word:'ಹೆಬ್ಬಾವು',meaning:'Python',example:'ಹೆಬ್ಬಾವು — Python'},{id:'kan56',picture:'🐍',word:'ಕಟ್ಟುಹಾವು',meaning:'Krait',example:'ಕಟ್ಟುಹಾವು — Krait'},{id:'kan57',picture:'🐍',word:'ಮಂಡಲಹಾವು',meaning:'Viper',example:'ಮಂಡಲಹಾವು — Viper'},{id:'kan58',picture:'🐸',word:'ಕಪ್ಪೆ',meaning:'Frog',example:'ಕಪ್ಪೆ — Frog'},{id:'kan59',picture:'🐸',word:'ಹೆಗ್ಗಪ್ಪೆ',meaning:'Toad',example:'ಹೆಗ್ಗಪ್ಪೆ — Toad'},{id:'kan60',picture:'🐟',word:'ಮೀನು',meaning:'Fish',example:'ಮೀನು — Fish'},{id:'kan61',picture:'🐠',word:'ಬಣ್ಣದ ಮೀನು',meaning:'Tropical fish',example:'ಬಣ್ಣದ ಮೀನು — Tropical fish'},{id:'kan62',picture:'🐡',word:'ಉಬ್ಬುಮೀನು',meaning:'Pufferfish',example:'ಉಬ್ಬುಮೀನು — Pufferfish'},{id:'kan63',picture:'🦈',word:'ಸುರಮೀನು',meaning:'Shark',example:'ಸುರಮೀನು — Shark'},{id:'kan64',picture:'🐬',word:'ಡಾಲ್ಫಿನ್',meaning:'Dolphin',example:'ಡಾಲ್ಫಿನ್ — Dolphin'},{id:'kan65',picture:'🐋',word:'ತಿಮಿಂಗಿಲ',meaning:'Whale',example:'ತಿಮಿಂಗಿಲ — Whale'},{id:'kan66',picture:'🦭',word:'ಸೀಲ್',meaning:'Seal',example:'ಸೀಲ್ — Seal'},{id:'kan67',picture:'🦭',word:'ವಾಲ್ರಸ್',meaning:'Walrus',example:'ವಾಲ್ರಸ್ — Walrus'},{id:'kan68',picture:'🐙',word:'ಆಕ್ಟೋಪಸ್',meaning:'Octopus',example:'ಆಕ್ಟೋಪಸ್ — Octopus'},{id:'kan69',picture:'🦑',word:'ಸ್ಕ್ವಿಡ್',meaning:'Squid',example:'ಸ್ಕ್ವಿಡ್ — Squid'},{id:'kan70',picture:'🦀',word:'ಏಡಿ',meaning:'Crab',example:'ಏಡಿ — Crab'},{id:'kan71',picture:'🦞',word:'ಲಾಬ್ಸ್ಟರ್',meaning:'Lobster',example:'ಲಾಬ್ಸ್ಟರ್ — Lobster'},{id:'kan72',picture:'🦐',word:'ಸೀಗಡಿ',meaning:'Prawn',example:'ಸೀಗಡಿ — Prawn'},{id:'kan73',picture:'🦪',word:'ಸಿಪ್ಪೆಮೀನು',meaning:'Oyster',example:'ಸಿಪ್ಪೆಮೀನು — Oyster'},{id:'kan74',picture:'🐚',word:'ಶಂಖ',meaning:'Conch',example:'ಶಂಖ — Conch'},{id:'kan75',picture:'🪼',word:'ಜೆಲ್ಲಿ ಮೀನು',meaning:'Jellyfish',example:'ಜೆಲ್ಲಿ ಮೀನು — Jellyfish'},{id:'kan76',picture:'⭐',word:'ನಕ್ಷತ್ರಮೀನು',meaning:'Starfish',example:'ನಕ್ಷತ್ರಮೀನು — Starfish'},{id:'kan77',picture:'🐌',word:'ಬಸವನಹುಳು',meaning:'Snail',example:'ಬಸವನಹುಳು — Snail'},{id:'kan78',picture:'🪱',word:'ಎರೆಹುಳು',meaning:'Earthworm',example:'ಎರೆಹುಳು — Earthworm'},{id:'kan79',picture:'🐜',word:'ಇರುವೆ',meaning:'Ant',example:'ಇರುವೆ — Ant'},{id:'kan80',picture:'🐝',word:'ಜೇನುನೊಣ',meaning:'Honeybee',example:'ಜೇನುನೊಣ — Honeybee'},{id:'kan81',picture:'🪰',word:'ನೊಣ',meaning:'Fly',example:'ನೊಣ — Fly'},{id:'kan82',picture:'🦟',word:'ಸೊಳ್ಳೆ',meaning:'Mosquito',example:'ಸೊಳ್ಳೆ — Mosquito'},{id:'kan83',picture:'🦋',word:'ಚಿಟ್ಟೆ',meaning:'Butterfly',example:'ಚಿಟ್ಟೆ — Butterfly'},{id:'kan84',picture:'🐛',word:'ಹುಳು',meaning:'Caterpillar',example:'ಹುಳು — Caterpillar'},{id:'kan85',picture:'🪲',word:'ಜೀರುಂಡೆ',meaning:'Beetle',example:'ಜೀರುಂಡೆ — Beetle'},{id:'kan86',picture:'🪳',word:'ಜಿರಳೆ',meaning:'Cockroach',example:'ಜಿರಳೆ — Cockroach'},{id:'kan87',picture:'🦗',word:'ಮಿಡತೆ',meaning:'Grasshopper',example:'ಮಿಡತೆ — Grasshopper'},{id:'kan88',picture:'🦗',word:'ಜೇಡಮಿಡತೆ',meaning:'Cricket insect',example:'ಜೇಡಮಿಡತೆ — Cricket insect'},{id:'kan89',picture:'🕷️',word:'ಜೇಡ',meaning:'Spider',example:'ಜೇಡ — Spider'},{id:'kan90',picture:'🦂',word:'ಚೇಳು',meaning:'Scorpion',example:'ಚೇಳು — Scorpion'},{id:'kan91',picture:'🐛',word:'ರೇಷ್ಮೆಹುಳು',meaning:'Silkworm',example:'ರೇಷ್ಮೆಹುಳು — Silkworm'},{id:'kan92',picture:'🪱',word:'ಜಿಗಣೆ',meaning:'Leech',example:'ಜಿಗಣೆ — Leech'},{id:'kan93',picture:'🐦',word:'ಹಕ್ಕಿ',meaning:'Bird',example:'ಹಕ್ಕಿ — Bird'},{id:'kan94',picture:'🦜',word:'ಗಿಳಿ',meaning:'Parrot',example:'ಗಿಳಿ — Parrot'},{id:'kan95',picture:'🦚',word:'ನವಿಲು',meaning:'Peacock',example:'ನವಿಲು — Peacock'},{id:'kan96',picture:'🐓',word:'ಕೋಳಿ',meaning:'Chicken',example:'ಕೋಳಿ — Chicken'},{id:'kan97',picture:'🦆',word:'ಬಾತುಕೋಳಿ',meaning:'Duck',example:'ಬಾತುಕೋಳಿ — Duck'},{id:'kan98',picture:'🪿',word:'ಹಂಸಬಾತು',meaning:'Goose',example:'ಹಂಸಬಾತು — Goose'},{id:'kan99',picture:'🦢',word:'ಹಂಸ',meaning:'Swan',example:'ಹಂಸ — Swan'},{id:'kan100',picture:'🦅',word:'ಹದ್ದು',meaning:'Eagle',example:'ಹದ್ದು — Eagle'}]},
{id:'weekdays',title:'Weekdays',icon:'📅',description:'Learn all seven days of the week in Kannada.',items:[{id:'kwd1',picture:'☀️',word:'ಭಾನುವಾರ',meaning:'Sunday',example:'ಇಂದು ಭಾನುವಾರ. — Today is Sunday.'},{id:'kwd2',picture:'🌙',word:'ಸೋಮವಾರ',meaning:'Monday',example:'ಇಂದು ಸೋಮವಾರ. — Today is Monday.'},{id:'kwd3',picture:'🔥',word:'ಮಂಗಳವಾರ',meaning:'Tuesday',example:'ಇಂದು ಮಂಗಳವಾರ. — Today is Tuesday.'},{id:'kwd4',picture:'🪐',word:'ಬುಧವಾರ',meaning:'Wednesday',example:'ಇಂದು ಬುಧವಾರ. — Today is Wednesday.'},{id:'kwd5',picture:'📚',word:'ಗುರುವಾರ',meaning:'Thursday',example:'ಇಂದು ಗುರುವಾರ. — Today is Thursday.'},{id:'kwd6',picture:'🌸',word:'ಶುಕ್ರವಾರ',meaning:'Friday',example:'ಇಂದು ಶುಕ್ರವಾರ. — Today is Friday.'},{id:'kwd7',picture:'🪐',word:'ಶನಿವಾರ',meaning:'Saturday',example:'ಇಂದು ಶನಿವಾರ. — Today is Saturday.'}]},
{id:'months',title:'Months',icon:'🗓️',description:'Learn the 12 calendar months in Kannada.',items:[{id:'kmo1',picture:'❄️',word:'ಜನವರಿ',meaning:'January',example:'ಜನವರಿ — January'},{id:'kmo2',picture:'🌤️',word:'ಫೆಬ್ರವರಿ',meaning:'February',example:'ಫೆಬ್ರವರಿ — February'},{id:'kmo3',picture:'🌱',word:'ಮಾರ್ಚ್',meaning:'March',example:'ಮಾರ್ಚ್ — March'},{id:'kmo4',picture:'🌼',word:'ಏಪ್ರಿಲ್',meaning:'April',example:'ಏಪ್ರಿಲ್ — April'},{id:'kmo5',picture:'☀️',word:'ಮೇ',meaning:'May',example:'ಮೇ — May'},{id:'kmo6',picture:'🌧️',word:'ಜೂನ್',meaning:'June',example:'ಜೂನ್ — June'},{id:'kmo7',picture:'🌧️',word:'ಜುಲೈ',meaning:'July',example:'ಜುಲೈ — July'},{id:'kmo8',picture:'🌾',word:'ಆಗಸ್ಟ್',meaning:'August',example:'ಆಗಸ್ಟ್ — August'},{id:'kmo9',picture:'🍃',word:'ಸೆಪ್ಟೆಂಬರ್',meaning:'September',example:'ಸೆಪ್ಟೆಂಬರ್ — September'},{id:'kmo10',picture:'🍂',word:'ಅಕ್ಟೋಬರ್',meaning:'October',example:'ಅಕ್ಟೋಬರ್ — October'},{id:'kmo11',picture:'🪔',word:'ನವೆಂಬರ್',meaning:'November',example:'ನವೆಂಬರ್ — November'},{id:'kmo12',picture:'🎄',word:'ಡಿಸೆಂಬರ್',meaning:'December',example:'ಡಿಸೆಂಬರ್ — December'}]},
{id:'daily-sentences',title:'Everyday Kannada',icon:'💬',description:'Practical day-to-day Kannada for greetings, home, school, shopping, travel and more.',items:[{id:'ks1',picture:'💬',word:'ನಮಸ್ಕಾರ.',meaning:'Hello.',example:'English: Hello.'},{id:'ks2',picture:'💬',word:'ಶುಭೋದಯ.',meaning:'Good morning.',example:'English: Good morning.'},{id:'ks3',picture:'💬',word:'ಶುಭ ಮಧ್ಯಾಹ್ನ.',meaning:'Good afternoon.',example:'English: Good afternoon.'},{id:'ks4',picture:'💬',word:'ಶುಭ ಸಂಜೆ.',meaning:'Good evening.',example:'English: Good evening.'},{id:'ks5',picture:'💬',word:'ಶುಭ ರಾತ್ರಿ.',meaning:'Good night.',example:'English: Good night.'},{id:'ks6',picture:'💬',word:'ನೀವು ಹೇಗಿದ್ದೀರಿ?',meaning:'How are you?',example:'English: How are you?'},{id:'ks7',picture:'💬',word:'ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ.',meaning:'I am fine.',example:'English: I am fine.'},{id:'ks8',picture:'💬',word:'ನಿಮ್ಮ ಹೆಸರು ಏನು?',meaning:'What is your name?',example:'English: What is your name?'},{id:'ks9',picture:'💬',word:'ನನ್ನ ಹೆಸರು ಪ್ರಣಬ್.',meaning:'My name is Pranab.',example:'English: My name is Pranab.'},{id:'ks10',picture:'💬',word:'ನಿಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ ಸಂತೋಷವಾಗಿದೆ.',meaning:'Nice to meet you.',example:'English: Nice to meet you.'},{id:'ks11',picture:'💬',word:'ದಯವಿಟ್ಟು.',meaning:'Please.',example:'English: Please.'},{id:'ks12',picture:'💬',word:'ಧನ್ಯವಾದಗಳು.',meaning:'Thank you.',example:'English: Thank you.'},{id:'ks13',picture:'💬',word:'ಪರವಾಗಿಲ್ಲ.',meaning:'You are welcome / It is okay.',example:'English: You are welcome / It is okay.'},{id:'ks14',picture:'💬',word:'ಕ್ಷಮಿಸಿ.',meaning:'Sorry / Excuse me.',example:'English: Sorry / Excuse me.'},{id:'ks15',picture:'💬',word:'ಹೌದು.',meaning:'Yes.',example:'English: Yes.'},{id:'ks16',picture:'💬',word:'ಇಲ್ಲ.',meaning:'No.',example:'English: No.'},{id:'ks17',picture:'💬',word:'ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ.',meaning:'I did not understand.',example:'English: I did not understand.'},{id:'ks18',picture:'💬',word:'ದಯವಿಟ್ಟು ಮತ್ತೆ ಹೇಳಿ.',meaning:'Please say it again.',example:'English: Please say it again.'},{id:'ks19',picture:'💬',word:'ಸ್ವಲ್ಪ ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ.',meaning:'Please speak slowly.',example:'English: Please speak slowly.'},{id:'ks20',picture:'💬',word:'ಇದು ಏನು?',meaning:'What is this?',example:'English: What is this?'},{id:'ks21',picture:'💬',word:'ಅದು ಏನು?',meaning:'What is that?',example:'English: What is that?'},{id:'ks22',picture:'💬',word:'ಇದು ನನ್ನ ಪುಸ್ತಕ.',meaning:'This is my book.',example:'English: This is my book.'},{id:'ks23',picture:'💬',word:'ನನಗೆ ನೀರು ಬೇಕು.',meaning:'I need water.',example:'English: I need water.'},{id:'ks24',picture:'💬',word:'ನನಗೆ ಹಸಿವು ಆಗಿದೆ.',meaning:'I am hungry.',example:'English: I am hungry.'},{id:'ks25',picture:'💬',word:'ನನಗೆ ದಾಹವಾಗಿದೆ.',meaning:'I am thirsty.',example:'English: I am thirsty.'},{id:'ks26',picture:'💬',word:'ನಾನು ಮನೆಗೆ ಹೋಗುತ್ತೇನೆ.',meaning:'I am going home.',example:'English: I am going home.'},{id:'ks27',picture:'💬',word:'ನಾನು ಶಾಲೆಗೆ ಹೋಗುತ್ತೇನೆ.',meaning:'I am going to school.',example:'English: I am going to school.'},{id:'ks28',picture:'💬',word:'ನಾನು ಕೆಲಸಕ್ಕೆ ಹೋಗುತ್ತೇನೆ.',meaning:'I am going to work.',example:'English: I am going to work.'},{id:'ks29',picture:'💬',word:'ನಾನು ಓದುತ್ತಿದ್ದೇನೆ.',meaning:'I am studying.',example:'English: I am studying.'},{id:'ks30',picture:'💬',word:'ನಾನು ಆಟವಾಡುತ್ತಿದ್ದೇನೆ.',meaning:'I am playing.',example:'English: I am playing.'},{id:'ks31',picture:'💬',word:'ನಾನು ಊಟ ಮಾಡುತ್ತಿದ್ದೇನೆ.',meaning:'I am eating.',example:'English: I am eating.'},{id:'ks32',picture:'💬',word:'ನಾನು ನೀರು ಕುಡಿಯುತ್ತಿದ್ದೇನೆ.',meaning:'I am drinking water.',example:'English: I am drinking water.'},{id:'ks33',picture:'💬',word:'ಬಾಗಿಲು ತೆರೆ.',meaning:'Open the door.',example:'English: Open the door.'},{id:'ks34',picture:'💬',word:'ಬಾಗಿಲು ಮುಚ್ಚಿ.',meaning:'Close the door.',example:'English: Close the door.'},{id:'ks35',picture:'💬',word:'ಇಲ್ಲಿ ಬನ್ನಿ.',meaning:'Come here.',example:'English: Come here.'},{id:'ks36',picture:'💬',word:'ಅಲ್ಲಿ ಹೋಗಿ.',meaning:'Go there.',example:'English: Go there.'},{id:'ks37',picture:'💬',word:'ಕುಳಿತುಕೊಳ್ಳಿ.',meaning:'Please sit down.',example:'English: Please sit down.'},{id:'ks38',picture:'💬',word:'ಎದ್ದು ನಿಲ್ಲಿ.',meaning:'Please stand up.',example:'English: Please stand up.'},{id:'ks39',picture:'💬',word:'ನನಗೆ ಸಹಾಯ ಮಾಡಿ.',meaning:'Please help me.',example:'English: Please help me.'},{id:'ks40',picture:'💬',word:'ಚಿಂತಿಸಬೇಡಿ.',meaning:'Do not worry.',example:'English: Do not worry.'},{id:'ks41',picture:'💬',word:'ಜಾಗ್ರತೆಯಿಂದಿರಿ.',meaning:'Be careful.',example:'English: Be careful.'},{id:'ks42',picture:'💬',word:'ಬೇಗ ಬನ್ನಿ.',meaning:'Come quickly.',example:'English: Come quickly.'},{id:'ks43',picture:'💬',word:'ಒಂದು ನಿಮಿಷ ಕಾಯಿರಿ.',meaning:'Wait for one minute.',example:'English: Wait for one minute.'},{id:'ks44',picture:'💬',word:'ಸಮಯ ಎಷ್ಟು?',meaning:'What time is it?',example:'English: What time is it?'},{id:'ks45',picture:'💬',word:'ಇಂದು ಯಾವ ದಿನ?',meaning:'What day is today?',example:'English: What day is today?'},{id:'ks46',picture:'💬',word:'ಇಂದು ಹವಾಮಾನ ಚೆನ್ನಾಗಿದೆ.',meaning:'The weather is nice today.',example:'English: The weather is nice today.'},{id:'ks47',picture:'💬',word:'ನನಗೆ ಕನ್ನಡ ಇಷ್ಟ.',meaning:'I like Kannada.',example:'English: I like Kannada.'},{id:'ks48',picture:'💬',word:'ನಾನು ಕನ್ನಡ ಕಲಿಯುತ್ತಿದ್ದೇನೆ.',meaning:'I am learning Kannada.',example:'English: I am learning Kannada.'},{id:'ks49',picture:'💬',word:'ಇದು ತುಂಬಾ ಚೆನ್ನಾಗಿದೆ.',meaning:'This is very good.',example:'English: This is very good.'},{id:'ks50',picture:'💬',word:'ಮತ್ತೆ ಭೇಟಿಯಾಗೋಣ.',meaning:'See you again.',example:'English: See you again.'},{id:'ks51',picture:'💬',word:'ನಾಳೆ ಭೇಟಿಯಾಗೋಣ.',meaning:'See you tomorrow.',example:'English: See you tomorrow.'},{id:'ks52',picture:'💬',word:'ನಾನು ನಂತರ ಕರೆ ಮಾಡುತ್ತೇನೆ.',meaning:'I will call later.',example:'English: I will call later.'},{id:'ks53',picture:'💬',word:'ನಿಮ್ಮ ಮನೆ ಎಲ್ಲಿದೆ?',meaning:'Where is your house?',example:'English: Where is your house?'},{id:'ks54',picture:'💬',word:'ಶೌಚಾಲಯ ಎಲ್ಲಿದೆ?',meaning:'Where is the restroom?',example:'English: Where is the restroom?'},{id:'ks55',picture:'💬',word:'ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?',meaning:'Where is the bus stop?',example:'English: Where is the bus stop?'},{id:'ks56',picture:'💬',word:'ಇದಕ್ಕೆ ಎಷ್ಟು ಬೆಲೆ?',meaning:'How much does this cost?',example:'English: How much does this cost?'},{id:'ks57',picture:'💬',word:'ನನಗೆ ಇದು ಬೇಕು.',meaning:'I want this.',example:'English: I want this.'},{id:'ks58',picture:'💬',word:'ನನಗೆ ಇದು ಬೇಡ.',meaning:'I do not want this.',example:'English: I do not want this.'},{id:'ks59',picture:'💬',word:'ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡಿ.',meaning:'Please reduce the price.',example:'English: Please reduce the price.'},{id:'ks60',picture:'💬',word:'ನಾನು ಸಿದ್ಧನಿದ್ದೇನೆ.',meaning:'I am ready.',example:'English: I am ready.'},{id:'ks61',picture:'💬',word:'ನಾವು ಹೋಗೋಣ.',meaning:'Let us go.',example:'English: Let us go.'},{id:'ks62',picture:'💬',word:'ನಾನು ಬರುತ್ತೇನೆ.',meaning:'I will come.',example:'English: I will come.'},{id:'ks63',picture:'💬',word:'ನಾನು ಹೋಗುತ್ತೇನೆ.',meaning:'I will go.',example:'English: I will go.'},{id:'ks64',picture:'💬',word:'ನೀವು ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತಿದ್ದೀರಿ?',meaning:'Where are you going?',example:'English: Where are you going?'},{id:'ks65',picture:'💬',word:'ನಾನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ವಾಸಿಸುತ್ತೇನೆ.',meaning:'I live in Bengaluru.',example:'English: I live in Bengaluru.'},{id:'ks66',picture:'💬',word:'ನನ್ನ ಕುಟುಂಬವನ್ನು ನಾನು ಪ್ರೀತಿಸುತ್ತೇನೆ.',meaning:'I love my family.',example:'English: I love my family.'},{id:'ks67',picture:'💬',word:'ನನಗೆ ಒಂದು ಸಹೋದರ ಇದ್ದಾನೆ.',meaning:'I have a brother.',example:'English: I have a brother.'},{id:'ks68',picture:'💬',word:'ನನಗೆ ಒಂದು ಸಹೋದರಿ ಇದ್ದಾಳೆ.',meaning:'I have a sister.',example:'English: I have a sister.'},{id:'ks69',picture:'💬',word:'ಇದು ನನ್ನ ಸ್ನೇಹಿತ.',meaning:'This is my friend.',example:'English: This is my friend.'},{id:'ks70',picture:'💬',word:'ಮಕ್ಕಳು ಶಾಲೆಯಲ್ಲಿ ಇದ್ದಾರೆ.',meaning:'The children are at school.',example:'English: The children are at school.'},{id:'ks71',picture:'💬',word:'ಪುಸ್ತಕವನ್ನು ತೆರೆ.',meaning:'Open the book.',example:'English: Open the book.'},{id:'ks72',picture:'💬',word:'ಪಾಠವನ್ನು ಓದಿ.',meaning:'Read the lesson.',example:'English: Read the lesson.'},{id:'ks73',picture:'💬',word:'ಉತ್ತರವನ್ನು ಬರೆಯಿರಿ.',meaning:'Write the answer.',example:'English: Write the answer.'},{id:'ks74',picture:'💬',word:'ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ.',meaning:'Ask the question.',example:'English: Ask the question.'},{id:'ks75',picture:'💬',word:'ಚೆನ್ನಾಗಿ ಮಾಡಿದ್ದೀರಿ.',meaning:'Well done.',example:'English: Well done.'},{id:'ks76',picture:'💬',word:'ನನಗೆ ಸಂತೋಷವಾಗಿದೆ.',meaning:'I am happy.',example:'English: I am happy.'},{id:'ks77',picture:'💬',word:'ನನಗೆ ದುಃಖವಾಗಿದೆ.',meaning:'I am sad.',example:'English: I am sad.'},{id:'ks78',picture:'💬',word:'ನನಗೆ ದಣಿವಾಗಿದೆ.',meaning:'I am tired.',example:'English: I am tired.'},{id:'ks79',picture:'💬',word:'ನನಗೆ ನಿದ್ರೆ ಬರುತ್ತಿದೆ.',meaning:'I am sleepy.',example:'English: I am sleepy.'},{id:'ks80',picture:'💬',word:'ನನಗೆ ಭಯವಾಗಿದೆ.',meaning:'I am scared.',example:'English: I am scared.'},{id:'ks81',picture:'💬',word:'ನನಗೆ ಚಳಿ ಆಗುತ್ತಿದೆ.',meaning:'I feel cold.',example:'English: I feel cold.'},{id:'ks82',picture:'💬',word:'ನನಗೆ ಬಿಸಿ ಆಗುತ್ತಿದೆ.',meaning:'I feel hot.',example:'English: I feel hot.'},{id:'ks83',picture:'💬',word:'ಕಿಟಕಿಯನ್ನು ತೆರೆ.',meaning:'Open the window.',example:'English: Open the window.'},{id:'ks84',picture:'💬',word:'ದೀಪವನ್ನು ಆನ್ ಮಾಡಿ.',meaning:'Turn on the light.',example:'English: Turn on the light.'},{id:'ks85',picture:'💬',word:'ದೀಪವನ್ನು ಆಫ್ ಮಾಡಿ.',meaning:'Turn off the light.',example:'English: Turn off the light.'},{id:'ks86',picture:'💬',word:'ನಿಮಗೆ ಸಹಾಯ ಬೇಕೇ?',meaning:'Do you need help?',example:'English: Do you need help?'},{id:'ks87',picture:'💬',word:'ನಾನು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇನೆ.',meaning:'I will help you.',example:'English: I will help you.'},{id:'ks88',picture:'💬',word:'ಸರಿ.',meaning:'Okay.',example:'English: Okay.'},{id:'ks89',picture:'💬',word:'ತಪ್ಪಿಲ್ಲ.',meaning:'No problem.',example:'English: No problem.'},{id:'ks90',picture:'💬',word:'ಬಹಳ ಚೆನ್ನಾಗಿದೆ.',meaning:'Very nice.',example:'English: Very nice.'},{id:'ks91',picture:'💬',word:'ನಿಧಾನವಾಗಿ ಹೋಗಿ.',meaning:'Go slowly.',example:'English: Go slowly.'},{id:'ks92',picture:'💬',word:'ಸುರಕ್ಷಿತವಾಗಿ ಹೋಗಿ.',meaning:'Travel safely.',example:'English: Travel safely.'},{id:'ks93',picture:'💬',word:'ಮನೆಗೆ ತಲುಪಿದ ಮೇಲೆ ತಿಳಿಸಿ.',meaning:'Let me know when you reach home.',example:'English: Let me know when you reach home.'},{id:'ks94',picture:'💬',word:'ಇಂದು ತುಂಬಾ ಕೆಲಸ ಇದೆ.',meaning:'There is a lot of work today.',example:'English: There is a lot of work today.'},{id:'ks95',picture:'💬',word:'ನಾನು ಈಗ ಬ್ಯುಸಿಯಾಗಿದ್ದೇನೆ.',meaning:'I am busy now.',example:'English: I am busy now.'},{id:'ks96',picture:'💬',word:'ಸ್ವಲ್ಪ ಸಮಯ ಕೊಡಿ.',meaning:'Give me some time.',example:'English: Give me some time.'},{id:'ks97',picture:'💬',word:'ನಾನು ಪ್ರಯತ್ನಿಸುತ್ತೇನೆ.',meaning:'I will try.',example:'English: I will try.'},{id:'ks98',picture:'💬',word:'ನಾನು ಒಪ್ಪುತ್ತೇನೆ.',meaning:'I agree.',example:'English: I agree.'},{id:'ks99',picture:'💬',word:'ನಾನು ಒಪ್ಪುವುದಿಲ್ಲ.',meaning:'I do not agree.',example:'English: I do not agree.'},{id:'ks100',picture:'💬',word:'ಒಳ್ಳೆಯ ದಿನವಾಗಲಿ.',meaning:'Have a nice day.',example:'English: Have a nice day.'}]},
{id:'fruits',title:'100 Fruits',icon:'🥭',description:'Learn 100 fruit names in Kannada and English.',items:[{id:'kf1',picture:'wiki:Mango',word:'ಮಾವು',meaning:'Mango',example:'ಮಾವು — Mango'},{id:'kf2',picture:'wiki:Apple',word:'ಸೇಬು',meaning:'Apple',example:'ಸೇಬು — Apple'},{id:'kf3',picture:'wiki:Banana',word:'ಬಾಳೆಹಣ್ಣು',meaning:'Banana',example:'ಬಾಳೆಹಣ್ಣು — Banana'},{id:'kf4',picture:'wiki:Orange (fruit)',word:'ಕಿತ್ತಳೆ',meaning:'Orange',example:'ಕಿತ್ತಳೆ — Orange'},{id:'kf5',picture:'wiki:Grape',word:'ದ್ರಾಕ್ಷಿ',meaning:'Grapes',example:'ದ್ರಾಕ್ಷಿ — Grapes'},{id:'kf6',picture:'wiki:Watermelon',word:'ಕಲ್ಲಂಗಡಿ',meaning:'Watermelon',example:'ಕಲ್ಲಂಗಡಿ — Watermelon'},{id:'kf7',picture:'wiki:Muskmelon',word:'ಕರಬೂಜ',meaning:'Muskmelon',example:'ಕರಬೂಜ — Muskmelon'},{id:'kf8',picture:'wiki:Pineapple',word:'ಅನಾನಸ್',meaning:'Pineapple',example:'ಅನಾನಸ್ — Pineapple'},{id:'kf9',picture:'wiki:Coconut',word:'ತೆಂಗಿನಕಾಯಿ',meaning:'Coconut',example:'ತೆಂಗಿನಕಾಯಿ — Coconut'},{id:'kf10',picture:'wiki:Lemon',word:'ನಿಂಬೆಹಣ್ಣು',meaning:'Lemon',example:'ನಿಂಬೆಹಣ್ಣು — Lemon'},{id:'kf11',picture:'wiki:Sweet lime',word:'ಮೋಸಂಬಿ',meaning:'Sweet lime',example:'ಮೋಸಂಬಿ — Sweet lime'},{id:'kf12',picture:'wiki:Pear',word:'ಪಿಯರ್ ಹಣ್ಣು',meaning:'Pear',example:'ಪಿಯರ್ ಹಣ್ಣು — Pear'},{id:'kf13',picture:'wiki:Peach',word:'ಪೀಚ್',meaning:'Peach',example:'ಪೀಚ್ — Peach'},{id:'kf14',picture:'wiki:Cherry',word:'ಚೆರ್ರಿ',meaning:'Cherry',example:'ಚೆರ್ರಿ — Cherry'},{id:'kf15',picture:'wiki:Strawberry',word:'ಸ್ಟ್ರಾಬೆರಿ',meaning:'Strawberry',example:'ಸ್ಟ್ರಾಬೆರಿ — Strawberry'},{id:'kf16',picture:'wiki:Blueberry',word:'ಬ್ಲೂಬೆರಿ',meaning:'Blueberry',example:'ಬ್ಲೂಬೆರಿ — Blueberry'},{id:'kf17',picture:'wiki:Blackberry',word:'ಬ್ಲ್ಯಾಕ್‌ಬೆರಿ',meaning:'Blackberry',example:'ಬ್ಲ್ಯಾಕ್‌ಬೆರಿ — Blackberry'},{id:'kf18',picture:'wiki:Raspberry',word:'ರಾಸ್ಪ್‌ಬೆರಿ',meaning:'Raspberry',example:'ರಾಸ್ಪ್‌ಬೆರಿ — Raspberry'},{id:'kf19',picture:'wiki:Kiwifruit',word:'ಕಿವಿ ಹಣ್ಣು',meaning:'Kiwi',example:'ಕಿವಿ ಹಣ್ಣು — Kiwi'},{id:'kf20',picture:'wiki:Pomegranate',word:'ದಾಳಿಂಬೆ',meaning:'Pomegranate',example:'ದಾಳಿಂಬೆ — Pomegranate'},{id:'kf21',picture:'wiki:Papaya',word:'ಪಪ್ಪಾಯಿ',meaning:'Papaya',example:'ಪಪ್ಪಾಯಿ — Papaya'},{id:'kf22',picture:'wiki:Guava',word:'ಸೀಬೆಹಣ್ಣು',meaning:'Guava',example:'ಸೀಬೆಹಣ್ಣು — Guava'},{id:'kf23',picture:'wiki:Annona squamosa',word:'ಸೀತಾಫಲ',meaning:'Custard apple',example:'ಸೀತಾಫಲ — Custard apple'},{id:'kf24',picture:'wiki:Annona reticulata',word:'ರಾಮಫಲ',meaning:'Bullock\'s heart',example:'ರಾಮಫಲ — Bullock\'s heart'},{id:'kf25',picture:'wiki:Soursop',word:'ಹನುಮಾನ್ ಫಲ',meaning:'Soursop',example:'ಹನುಮಾನ್ ಫಲ — Soursop'},{id:'kf26',picture:'wiki:Manilkara zapota',word:'ಚಿಕ್ಕು',meaning:'Sapota',example:'ಚಿಕ್ಕು — Sapota'},{id:'kf27',picture:'wiki:Jackfruit',word:'ಹಲಸಿನಹಣ್ಣು',meaning:'Jackfruit',example:'ಹಲಸಿನಹಣ್ಣು — Jackfruit'},{id:'kf28',picture:'wiki:Breadfruit',word:'ಬ್ರೆಡ್‌ಫ್ರೂಟ್',meaning:'Breadfruit',example:'ಬ್ರೆಡ್‌ಫ್ರೂಟ್ — Breadfruit'},{id:'kf29',picture:'wiki:Plum',word:'ಪ್ಲಮ್',meaning:'Plum',example:'ಪ್ಲಮ್ — Plum'},{id:'kf30',picture:'wiki:Apricot',word:'ಅಪ್ರಿಕಾಟ್',meaning:'Apricot',example:'ಅಪ್ರಿಕಾಟ್ — Apricot'},{id:'kf31',picture:'wiki:Nectarine',word:'ನೆಕ್ಟರಿನ್',meaning:'Nectarine',example:'ನೆಕ್ಟರಿನ್ — Nectarine'},{id:'kf32',picture:'wiki:Grapefruit',word:'ಗ್ರೇಪ್‌ಫ್ರೂಟ್',meaning:'Grapefruit',example:'ಗ್ರೇಪ್‌ಫ್ರೂಟ್ — Grapefruit'},{id:'kf33',picture:'wiki:Mandarin orange',word:'ಮ್ಯಾಂಡರಿನ್',meaning:'Mandarin',example:'ಮ್ಯಾಂಡರಿನ್ — Mandarin'},{id:'kf34',picture:'wiki:Tangerine',word:'ಟ್ಯಾಂಗರಿನ್',meaning:'Tangerine',example:'ಟ್ಯಾಂಗರಿನ್ — Tangerine'},{id:'kf35',picture:'wiki:Pomelo',word:'ಪೊಮೆಲೊ',meaning:'Pomelo',example:'ಪೊಮೆಲೊ — Pomelo'},{id:'kf36',picture:'wiki:Citron',word:'ಸಿಟ್ರಾನ್',meaning:'Citron',example:'ಸಿಟ್ರಾನ್ — Citron'},{id:'kf37',picture:'wiki:Kaffir lime',word:'ಕಾಫಿರ್ ಲೈಮ್',meaning:'Kaffir lime',example:'ಕಾಫಿರ್ ಲೈಮ್ — Kaffir lime'},{id:'kf38',picture:'wiki:Key lime',word:'ಕೀ ಲೈಮ್',meaning:'Key lime',example:'ಕೀ ಲೈಮ್ — Key lime'},{id:'kf39',picture:'wiki:Phyllanthus emblica',word:'ನೆಲ್ಲಿಕಾಯಿ',meaning:'Indian gooseberry',example:'ನೆಲ್ಲಿಕಾಯಿ — Indian gooseberry'},{id:'kf40',picture:'wiki:Syzygium cumini',word:'ನೇರಳೆಹಣ್ಣು',meaning:'Java plum',example:'ನೇರಳೆಹಣ್ಣು — Java plum'},{id:'kf41',picture:'wiki:Ziziphus mauritiana',word:'ಬೋರೆಹಣ್ಣು',meaning:'Indian jujube',example:'ಬೋರೆಹಣ್ಣು — Indian jujube'},{id:'kf42',picture:'wiki:Prunus cerasifera',word:'ಚೆರ್ರಿ ಪ್ಲಮ್',meaning:'Cherry plum',example:'ಚೆರ್ರಿ ಪ್ಲಮ್ — Cherry plum'},{id:'kf43',picture:'wiki:Concord grape',word:'ಕಪ್ಪು ದ್ರಾಕ್ಷಿ',meaning:'Black grapes',example:'ಕಪ್ಪು ದ್ರಾಕ್ಷಿ — Black grapes'},{id:'kf44',picture:'wiki:Thompson Seedless',word:'ಹಸಿರು ದ್ರಾಕ್ಷಿ',meaning:'Green grapes',example:'ಹಸಿರು ದ್ರಾಕ್ಷಿ — Green grapes'},{id:'kf45',picture:'wiki:Red Globe',word:'ಕೆಂಪು ದ್ರಾಕ್ಷಿ',meaning:'Red grapes',example:'ಕೆಂಪು ದ್ರಾಕ್ಷಿ — Red grapes'},{id:'kf46',picture:'wiki:Watermelon',word:'ಹಳದಿ ಕಲ್ಲಂಗಡಿ',meaning:'Yellow watermelon',example:'ಹಳದಿ ಕಲ್ಲಂಗಡಿ — Yellow watermelon'},{id:'kf47',picture:'wiki:Honeydew (melon)',word:'ಹನಿ ಡ್ಯೂ ಮೆಲನ್',meaning:'Honeydew melon',example:'ಹನಿ ಡ್ಯೂ ಮೆಲನ್ — Honeydew melon'},{id:'kf48',picture:'wiki:Cantaloupe',word:'ಕ್ಯಾಂಟಲೂಪ್',meaning:'Cantaloupe',example:'ಕ್ಯಾಂಟಲೂಪ್ — Cantaloupe'},{id:'kf49',picture:'wiki:Pitaya',word:'ಡ್ರ್ಯಾಗನ್ ಹಣ್ಣು',meaning:'Dragon fruit',example:'ಡ್ರ್ಯಾಗನ್ ಹಣ್ಣು — Dragon fruit'},{id:'kf50',picture:'wiki:Carambola',word:'ಸ್ಟಾರ್ ಫ್ರೂಟ್',meaning:'Star fruit',example:'ಸ್ಟಾರ್ ಫ್ರೂಟ್ — Star fruit'},{id:'kf51',picture:'wiki:Passiflora edulis',word:'ಪ್ಯಾಷನ್ ಫ್ರೂಟ್',meaning:'Passion fruit',example:'ಪ್ಯಾಷನ್ ಫ್ರೂಟ್ — Passion fruit'},{id:'kf52',picture:'wiki:Lychee',word:'ಲಿಚಿ',meaning:'Lychee',example:'ಲಿಚಿ — Lychee'},{id:'kf53',picture:'wiki:Longan',word:'ಲಾಂಗನ್',meaning:'Longan',example:'ಲಾಂಗನ್ — Longan'},{id:'kf54',picture:'wiki:Rambutan',word:'ರಾಂಬುಟಾನ್',meaning:'Rambutan',example:'ರಾಂಬುಟಾನ್ — Rambutan'},{id:'kf55',picture:'wiki:Mangosteen',word:'ಮ್ಯಾಂಗೋಸ್ಟೀನ್',meaning:'Mangosteen',example:'ಮ್ಯಾಂಗೋಸ್ಟೀನ್ — Mangosteen'},{id:'kf56',picture:'wiki:Durian',word:'ದುರಿಯನ್',meaning:'Durian',example:'ದುರಿಯನ್ — Durian'},{id:'kf57',picture:'wiki:Persimmon',word:'ಪರ್ಸಿಮನ್',meaning:'Persimmon',example:'ಪರ್ಸಿಮನ್ — Persimmon'},{id:'kf58',picture:'wiki:Avocado',word:'ಅವಕಾಡೊ',meaning:'Avocado',example:'ಅವಕಾಡೊ — Avocado'},{id:'kf59',picture:'wiki:Common fig',word:'ಅಂಜೂರ',meaning:'Fig',example:'ಅಂಜೂರ — Fig'},{id:'kf60',picture:'wiki:Date palm',word:'ಖರ್ಜೂರ',meaning:'Date',example:'ಖರ್ಜೂರ — Date'},{id:'kf61',picture:'wiki:Raisin',word:'ಒಣದ್ರಾಕ್ಷಿ',meaning:'Raisin',example:'ಒಣದ್ರಾಕ್ಷಿ — Raisin'},{id:'kf62',picture:'wiki:Cranberry',word:'ಕ್ರ್ಯಾನ್‌ಬೆರಿ',meaning:'Cranberry',example:'ಕ್ರ್ಯಾನ್‌ಬೆರಿ — Cranberry'},{id:'kf63',picture:'wiki:Gooseberry',word:'ಗೂಸ್‌ಬೆರಿ',meaning:'Gooseberry',example:'ಗೂಸ್‌ಬೆರಿ — Gooseberry'},{id:'kf64',picture:'wiki:Redcurrant',word:'ರೆಡ್ ಕರಂಟ್',meaning:'Red currant',example:'ರೆಡ್ ಕರಂಟ್ — Red currant'},{id:'kf65',picture:'wiki:Blackcurrant',word:'ಬ್ಲ್ಯಾಕ್ ಕರಂಟ್',meaning:'Black currant',example:'ಬ್ಲ್ಯಾಕ್ ಕರಂಟ್ — Black currant'},{id:'kf66',picture:'wiki:White currant',word:'ವೈಟ್ ಕರಂಟ್',meaning:'White currant',example:'ವೈಟ್ ಕರಂಟ್ — White currant'},{id:'kf67',picture:'wiki:Sambucus',word:'ಎಲ್ಡರ್‌ಬೆರಿ',meaning:'Elderberry',example:'ಎಲ್ಡರ್‌ಬೆರಿ — Elderberry'},{id:'kf68',picture:'wiki:Morus (plant)',word:'ಮಲ್ಬೆರಿ',meaning:'Mulberry',example:'ಮಲ್ಬೆರಿ — Mulberry'},{id:'kf69',picture:'wiki:Açaí palm',word:'ಅಕಾಯಿ ಬೆರಿ',meaning:'Acai berry',example:'ಅಕಾಯಿ ಬೆರಿ — Acai berry'},{id:'kf70',picture:'wiki:Goji',word:'ಗೋಜಿ ಬೆರಿ',meaning:'Goji berry',example:'ಗೋಜಿ ಬೆರಿ — Goji berry'},{id:'kf71',picture:'wiki:Boysenberry',word:'ಬಾಯ್ಸೆನ್‌ಬೆರಿ',meaning:'Boysenberry',example:'ಬಾಯ್ಸೆನ್‌ಬೆರಿ — Boysenberry'},{id:'kf72',picture:'wiki:Loganberry',word:'ಲೋಗನ್‌ಬೆರಿ',meaning:'Loganberry',example:'ಲೋಗನ್‌ಬೆರಿ — Loganberry'},{id:'kf73',picture:'wiki:Huckleberry',word:'ಹಕಲ್‌ಬೆರಿ',meaning:'Huckleberry',example:'ಹಕಲ್‌ಬೆರಿ — Huckleberry'},{id:'kf74',picture:'wiki:Rubus chamaemorus',word:'ಕ್ಲೌಡ್‌ಬೆರಿ',meaning:'Cloudberry',example:'ಕ್ಲೌಡ್‌ಬೆರಿ — Cloudberry'},{id:'kf75',picture:'wiki:Juniper berry',word:'ಜುನಿಪರ್ ಬೆರಿ',meaning:'Juniper berry',example:'ಜುನಿಪರ್ ಬೆರಿ — Juniper berry'},{id:'kf76',picture:'wiki:Quince',word:'ಕ್ವಿನ್ಸ್',meaning:'Quince',example:'ಕ್ವಿನ್ಸ್ — Quince'},{id:'kf77',picture:'wiki:Loquat',word:'ಲೋಕ್ವಾಟ್',meaning:'Loquat',example:'ಲೋಕ್ವಾಟ್ — Loquat'},{id:'kf78',picture:'wiki:Mespilus germanica',word:'ಮೆಡ್ಲರ್',meaning:'Medlar',example:'ಮೆಡ್ಲರ್ — Medlar'},{id:'kf79',picture:'wiki:Salak',word:'ಸಲಾಕ್',meaning:'Snake fruit',example:'ಸಲಾಕ್ — Snake fruit'},{id:'kf80',picture:'wiki:Lansium parasiticum',word:'ಲಾಂಗ್ಸಾಟ್',meaning:'Langsat',example:'ಲಾಂಗ್ಸಾಟ್ — Langsat'},{id:'kf81',picture:'wiki:Sandoricum koetjape',word:'ಸಾಂತೋಲ್',meaning:'Santol',example:'ಸಾಂತೋಲ್ — Santol'},{id:'kf82',picture:'wiki:Cherimoya',word:'ಚೆರಿಮೋಯಾ',meaning:'Cherimoya',example:'ಚೆರಿಮೋಯಾ — Cherimoya'},{id:'kf83',picture:'wiki:Atemoya',word:'ಅಟೆಮೊಯಾ',meaning:'Atemoya',example:'ಅಟೆಮೊಯಾ — Atemoya'},{id:'kf84',picture:'wiki:Feijoa sellowiana',word:'ಫೀಜೋವಾ',meaning:'Feijoa',example:'ಫೀಜೋವಾ — Feijoa'},{id:'kf85',picture:'wiki:Tamarillo',word:'ತಮರಿಲ್ಲೊ',meaning:'Tamarillo',example:'ತಮರಿಲ್ಲೊ — Tamarillo'},{id:'kf86',picture:'wiki:Cucumis metuliferus',word:'ಕಿವಾನೊ',meaning:'Kiwano',example:'ಕಿವಾನೊ — Kiwano'},{id:'kf87',picture:'wiki:Solanum muricatum',word:'ಪೆಪಿನೊ',meaning:'Pepino melon',example:'ಪೆಪಿನೊ — Pepino melon'},{id:'kf88',picture:'wiki:Synsepalum dulcificum',word:'ಮಿರಾಕಲ್ ಫ್ರೂಟ್',meaning:'Miracle fruit',example:'ಮಿರಾಕಲ್ ಫ್ರೂಟ್ — Miracle fruit'},{id:'kf89',picture:'wiki:Aegle marmelos',word:'ಬೇಲ್ ಹಣ್ಣು',meaning:'Bael fruit',example:'ಬೇಲ್ ಹಣ್ಣು — Bael fruit'},{id:'kf90',picture:'wiki:Limonia acidissima',word:'ವುಡ್ ಆಪಲ್',meaning:'Wood apple',example:'ವುಡ್ ಆಪಲ್ — Wood apple'},{id:'kf91',picture:'wiki:Garcinia indica',word:'ಕೊಕುಮ್',meaning:'Kokum',example:'ಕೊಕುಮ್ — Kokum'},{id:'kf92',picture:'wiki:Carambola',word:'ಕಮರಖ',meaning:'Carambola',example:'ಕಮರಖ — Carambola'},{id:'kf93',picture:'wiki:Borassus flabellifer',word:'ತಾಳೆಹಣ್ಣು',meaning:'Palmyra fruit',example:'ತಾಳೆಹಣ್ಣು — Palmyra fruit'},{id:'kf94',picture:'wiki:Borassus flabellifer',word:'ಐಸ್ ಆಪಲ್',meaning:'Ice apple',example:'ಐಸ್ ಆಪಲ್ — Ice apple'},{id:'kf95',picture:'wiki:Morinda citrifolia',word:'ನೋನಿ',meaning:'Noni',example:'ನೋನಿ — Noni'},{id:'kf96',picture:'wiki:Artocarpus lacucha',word:'ಮಂಕಿ ಜಾಕ್',meaning:'Monkey jack',example:'ಮಂಕಿ ಜಾಕ್ — Monkey jack'},{id:'kf97',picture:'wiki:Averrhoa bilimbi',word:'ಬಿಲಿಂಬಿ',meaning:'Bilimbi',example:'ಬಿಲಿಂಬಿ — Bilimbi'},{id:'kf98',picture:'wiki:Spondias dulcis',word:'ಅಂಬರೆಲ್ಲಾ',meaning:'Ambarella',example:'ಅಂಬರೆಲ್ಲಾ — Ambarella'},{id:'kf99',picture:'wiki:Bouea macrophylla',word:'ಮರಿಯನ್ ಪ್ಲಮ್',meaning:'Marian plum',example:'ಮರಿಯನ್ ಪ್ಲಮ್ — Marian plum'},{id:'kf100',picture:'wiki:Jabuticaba',word:'ಜಬುಟಿಕಾಬಾ',meaning:'Jabuticaba',example:'ಜಬುಟಿಕಾಬಾ — Jabuticaba'}]}
],stories:[
{id:'s1',icon:'🐘',title:'ದಯಾಳು ಆನೆ ಮತ್ತು ಚಿಕ್ಕ ಹಕ್ಕಿ',summary:'A 3–5 minute story about kindness, friendship and helping others.',duration:'4 min',text:'ಒಂದು ಸುಂದರವಾದ ಹಸಿರು ಕಾಡಿನಲ್ಲಿ ಗಜ ಎಂಬ ದೊಡ್ಡ ಆನೆ ವಾಸಿಸುತ್ತಿತ್ತು. ಗಜ ತುಂಬಾ ಬಲಶಾಲಿಯಾಗಿದ್ದರೂ, ಅವನ ಮನಸ್ಸು ತುಂಬಾ ಮೃದುವಾಗಿತ್ತು. ಕಾಡಿನ ಎಲ್ಲಾ ಪ್ರಾಣಿಗಳಿಗೂ ಅವನು ಸಹಾಯ ಮಾಡುತ್ತಿದ್ದ. ಒಂದು ಬೆಳಿಗ್ಗೆ ಗಜ ನದಿಯ ಕಡೆಗೆ ನೀರು ಕುಡಿಯಲು ಹೋಗುತ್ತಿದ್ದಾಗ, ಮರದ ಕೆಳಗೆ ಒಂದು ಚಿಕ್ಕ ಹಕ್ಕಿ ದುಃಖದಿಂದ ಅಳುತ್ತಿರುವುದನ್ನು ಕಂಡನು. ಗಜ ಹತ್ತಿರ ಹೋಗಿ, “ಚಿಕ್ಕ ಹಕ್ಕಿಯೇ, ಏಕೆ ಅಳುತ್ತಿದ್ದೀಯ?” ಎಂದು ಕೇಳಿದನು. ಹಕ್ಕಿ ಹೇಳಿತು, “ನಿನ್ನೆ ರಾತ್ರಿ ಬಲವಾದ ಗಾಳಿ ಬೀಸಿತು. ನನ್ನ ಗೂಡು ಮರದಿಂದ ಕೆಳಗೆ ಬಿದ್ದಿದೆ. ನನ್ನ ಚಿಕ್ಕ ಮರಿಗಳು ಗೂಡಿನೊಳಗೆ ಇವೆ. ನನಗೆ ಗೂಡನ್ನು ಮತ್ತೆ ಮೇಲಕ್ಕೆ ತೆಗೆದುಕೊಂಡು ಹೋಗಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ.” ಗಜ ತಕ್ಷಣ ಸಹಾಯ ಮಾಡಲು ನಿರ್ಧರಿಸಿದನು. ಅವನು ತನ್ನ ಉದ್ದವಾದ ಸೊಂಡಿಲಿನಿಂದ ಗೂಡನ್ನು ಬಹಳ ಎಚ್ಚರಿಕೆಯಿಂದ ಎತ್ತಿಕೊಂಡನು. ಆದರೆ ಮರದ ಕೊಂಬೆ ತುಂಬಾ ಎತ್ತರದಲ್ಲಿತ್ತು. ಆಗ ಗಜ ತನ್ನ ಸ್ನೇಹಿತ ಕೋತಿಯನ್ನು ಕರೆದನು. ಕೋತಿ ಬೇಗನೆ ಮರದ ಮೇಲೆ ಹತ್ತಿ, ಗಜ ನೀಡಿದ ಗೂಡನ್ನು ಸುರಕ್ಷಿತವಾದ ಕೊಂಬೆಯ ಮೇಲೆ ಇಟ್ಟಿತು. ಚಿಕ್ಕ ಹಕ್ಕಿ ತುಂಬಾ ಸಂತೋಷಪಟ್ಟಿತು. “ನಿಮ್ಮಿಬ್ಬರಿಗೂ ತುಂಬಾ ಧನ್ಯವಾದಗಳು,” ಎಂದಿತು. ಕೆಲವು ದಿನಗಳ ನಂತರ ಕಾಡಿನಲ್ಲಿ ಭಾರೀ ಬಿಸಿಲು ಬಂತು. ಸಣ್ಣ ಕೆರೆಗಳು ಒಣಗಿದವು. ಅನೇಕ ಪ್ರಾಣಿಗಳಿಗೆ ನೀರು ಸಿಗಲಿಲ್ಲ. ಗಜ ತನ್ನ ಬಲವಾದ ಕಾಲುಗಳಿಂದ ನೆಲವನ್ನು ತೋಡಲು ಆರಂಭಿಸಿದನು. ಸ್ವಲ್ಪ ಹೊತ್ತಿನ ನಂತರ ನೆಲದೊಳಗಿಂದ ನೀರು ಹೊರಬಂತು. ಎಲ್ಲಾ ಪ್ರಾಣಿಗಳು ಸಂತೋಷದಿಂದ ನೀರು ಕುಡಿದವು. ಚಿಕ್ಕ ಹಕ್ಕಿ ಆಕಾಶದಲ್ಲಿ ಹಾರುತ್ತಾ ದೂರದ ಪ್ರದೇಶಗಳನ್ನು ನೋಡಿತು ಮತ್ತು ಹಣ್ಣುಗಳು ಇರುವ ಸ್ಥಳವನ್ನು ಕಂಡು ಎಲ್ಲರಿಗೂ ತಿಳಿಸಿತು. ಆಗ ಗಜ ಅರಿತುಕೊಂಡನು—ಯಾರೂ ತುಂಬಾ ಚಿಕ್ಕವರಲ್ಲ, ಯಾರೂ ಒಬ್ಬರೇ ಎಲ್ಲವನ್ನೂ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ. ನಾವು ಒಬ್ಬರಿಗೊಬ್ಬರು ಸಹಾಯ ಮಾಡಿದಾಗ ದೊಡ್ಡ ಸಮಸ್ಯೆಗಳನ್ನೂ ಸುಲಭವಾಗಿ ಪರಿಹರಿಸಬಹುದು. ಆ ದಿನದಿಂದ ಕಾಡಿನ ಪ್ರಾಣಿಗಳು ಇನ್ನಷ್ಟು ಒಗ್ಗಟ್ಟಿನಿಂದ ಬದುಕಿದವು. ಗಜ ಮತ್ತು ಚಿಕ್ಕ ಹಕ್ಕಿ ಅತ್ಯುತ್ತಮ ಸ್ನೇಹಿತರಾದರು. ಕಾಡಿನಲ್ಲಿ ಯಾರಿಗಾದರೂ ಸಹಾಯ ಬೇಕಾದಾಗ ಎಲ್ಲರೂ ಒಟ್ಟಾಗಿ ಮುಂದೆ ಬರುತ್ತಿದ್ದರು. ನೀತಿ: ದಯೆ ಮತ್ತು ಸಹಕಾರ ನಮ್ಮನ್ನು ಬಲಿಷ್ಠರನ್ನಾಗಿ ಮಾಡುತ್ತವೆ.',english:'In a beautiful green forest lived a large elephant named Gaja. Although Gaja was very strong, he had a gentle heart and always helped the other animals. One morning, on his way to the river, he found a little bird crying under a tree. A strong wind had knocked down her nest, and she could not carry it back to the high branch. Gaja carefully lifted the nest with his trunk and called his monkey friend, who climbed the tree and placed it safely on a branch. The bird was grateful. A few days later, intense heat dried up the small ponds. Gaja dug the ground until water appeared, helping all the animals. The little bird flew far away, found fruit, and guided everyone to food. Gaja realized that nobody is too small to help and nobody can do everything alone. By working together, even difficult problems become easier. From then on, the animals lived with greater unity and kindness. Moral: Kindness and cooperation make us stronger.'},
{id:'s2',icon:'🌳',title:'ಅಜ್ಜಿಯ ಮಾವಿನ ಮರ',summary:'A 3–5 minute family story about patience, nature and sharing.',duration:'4 min',text:'ಒಂದು ಚಿಕ್ಕ ಹಳ್ಳಿಯಲ್ಲಿ ಅನನ್ಯ ಎಂಬ ಹುಡುಗಿ ತನ್ನ ಅಜ್ಜಿಯ ಜೊತೆ ಬೇಸಿಗೆ ರಜೆಯನ್ನು ಕಳೆಯಲು ಬಂದಳು. ಅಜ್ಜಿಯ ಮನೆಯ ಮುಂದೆ ಒಂದು ದೊಡ್ಡ ಮಾವಿನ ಮರ ಇತ್ತು. ಮರದಲ್ಲಿ ಹಸಿರು ಮತ್ತು ಹಳದಿ ಬಣ್ಣದ ಮಾವಿನ ಹಣ್ಣುಗಳು ತುಂಬಿಕೊಂಡಿದ್ದವು. ಅನನ್ಯ ಪ್ರತಿದಿನ ಬೆಳಿಗ್ಗೆ ಮರದ ಕೆಳಗೆ ಹೋಗಿ ಹಣ್ಣುಗಳನ್ನು ನೋಡುತ್ತಿದ್ದಳು. ಒಂದು ದಿನ ಅವಳು ಅಜ್ಜಿಯನ್ನು ಕೇಳಿದಳು, “ಅಜ್ಜಿ, ಈ ಮರ ಇಷ್ಟು ದೊಡ್ಡದಾಗಿ ಹೇಗೆ ಬೆಳೆದಿತು?” ಅಜ್ಜಿ ನಗುತ್ತಾ ಹೇಳಿದಳು, “ನಾನು ನಿನ್ನಷ್ಟು ಚಿಕ್ಕವಳಿದ್ದಾಗ ನನ್ನ ತಂದೆ ನನಗೆ ಒಂದು ಮಾವಿನ ಬೀಜ ಕೊಟ್ಟರು. ನಾನು ಅದನ್ನು ಇಲ್ಲಿ ನೆಟ್ಟೆ. ಪ್ರತಿದಿನ ನೀರು ಹಾಕಿದೆ. ಆದರೆ ಮೊದಲ ಕೆಲವು ದಿನಗಳಲ್ಲಿ ಏನೂ ಕಾಣಿಸಲಿಲ್ಲ.” ಅನನ್ಯ ಆಶ್ಚರ್ಯದಿಂದ ಕೇಳಿದಳು, “ಆಗ ನೀವು ಬೇಸರವಾಗಲಿಲ್ಲವೇ?” ಅಜ್ಜಿ ಹೇಳಿದಳು, “ಸ್ವಲ್ಪ ಬೇಸರವಾಯಿತು. ಆದರೆ ಒಳ್ಳೆಯ ವಿಷಯಗಳು ಬೆಳೆಯಲು ಸಮಯ ಬೇಕು ಎಂದು ನನ್ನ ತಂದೆ ಹೇಳಿದರು.” ಕೆಲವು ವಾರಗಳ ನಂತರ ಚಿಕ್ಕ ಮೊಳಕೆ ಮಣ್ಣಿನಿಂದ ಹೊರಬಂತು. ವರ್ಷಗಳು ಕಳೆದಂತೆ ಅದು ದೊಡ್ಡ ಮರವಾಗಿ ಬೆಳೆದಿತು. ಹಕ್ಕಿಗಳು ಅದರಲ್ಲಿ ಗೂಡು ಕಟ್ಟಿದವು. ಪ್ರಯಾಣಿಕರು ಅದರ ನೆರಳಿನಲ್ಲಿ ವಿಶ್ರಾಂತಿ ಪಡೆದರು. ಮಕ್ಕಳು ಅದರ ಕೆಳಗೆ ಆಟವಾಡಿದರು. ಬೇಸಿಗೆಯಲ್ಲಿ ಮರ ಎಲ್ಲರಿಗೂ ಸಿಹಿಯಾದ ಮಾವಿನ ಹಣ್ಣುಗಳನ್ನು ನೀಡಿತು. ಅನನ್ಯ ಆ ಕಥೆಯನ್ನು ಕೇಳಿ ತುಂಬಾ ಸಂತೋಷಪಟ್ಟಳು. ಆ ದಿನ ಅಜ್ಜಿ ಒಂದು ಹಣ್ಣಾದ ಮಾವನ್ನು ಕಿತ್ತು ಅನನ್ಯಗೆ ಕೊಟ್ಟಳು. ಅನನ್ಯ ಅದನ್ನು ಒಬ್ಬಳೇ ತಿನ್ನಲಿಲ್ಲ. ಅವಳು ಮಾವನ್ನು ತುಂಡು ಮಾಡಿ ತನ್ನ ಸ್ನೇಹಿತರೊಂದಿಗೆ ಹಂಚಿಕೊಂಡಳು. ನಂತರ ಮಾವಿನ ಬೀಜವನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿ ಮನೆಯ ಹಿಂಭಾಗದಲ್ಲಿ ನೆಟ್ಟಳು. ಪ್ರತಿದಿನ ಬೆಳಿಗ್ಗೆ ಅದಕ್ಕೆ ನೀರು ಹಾಕಲು ಆರಂಭಿಸಿದಳು. ಕೆಲವು ದಿನಗಳವರೆಗೆ ಏನೂ ಕಾಣಿಸಲಿಲ್ಲ. ಆದರೂ ಅನನ್ಯ ಕಾಯುತ್ತಿದ್ದಳು. ಒಂದು ಬೆಳಿಗ್ಗೆ ಮಣ್ಣಿನಿಂದ ಚಿಕ್ಕ ಹಸಿರು ಮೊಳಕೆ ಹೊರಬಂದಿತು. ಅನನ್ಯ ಸಂತೋಷದಿಂದ ಅಜ್ಜಿಯನ್ನು ಕರೆದು ತೋರಿಸಿದಳು. ಅಜ್ಜಿ ಹೇಳಿದಳು, “ನೋಡು, ತಾಳ್ಮೆ ಮತ್ತು ಕಾಳಜಿ ಯಾವಾಗಲೂ ಫಲ ಕೊಡುತ್ತವೆ.” ಅನನ್ಯ ತನ್ನ ಚಿಕ್ಕ ಗಿಡವನ್ನು ನೋಡುತ್ತಾ, ಒಂದು ದಿನ ಇದು ಕೂಡ ದೊಡ್ಡ ಮರವಾಗಿ ಅನೇಕ ಜನರಿಗೆ ನೆರಳು ಮತ್ತು ಹಣ್ಣು ನೀಡುತ್ತದೆ ಎಂದು ಕಲ್ಪಿಸಿಕೊಂಡಳು. ನೀತಿ: ತಾಳ್ಮೆಯಿಂದ ಬೆಳೆಸಿದ ಒಳ್ಳೆಯ ಕೆಲಸದ ಫಲವನ್ನು ಎಲ್ಲರೊಂದಿಗೆ ಹಂಚಿಕೊಂಡಾಗ ಸಂತೋಷ ಹೆಚ್ಚುತ್ತದೆ.',english:'During her summer vacation, a girl named Ananya stayed with her grandmother in a small village. In front of the house stood a large mango tree. Ananya asked how it had grown so big. Grandmother explained that when she was a child, her father gave her a mango seed. She planted it and watered it every day, even though nothing appeared at first. Her father taught her that good things need time to grow. Eventually a small sprout appeared, and over the years it became a great tree. Birds built nests in it, travelers rested in its shade, children played beneath it, and everyone enjoyed its sweet mangoes. Inspired by the story, Ananya shared a ripe mango with her friends, planted its seed, and patiently watered it every day. One morning a tiny green sprout appeared. Her grandmother reminded her that patience and care always bear fruit. Ananya imagined her little plant becoming a tree that would one day give shade and fruit to many people. Moral: Good things grow with patience, and happiness grows when we share.'}
]},
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
      <span className="brand-logo banyan-brand-logo">
        <img
          src="/rootcraft-banyan-logo.png"
          alt="RootCraft Academy Banyan Tree Logo"
          className="rootcraft-logo-image"
        />
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
        {visible?<ItemVisual value={tile.value}/>: '?'}
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
    <div className="quiz-picture"><ItemVisual value={question.picture}/></div>
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
            <div className="lesson-picture"><ItemVisual value={item.picture}/></div>
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
          <div className="hero-kids-image">
            <img
              src="/kids-learning.png"
              alt="Children learning together"
            />
          </div>
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
          {item.duration&&<small className="story-duration">⏱ {item.duration}</small>}
          <button className="outline" type="button" onClick={()=>setStory(item)}>
            Read Story
          </button>
        </article>)}
      </div>
      {story&&<section ref={viewRef} className="panel page-anchor">
        <button className="outline" type="button" onClick={()=>setStory(null)}>← Back</button>
        <h3>{story.title}</h3>
        <p>{story.text}</p>
        <div className="story-actions">
          <button className="primary" type="button" onClick={()=>speak(story.text,active.locale)}>
            🔊 Listen to Story
          </button>
        </div>
        {story.english&&<details className="story-translation">
          <summary>🇬🇧 English Translation</summary>
          <p>{story.english}</p>
        </details>}
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
      <div className="footer-brand">
        <div className="footer-brand-match">
          <span className="footer-brand-logo">
            <img
              src="/rootcraft-banyan-logo.png"
              alt="RootCraft Academy Banyan Tree Logo"
              className="rootcraft-logo-image"
            />
          </span>
          <span className="footer-brand-text">
            <span className="rootcraft-wordmark">RootCraft<i>◆</i></span>
            <strong className="academy-wordmark">ACADEMY</strong>
            <small>Deep Roots. Endless Learning.</small>
          </span>
        </div>
        <p>Celebrating every Indian language and culture.</p>
      </div>
      <div><strong>Learn</strong><span>Languages</span><span>Stories</span><span>Games</span></div>
      <div><strong>Explore</strong><span>Indian Culture</span><span>About India</span><span>Learning Journey</span></div>
      <div><strong>Support</strong><span>Parents</span><span>Teachers</span><span>Contact: Pranabbarokumar@gmail.com</span></div>
      <div><strong>Legal</strong><span>Privacy Policy</span><span>Terms of Use</span></div>
    </footer>
  </>;
}
