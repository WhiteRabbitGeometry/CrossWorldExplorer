/* CROSSWORLD EXPLORER v0.3 — static, offline-capable campaign prototype. */
'use strict';
const INTRO=[
 'In the beginning was the Word.',
 'But times have changed.',
 'The world has fallen into darkness. The great libraries are silent. The roads between kingdoms have vanished. Even the names of things have been forgotten.',
 'There was a time that Knowledge was once power. What was once known has become unknowable.',
 'But somewhere in the darkness, a single letter remains: U.',
 'And where there is a letter, there may yet be a word. For where there is a word, there is a world, & where there is a world, there may yet be a way.'
];
const LORE=[
 ['Gatehouse','The entrance to a forgotten fortress.','GUARD'],
 ['Barracks','Shadows sleep where soldiers once stood.','LOCK'],
 ['Armory','Weapons rust beside the words that named them.','CHAIN'],
 ['Crypt','The dead remember what the living forgot.','RUNE'],
 ['Treasury','Gold outlasted kingdoms, but not their names.','TORCH'],
 ['Throne Approach','The final corridor before the nameless king.','GATE'],
 ['The Unword','The darkness itself has a name.','UNDERWORLD']
];
const BANK=[
 ['GUARD','Someone who watches over a place.','A sentry at the door.'],['LOCK','A device securing an entrance.','What keeps a gate shut?'],['CHAIN','A sequence of linked metal rings.','A prisoner may wear one.'],['RUNE','A letter of an ancient alphabet.','A mark of old magic.'],['TORCH','A portable burning light.','A flame to carry into darkness.'],['GATE','A hinged barrier in a fence or wall.','The castle awaits this opening.'],['UNDERWORLD','A realm associated with the dead.','Beneath the realm of the living.'],
 ['ARMOR','Protective clothing worn in combat.','Steel against a blade.'],['SWORD','A long-bladed weapon.','A knight draws this.'],['ROGUE','A dishonest person; a stealth-oriented fantasy character.','An adventurer who prefers shadows.'],['CRYPT','An underground burial chamber.','A tomb beneath the fortress.'],['DUNGEON','A place of imprisonment.','A prison below the castle.'],['GARGOYLE','A grotesque carved stone figure.','A monster of the battlements.'],['LANTERN','A portable enclosed light.','A flame behind glass.'],['KEY','An instrument for operating a lock.','A small metal answer to a door.'],['SHIELD','A protective barrier carried in combat.','A warrior raises this.'],['KNIGHT','An armored mounted warrior.','A sworn servant of the crown.'],['CASTLE','A fortified residence.','A home with battlements.'],['TOWER','A tall fortified structure.','A lookout point above the walls.'],['DAGGER','A short pointed blade.','A blade for close quarters.'],['ALTAR','A raised structure used in ritual worship.','Stone for the sacred rite.'],['CROWN','A ceremonial headpiece for royalty.','The weight of kingship.'],['THRONE','A ceremonial seat for a ruler.','A seat no commoner claims.'],['SPELL','A spoken or written magical formula.','Words that alter reality.'],['WIZARD','A practitioner of magic.','A keeper of arcane knowledge.'],['CURSE','A wish or spell of harm.','A malicious enchantment.'],['GOBLIN','A small mischievous fantasy creature.','A nasty little cave-dweller.'],['ORC','A brutish fantasy humanoid.','A tusked foe.'],['DRAGON','A legendary winged reptile.','A treasure-hoarding beast.'],['MOAT','A defensive ditch around a fortress.','Water around a castle.'],['SPEAR','A pole weapon with a pointed head.','A long reach on the battlefield.'],['ARROW','A projectile shot from a bow.','A feathered shaft in flight.'],['BOW','A curved weapon for shooting arrows.','A weapon with a string.'],['ELF','A mythical humanoid with pointed ears.','A woodland fantasy folk.'],['TRAP','A device designed to catch or harm.','An unseen danger.'],['ENEMY','A hostile opponent.','The one who fights you.'],['FOWL','A bird, especially one kept for eggs or meat.','A foul four-letter word.'],['BIRD','A feathered, winged vertebrate.','A creature that might take flight.'],['WALL','A vertical structure enclosing an area.','Stone between you and the outside.'],['FLAME','A visible burning gas.','What dances above the torch.'],['RIVER','A large natural stream of water.','A current across the land.'],['VAULT','An arched chamber or secure room.','A place for treasure.'],['STEEL','An iron alloy used in weapons.','Metal in a fine blade.'],['IRON','A strong magnetic metal.','The metal of chains.'],['HELM','A ship steering device or a protective helmet.','A knight might wear one.'],['CLOAK','A loose outer garment.','A hooded wanderer wears one.'],['GRAVE','A place where a body is buried.','The dead are laid here.'],['SKELETON','The bones forming the body frame.','A walking pile of bones.'],['GHOST','A spirit of someone deceased.','A presence that haunts halls.'],['BEAST','An animal, especially a dangerous one.','A creature lurking below.'],['KEEP','The central stronghold of a castle.','The fortress within a fortress.'],['PORTCULLIS','A heavy sliding gate.','Iron teeth lowering across an entry.'],['TUNNEL','An underground passage.','A road beneath the ground.'],['GUARDIAN','One who protects or watches over something.','A keeper at the threshold.'],['SHADOW','A dark shape cast when light is blocked.','The darkness following you.'],['SECRET','Something intentionally kept hidden.','What the walls conceal.'],['TREASURE','Accumulated valuable objects.','The dragon sleeps upon this.'],['SCROLL','A roll of paper or parchment.','A message rolled up.'],['MAGIC','Supernatural power.','The impossible made possible.'],['WITCH','A person believed to practice witchcraft.','A brewer of strange potions.'],['POTION','A liquid mixture with special effects.','Medicine from a bottle.'],['PRISON','A place where people are confined.','A home for the condemned.'],['ESCAPE','To break free from confinement.','What the captive dreams of.']
];
const TRINKETS=[
 ['magnify','🔍 Magnifying Glass','Reveal a passage letter upon entering a new room.',3],
 ['monocle','🧐 Scholar’s Monocle','Prevent one wrong-letter damage per room.',3],
 ['foot','🐇 Lucky Rabbit’s Foot','25% chance to prevent all damage from a guess.',4],
 ['echo','💎 Echo Stone','Perfect answers reveal one letter in an intersecting word.',4],
 ['ward','🛡️ Traveler’s Ward','Receive 2 shields upon first entering a room.',5],
 ['wildflower','🌿 Wildflower Charm','Restore 3 HP on first entry to a room.',5],
 ['cartographer','🗺️ Cartographer’s Eye','Show outlines of adjacent unexplored rooms.',5],
 ['goldenquill','✒️ Golden Quill','Once per run, reveal any complete passage answer.',6],
 ['scholarlens','📚 Scholar’s Lens','Prevent one wrong-letter damage on every guess.',7],
 ['insight','✨ Insight Spark','Reveal whether one randomly chosen vowel occurs in each word.',6],
 ['compass','🧭 Golden Compass','Receive 5 shields on completing a room.',6],
 ['heart','❤️ Heart of the Atlas','Begin with 10 additional maximum HP.',7],
 ['traproom','🕯️ Trap Discernment','Know if a room contains an armed trap.',5],
 ['trapword','🔔 Trap Detection','Know whether the selected word is trapped.',7]
];
const ITEMS={potion:['🧪 Potion','Restore 10 HP'],shield:['🛡️ Shield','Gain 5 shield charges'],insight:['✨ Insight','Reveal a random letter'],second:['🍀 Second Chance','Block all damage from one guess'],time:['⌛ Hourglass','Gain 20 seconds in a timed room']};
const NODES=[{x:0,y:0,edges:{e:1}},{x:1,y:0,edges:{w:0,s:2}},{x:1,y:1,edges:{n:1,e:3}},{x:2,y:1,edges:{w:2,s:4}},{x:2,y:2,edges:{n:3,e:5}},{x:3,y:2,edges:{w:4,s:6}},{x:3,y:3,edges:{n:5}}];
const $=id=>document.getElementById(id),pick=a=>a[Math.floor(Math.random()*a.length)],shuffle=a=>{for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a},key=(r,c)=>r+','+c,esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let meta;try{meta=JSON.parse(localStorage.getItem('crossworld_meta_v3'))}catch{}if(!meta)meta={runs:0,gold:0,lexicon:{},trinkets:[],scrolls:[]};
let run;try{run=JSON.parse(localStorage.getItem('crossworld_run_v3'))}catch{}
let selection=0,axis='across',draft=[],focusAt=0,message='',ticker;
const has=id=>meta.trinkets.includes(id);
function save(){localStorage.setItem('crossworld_meta_v3',JSON.stringify(meta));localStorage.setItem('crossworld_run_v3',JSON.stringify(run))}
function entry(word){return BANK.find(w=>w[0]===word)||[word,'A forgotten word.','An old name, nearly lost.']}
function cells(w){return [...w.word].map((_,i)=>({r:w.r+(w.dir==='down'?i:0),c:w.c+(w.dir==='across'?i:0)}))}
function generate(anchor,vertical){let a=entry(anchor),gridWords=[{word:anchor,definition:a[1],clue:a[2],r:7,c:7,dir:'across',passage:true,known:[],attempts:0}];
 let used=new Set([anchor]),pool=shuffle(BANK.filter(w=>w[0]!==anchor)),length=anchor.length;
 for(let i=0;i<length;i++){let choices=pool.filter(([w])=>!used.has(w)&&w.length<=10&&[...w].some((ch,j)=>ch===anchor[i]&&j<=7&&w.length-j<=8));if(!choices.length)throw Error('No crossing for '+anchor[i]);
 let chosen=pick(choices),at=[...chosen[0]].findIndex((ch,j)=>ch===anchor[i]&&j<=7&&chosen[0].length-j<=8);used.add(chosen[0]);gridWords.push({word:chosen[0],definition:chosen[1],clue:chosen[2],r:7-at,c:7+i,dir:'down',passage:false,known:[],attempts:0})}
 // Additional horizontal answers are generated only where the vertical letters agree.
 // The ordinary mode is deliberately conservative about incidental letter strings.
 for(let row=2;row<=12;row++){if(row===7)continue;let candidates=pool.filter(([w])=>!used.has(w)&&w.length>=3&&w.length<=7);
  for(let [word,definition,clue] of shuffle(candidates)){let placements=[];for(let start=3;start<=12-word.length;start++){let intersections=0,valid=true;
    for(let j=0;j<word.length;j++){let col=start+j,at=gridWords.slice(1).find(q=>q.dir==='down'&&q.c===col&&row>=q.r&&row<q.r+q.word.length);if(at){if(at.word[row-at.r]!==word[j]){valid=false;break}intersections++}}
    if(valid&&intersections>=2)placements.push(start)}
   if(placements.length){gridWords.push({word,definition,clue,r:row,c:pick(placements),dir:'across',passage:false,known:[],attempts:0});used.add(word);break}}
 }
 // Gatehouse teaching layout: a second horizontal word links all five crossings.
 // Solving RUNE from the initial U reveals ARMOR, which then makes the other
 // vertical words accessible and permits a genuine GUARD passage Synthesis.
 if(anchor==='GUARD'){
  const tracks=['DAGGER','RUNE','MAGIC','TORCH','SWORD'];
  gridWords=[{word:'GUARD',definition:entry('GUARD')[1],clue:entry('GUARD')[2],r:7,c:7,dir:'across',passage:true,known:[],attempts:0}];
  tracks.forEach((word,i)=>{let bridge='ARMOR'[i],passage='GUARD'[i],at=[...word].findIndex((ch,j)=>ch===bridge&&word[j+1]===passage);let e=entry(word);gridWords.push({word,definition:e[1],clue:e[2],r:6-at,c:7+i,dir:'down',passage:false,known:[],attempts:0})});
  let e=entry('ARMOR');gridWords.push({word:'ARMOR',definition:e[1],clue:e[2],r:6,c:7,dir:'across',passage:false,known:[],attempts:0});
 }
 if(vertical){for(let w of gridWords){[w.r,w.c]=[w.c,w.r];w.dir=w.dir==='down'?'across':'down'}}
 return gridWords;
}
function startRun(){let max=20+(has('heart')?10:0);run={id:++meta.runs,current:0,hp:max,max,shield:0,items:[],second:false,quill:false,vowel:pick(['A','E','I','O','U','Y']),rooms:LORE.map((l,i)=>{let words=generate(l[2],i%2===1);if(i===1||i===3||i===5){let target=words.find(w=>w.word==='FOWL')||words.find(w=>!w.passage&&w.word.length>=4);if(target)target.trap=true}return {words,seen:i===0,entered:i===0,completed:false,trapUsed:false,monocleUsed:false,scroll:false,clock:i===3?90:null}}),seeded:false,done:false};meta.scrolls=[];seedRoom(0,true);save();selection=0;axis=run.rooms[0].words[0].dir;resetDraft();render();showIntro()}
function room(){return run.rooms[run.current]}function ws(){return room().words}
function mapCells(r){let m={};r.words.forEach((w,i)=>cells(w).forEach((p,j)=>(m[key(p.r,p.c)]??=[]).push({i,j})));return m}
function knows(r,w,j){let p=cells(w)[j];return r.words.some(other=>other.known.includes(cells(other).findIndex(q=>q.r===p.r&&q.c===p.c)))}
function complete(w){return w.known.length===w.word.length}
function knownCellList(r){let out=[];for(let w of r.words)for(let j of w.known)out.push(cells(w)[j]);return out}
function visible(r,row,col){return knownCellList(r).some(p=>Math.abs(p.r-row)+Math.abs(p.c-col)<=7)}
function accessible(r,w){return cells(w).some(p=>r.words.some(other=>other.known.includes(cells(other).findIndex(q=>q.r===p.r&&q.c===p.c))))}
function reveal(r,w,j){if(w.known.includes(j))return false;w.known.push(j);return true}
function learnAt(r,w,j){reveal(r,w,j);propagate(r)}
function propagate(r){let changed=true;while(changed){changed=false;for(let w of r.words){if(complete(w))continue;for(let j=0;j<w.word.length;j++)if(knows(r,w,j)&&reveal(r,w,j))changed=true;
  if(complete(w)&&w.attempts===0&&!w.rewarded){w.rewarded=true;recordWord(w,true);if(w.passage)grantTrinket(w)}}}
 if(r.words.every(complete)&&!r.completed){r.completed=true;if(has('compass'))run.shield+=5;checkScrolls()}
}
function recordEncounter(w){if(!meta.lexicon[w.word])meta.lexicon[w.word]={length:w.word.length,seen:true,synth:false,direct:false}}
function recordWord(w,synth){recordEncounter(w);let e=meta.lexicon[w.word];if(synth){if(!e.synth&&!e.direct){meta.gold++;e.synth=true}else e.synth=true}
 else{if(!e.direct){meta.gold+=e.synth?1:2;e.direct=true}}
 save()}
function grantTrinket(w){if(w.passage!==true)return;let record=meta.lexicon[w.word];if(record?.trinketClaimed)return;record.trinketClaimed=true;let candidates=TRINKETS.filter(t=>t[3]<=w.word.length&&!has(t[0]));if(!candidates.length){toast('✦ Passage synthesized; all eligible trinkets already found.');return}
 let same=candidates.filter(t=>t[3]===w.word.length);let t=pick(same.length?same:candidates);meta.trinkets.push(t[0]);toast('✦ Passage Synthesis! Permanent '+t[1]+' acquired.');save()}
function seedRoom(i,initial=false){let r=run.rooms[i];if(r.seeded)return;r.seeded=true;r.seen=true;r.entered=true;
 let w=r.words[0],j=initial?w.word.indexOf('U'):Math.floor(w.word.length/2);if(j<0)j=0;reveal(r,w,j);
 if(!initial){if(has('magnify')){let index=pick([...w.word.keys()].filter(k=>!knows(r,w,k))||[]);if(index!==undefined)reveal(r,w,index)}
  if(has('ward'))run.shield+=2;if(has('wildflower'))run.hp=Math.min(run.max,run.hp+3)}
 propagate(r);save()}
function traveling(to){if(run.done)return;if(to===6&&!bossOpen()){toast('The final passage waits until every ordinary room is complete.');return}
 run.current=to;seedRoom(to);selection=0;axis=ws()[0].dir;message='';resetDraft();render()}
function bossOpen(){return run.rooms.slice(0,6).every(r=>r.words.every(complete))}
function exits(){let current=NODES[run.current],r=room();return Object.entries(current.edges).map(([direction,to])=>({direction,to,open:(to<run.current||complete(r.words[0]))&&(to!==6||bossOpen())}))}
function resetDraft(){let w=ws()[selection];draft=Array(w.word.length).fill('');focusAt=w.word.split('').findIndex((_,j)=>!knows(room(),w,j));if(focusAt<0)focusAt=0}
function choose(i){if(!accessible(room(),ws()[i])){message='Find a confirmed letter touching that word first.';feedback();return}selection=i;axis=ws()[i].dir;message='';resetDraft();render()}
function damage(n){if(n<=0)return 0;if(run.second){run.second=false;return 0}if(has('foot')&&Math.random()<.25)return 0;
 if(has('scholarlens'))n=Math.max(0,n-1);if(has('monocle')&&!room().monocleUsed){room().monocleUsed=true;n=Math.max(0,n-1)}
 let shield=Math.min(n,run.shield);run.shield-=shield;n-=shield;run.hp=Math.max(0,run.hp-n);if(run.hp===0)run.done=true;return n}
function submit(){if(run.done)return;let r=room(),w=ws()[selection];if(complete(w)||!accessible(r,w))return;
 let typed=draft.map((v,j)=>knows(r,w,j)?w.word[j]:v||'').join('');if(typed.length!==w.word.length){message='Fill every unlocked box before checking.';feedback();return}
 let wrong=0,gained=0;w.attempts++;for(let j=0;j<w.word.length;j++){if(knows(r,w,j))continue;if(typed[j]===w.word[j]){reveal(r,w,j);gained++}else wrong++}
 let trap=false;if(w.trap&&!w.trapUsed&&wrong){w.trapUsed=true;trap=true}
 let penalty=trap?Math.ceil(run.hp/2)+wrong:wrong;let lost=damage(penalty);
 let perfect=wrong===0&&w.attempts===1;
 if(perfect){run.hp=run.max;recordWord(w,false);if(!w.passage){run.items.push(pick(Object.keys(ITEMS)));if(has('echo')){let candidates=[];let m=mapCells(r);for(let p of cells(w))for(let ref of m[key(p.r,p.c)]||[]){let q=r.words[ref.i];if(q!==w&&!knows(r,q,ref.j))candidates.push([q,ref.j])}if(candidates.length){let [q,j]=pick(candidates);reveal(r,q,j)}}}}
 if(complete(w)&&!perfect)recordWord(w,false);
 propagate(r);message=trap?'⚠ Trap sprung! '+lost+' HP lost.':wrong?gained+' letters locked. '+wrong+' wrong; '+lost+' HP lost.':perfect?'Perfect! Full health restored.':'Word completed.';
 if(run.rooms.slice(0,6).every(q=>q.words.every(complete))&&!run.rooms[6].seen)message+=' The final passage has appeared!';
 if(run.rooms.every(q=>q.words.every(complete)))run.done=true;save();resetDraft();render();
 if(run.hp===0)dialog('The darkness returns','Your run ended. Dictionary, gold, and permanent trinkets survive.','<button class="primary" id="again">Begin again</button>',()=>{$('again').onclick=startRun});
 else if(run.done)dialog('The world remembers','You defeated the Unword and completed the campaign. What you learned will survive.','<button class="primary" id="again">Another journey</button>',()=>{$('again').onclick=startRun});
}
function randomLetter(){let options=[];room().words.forEach(w=>w.word.split('').forEach((_,j)=>{if(!knows(room(),w,j))options.push([w,j])}));if(!options.length)return false;let [w,j]=pick(options);reveal(room(),w,j);propagate(room());return true}
function itemUse(i){let id=run.items[i],ok=true;if(id==='potion')run.hp=Math.min(run.max,run.hp+10);if(id==='shield')run.shield+=5;
 if(id==='second'){if(run.second){toast('A Second Chance is already armed.');ok=false}else run.second=true}
 if(id==='insight')ok=randomLetter();if(id==='time'){if(room().clock===null){toast('Save the Hourglass for the timed Crypt.');ok=false}else room().clock+=20}
 if(ok){run.items.splice(i,1);save();render()}}
function buy(id){let price={potion:2,shield:3,insight:4,second:5,time:2}[id];if(meta.gold<price){toast('Not enough gold.');return}meta.gold-=price;run.items.push(id);save();showShop()}
function introHtml(){return INTRO.map((p,i)=>'<p'+(i===4?' class="uLine"':'')+'>'+esc(p).replace('letter remains: U.','letter remains: <span class="u">U</span>.')+'</p>').join('')}
function showIntro(){if(run.id>1)return;document.body.insertAdjacentHTML('beforeend','<div class="overlay" id="introOverlay"><div class="story">'+introHtml()+'<button class="primary" id="begin">Begin with U</button></div></div>');$('begin').onclick=()=>$('introOverlay').remove()}
function toast(msg){document.querySelector('.toast')?.remove();document.body.insertAdjacentHTML('beforeend','<div class="toast">'+esc(msg)+'</div>');setTimeout(()=>document.querySelector('.toast')?.remove(),4200)}
function render(){let r=room(),l=LORE[run.current],count=r.words.filter(complete).length;
 $('app').innerHTML='<div class="shell"><header><div class="logo">✦ CROSSWORLD <em>EXPLORER</em></div><div class="worldbar"><span>❤️ '+run.hp+'/'+run.max+'</span><span>🛡️ '+run.shield+'</span><span class="gold">◈ '+meta.gold+' gold</span><button class="soft" id="dictionaryBtn">Dictionary</button><button class="soft" id="mapBtn">Map</button><button class="soft" id="menuBtn">☰</button></div></header><main class="layout"><section><div class="title"><div><div class="eyebrow">THE HIDDEN ATLAS · '+(run.current===6?'BOSS': 'SECTION '+(Math.floor(run.current/2)+1))+'</div><h1>'+esc(l[0])+'</h1><p class="desc">'+esc(l[1])+'</p></div><span class="sectionPill">'+count+'/'+r.words.length+' solved</span></div><div class="board dungeon" id="board"><div class="roomShapes" id="shapes"></div><div class="grid" id="grid"></div></div><div class="below"><span>Light follows confirmed letters · 7-square radius</span><span>'+('0'+(run.current+1)).slice(-2)+' / 07</span></div></section><aside class="panel"><div class="panelTop"><h2>Clues</h2><span class="eyebrow">'+(r.clock!==null?'⏱ '+r.clock+'s':has('traproom')&&r.words.some(w=>w.trap&&!w.trapUsed)?'⚠ Trap nearby':'Dungeon')+'</span></div><p class="hint">Only words touching confirmed letters are accessible. A completed passage opens the next room. Synthesize the passage without guessing it to earn a permanent trinket.</p><div class="tabs"><button id="across" class="'+(axis==='across'?'on':'')+'">Across</button><button id="down" class="'+(axis==='down'?'on':'')+'">Down</button></div><div class="clues" id="clues"></div><div class="answerArea"><div class="answerLabel" id="label"></div><div class="tiles" id="tiles"></div><div class="submitLine"><button class="primary" id="check">Check answer ↵</button><button class="soft" id="clear">Clear</button></div><p class="feedback" id="feedback"></p></div><div class="inventoryTitle"><strong>Satchel · '+run.items.length+' items</strong><button class="soft" id="satchelToggle">Expand</button></div><div class="inventory" id="inventory"></div><div class="trinketLine">'+meta.trinkets.length+' permanent trinkets · '+(run.second?'🍀 Second Chance armed':'knowledge survives death')+'</div></aside></main><div id="modalHost"></div></div>';
 $('dictionaryBtn').onclick=showDictionary;$('mapBtn').onclick=showMap;$('menuBtn').onclick=showMenu;$('check').onclick=submit;$('clear').onclick=()=>{resetDraft();renderTiles()};$('satchelToggle').onclick=()=>{$('inventory').classList.toggle('expanded');$('satchelToggle').textContent=$('inventory').classList.contains('expanded')?'Collapse':'Expand'};
 for(let dir of ['across','down'])$(dir).onclick=()=>{axis=dir;let i=ws().findIndex(w=>w.dir===dir&&accessible(r,w));if(i>=0)choose(i);else{message='No accessible '+dir+' word yet.';feedback()}};
 renderBoard();renderClues();renderTiles();renderItems();feedback();
}
function renderBoard(){let r=room(),g=$('grid'),m=mapCells(r),size=20;g.style.gridTemplateColumns='repeat('+size+',1fr)';g.style.gridTemplateRows='repeat('+size+',1fr)';
 for(let row=0;row<size;row++)for(let col=0;col<size;col++){let refs=m[key(row,col)]||[],button=document.createElement('button');button.className='cell'+(refs.length?'':' void');if(refs.length){let lit=visible(r,row,col),known=refs.some(ref=>knows(r,r.words[ref.i],ref.j));if(!lit)button.classList.add('fog');else if(known)button.classList.add('fixed');if(refs.some(ref=>ref.i===selection)&&lit)button.classList.add('selected');if(lit){let starts=refs.filter(ref=>ref.j===0);if(starts.length)button.innerHTML='<small>'+starts.map(ref=>ref.i+1).join('/')+'</small>';let span=document.createElement('span');span.textContent=known?r.words[refs[0].i].word[refs[0].j]:'';button.append(span)}button.onclick=()=>{let choices=refs.filter(ref=>accessible(r,r.words[ref.i]));if(!choices.length||!lit)return;let next=choices.find(ref=>r.words[ref.i].dir===axis)||choices[0];if(next.i===selection&&choices.length>1)next=choices.find(ref=>ref.i!==selection)||next;choose(next.i)}}g.append(button)}
 for(let ex of exits()){let button=document.createElement('button');button.className='exit '+ex.direction+(ex.open?'':' locked');button.textContent=(ex.open?'✦ ':'🔒 ')+({e:'East',w:'West',n:'North',s:'South'}[ex.direction]);button.disabled=!ex.open;button.onclick=()=>traveling(ex.to);$('board').append(button);let n=document.createElement('div');n.className='neighbor '+ex.direction;n.textContent=run.rooms[ex.to].seen?LORE[ex.to][0]:'Unknown room';$('shapes').append(n)}
}
function renderClues(){let r=room();$('clues').innerHTML='';r.words.forEach((w,i)=>{if(w.dir!==axis)return;let active=accessible(r,w),button=document.createElement('button');button.className='clue'+(i===selection?' on':'')+(complete(w)?' done':'')+(!active?' locked':'')+(w.trap&&!w.trapUsed&&has('trapword')?' trapped':'');button.innerHTML='<b>'+(i+1)+'</b><span>'+(!active?'Unreachable · ': '')+esc(w.clue)+' <small>('+w.word.length+')</small>'+(w.trap&&!w.trapUsed&&has('trapword')?' ⚠ TRAPPED':'')+'</span>'+(complete(w)?'<span class="tick">✓</span>':'');button.onclick=()=>choose(i);$('clues').append(button)});
 let w=ws()[selection];$('label').textContent=(selection+1)+' '+w.dir.toUpperCase()+' · '+w.word.length+' letters'+(has('insight')?' · '+run.vowel+' '+(w.word.includes(run.vowel)?'PRESENT':'ABSENT'):'');
}
function renderTiles(){let w=ws()[selection],t=$('tiles');if(!t)return;t.innerHTML='';for(let j=0;j<w.word.length;j++){let known=knows(room(),w,j),input=document.createElement('input');input.className='tile'+(known?' fixed':'');input.value=known?w.word[j]:draft[j]||'';input.maxLength=1;input.disabled=known||run.done;input.setAttribute('aria-label','Letter '+(j+1));input.setAttribute('data-tile',j);input.autocapitalize='characters';input.autocomplete='off';input.oninput=e=>{draft[j]=e.target.value.toUpperCase().replace(/[^A-Z]/g,'').slice(-1);if(draft[j]){let next=j+1;while(next<w.word.length&&knows(room(),w,next))next++;focusAt=next<w.word.length?next:j}renderTiles();document.querySelector('[data-tile="'+focusAt+'"]')?.focus()};input.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();submit()}else if(e.key==='Backspace'&&!draft[j]){let p=j-1;while(p>=0&&knows(room(),w,p))p--;if(p>=0){draft[p]='';focusAt=p;renderTiles();document.querySelector('[data-tile="'+p+'"]')?.focus()}}};t.append(input)}$('check').disabled=complete(w)||!accessible(room(),w)||run.done}
function renderItems(){let inv=$('inventory');if(!run.items.length)inv.innerHTML='<span class="note">Perfect words yield supplies. Gold buys more.</span>';run.items.forEach((id,i)=>{let b=document.createElement('button');b.className='item';b.textContent=ITEMS[id][0];b.title=ITEMS[id][1];b.onclick=()=>itemUse(i);inv.append(b)})}
function feedback(){if($('feedback'))$('feedback').textContent=message}
function dialog(title,body,extra='',after){$('modalHost').innerHTML='<div class="overlay" id="overlay"><div class="dialog"><div class="dialogHead"><h2>'+esc(title)+'</h2><button class="soft" id="close">Close</button></div><p>'+body+'</p>'+extra+'</div></div>';$('close').onclick=()=>$('modalHost').innerHTML='';$('overlay').onclick=e=>{if(e.target.id==='overlay')$('modalHost').innerHTML=''};if(after)after()}
function showDictionary(){let all=Object.entries(meta.lexicon),body=all.length?all.map(([word,e])=>'<div class="dictionaryWord"><b>'+(e.synth||e.direct?esc(word):'□'.repeat(e.length))+'</b> · '+e.length+' letters · '+(e.direct?'2/2':e.synth?'1/2':'0/2')+' gold earned<p>'+(e.synth||e.direct?esc(entry(word)[1]):'Definition unknown. Solve or synthesize this word.')+'</p></div>').join(''):'<p>No words encountered yet.</p>';
 dialog('The Dictionary','Every encountered clue creates a hidden entry. Solved words reveal precise definitions.','<div class="dictionaryList">'+body+'</div>')}
function showShop(){let buttons=Object.entries(ITEMS).map(([id,item])=>'<button class="item" data-buy="'+id+'">'+item[0]+' · '+({potion:2,shield:3,insight:4,second:5,time:2}[id])+' ◈</button>').join('');dialog('The Gold Merchant','You have <span class="gold">'+meta.gold+'</span> gold. Gold earned from unique word mastery persists between runs.','<div class="actions">'+buttons+'</div>',()=>document.querySelectorAll('[data-buy]').forEach(b=>b.onclick=()=>buy(b.dataset.buy)))}
function showMenu(){dialog('Crossworld Explorer','Knowledge persists through death. New runs reset HP, shields, supplies and crossword layouts, while preserving the Dictionary, gold and trinkets.','<div class="actions"><button class="primary" id="newrun">New run</button><button class="soft" id="shopBtn">Merchant</button><button class="soft" id="trinketsBtn">Trinkets</button><button class="soft" id="storyBtn">Opening story</button></div>',()=>{$('newrun').onclick=()=>{if(confirm('Start a new campaign run?'))startRun()};$('shopBtn').onclick=showShop;$('trinketsBtn').onclick=showTrinkets;$('storyBtn').onclick=()=>{ $('modalHost').innerHTML='';showIntro()}})}
function showTrinkets(){let cards=TRINKETS.map(t=>'<div class="badge '+(has(t[0])?'owned':'')+'"><b>'+t[1]+'</b>'+esc(t[2])+'<br><small>'+t[3]+'+ letters · '+(has(t[0])?'UNLOCKED':'LOCKED')+'</small></div>').join('');dialog('Permanent Trinkets',meta.trinkets.length+'/'+TRINKETS.length+' acquired. Only passage synthesis grants new trinkets.','<div class="badges">'+cards+'</div>')}
function showMap(){let width=680,height=340,seen=run.rooms.map((r,i)=>r.seen||has('cartographer')&&Object.values(NODES[run.current].edges).includes(i));
 dialog('Map of the Hidden Atlas','Room clusters form sections. Every pair of rooms belongs to a larger dungeon section. The boss passage opens when all six ordinary rooms are solved.','<div class="map" id="map"></div>');
 let map=$('map'),coord=i=>[16+NODES[i].x*22,15+NODES[i].y*24];NODES.forEach((n,i)=>{for(let to of Object.values(n.edges)){if(to<=i||!seen[i]||!seen[to])continue;let [x,y]=coord(i),[xx,yy]=coord(to),dx=(xx-x)*map.clientWidth/100,dy=(yy-y)*340/100,line=document.createElement('div');line.className='mapline';line.style.left=x+'%';line.style.top=y+'%';line.style.width=Math.hypot(dx,dy)+'px';line.style.transform='rotate('+Math.atan2(dy,dx)+'rad)';map.append(line)}});
 NODES.forEach((n,i)=>{if(!seen[i])return;let [x,y]=coord(i),b=document.createElement('button');b.className='maproom'+(run.current===i?' here':'')+(!run.rooms[i].seen?' unknown':'');b.style.left=x+'%';b.style.top=y+'%';b.textContent=run.rooms[i].seen?LORE[i][0]:'Unknown';b.onclick=()=>{if(exits().some(ex=>ex.to===i&&ex.open)){ $('modalHost').innerHTML='';traveling(i)}};map.append(b)})}
function checkScrolls(){for(let section=0;section<3;section++){let a=run.rooms[section*2],b=run.rooms[section*2+1];if(a.words.every(complete)&&b.words.every(complete)&&!meta.scrolls.includes(section)){meta.scrolls.push(section);setTimeout(()=>showScroll(section),600);save()}}}
function showScroll(section){let words=[...run.rooms[section*2].words,...run.rooms[section*2+1].words].map(w=>w.word);let extras=['ORBIT','GALAXY','SATURN'],intruder=extras[section],choices=shuffle([...new Set(words)].slice(0,8).concat(intruder));dialog('Cipher Scroll · Section '+(section+1),'A scroll floats out of the darkness. One word belongs to another world. Find the intruder.','<div class="scrollPage">'+choices.map(w=>'<button data-scroll="'+w+'">'+w+'</button>').join(' · ')+'</div><p class="note">Complete every section scroll to discover a hidden chamber in a later campaign.</p>',()=>document.querySelectorAll('[data-scroll]').forEach(b=>b.onclick=()=>{if(b.dataset.scroll===intruder){meta.gold+=3;save();toast('Cipher deciphered! +3 gold.');$('modalHost').innerHTML=''}else toast('That word belongs here. Look again.')}))}
function tick(){if(!run||run.done)return;let r=room();if(r.clock===null||r.clock<0||r.words.every(complete))return;r.clock--;if(r.clock===0){r.clock=-1;let d=damage(8);message='The clock expired. '+d+' damage. You may finish untimed.';toast(message);render()}else{let text=document.querySelector('.panelTop .eyebrow');if(text)text.textContent='⏱ '+r.clock+'s'}save()}
function boot(){if(!run||!run.rooms||run.rooms.length!==7||!run.rooms[0].words)startRun();else{selection=0;axis=ws()[0].dir;resetDraft();render()}ticker=setInterval(tick,1000)}
boot();
