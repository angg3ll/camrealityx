import { useState, useEffect, useRef } from "react";
import Showroom3D      from "./components/Showroom3D.jsx";
import ShowroomSoleil  from "./components/ShowroomSoleil.jsx";
import ShowroomDaniel  from "./components/ShowroomDaniel.jsx";
import ShowroomMaya    from "./components/ShowroomMaya.jsx";

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&family=IBM+Plex+Mono:wght@300;400;500&display=swap');`;

// ── CLAUDE VISION ANALYSIS ────────────────────────────────────────────────────
async function analyseImagesWithClaude(imageDataArray) {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;

  const imageContents = imageDataArray.map((base64) => ({
    type: "image",
    source: {
      type: "base64",
      media_type: "image/jpeg",
      data: base64.split(",")[1],
    },
  }));

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: "claude-opus-4-6",
      max_tokens: 500,
      messages: [
        {
          role: "user",
          content: [
            ...imageContents,
            {
              type: "text",
              text: `Analyse these inspiration images and extract the person's aesthetic taste profile.
Return ONLY a JSON object with this exact structure, no other text:
{
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "palette": ["#hexcolor1", "#hexcolor2", "#hexcolor3"],
  "summary": "Two sentence description of their aesthetic in second person, e.g. 'You gravitate toward...'",
  "crewType": "A two-word label like 'Warm Minimalist' or 'Dark Romantic'"
}

Tags should be single evocative words from this list or similar:
minimal, earthy, organic, warm, refined, textured, coastal, airy, natural, soft, 
bold, moody, classical, layered, modern, sharp, dark, urban, graphic, nostalgic, 
retro, luxe, raw, editorial, botanical, industrial, playful, geometric

Keep tags to 5, palette to 3 hex colours dominant in the images, crewType exactly 2 words.`,
            },
          ],
        },
      ],
    }),
  });

  const data = await response.json();
  const text = data.content?.[0]?.text || "";

  try {
    const clean = text.replace(/```json|```/g, "").trim();
    return JSON.parse(clean);
  } catch {
    // Fallback if parsing fails
    return {
      tags: ["minimal", "earthy", "warm", "organic", "refined"],
      palette: ["#ff2d78", "#c8a8f0", "#00f0e0"],
      summary: "You gravitate toward warm, considered spaces with a natural sensibility. Your taste balances restraint with texture.",
      crewType: "Warm Minimalist",
    };
  }
}

// ── UNSPLASH PRODUCT IMAGES ───────────────────────────────────────────────────
const UNSPLASH_PRODUCTS = [
  { id:1,  name:"Linen Overshirt",   brand:"Arket",    price:"£89",  match:true,  rx:{you:"❤️",friend:"❤️"}, img:"https://images.unsplash.com/photo-1713881842156-3d9ef36418cc?w=400&q=80" },
  { id:2,  name:"Ceramic Mug",       brand:"Urban Outfitters",    price:"£25",  match:true,  rx:{you:null,friend:"😍"}, img:"https://images.unsplash.com/photo-1649270716777-1bd08cb443f5?w=400&q=80" },
  { id:3,  name:"Merino Chunky Knit",       brand:"COS",      price:"£100", match:false, rx:{you:"❤️",friend:null}, img:"https://images.unsplash.com/photo-1631541909061-71e349d1f203?w=400&q=80" },
  { id:4,  name:"Raw Edge Notebook", brand:"Papier",   price:"£28",  match:false, rx:{you:null,friend:null}, img:"https://images.unsplash.com/photo-1621168854680-9250096b4a27?w=400&q=80" },
  { id:5,  name:"Oak Display Tray",    brand:"MUJI",     price:"£9", match:true,  rx:{you:"❤️",friend:"❤️"}, img:"https://images.unsplash.com/photo-1645020089957-608f1f0dfb61?w=400&q=80" },
  { id:6,  name:"Soy Candle",    brand:"Yankee Candles", price:"£18",  match:false, rx:{you:null,friend:"❤️"}, img:"https://images.unsplash.com/photo-1612293905607-b003de9e54fb?w=400&q=80" },
  { id:7,  name:"Canvas Tote",       brand:"Baggu",    price:"£35",  match:false, rx:{you:"😍",friend:null}, img:"https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80" },
  { id:8,  name:"Wool Throw",        brand:"Hay",      price:"£145", match:true,  rx:{you:"❤️",friend:"😍"}, img:"https://images.unsplash.com/photo-1639109743189-91a3ec8b0437?w=400&q=80" },
];

// ── TASTE GRAPH PRODUCTS ───────────────────────────────────────────────────────
const TASTE_PRODUCTS = [
  { id:'tp1', name:'Beeswax Taper Candles', shop:'Hive & Hearth', price:'£22', tags:['earthy','organic','warm'],    img:'https://images.unsplash.com/photo-1732117924212-39bfaec174c9?w=400&q=80' },
  { id:'tp6', name:'Hand-thrown Clay Bowl', shop:'Toyo Kiln',      price:'£38', tags:['organic','warm','textured'],  img:'https://images.unsplash.com/photo-1621453571761-1fd23ec15396?w=400&q=80' },
  { id:'tp3', name:'Linen Pillow Cover',   shop:'Still Meadow',   price:'£34', tags:['minimal','refined','warm'],   img:'https://images.unsplash.com/photo-1730580015629-d07e58d81c32?w=400&q=80' },
  { id:'tp4', name:'Merino Wool Throw',     shop:'Highland Fibre', price:'£145',tags:['warm','textured','refined'],  img:'https://images.unsplash.com/photo-1548536207-7b32566ca27d?w=400&q=80' },
  { id:'tp5', name:'Oak Tray',     shop:'Workshop No.7',  price:'£64', tags:['earthy','organic','natural'], img:'https://images.unsplash.com/photo-1657981190934-5a31370aa54f?w=400&q=80' },
  { id:'tp2', name:'Lavender Room Spray',    shop:'Atelier No.3',   price:'£48', tags:['refined','warm','minimal'],   img:'https://images.unsplash.com/photo-1683559086021-7f5e3b5e11cb?w=400&q=80' },
];

// ── SMALL SHOP PRODUCTS ────────────────────────────────────────────────────────
const SMALL_SHOP_PRODUCTS = [
  { id:'s1', name:'Hand-dyed Knitted Scarf', brand:'Studio Wabi',    price:'£32', match:false, rx:{you:"❤️",friend:null},  img:'https://images.unsplash.com/photo-1457545195570-67f207084966?w=400&q=80' },
  { id:'s2', name:'Speckled Thrown Mug',    brand:'Earthen Kiln',   price:'£27', match:true,  rx:{you:"❤️",friend:"❤️"},  img:'https://images.unsplash.com/photo-1729441733364-37e7df95fa70?w=400&q=80' },
  { id:'s3', name:'Beeswax Block Candle',   brand:'Hive & Hearth',  price:'£11', match:false, rx:{you:"😍",friend:null},  img:'https://images.unsplash.com/photo-1732117924212-39bfaec174c9?w=400&q=80' },
  { id:'s4', name:'Washed Linen Napkins',   brand:'Vala',    price:'£16', match:true,  rx:{you:null, friend:"❤️"}, img:'https://images.unsplash.com/photo-1635207945702-98fdc3df9d90?w=400&q=80' },
  { id:'s5', name:'Pressed Botanicals Art', brand:'Paper & Pine',   price:'£34', match:false, rx:{you:"❤️",friend:null},  img:'https://images.unsplash.com/photo-1621620211152-db44233d5b6c?w=400&q=80' },
  { id:'s6', name:'Raw Clay Bud Vase Set',      brand:'Form & Earth',   price:'£44', match:false, rx:{you:null, friend:"😍"}, img:'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80' },
  { id:'s7', name:'Palo Santo Bundle',      brand:'Earth & Ember',  price:'£16', match:true,  rx:{you:"❤️",friend:"❤️"},  img:'https://images.unsplash.com/photo-1597717503010-ee19fef2db91?w=400&q=80' },
  { id:'s8', name:'Hand-knit Wool Socks',   brand:'The Yarn Shed',  price:'£24', match:false, rx:{you:"😍",friend:null},  img:'https://images.unsplash.com/photo-1641399050826-9616c90427bb?w=400&q=80' },
];

// ── CREW MEMBERS ──────────────────────────────────────────────────────────────
const CREW_MEMBERS = [
  { id:'maya', name:'Maya',   avatar:'M', color:'#00f0e0', compat:78, type:'Coastal Minimalist', tags:['minimal','coastal','organic'], picks:['tp2','tp3'] },
  { id:'soleil',  name:'Soleil',    avatar:'S', color:'#c8a8f0', compat:71, type:'Soft Botanical',  tags:['natural','soft','earthy'],     picks:['tp1','tp5'] },
  { id:'daniel',  name:'Daniel',    avatar:'D', color:'#ff00cc', compat:64, type:'Urban Refined',   tags:['minimal','sharp','edgy'],   picks:['tp4','tp6'] },
];

const SWIPE_ITEMS = [
  { id:1, name:"Raw Linen & Stone",  bg:"#b5a48a", tags:["minimal","earthy","organic"],  photo:"https://images.unsplash.com/photo-1591625591034-75d303d2e1a4?auto=format&fit=crop&w=400&h=560&q=80" },
  { id:2, name:"Dark Academia",      bg:"#2d2416", tags:["moody","classical","layered"], photo:"https://images.unsplash.com/photo-1698360308488-48a0f089ec3c?auto=format&fit=crop&w=400&h=560&q=80" },
  { id:3, name:"Clean & Precise",    bg:"#d8d8d8", tags:["minimal","modern","sharp"],    photo:"https://images.unsplash.com/photo-1565791380713-1756b9a05343?auto=format&fit=crop&w=400&h=560&q=80" },
  { id:4, name:"Warm Maximalist",    bg:"#c47a3a", tags:["bold","warm","textured"],      photo:"https://images.unsplash.com/photo-1650137938625-11576502aecd?auto=format&fit=crop&w=400&h=560&q=80" },
  { id:5, name:"Soft Botanical",     bg:"#7aaa82", tags:["natural","soft","organic"],    photo:"https://images.unsplash.com/photo-1656115884764-0dff3589108b?auto=format&fit=crop&w=400&h=560&q=80" },
  { id:6, name:"Urban Edge",         bg:"#1a1a2e", tags:["dark","urban","graphic"],      photo:"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=400&h=560&q=80" },
  { id:7, name:"Coastal Luxury",     bg:"#a8c5c5", tags:["airy","refined","coastal"],    photo:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&h=560&q=80" },
  { id:8, name:"Vintage Revival",    bg:"#d4a56a", tags:["nostalgic","warm","retro"],    photo:"https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=400&h=560&q=80" },
];

const YOU_NODES  = [
  {label:"minimal", x:48,y:28,r:16,c:"#ff2d78"},
  {label:"earthy",  x:28,y:52,r:13,c:"#ff2d78"},
  {label:"organic", x:62,y:58,r:11,c:"#ff2d78"},
  {label:"warm",    x:44,y:70,r:15,c:"#ff2d78"},
  {label:"refined", x:74,y:38,r:10,c:"#ff2d78"},
  {label:"bohemian",x:20,y:34,r:10,c:"#ff2d78"},
];

const FRIEND_NODES = [
  {label:"minimal", x:54,y:26,r:15,c:"#00f0e0"},
  {label:"coastal", x:70,y:50,r:13,c:"#00f0e0"},
  {label:"organic", x:58,y:64,r:12,c:"#00f0e0"},
  {label:"airy",    x:34,y:44,r:10,c:"#00f0e0"},
  {label:"natural", x:24,y:62,r:14,c:"#00f0e0"},
  {label:"soft",    x:78,y:28,r:9, c:"#00f0e0"},
];

const INIT_MESSAGES = [
  {id:1, text:"omg the linen shirt is giving everything 😭", from:"friend"},
  {id:2, text:"i know!! adding to our overlap zone rn",      from:"you"},
  {id:3, text:"78% crew compatibility makes so much sense",  from:"friend"},
];

const CURSOR_PATH = [
  {x:260,y:380},{x:480,y:240},{x:160,y:420},
  {x:580,y:300},{x:380,y:480},{x:240,y:180},
];

const FRIEND_REPLIES = [
  "i was literally just looking at that 👀",
  "add it to the overlap zone??",
  "okay we need to come back to this",
  "the vibe is SO us honestly",
  "buy it before it sells out!!",
];

const TICKER = [
  "Browse Together","Shop Together","Wander Together",
  "Your Crew Shapes Your Taste","Find Your Overlap",
  "Browse Together","Shop Together","Wander Together",
  "Your Crew Shapes Your Taste","Find Your Overlap",
];

// ── STYLES ────────────────────────────────────────────────────────────────────
const STYLE = `
  ${FONTS}
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #150f34;
    --surface: #1e1944;
    --surface2: #271f50;
    --border: rgba(255,45,150,0.18);
    --text: #f0ebff;
    --muted: rgba(240,235,255,0.58);
    --gold: #ff2d78;
    --amber: #c01255;
    --cream: #f0ebff;
    --teal: #00f0e0;
    --pink: #bf5c95;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'IBM Plex Mono', monospace;
    overflow-x: hidden;
  }

  body::after {
    content: '';
    position: fixed; inset: 0;
    background: repeating-linear-gradient(
      0deg, transparent, transparent 2px,
      rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 4px
    );
    pointer-events: none; z-index: 9999;
  }

  .app { min-height: 100vh; }
  .screen { display: none; min-height: 100vh; }
  .screen.active { display: flex; }

  /* ── LANDING ── */
  .landing {
    flex-direction: column; align-items: center;
    justify-content: center; text-align: center;
    padding: 40px 20px; position: relative; overflow: hidden;
  }
  .landing-bg {
    position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 70% 50% at 50% 60%, rgba(255,45,120,0.14) 0%, transparent 70%),
      radial-gradient(ellipse 40% 40% at 20% 20%, rgba(0,240,224,0.10) 0%, transparent 60%);
  }
  .grid-floor {
    position: absolute; bottom: 0; left: 0; right: 0; height: 45%;
    background-image:
      linear-gradient(rgba(255,45,120,0.18) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,45,120,0.18) 1px, transparent 1px);
    background-size: 60px 60px;
    transform: perspective(400px) rotateX(60deg);
    transform-origin: bottom; pointer-events: none;
  }
  .wordmark { position: relative; z-index: 2; }
  .wm-top {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(64px,16vw,160px); letter-spacing: 0.08em; line-height: 0.85;
    color: var(--gold);
    text-shadow: 0 0 40px rgba(255,45,120,0.7), 0 0 80px rgba(255,45,120,0.3), -4px 4px 0 rgba(0,240,224,0.7);
    animation: glitchIn 0.8s ease both;
  }
  .wm-bot {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(64px,16vw,160px); letter-spacing: 0.08em; line-height: 0.85;
    color: var(--cream); text-shadow: 4px 4px 0 rgba(0,0,0,0.5);
    animation: glitchIn 0.8s 0.1s ease both;
  }
  .wm-sub {
    font-size: clamp(10px,1.5vw,13px); letter-spacing: 0.5em;
    color: var(--gold); text-transform: uppercase; margin-top: 8px; opacity: 0.7;
    animation: fadeUp 1s 0.3s ease both;
  }
  .slogan { margin-top: 32px; position: relative; z-index: 2; animation: fadeUp 1s 0.4s ease both; }
  .slogan-line {
    font-family: 'Crimson Pro', serif; font-size: clamp(16px,3vw,26px);
    font-weight: 300; font-style: italic; color: rgba(240,235,255,0.6); line-height: 1.8;
  }
  .slogan-line span { color: var(--gold); font-style: normal; font-weight: 400; }
  .landing-btns {
    display: flex; flex-direction: column; align-items: center; gap: 12px;
    margin-top: 48px; position: relative; z-index: 2; animation: fadeUp 1s 0.5s ease both;
  }
  .ticker {
    position: absolute; bottom: 0; left: 0; right: 0; overflow: hidden;
    border-top: 1px solid var(--border); padding: 10px 0; z-index: 2;
  }
  .ticker-inner { display: flex; gap: 64px; animation: ticker 20s linear infinite; white-space: nowrap; }
  .ticker-item { font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--muted); flex-shrink: 0; }
  .ticker-item span { color: var(--gold); margin-right: 8px; }
  @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  /* ── BUTTONS ── */
  .btn-gold {
    padding: 16px 56px; background: var(--gold); border: none; color: var(--bg);
    font-family: 'IBM Plex Mono', monospace; font-size: 11px; font-weight: 500;
    letter-spacing: 0.3em; text-transform: uppercase; cursor: pointer;
    transition: all 0.2s; box-shadow: 0 0 30px rgba(255,45,120,0.3), 4px 4px 0 rgba(192,18,85,0.5);
  }
  .btn-gold:hover { transform: translate(-2px,-2px); box-shadow: 0 0 40px rgba(255,45,120,0.5), 6px 6px 0 rgba(192,18,85,0.5); }
  .btn-ghost {
    padding: 14px 56px; background: transparent; border: 1px solid rgba(240,235,255,0.2);
    color: var(--muted); font-family: 'IBM Plex Mono', monospace; font-size: 11px;
    letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer; transition: all 0.2s;
  }
  .btn-ghost:hover { border-color: var(--gold); color: var(--gold); }
  .share-taste-link { background: none; border: none; cursor: pointer; font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(240,235,255,0.35); padding: 6px 0; transition: color 0.2s; }
  .share-taste-link:hover { color: var(--gold); }

  /* ── ONBOARDING ── */
  .onboarding {
    flex-direction: column; align-items: center;
    justify-content: center; padding: 40px 20px; position: relative;
  }
  .ob-header { text-align: center; margin-bottom: 36px; animation: fadeUp 0.6s ease both; }
  .ob-eyebrow { font-size: 10px; letter-spacing: 0.35em; text-transform: uppercase; color: var(--gold); margin-bottom: 10px; }
  .ob-title {
    font-family: 'Bebas Neue', sans-serif; font-size: clamp(32px,8vw,64px);
    letter-spacing: 0.05em; color: var(--cream); line-height: 1;
  }
  .ob-sub { font-family: 'Crimson Pro', serif; font-size: 18px; font-style: italic; color: var(--muted); margin-top: 8px; }

  .progress-track { display: flex; gap: 6px; margin-top: 16px; justify-content: center; }
  .pdot { width: 24px; height: 3px; background: var(--border); transition: all 0.3s; }
  .pdot.done { background: var(--gold); }
  .pdot.now  { background: var(--amber); }

  /* Swipe cards */
  .swipe-wrap { position: relative; width: min(340px,88vw); height: 440px; }
  .swipe-card {
    position: absolute; inset: 0; overflow: hidden; cursor: grab; user-select: none;
    box-shadow: 0 30px 60px rgba(0,0,0,0.7), 6px 6px 0 rgba(255,45,120,0.15);
    border: 1px solid var(--border);
  }
  .swipe-card:active { cursor: grabbing; }
  .card-inner {
    width: 100%; height: 100%; position: relative; overflow: hidden;
    display: flex; flex-direction: column; align-items: center; justify-content: flex-end; padding: 32px;
  }
  .card-photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
  .card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.88) 30%, rgba(0,0,0,0.15) 100%); }
  .card-content { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; width: 100%; }
  .card-lbl { font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 6px; }
  .card-name {
    font-family: 'Bebas Neue', sans-serif; font-size: 34px; letter-spacing: 0.05em;
    color: white; text-align: center; text-shadow: 0 2px 20px rgba(0,0,0,0.8);
  }
  .card-tags { display: flex; gap: 8px; margin-top: 10px; flex-wrap: wrap; justify-content: center; }
  .card-tag { font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.4); border: 1px solid rgba(255,255,255,0.15); padding: 3px 10px; }
  .swipe-btns { display: flex; gap: 40px; margin-top: 32px; animation: fadeUp 0.6s 0.2s ease both; }
  .swipe-btn {
    width: 64px; height: 64px; border: 1px solid var(--border); background: var(--surface);
    display: flex; align-items: center; justify-content: center; cursor: pointer;
    font-size: 22px; transition: all 0.2s;
  }
  .swipe-btn.no:hover  { border-color: var(--pink);  background: rgba(191,92,149,0.1); transform: translate(-2px,-2px); box-shadow: 4px 4px 0 rgba(191,92,149,0.2); }
  .swipe-btn.yes:hover { border-color: var(--gold);  background: rgba(255,45,120,0.1);  transform: translate(-2px,-2px); box-shadow: 4px 4px 0 rgba(255,45,120,0.2); }
  .swipe-hint { font-size: 10px; color: var(--muted); letter-spacing: 0.2em; text-transform: uppercase; margin-top: 14px; }

  /* OR divider + upload CTA */
  .or-divider {
    display: flex; align-items: center; gap: 16px;
    margin-top: 28px; width: min(340px,88vw); animation: fadeUp 0.6s 0.3s ease both;
  }
  .or-line { flex: 1; height: 1px; background: var(--border); }
  .or-text { font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--muted); }
  .upload-cta {
    margin-top: 16px; animation: fadeUp 0.6s 0.4s ease both;
    width: min(340px,88vw); text-align: center;
  }
  .upload-cta-btn {
    width: 100%; padding: 14px; background: transparent;
    border: 1px dashed rgba(255,45,120,0.3); color: var(--gold);
    font-family: 'IBM Plex Mono', monospace; font-size: 11px;
    letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer;
    transition: all 0.2s;
  }
  .upload-cta-btn:hover { border-color: var(--gold); background: rgba(255,45,120,0.05); }

  @keyframes aLeft  { to { transform: translateX(-140%) rotate(-18deg); opacity: 0; } }
  @keyframes aRight { to { transform: translateX(140%)  rotate(18deg);  opacity: 0; } }
  .go-left  { animation: aLeft  0.38s ease forwards !important; }
  .go-right { animation: aRight 0.38s ease forwards !important; }

  /* ── UPLOAD SCREEN ── */
  .upload-screen {
    flex-direction: column; align-items: center;
    justify-content: center; padding: 60px 20px; position: relative;
  }
  .upload-bg {
    position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,45,120,0.05) 0%, transparent 70%);
  }

  .drop-zone {
    position: relative; z-index: 1;
    width: min(560px,90vw); min-height: 280px;
    border: 2px dashed rgba(255,45,120,0.25);
    display: flex; flex-direction: column; align-items: center;
    justify-content: center; padding: 40px; text-align: center;
    cursor: pointer; transition: all 0.25s; background: var(--surface);
  }
  .drop-zone.over { border-color: var(--gold); background: rgba(255,45,120,0.05); }
  .drop-zone input[type=file] { position: absolute; inset: 0; opacity: 0; cursor: pointer; }
  .drop-icon { font-size: 48px; margin-bottom: 16px; opacity: 0.6; }
  .drop-title {
    font-family: 'Bebas Neue', sans-serif; font-size: 28px; letter-spacing: 0.05em; color: var(--cream);
  }
  .drop-sub { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-top: 8px; }
  .drop-hint { font-size: 10px; color: rgba(240,235,255,0.25); margin-top: 12px; letter-spacing: 0.1em; }

  .preview-grid {
    display: flex; gap: 12px; flex-wrap: wrap;
    justify-content: center; margin-top: 24px;
    width: min(560px,90vw); position: relative; z-index: 1;
  }
  .preview-thumb {
    width: 100px; height: 100px; object-fit: cover;
    border: 2px solid var(--border); transition: border-color 0.2s;
  }
  .preview-thumb:hover { border-color: var(--gold); }

  .analyse-btn-wrap { margin-top: 28px; position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; gap: 12px; }

  .analysing-bar {
    width: min(340px,80vw); height: 2px; background: var(--border);
    overflow: hidden; margin-top: 8px;
  }
  .analysing-fill {
    height: 100%; background: var(--gold);
    animation: analyseScroll 1.4s ease infinite;
  }
  @keyframes analyseScroll {
    0%   { width: 0%;   margin-left: 0%; }
    50%  { width: 60%;  margin-left: 20%; }
    100% { width: 0%;   margin-left: 100%; }
  }
  .analysing-label { font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-top: 10px; }

  /* ── TASTE GRAPH ── */
  .taste-screen {
    flex-direction: column; align-items: center;
    padding: 60px 20px 40px; position: relative; overflow: hidden;
  }
  .taste-bg {
    position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,45,120,0.05) 0%, transparent 70%);
  }
  .eyebrow { font-size: 10px; letter-spacing: 0.35em; text-transform: uppercase; color: var(--gold); text-align: center; position: relative; animation: fadeUp 0.5s ease both; }
  .sec-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(32px,7vw,64px); letter-spacing: 0.05em; text-align: center; color: var(--cream); position: relative; margin-top: 8px; animation: fadeUp 0.5s 0.1s ease both; }
  .sec-sub { font-family: 'Crimson Pro', serif; font-size: 18px; font-style: italic; color: var(--muted); text-align: center; position: relative; margin-top: 6px; animation: fadeUp 0.5s 0.15s ease both; }

  .taste-layout { display: flex; align-items: flex-start; gap: 48px; width: 100%; max-width: 960px; margin-top: 20px; }
  .taste-left { display: flex; flex-direction: column; align-items: center; flex: 1 1 auto; }
  .taste-right { display: flex; flex-direction: column; align-items: center; flex: 0 0 300px; padding-top: 60px; }
  .constellation { position: relative; width: min(480px,88vw); height: min(480px,88vw); margin: 0 auto; }

  /* AI summary card */
  .ai-summary {
    position: relative; z-index: 1;
    width: min(520px,90vw); margin: 0 auto 24px;
    padding: 24px 28px; border: 1px solid rgba(255,45,120,0.2);
    background: var(--surface); animation: fadeUp 0.6s 0.3s ease both;
  }
  .ai-summary::before {
    content: '✦ AI ANALYSIS';
    font-size: 8px; letter-spacing: 0.3em; color: var(--gold);
    display: block; margin-bottom: 12px;
  }
  .ai-palette { display: flex; gap: 8px; margin-bottom: 14px; }
  .palette-swatch { width: 28px; height: 28px; border: 1px solid rgba(255,255,255,0.1); }
  .ai-text { font-family: 'Crimson Pro', serif; font-size: 17px; font-style: italic; color: rgba(240,235,255,0.75); line-height: 1.6; }

  .taste-chips { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; max-width: 520px; position: relative; animation: fadeUp 0.6s 0.4s ease both; }
  .taste-chip { padding: 7px 18px; border: 1px solid; font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; font-family: 'IBM Plex Mono', monospace; animation: popIn 0.3s ease both; }

  .compat-card {
    margin: 24px auto; text-align: center; padding: 28px 48px;
    border: 1px solid var(--border); background: var(--surface);
    max-width: 380px; position: relative;
    box-shadow: 6px 6px 0 rgba(255,45,120,0.08); animation: fadeUp 0.6s 0.5s ease both;
  }
  .compat-card::before {
    content: '✦ YOUR RESULTS: ✦';
    position: absolute; top: -8px; left: 50%; transform: translateX(-50%);
    font-size: 8px; letter-spacing: 0.25em; color: var(--gold);
    background: var(--surface); padding: 0 12px; white-space: nowrap;
  }
  .compat-num {
    font-family: 'Bebas Neue', sans-serif; font-size: 88px; color: var(--gold); line-height: 1;
    text-shadow: 0 0 40px rgba(255,45,120,0.6), 0 0 80px rgba(255,45,120,0.25), -4px 4px 0 rgba(0,240,224,0.6); letter-spacing: 0.05em;
  }
  .compat-lbl { font-family: 'Crimson Pro', serif; font-size: 20px; font-style: italic; color: rgba(240,235,255,0.6); margin-top: 4px; }

  /* ── SHOP SCREEN ── */
  .shop-screen { flex-direction: column; }
  .shop-hdr {
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 28px; border-bottom: 1px solid var(--border);
    background: var(--bg); position: sticky; top: 0; z-index: 100; gap: 16px;
  }
  .shop-wm { display: flex; flex-direction: column; line-height: 1; }
  .shop-wm-top { font-family: 'Bebas Neue', sans-serif; font-size: 22px; letter-spacing: 0.12em; color: var(--gold); text-shadow: 0 0 20px rgba(255,45,120,0.7), 0 0 40px rgba(255,45,120,0.3); }
  .shop-wm-bot { font-family: 'Bebas Neue', sans-serif; font-size: 22px; letter-spacing: 0.12em; color: var(--cream); margin-top: -4px; }
  .session-bar {
    display: flex; align-items: center; gap: 14px; padding: 8px 20px;
    border: 1px solid var(--border); background: var(--surface);
    font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted);
  }
  .live-pip { width: 6px; height: 6px; border-radius: 50%; background: var(--teal); box-shadow: 0 0 8px var(--teal); animation: pip 2s ease infinite; }
  @keyframes pip { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.4;transform:scale(0.7);} }
  .crew-av { width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-family: 'Bebas Neue', sans-serif; font-size: 14px; border: 2px solid; }

  .shop-layout { display: grid; grid-template-columns: 1fr 320px; height: calc(100vh - 65px); overflow: hidden; }
  .products-area { padding: 28px; overflow-y: auto; }
  .products-hdr { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 28px; padding-bottom: 16px; border-bottom: 1px solid var(--border); }
  .products-title { font-family: 'Bebas Neue', sans-serif; font-size: 36px; letter-spacing: 0.05em; color: var(--cream); }
  .products-count { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); }
  .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px,1fr)); gap: 16px; }

  .p-card {
    background: var(--surface); border: 1px solid var(--border); cursor: pointer;
    transition: all 0.25s; position: relative; overflow: hidden;
    animation: fadeUp 0.4s ease both;
  }
  .p-card:hover { border-color: rgba(255,45,120,0.3); transform: translate(-2px,-2px); box-shadow: 4px 4px 0 rgba(255,45,120,0.1); }
  .p-card.match { border-color: var(--gold) !important; box-shadow: 0 0 24px rgba(255,45,120,0.15), 4px 4px 0 rgba(255,45,120,0.2) !important; }
  .match-badge { position: absolute; top:0; left:0; right:0; background: var(--gold); color: var(--bg); font-size: 8px; letter-spacing: 0.2em; text-transform: uppercase; padding: 5px 10px; font-family: 'IBM Plex Mono', monospace; font-weight: 500; z-index: 2; }
  .p-img { width: 100%; aspect-ratio: 3/4; object-fit: cover; display: block; }
  .p-img-wrap { position: relative; }
  .p-reactions { position: absolute; bottom: 8px; right: 8px; display: flex; gap: 4px; }
  .react-chip { background: rgba(8,6,26,0.9); border: 1px solid var(--border); padding: 3px 8px; font-size: 11px; animation: popIn 0.3s ease both; }
  .p-info { padding: 14px; }
  .p-brand { font-size: 8px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 4px; }
  .p-name { font-family: 'Crimson Pro', serif; font-size: 18px; font-weight: 400; color: var(--cream); }
  .p-price { font-size: 11px; color: var(--muted); margin-top: 4px; }

  /* ── SIDEBAR ── */
  .sidebar { border-left: 1px solid var(--border); display: flex; flex-direction: column; overflow: hidden; background: var(--surface); }
  .stabs { display: flex; border-bottom: 1px solid var(--border); }
  .stab { flex: 1; padding: 14px 8px; font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); cursor: pointer; border: none; background: transparent; transition: all 0.2s; border-bottom: 2px solid transparent; font-family: 'IBM Plex Mono', monospace; }
  .stab.on { color: var(--gold); border-bottom-color: var(--gold); }
  .stab.teal.on { color: var(--teal); border-bottom-color: var(--teal); }
  .wishlist-empty { text-align:center; color:var(--muted); font-size:11px; padding:32px 16px; line-height:1.6; }
  .wishlist-list { display:flex; flex-direction:column; gap:10px; }
  .wishlist-item { display:flex; align-items:center; gap:10px; padding:8px; border:1px solid var(--border); cursor:pointer; transition:border-color 0.2s; }
  .wishlist-item:hover { border-color:var(--teal); }
  .wishlist-img { width:44px; height:44px; object-fit:cover; flex-shrink:0; }
  .wishlist-info { flex:1; min-width:0; }
  .wishlist-name { font-size:11px; color:var(--cream); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .wishlist-price { font-size:10px; margin-top:2px; }
  .wishlist-remove { background:none; border:none; color:var(--muted); cursor:pointer; font-size:10px; padding:4px; flex-shrink:0; }
  .wishlist-remove:hover { color:var(--gold); }
  .sidebar-body { flex: 1; overflow-y: auto; padding: 20px; }
  .s-section { margin-bottom: 28px; }
  .s-eye { font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--muted); margin-bottom: 14px; display: flex; align-items: center; gap: 10px; }
  .s-eye::after { content: ''; flex: 1; height: 1px; background: var(--border); }
  .mini-const { width: 100%; height: 150px; margin-bottom: 16px; }
  .inline-compat { display: flex; align-items: center; justify-content: space-between; padding: 16px; border: 1px solid var(--border); background: var(--surface2); margin-bottom: 16px; }
  .ic-num { font-family: 'Bebas Neue', sans-serif; font-size: 48px; color: var(--gold); letter-spacing: 0.05em; text-shadow: 0 0 20px rgba(255,45,120,0.6), -3px 3px 0 rgba(0,240,224,0.6); line-height: 1; }
  .ic-lbl { font-size: 8px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); }
  .ic-desc { font-family: 'Crimson Pro', serif; font-size: 16px; font-style: italic; color: var(--cream); margin-top: 2px; }
  .gift-card { padding: 16px; border: 1px solid rgba(255,45,120,0.25); background: rgba(255,45,120,0.04); }
  .gift-card::before { content: '🎁 GIFT UNLOCK'; font-size: 8px; letter-spacing: 0.2em; color: var(--gold); display: block; margin-bottom: 10px; }
  .gift-text { font-family: 'Crimson Pro', serif; font-size: 15px; font-style: italic; color: rgba(240,235,255,0.7); line-height: 1.6; }
  .gift-text strong { color: var(--gold); font-style: normal; }
  .shared-chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .shared-chip { font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; border: 1px solid var(--gold); color: var(--gold); padding: 5px 12px; font-family: 'IBM Plex Mono', monospace; }

  /* ── CHAT ── */
  .chat-wrap { display: flex; flex-direction: column; height: 100%; min-height: 0; }
  .chat-msgs { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; padding-bottom: 4px; }
  .chat-msg { display: flex; gap: 8px; align-items: flex-start; }
  .chat-msg.mine { flex-direction: row-reverse; }
  .chat-av { width: 22px; height: 22px; border: 1.5px solid; display: flex; align-items: center; justify-content: center; font-family: 'Bebas Neue', sans-serif; font-size: 12px; flex-shrink: 0; }
  .chat-bub { max-width: 82%; padding: 9px 13px; border: 1px solid var(--border); background: var(--surface2); font-size: 12px; line-height: 1.5; color: rgba(240,235,255,0.75); }
  .chat-msg.mine .chat-bub { background: rgba(255,45,120,0.06); border-color: rgba(255,45,120,0.2); }
  .chat-row { display: flex; gap: 8px; margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--border); }
  .chat-in { flex: 1; background: var(--surface2); border: 1px solid var(--border); color: var(--text); font-family: 'IBM Plex Mono', monospace; font-size: 11px; padding: 9px 12px; outline: none; transition: border-color 0.2s; }
  .chat-in:focus { border-color: rgba(255,45,120,0.3); }
  .chat-in::placeholder { color: var(--muted); }
  .chat-send { padding: 9px 14px; background: var(--gold); border: none; color: var(--bg); font-family: 'IBM Plex Mono', monospace; font-size: 13px; cursor: pointer; font-weight: 500; transition: all 0.2s; }
  .chat-send:hover { background: var(--amber); }

  /* ── FRIEND CURSOR ── */
  .friend-cursor {
    position: fixed; pointer-events: none; z-index: 998;
    transition: left 1.8s cubic-bezier(0.25,0.46,0.45,0.94), top 1.8s cubic-bezier(0.25,0.46,0.45,0.94);
    display: flex; align-items: center; gap: 6px;
  }
  .cursor-pip { width: 10px; height: 10px; background: var(--teal); box-shadow: 0 0 14px var(--teal); clip-path: polygon(50% 0%,0% 100%,100% 100%); }
  .cursor-name { font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--teal); background: rgba(8,6,26,0.85); padding: 3px 8px; border: 1px solid rgba(0,240,224,0.3); white-space: nowrap; }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
  @keyframes popIn  { from{opacity:0;transform:scale(0.75);} to{opacity:1;transform:scale(1);} }
  @keyframes glitchIn { 0%{opacity:0;transform:translateY(30px) skewX(-5deg);} 60%{opacity:1;transform:translateY(-4px) skewX(1deg);} 100%{opacity:1;transform:translateY(0) skewX(0);} }
  @keyframes nodeIn { from{opacity:0;} to{opacity:1;} }

  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--border); }

  @media (max-width: 768px) {
    .shop-layout { grid-template-columns: 1fr; }
    .sidebar { display: none; }
  }

  /* ── FLOATING TASTE THUMBNAILS (pinned to constellation nodes) ── */
  .constellation-overlay { position:absolute; inset:0; width:100%; height:100%; pointer-events:none; }
  .tp-floating { position:absolute; transform:translate(-50%,-50%); cursor:pointer; z-index:10; animation:popIn 0.4s ease both; }
  .tp-floating:hover { z-index:20; }
  .tp-float-img {
    width:52px; height:52px; border-radius:50%; object-fit:cover; display:block;
    border:2px solid rgba(255,45,120,0.55);
    box-shadow:0 0 14px rgba(255,45,120,0.18), 0 3px 14px rgba(0,0,0,0.65);
    background:var(--surface2); transition:all 0.25s;
  }
  .tp-floating:hover .tp-float-img {
    transform:scale(1.18); border-color:var(--gold);
    box-shadow:0 0 24px rgba(255,45,120,0.4), 0 4px 20px rgba(0,0,0,0.7);
  }
  .tp-float-tooltip {
    position:absolute; bottom:calc(100% + 8px); left:50%; transform:translateX(-50%);
    background:var(--surface); border:1px solid rgba(255,45,120,0.2);
    padding:6px 10px; white-space:nowrap; pointer-events:none;
    opacity:0; transition:opacity 0.18s;
    box-shadow:0 4px 16px rgba(0,0,0,0.5);
  }
  .tp-float-tooltip div:first-child { font-size:9px; letter-spacing:0.15em; text-transform:uppercase; color:var(--cream); }
  .tp-float-tooltip div:last-child  { font-size:10px; color:var(--gold); margin-top:3px; }
  .tp-floating:hover .tp-float-tooltip { opacity:1; }

  /* ── PRODUCT OVERLAY ── */
  .prod-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:1000; display:flex; align-items:center; justify-content:center; padding:20px; animation:fadeIn 0.2s ease; }
  @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
  .prod-overlay-inner { position:relative; width:100%; max-width:720px; }
  .prod-drawer { width:100%; background:var(--surface); border:1px solid rgba(255,45,120,0.2); max-height:85vh; overflow-y:auto; animation:fadeUp 0.28s cubic-bezier(0.22,1,0.36,1); }
  .prod-drawer-inner { display:grid; grid-template-columns:1fr 1fr; }
  @media (max-width:600px) { .prod-drawer-inner { grid-template-columns:1fr; } }
  .prod-big-img { width:100%; height:100%; min-height:320px; object-fit:cover; display:block; }
  .prod-details { padding:36px 32px; display:flex; flex-direction:column; gap:12px; }
  .prod-eyebrow { font-size:8px; letter-spacing:0.3em; text-transform:uppercase; color:var(--gold); }
  .prod-title { font-family:'Bebas Neue',sans-serif; font-size:34px; letter-spacing:0.04em; color:var(--cream); line-height:1.05; }
  .prod-shop-name { font-family:'Crimson Pro',serif; font-size:16px; font-style:italic; color:rgba(240,235,255,0.5); }
  .prod-price-lg { font-family:'Bebas Neue',sans-serif; font-size:30px; color:var(--gold); letter-spacing:0.05em; }
  .prod-tags-row { display:flex; flex-wrap:wrap; gap:6px; }
  .prod-tag { font-size:8px; letter-spacing:0.2em; text-transform:uppercase; border:1px solid var(--border); color:var(--muted); padding:4px 10px; }
  .prod-actions { display:flex; flex-direction:column; gap:8px; margin-top:auto; padding-top:16px; }
  .prod-save-btn { padding:12px; background:transparent; border:1px solid var(--border); color:var(--muted); font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.2em; text-transform:uppercase; cursor:pointer; transition:all 0.2s; }
  .prod-save-btn:hover { border-color:var(--gold); color:var(--gold); }
  .prod-bag-btn { padding:14px; background:var(--gold); border:none; color:var(--bg); font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.25em; text-transform:uppercase; cursor:pointer; transition:all 0.2s; font-weight:500; }
  .prod-bag-btn:hover { background:var(--amber); }
  .prod-bag-btn.added { background:var(--teal); pointer-events:none; }
  .prod-crew-btn { padding:11px; background:transparent; border:1px solid rgba(0,240,224,0.3); color:var(--teal); font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:0.2em; text-transform:uppercase; cursor:pointer; transition:all 0.2s; }
  .prod-crew-btn:hover { background:rgba(0,240,224,0.08); border-color:var(--teal); }
  .prod-close { position:absolute; top:14px; right:14px; background:var(--surface2); border:1px solid var(--border); color:var(--muted); width:34px; height:34px; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:16px; transition:all 0.2s; z-index:2; }
  .prod-close:hover { border-color:var(--gold); color:var(--gold); }

  /* ── PRODUCT TABS (shop screen) ── */
  .ptabs { display:flex; border-bottom:1px solid var(--border); margin-bottom:20px; }
  .ptab { padding:10px 20px; font-size:9px; letter-spacing:0.2em; text-transform:uppercase; color:var(--muted); background:transparent; border:none; border-bottom:2px solid transparent; cursor:pointer; font-family:'IBM Plex Mono',monospace; transition:all 0.2s; }
  .ptab.on { color:var(--gold); border-bottom-color:var(--gold); }
  .ptab.teal.on { color:var(--teal); border-bottom-color:var(--teal); }
  .sm-badge { position:absolute; top:0; left:0; right:0; background:var(--teal); color:var(--bg); font-size:7px; letter-spacing:0.2em; text-transform:uppercase; padding:5px 10px; font-family:'IBM Plex Mono',monospace; font-weight:500; z-index:2; }

  /* ── CREW DISCOVERY SIDEBAR ── */
  .crew-member-card { display:flex; align-items:center; gap:12px; padding:14px; border:1px solid var(--border); background:var(--surface2); margin-bottom:10px; cursor:pointer; transition:all 0.25s; position:relative; overflow:hidden; }
  .crew-member-card:hover { border-color:rgba(255,45,120,0.25); transform:translate(-1px,-1px); }
  .crew-member-card.active-crew { border-color:var(--teal); box-shadow:0 0 16px rgba(0,240,224,0.1); }
  .crew-av-lg { width:40px; height:40px; border:2px solid; display:flex; align-items:center; justify-content:center; font-family:'Bebas Neue',sans-serif; font-size:20px; flex-shrink:0; }
  .crew-info { flex:1; min-width:0; }
  .crew-name { font-family:'Bebas Neue',sans-serif; font-size:18px; letter-spacing:0.05em; color:var(--cream); line-height:1; }
  .crew-aesthetic { font-size:8px; letter-spacing:0.2em; text-transform:uppercase; color:var(--muted); margin-top:3px; }
  .crew-compat-row { display:flex; align-items:center; gap:8px; margin-top:6px; }
  .crew-compat-track { flex:1; height:2px; background:var(--border); position:relative; }
  .crew-compat-fill { position:absolute; top:0; left:0; height:100%; transition:width 1s ease; }
  .crew-pct { font-family:'Bebas Neue',sans-serif; font-size:18px; line-height:1; flex-shrink:0; }
  .crew-live-dot { width:6px; height:6px; border-radius:50%; box-shadow:0 0 8px; animation:pip 2s ease infinite; flex-shrink:0; }
  .crew-tags-mini { display:flex; flex-wrap:wrap; gap:5px; margin-top:6px; }
  .crew-tag-mini { font-size:7px; padding:3px 8px; border:1px solid rgba(255,255,255,0.1); color:var(--muted); letter-spacing:0.15em; text-transform:uppercase; }
  .crew-browse-btn { margin-top:8px; width:100%; padding:9px; background:var(--surface); border:1px solid; font-family:'IBM Plex Mono',monospace; font-size:8px; letter-spacing:0.2em; text-transform:uppercase; cursor:pointer; transition:all 0.2s; }
  .crew-browse-btn:hover { opacity:0.8; }
  .crew-find-section { margin-top:16px; padding-top:14px; border-top:1px solid var(--border); }
  .crew-find-desc { font-family:'Crimson Pro',serif; font-size:14px; font-style:italic; color:var(--muted); margin-bottom:12px; line-height:1.5; }
  .crew-find-btn { width:100%; padding:12px; background:transparent; border:1px solid rgba(255,45,120,0.25); color:var(--gold); font-family:'IBM Plex Mono',monospace; font-size:9px; letter-spacing:0.25em; text-transform:uppercase; cursor:pointer; transition:all 0.2s; }
  .crew-find-btn:hover { background:rgba(255,45,120,0.05); border-color:var(--gold); }
  .crew-count-badge { display:inline-flex; align-items:center; gap:6px; padding:4px 12px; border:1px solid rgba(0,240,224,0.3); color:var(--teal); font-size:8px; letter-spacing:0.2em; text-transform:uppercase; margin-top:10px; }
  .crew-count-pip { width:5px; height:5px; border-radius:50%; background:var(--teal); box-shadow:0 0 6px var(--teal); animation:pip 2s ease infinite; }

  /* ── SHOWROOM 3D — cosy boutique ── */
  .sr-overlay {
    position:fixed; inset:0; z-index:500; overflow:hidden;
    background:#f5f0d8;
    perspective:1400px; perspective-origin:50% 38%;
    animation:srFadeIn 0.5s ease both;
  }
  @keyframes srFadeIn { from{opacity:0;} to{opacity:1;} }

  .sr-room {
    position:absolute; inset:0;
    transform-style:preserve-3d;
  }

  /* ── FLOOR — polished light tiles ── */
  .sr-floor {
    position:absolute; bottom:0;
    left:-50vw; width:200vw; height:900px;
    transform-origin:bottom center;
    transform:rotateX(90deg);
    overflow:hidden;
  }
  .sr-floor-grid { position:absolute; inset:0; background-size:80px 80px; }
  .sr-floor-sheen {
    position:absolute; inset:0;
    background:linear-gradient(to top, rgba(240,232,204,0.72) 0%, transparent 55%);
  }
  .sr-floor-spot {
    position:absolute; bottom:0; transform:translateX(-50%);
    width:220px; height:200px; pointer-events:none;
  }

  /* ── CEILING — white with black track lighting ── */
  .sr-ceiling {
    position:absolute; top:0;
    left:-50vw; width:200vw; height:900px;
    transform-origin:top center;
    transform:rotateX(-90deg);
    background:#f7f4e8;
    overflow:hidden;
  }
  .sr-track-rail {
    position:absolute; top:14px; left:5%; right:5%; height:3px;
    background:#1a1a1a; border-radius:2px;
  }
  .sr-light {
    position:absolute; top:0; transform:translateX(-50%);
    display:flex; flex-direction:column; align-items:center;
    pointer-events:none;
  }
  .sr-light-stem { width:2px; height:16px; background:#1a1a1a; }
  .sr-light-bulb { width:9px; height:9px; border-radius:50%; flex-shrink:0; background:#fff9e8; }
  .sr-light-cone {
    width:300px; height:650px; margin-left:-150px; margin-top:-1px;
    clip-path:polygon(44% 0%,56% 0%,100% 100%,0% 100%);
  }

  /* ── SIDE WALLS — warm light grey ── */
  .sr-left-wall {
    position:absolute; top:0; left:0;
    width:900px; height:100vh;
    transform-origin:left center;
    transform:rotateY(90deg);
    background:linear-gradient(170deg,#f2e8c4 0%,#e8d8a8 100%);
    overflow:visible; transform-style:preserve-3d;
  }
  .sr-right-wall {
    position:absolute; top:0; right:0;
    width:900px; height:100vh;
    transform-origin:right center;
    transform:rotateY(-90deg);
    background:linear-gradient(190deg,#f2e8c4 0%,#e8d8a8 100%);
    overflow:visible; transform-style:preserve-3d;
  }
  .sr-left-wall::before, .sr-right-wall::before, .sr-back-wall-face::before {
    content:''; position:absolute; top:0; left:0; right:0; height:5px;
    background:#d8cc98; border-bottom:1px solid #c8bc80;
  }
  .sr-left-wall::after, .sr-right-wall::after, .sr-back-wall-face::after {
    content:''; position:absolute; bottom:0; left:0; right:0; height:5px;
    background:#d8cc98; border-top:1px solid #c8bc80;
  }

  /* ── CLOTHING RAIL (left wall) ── */
  .sr-clothing-rail-bar {
    position:absolute; top:38%; left:70px; right:70px;
    height:4px; background:#1a1a1a; border-radius:2px; z-index:1;
  }
  .sr-clothing-rail-bar::before { content:''; position:absolute; left:-6px; top:-3px; width:10px; height:10px; border-radius:50%; background:#1a1a1a; }
  .sr-clothing-rail-bar::after  { content:''; position:absolute; right:-6px; top:-3px; width:10px; height:10px; border-radius:50%; background:#1a1a1a; }

  /* ── DISPLAY SHELF (right wall) ── */
  .sr-wall-shelf-bar {
    position:absolute; top:46%; left:60px; right:60px;
    height:5px; background:#b8b5ae; border-radius:1px; z-index:1;
    box-shadow:0 3px 8px rgba(0,0,0,0.14);
  }
  .sr-shelf-bracket {
    position:absolute; top:0; width:14px; height:20px;
    border-right:3px solid #999793; border-bottom:3px solid #999793;
  }
  .sr-shelf-bracket-l { left:44px; }
  .sr-shelf-bracket-r { right:44px; }

  /* ── RACK SUPPORT POLES (left wall) ── */
  .sr-rack-pole {
    position:absolute; top:38%; width:5px; height:57%;
    background:linear-gradient(to right,#1c1c1c,#4a4a4a,#1c1c1c);
    border-radius:2px; z-index:2;
    animation:srFadeIn 0.5s 0.15s ease both;
  }
  .sr-rack-pole::before {
    content:''; position:absolute; bottom:8px; left:-11px;
    width:27px; height:5px; background:#1c1c1c; border-radius:2px;
  }
  .sr-rack-pole::after {
    content:''; position:absolute; bottom:0; left:-18px;
    width:41px; height:4px; background:#111; border-radius:3px;
  }

  /* ── FITTING ROOM (right wall, back corner) ── */
  .sr-fitting-room {
    position:absolute; left:28px; bottom:0; width:200px; height:80%;
    z-index:3; animation:srFadeIn 0.6s 0.2s ease both;
  }
  .sr-fitting-room-sign {
    position:absolute; top:-26px; left:0; right:0;
    display:flex; align-items:center; justify-content:center; gap:6px;
    font-family:'IBM Plex Mono',monospace; font-size:6.5px;
    letter-spacing:0.32em; text-transform:uppercase; color:#888;
    padding:4px 8px; border:1px solid #d0c890; background:#f5f0d8;
    white-space:nowrap;
  }
  .sr-fitting-curtain-rod {
    position:absolute; top:0; left:0; right:0; height:4px;
    background:linear-gradient(to right,#1a1a1a,#555,#1a1a1a); border-radius:2px;
  }
  .sr-fitting-curtain-rod::before {
    content:''; position:absolute; left:-5px; top:-4px; width:13px; height:13px;
    border-radius:50%; background:#1a1a1a;
  }
  .sr-fitting-curtain-rod::after {
    content:''; position:absolute; right:-5px; top:-4px; width:13px; height:13px;
    border-radius:50%; background:#1a1a1a;
  }
  .sr-fitting-curtain {
    position:absolute; top:4px; left:0; width:62%; bottom:0;
    background:
      repeating-linear-gradient(to right,
        rgba(255,255,255,0.22) 0px, transparent 3px,
        rgba(0,0,0,0.06) 6px, transparent 11px,
        rgba(255,255,255,0.15) 14px, transparent 19px
      ),
      linear-gradient(170deg,#ddd6c8 0%,#c8bfb0 55%,#d6cfc2 100%);
    border-left:3px solid #b0a898; border-bottom:3px solid #a8a090;
  }
  .sr-fitting-room-wall {
    position:absolute; top:4px; left:0; right:0; bottom:0;
    border-left:3px solid #c0bdb6; border-right:3px solid #c0bdb6;
    border-bottom:3px solid #c0bdb6;
  }
  /* ── FULL-LENGTH MIRROR (beside fitting room) ── */
  .sr-fitting-mirror {
    position:absolute; left:238px; top:22%; width:48px; bottom:12%;
    background:linear-gradient(145deg,
      rgba(255,255,255,0.88) 0%, rgba(215,225,238,0.7) 35%,
      rgba(245,250,255,0.82) 60%, rgba(200,215,230,0.65) 85%,
      rgba(255,255,255,0.8) 100%
    );
    border:3px solid #1a1a1a;
    box-shadow:0 0 0 1px rgba(255,255,255,0.4) inset, 0 5px 14px rgba(0,0,0,0.18);
    z-index:2; animation:srFadeIn 0.6s 0.25s ease both;
  }
  .sr-fitting-mirror::before {
    content:''; position:absolute; top:8px; left:6px; width:7px; height:52%;
    background:linear-gradient(to right,rgba(255,255,255,0.85),transparent);
    border-radius:3px;
  }

  /* ── COUCH (back wall) ── */
  .sr-couch {
    position:absolute; bottom:7%; left:50%; transform:translateX(-50%);
    width:320px; animation:fadeUp 0.85s 0.45s ease both;
  }
  .sr-couch-inner { position:relative; }
  .sr-couch-arm {
    position:absolute; top:0; width:26px; height:118px;
    background:linear-gradient(to right,#9a8a60,#b8a878,#a09068);
    border-radius:5px; box-shadow:2px 4px 10px rgba(0,0,0,0.16); z-index:2;
  }
  .sr-couch-arm-l { left:0; border-radius:6px 4px 4px 6px; }
  .sr-couch-arm-r { right:0; border-radius:4px 6px 6px 4px; }
  .sr-couch-body { margin:0 26px; display:flex; flex-direction:column; }
  .sr-couch-back {
    display:flex; gap:4px; padding:8px 4px 0; height:66px;
    border-radius:4px 4px 0 0;
    background:linear-gradient(to bottom,#c8b888 0%,#b0a070 100%);
  }
  .sr-couch-back-cushion {
    flex:1; height:100%;
    background:linear-gradient(135deg,#d8c898 0%,#c0b078 65%,#b0a068 100%);
    border-radius:3px 3px 0 0;
    box-shadow:inset 0 3px 8px rgba(255,255,255,0.2);
  }
  .sr-couch-seat {
    display:flex; gap:4px; padding:4px; height:52px;
    background:linear-gradient(to bottom,#b8a878 0%,#a09060 100%);
    box-shadow:0 10px 24px rgba(0,0,0,0.18),0 4px 8px rgba(0,0,0,0.1);
  }
  .sr-couch-seat-cushion {
    flex:1; height:100%;
    background:linear-gradient(135deg,#c8b888 0%,#b0a068 60%,#a09060 100%);
    border-radius:2px;
    box-shadow:inset 0 -3px 6px rgba(0,0,0,0.1);
  }
  .sr-couch-legs { display:flex; justify-content:space-between; padding:0 36px; }
  .sr-couch-leg { width:9px; height:13px; background:#7a6848; border-radius:0 0 3px 3px; }
  .sr-pillow {
    position:absolute; top:14px; width:30px; height:28px;
    border-radius:4px; box-shadow:1px 2px 6px rgba(0,0,0,0.14);
    border:1px solid rgba(255,255,255,0.35);
  }
  /* ── SIDE TABLE (beside couch) ── */
  .sr-side-table {
    position:absolute; bottom:7%; left:calc(50% + 194px);
    width:58px; animation:fadeUp 0.85s 0.5s ease both;
  }
  .sr-side-table-top {
    height:6px; width:64px; margin-left:-3px;
    background:linear-gradient(to right,#b8a868,#d0bc88,#b8a868);
    border-radius:50%; box-shadow:0 2px 8px rgba(0,0,0,0.16);
  }
  .sr-side-table-stem { width:5px; height:40px; background:#a09060; margin:0 auto; border-radius:1px; }
  .sr-side-table-base { height:4px; width:40px; background:#9a8858; margin:0 auto; border-radius:50%; }
  .sr-table-plant {
    width:20px; height:24px;
    background:radial-gradient(ellipse at 40% 25%,#8abd50,#3a7020);
    border-radius:55% 55% 35% 35%; margin:0 auto 2px;
  }
  /* ── FLOOR RUG ── */
  .sr-floor-rug {
    position:absolute; bottom:18%; left:20%; width:58%; height:32%;
    border-radius:6px;
    background:linear-gradient(135deg,rgba(172,148,100,0.34) 0%,rgba(152,128,78,0.26) 50%,rgba(172,148,100,0.3) 100%);
    border:2px solid rgba(152,126,76,0.3);
    box-shadow:inset 0 0 22px rgba(0,0,0,0.04);
  }
  /* ── 3D COUCH DEPTH FACES ── */
  .sr-couch-seat-top {
    position:absolute; top:0; left:0; right:0; height:44px;
    background:linear-gradient(to top,#c8b888 0%,#b8a870 100%);
    transform-origin:top center; transform:rotateX(-90deg);
  }
  .sr-couch-back-top {
    position:absolute; top:0; left:0; right:0; height:18px;
    background:linear-gradient(to top,#c0b07a 0%,#b0a068 100%);
    transform-origin:top center; transform:rotateX(-90deg);
    border-radius:4px 4px 0 0;
  }
  .sr-couch-arm-top {
    position:absolute; top:0; left:0; right:0; height:36px;
    background:linear-gradient(to top,#b0a068,#c0b078);
    transform-origin:top center; transform:rotateX(-90deg);
    border-radius:5px 5px 0 0;
  }

  /* ── BACK WALL ── */
  .sr-back-wall-face {
    position:absolute; top:0; left:0;
    width:100vw; height:100vh;
    transform:translateZ(-900px);
    background:#ede0b0;
    overflow:visible; transform-style:preserve-3d;
    display:flex; flex-direction:column;
    align-items:center; padding-top:48px;
  }
  .sr-back-atm { position:absolute; inset:0; pointer-events:none; }
  .sr-store-sign {
    position:relative; display:flex; flex-direction:column; align-items:center;
    gap:4px; margin-bottom:14px;
    animation:fadeUp 0.9s 0.25s ease both;
  }
  .sr-sign-type {
    font-size:9px; letter-spacing:0.45em; text-transform:uppercase;
    font-family:'IBM Plex Mono',monospace; color:#888;
  }
  .sr-sign-name {
    font-family:'Bebas Neue',sans-serif; font-size:clamp(30px,5vw,80px);
    letter-spacing:0.06em; line-height:1; color:#1a1a1a;
  }
  .sr-sign-rule {
    width:48px; height:1px; background:#1a1a1a; margin-top:7px; opacity:0.25;
  }
  .sr-tag-cloud {
    display:flex; flex-wrap:wrap; gap:7px; justify-content:center;
    max-width:460px; margin-top:10px;
    animation:fadeUp 0.9s 0.4s ease both;
  }
  .sr-tag {
    font-size:7px; letter-spacing:0.28em; text-transform:uppercase;
    border:1px solid; padding:4px 12px; font-family:'IBM Plex Mono',monospace;
    background:rgba(255,255,255,0.55); animation:popIn 0.4s ease both;
  }

  /* ── DISPLAY TABLE (back wall) ── */
  .sr-display-table {
    position:absolute; bottom:9%; left:50%; transform:translateX(-50%);
    width:440px;
    animation:fadeUp 0.8s 0.35s ease both;
  }
  .sr-display-table-items {
    display:flex; gap:26px; justify-content:center; align-items:flex-end;
    padding:0 20px 10px;
  }
  .sr-display-table-top {
    height:8px; background:#bfbcb4;
    border-top:2px solid #a8a59e; border-radius:1px;
  }
  .sr-display-table-legs {
    display:flex; justify-content:space-between; padding:0 44px;
  }
  .sr-display-table-leg { width:5px; height:38px; background:#b0ada6; }

  /* ── HANGER ITEM (clothing rail) ── */
  .sr-hanger-item {
    position:absolute; top:calc(38% + 4px);
    transform:translateX(-50%);
    display:flex; flex-direction:column; align-items:center;
    cursor:pointer; animation:srFrameIn 0.5s ease both;
    transition:transform 0.22s ease; transform-style:preserve-3d;
  }
  .sr-hanger-item:hover { transform:translateX(-50%) translateY(-6px) scale(1.04); }
  .sr-hanger-hook { width:6px; height:12px; border:2px solid #1a1a1a; border-bottom:none; border-radius:4px 4px 0 0; }
  .sr-hanger-neck { width:2px; height:8px; background:#1a1a1a; }
  .sr-hanger-bar  { width:58px; height:2px; background:#2a2a2a; }
  .sr-garment-wrap {
    width:84px; height:104px; overflow:hidden; border-radius:1px;
    box-shadow:0 6px 18px rgba(0,0,0,0.13); transform:translateZ(18px);
  }
  .sr-garment-wrap img { width:100%; height:100%; object-fit:cover; display:block; }

  /* ── SHELF ITEM (display shelf) ── */
  .sr-shelf-item {
    position:absolute; transform:translateX(-50%);
    bottom:calc(100vh - 46% + 5px);
    display:flex; flex-direction:column; align-items:center;
    cursor:pointer; animation:srFrameIn 0.5s ease both;
    transition:transform 0.22s ease; transform-style:preserve-3d;
  }
  .sr-shelf-item:hover { transform:translateX(-50%) translateY(-6px) scale(1.04); }
  .sr-shelf-img-wrap {
    width:76px; height:90px; overflow:hidden; border-radius:2px;
    box-shadow:0 5px 14px rgba(0,0,0,0.11); background:#fff; transform:translateZ(14px);
  }
  .sr-shelf-img-wrap img { width:100%; height:100%; object-fit:cover; display:block; }

  /* ── TABLE ITEM (back wall display) ── */
  .sr-table-item {
    display:flex; flex-direction:column; align-items:center;
    cursor:pointer; animation:srFrameIn 0.55s ease both;
    transition:transform 0.22s ease;
  }
  .sr-table-item:hover { transform:translateY(-6px) scale(1.05); }
  .sr-table-img-wrap {
    width:84px; height:98px; overflow:hidden; border-radius:2px;
    box-shadow:0 8px 22px rgba(0,0,0,0.13); background:#fff;
  }
  .sr-table-img-wrap img { width:100%; height:100%; object-fit:cover; display:block; }

  /* ── PRICE TAG ── */
  .sr-price-tag {
    background:#fff; border:1px solid #e0ddd8; border-radius:1px;
    padding:4px 8px; margin-top:7px;
    transform:rotate(-2.5deg);
    box-shadow:0 1px 4px rgba(0,0,0,0.08);
    text-align:center; position:relative;
  }
  .sr-price-tag::before {
    content:''; position:absolute; top:-6px; left:50%; transform:translateX(-50%);
    width:1px; height:6px; background:#bbb;
  }
  .sr-pt-name {
    font-family:'IBM Plex Mono',monospace; font-size:7px; color:#777;
    display:block; max-width:72px;
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis; letter-spacing:0.04em;
  }
  .sr-pt-price {
    font-family:'IBM Plex Mono',monospace; font-size:11px; color:#1a1a1a;
    display:block; font-weight:500; letter-spacing:0.04em;
  }

  @keyframes srFrameIn {
    from{opacity:0;transform:translateY(16px) scale(0.9);}
    to  {opacity:1;transform:translateY(0) scale(1);}
  }

  /* ── NAV ARROWS ── */
  .sr-nav {
    position:absolute; top:50%; z-index:10; transform:translateY(-50%);
    width:44px; height:80px;
    background:rgba(255,255,255,0.88); border:1px solid rgba(0,0,0,0.1);
    color:rgba(0,0,0,0.3); font-size:28px;
    display:flex; align-items:center; justify-content:center;
    cursor:pointer; transition:all 0.2s; pointer-events:all; font-family:serif;
    user-select:none; backdrop-filter:blur(4px);
  }
  .sr-nav:hover { background:#fff; color:#1a1a1a; border-color:rgba(0,0,0,0.22); }
  .sr-nav-l { left:10px; }
  .sr-nav-r { right:10px; }

  /* ── HUD ── */
  .sr-hud-top {
    position:absolute; top:0; left:0; right:0; z-index:10;
    display:flex; align-items:center; justify-content:space-between;
    padding:18px 32px;
    background:linear-gradient(to bottom,rgba(245,240,216,0.96) 0%,transparent 100%);
    pointer-events:none;
  }
  .sr-hud-top button { pointer-events:all; }
  .sr-hud-left { display:flex; flex-direction:column; gap:2px; }
  .sr-hud-eyebrow { font-size:9px; letter-spacing:0.35em; text-transform:uppercase; color:#888; }
  .sr-hud-name { font-family:'Bebas Neue',sans-serif; font-size:20px; letter-spacing:0.08em; color:#1a1a1a; }
  .sr-exit-btn {
    padding:9px 20px; background:#fffdf0; border:1px solid #ddd;
    color:#555; font-family:'IBM Plex Mono',monospace; font-size:9px;
    letter-spacing:0.2em; text-transform:uppercase; cursor:pointer; transition:all 0.2s;
    box-shadow:0 1px 3px rgba(0,0,0,0.07);
  }
  .sr-exit-btn:hover { border-color:#1a1a1a; color:#1a1a1a; }
  .sr-hud-bottom {
    position:absolute; bottom:0; left:0; right:0; z-index:10;
    display:flex; align-items:center; justify-content:space-between;
    padding:12px 32px;
    background:linear-gradient(to top,rgba(245,240,216,0.96) 0%,transparent 100%);
    pointer-events:none;
  }
  .sr-hint { font-size:9px; letter-spacing:0.22em; text-transform:uppercase; color:#aaa; }
  .sr-count { font-family:'Bebas Neue',sans-serif; font-size:18px; letter-spacing:0.1em; color:#1a1a1a; }

  /* ── SHOWROOM ENTRY BUTTONS ── */
  .sr-enter-btn {
    padding:9px 22px; background:transparent; border:1px solid rgba(255,45,120,0.25);
    color:var(--gold); font-family:'IBM Plex Mono',monospace;
    font-size:9px; letter-spacing:0.25em; text-transform:uppercase;
    cursor:pointer; transition:all 0.2s; display:inline-flex; align-items:center; gap:7px;
  }
  .sr-enter-btn:hover { background:rgba(255,45,120,0.06); border-color:var(--gold); }
  .sr-enter-btn-teal { border-color:rgba(74,184,160,0.25); color:var(--teal); }
  .sr-enter-btn-teal:hover { background:rgba(74,184,160,0.06); border-color:var(--teal); }
`;

// ── CONSTELLATION ─────────────────────────────────────────────────────────────
function Constellation({ nodesA, nodesB = [], showBoth = false, w = 480 }) {
  const toXY = n => ({ x:(n.x/100)*w, y:(n.y/100)*w });
  const overlap = showBoth ? nodesA.filter(a => nodesB.some(b => b.label === a.label)) : [];

  return (
    <svg viewBox={`0 0 ${w} ${w}`} style={{width:"100%",height:"100%"}}>
      {Array.from({length:35}).map((_,i)=>(
        <circle key={i}
          cx={(Math.sin(i*137.5)*0.5+0.5)*w}
          cy={(Math.cos(i*97.3)*0.5+0.5)*w}
          r={i%5===0?1.2:0.6} fill="rgba(240,235,255,0.12)" />
      ))}
      {overlap.map((a,i)=>{
        const b=nodesB.find(n=>n.label===a.label);
        const pa=toXY(a),pb=toXY(b);
        return <line key={i} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
          stroke="rgba(255,45,120,0.45)" strokeWidth="1.5" strokeDasharray="5 4"/>;
      })}
      {nodesA.map((a,i)=>nodesA.slice(i+1).map((b,j)=>{
        const pa=toXY(a),pb=toXY(b),d=Math.hypot(pa.x-pb.x,pa.y-pb.y);
        if(d>155)return null;
        return <line key={`y${i}-${j}`} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
          stroke="rgba(255,45,120,0.1)" strokeWidth="1"/>;
      }))}
      {showBoth&&nodesB.map((a,i)=>nodesB.slice(i+1).map((b,j)=>{
        const pa=toXY(a),pb=toXY(b),d=Math.hypot(pa.x-pb.x,pa.y-pb.y);
        if(d>155)return null;
        return <line key={`f${i}-${j}`} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
          stroke="rgba(0,240,224,0.1)" strokeWidth="1"/>;
      }))}
      {nodesA.map((n,i)=>{
        const {x,y}=toXY(n);
        return(
          <g key={i} style={{animation:`nodeIn 0.4s ${i*0.08}s ease both`}}>
            <circle cx={x} cy={y} r={n.r+10} fill={`${n.c}10`}/>
            <circle cx={x} cy={y} r={n.r} fill={`${n.c}22`} stroke={n.c} strokeWidth="1.5"/>
            <text x={x} y={y+n.r+13} textAnchor="middle"
              fill={n.c} fontSize="8" fontFamily="IBM Plex Mono" letterSpacing="1.5">
              {n.label.toUpperCase()}
            </text>
          </g>
        );
      })}
      {showBoth&&nodesB.map((n,i)=>{
        const {x,y}=toXY(n);
        return(
          <g key={i} style={{animation:`nodeIn 0.4s ${(nodesA.length+i)*0.08}s ease both`}}>
            <circle cx={x} cy={y} r={n.r+10} fill={`${n.c}10`}/>
            <circle cx={x} cy={y} r={n.r} fill={`${n.c}18`} stroke={n.c} strokeWidth="1.5" strokeDasharray="4 3"/>
            <text x={x} y={y+n.r+13} textAnchor="middle"
              fill={n.c} fontSize="8" fontFamily="IBM Plex Mono" letterSpacing="1.5">
              {n.label.toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────
export default function SocialArcade() {
  const [screen, setScreen]         = useState("landing");
  const [swipeIdx, setSwipeIdx]     = useState(0);
  const [liked, setLiked]           = useState([]);
  const [swipeAnim, setSwipeAnim]   = useState(null);
  const [sideTab, setSideTab]       = useState("overlap");
  const [messages, setMessages]     = useState(INIT_MESSAGES);
  const [chatInput, setChatInput]   = useState("");
  const [cursorIdx, setCursorIdx]   = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImgs, setUploadedImgs] = useState([]);
  const [analysing, setAnalysing]   = useState(false);
  const [aiResult, setAiResult]     = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedToBag, setAddedToBag]   = useState(false);
  const [wishlist, setWishlist]       = useState([]);
  const [bag, setBag]                 = useState([]);
  const [productTab, setProductTab]   = useState("all");
  const [activeCrew, setActiveCrew]   = useState("maya");
  const [requestedCrew, setRequestedCrew] = useState([]);
  const [showGraphProducts, setShowGraphProducts] = useState(false);
  const [showroom, setShowroom]       = useState(null);
  const [compatPct]                   = useState(() => Math.floor(Math.random() * 9) + 75);
  const msgEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Friend cursor movement
  useEffect(() => {
    if (screen !== "shop") return;
    const t = setInterval(() => setCursorIdx(i => (i+1) % CURSOR_PATH.length), 2000);
    return () => clearInterval(t);
  }, [screen]);

  // Scroll chat to bottom
  useEffect(() => {
    msgEndRef.current?.scrollIntoView({behavior:"smooth"});
  }, [messages]);

  // ── SWIPE ──
  const doSwipe = dir => {
    setSwipeAnim(dir==="right" ? "go-right" : "go-left");
    if (dir==="right") setLiked(p => [...p, SWIPE_ITEMS[swipeIdx]]);
    setTimeout(() => {
      setSwipeAnim(null);
      if (swipeIdx+1 >= SWIPE_ITEMS.length) setScreen("taste");
      else setSwipeIdx(p => p+1);
    }, 380);
  };

  // ── IMAGE HANDLING ──
  const readFileAsBase64 = file => new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => res(reader.result);
    reader.onerror = rej;
    reader.readAsDataURL(file);
  });

  const handleFiles = async files => {
    const imageFiles = Array.from(files).filter(f => f.type.startsWith("image/")).slice(0, 6);
    if (!imageFiles.length) return;
    const base64s = await Promise.all(imageFiles.map(readFileAsBase64));
    setUploadedImgs(base64s);
  };

  const handleDrop = e => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleAnalyse = async () => {
    if (!uploadedImgs.length) return;
    setAnalysing(true);
    try {
      const result = await analyseImagesWithClaude(uploadedImgs);
      setAiResult(result);
      setScreen("taste");
    } catch (err) {
      console.error("Analysis failed:", err);
      // Fallback to taste screen anyway
      setScreen("taste");
    } finally {
      setAnalysing(false);
    }
  };

  // ── PRODUCT DETAIL ──
  const openProduct = (product) => {
    setSelectedProduct(product);
    setAddedToBag(false);
  };

  const handleAddToBag = () => {
    setAddedToBag(true);
    setBag(b => b.some(x => x.id === selectedProduct.id) ? b : [...b, selectedProduct]);
  };

  const handleShareWithCrew = () => {
    if (!selectedProduct) return;
    setMessages(p => [...p, {
      id: Date.now(),
      text: `just found this — ${selectedProduct.name} from ${selectedProduct.shop || selectedProduct.brand} ${selectedProduct.price} 👀`,
      from: "you"
    }]);
    setTimeout(() => {
      setMessages(p => [...p, {
        id: Date.now()+1,
        text: FRIEND_REPLIES[Math.floor(Math.random()*FRIEND_REPLIES.length)],
        from: "friend"
      }]);
    }, 900);
    setSelectedProduct(null);
    if (screen !== "shop") setScreen("shop");
    setSideTab("chat");
  };

  // ── CHAT ──
  const sendMsg = () => {
    if (!chatInput.trim()) return;
    setMessages(p => [...p, {id:Date.now(), text:chatInput, from:"you"}]);
    setChatInput("");
    setTimeout(() => {
      setMessages(p => [...p, {
        id: Date.now()+1,
        text: FRIEND_REPLIES[Math.floor(Math.random()*FRIEND_REPLIES.length)],
        from: "friend"
      }]);
    }, 1100);
  };

  // Derive taste tags + nodes
  const swipeTags  = [...new Set(liked.flatMap(i => i.tags))];
  const activeTags = aiResult?.tags || (swipeTags.length ? swipeTags : ["minimal","earthy","organic","warm","refined"]);
  const crewType   = aiResult?.crewType || "Warm Minimalist";
  const aiSummary  = aiResult?.summary || null;
  const aiPalette  = aiResult?.palette || [];

  // Build dynamic constellation nodes from active tags
  const COLOURS = ["#ff2d78","#00f0e0","#ff00cc","#c8a8f0","#00d4ff","#ff8aaa"];
  const dynamicNodes = activeTags.map((tag, i) => ({
    label: tag,
    x: 20 + (i * 47 + 15) % 65,
    y: 25 + (i * 31 + 20) % 55,
    r: 10 + (i % 3) * 3,
    c: "#e8b84b",
  }));

  // Map each taste product to its closest matching constellation node + thumbnail position
  const activeNodes = aiResult ? dynamicNodes : YOU_NODES;

  // Sort products by how many of their tags match the user's active tags (most relevant first)
  const sortedTasteProducts = [...TASTE_PRODUCTS].sort((a, b) => {
    const aScore = a.tags.filter(t => activeTags.includes(t)).length;
    const bScore = b.tags.filter(t => activeTags.includes(t)).length;
    return bScore - aScore;
  });

  const tasteProductNodes = (() => {
    const used = new Set();
    return sortedTasteProducts.map(product => {
      // Find best unmatched node by tag overlap
      let bestNode = null;
      for (const tag of product.tags) {
        const match = activeNodes.find(n => n.label === tag && !used.has(n.label));
        if (match) { bestNode = match; break; }
      }
      if (!bestNode) bestNode = activeNodes.find(n => !used.has(n.label)) || activeNodes[0];
      used.add(bestNode.label);

      // Offset thumbnail outward from center, preserving dist even near edges
      const cx = 50, cy = 50;
      const angle = Math.atan2(bestNode.y - cy, bestNode.x - cx);
      const dist = (bestNode.label === 'organic' || bestNode.label === 'warm') ? 10 : 16;
      const CMIN = 8, CMAX = 90;
      let tx = bestNode.x + Math.cos(angle) * dist;
      let ty = bestNode.y + Math.sin(angle) * dist;
      if (tx < CMIN || tx > CMAX) {
        tx = Math.max(CMIN, Math.min(CMAX, tx));
        ty = bestNode.y + Math.sign(Math.sin(angle)) * Math.sqrt(Math.max(0, dist * dist - (tx - bestNode.x) ** 2));
      }
      if (ty < CMIN || ty > CMAX) {
        ty = Math.max(CMIN, Math.min(CMAX, ty));
        tx = Math.max(CMIN, Math.min(CMAX, bestNode.x + Math.sign(Math.cos(angle)) * Math.sqrt(Math.max(0, dist * dist - (ty - bestNode.y) ** 2))));
      }
      const thumbX = tx;
      const thumbY = ty;
      return { product, node: bestNode, thumbX, thumbY };
    });
  })();

  const cursor = CURSOR_PATH[cursorIdx];

  return (
    <div className="app">
      <style>{STYLE}</style>

      {/* ── LANDING ── */}
      <div className={`screen landing ${screen==="landing"?"active":""}`}>
        <div className="landing-bg"/>
        <div className="grid-floor"/>
        <div className="wordmark">
          <div className="wm-top">SOCIAL</div>
          <div className="wm-bot">ARCADE</div>
        </div>
        <div className="slogan">
          <div className="slogan-line"><span>Browse</span> together.</div>
          <div className="slogan-line"><span>Shop</span> together.</div>
          <div className="slogan-line"><span>Wander</span> together.</div>
        </div>
        <div className="landing-btns">
          <button className="btn-gold" onClick={() => setScreen("onboarding")}>Find Your Style</button>
          <button className="btn-ghost" onClick={() => setScreen("taste")}>Skip to Shop →</button>
        </div>
        <div className="ticker">
          <div className="ticker-inner">
            {TICKER.map((t,i)=>(
              <span key={i} className="ticker-item"><span>✦</span>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── ONBOARDING / SWIPE ── */}
      <div className={`screen onboarding ${screen==="onboarding"?"active":""}`}>
        <div className="ob-header">
          <div className="ob-eyebrow">✦ Step 1 · Taste Profile</div>
          <div className="ob-title">What's your vibe?</div>
          <div className="ob-sub">Swipe to build your aesthetic fingerprint</div>
          <div className="progress-track">
            {SWIPE_ITEMS.map((_,i)=>(
              <div key={i} className={`pdot ${i<swipeIdx?"done":i===swipeIdx?"now":""}`}/>
            ))}
          </div>
        </div>

        <div className="swipe-wrap">
          {SWIPE_ITEMS.slice(swipeIdx, swipeIdx+2).reverse().map((item, si) => (
            <div key={item.id}
              className={`swipe-card ${si===1 ? swipeAnim||"" : ""}`}
              style={{
                transform: `scale(${si===0?.93:1}) translateY(${si===0?14:0}px)`,
                zIndex: si,
                transition: si===0?"transform 0.3s ease":undefined,
              }}
            >
              <div className="card-inner" style={{background:item.bg}}>
                <img className="card-photo" src={item.photo} alt={item.name} />
                <div className="card-overlay" />
                <div className="card-content">
                  <div className="card-lbl">Aesthetic</div>
                  <div className="card-name">{item.name}</div>
                  <div className="card-tags">
                    {item.tags.map(t=><span key={t} className="card-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="swipe-btns">
          <button className="swipe-btn no"  onClick={()=>doSwipe("left")}>✕</button>
          <button className="swipe-btn yes" onClick={()=>doSwipe("right")}>♥</button>
        </div>
        <div className="swipe-hint">← not for me &nbsp;·&nbsp; love it →</div>

        {/* Upload option */}
        <div className="or-divider">
          <div className="or-line"/><div className="or-text">or</div><div className="or-line"/>
        </div>
        <div className="upload-cta">
          <button className="upload-cta-btn" onClick={() => setScreen("upload")}>
            📸 &nbsp; Upload inspo images instead
          </button>
        </div>
      </div>

      {/* ── UPLOAD SCREEN ── */}
      <div className={`screen upload-screen ${screen==="upload"?"active":""}`}>
        <div className="upload-bg"/>

        <div className="ob-header" style={{position:"relative",zIndex:1}}>
          <div className="ob-eyebrow">✦ Upload Your Inspo</div>
          <div className="ob-title">Drop Your Aesthetic</div>
          <div className="ob-sub">Screenshots, Pinterest saves, Instagram inspo — anything</div>
        </div>

        {/* Drop zone */}
        <div
          className={`drop-zone ${isDragging?"over":""}`}
          onDragOver={e=>{e.preventDefault();setIsDragging(true);}}
          onDragLeave={()=>setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            style={{display:"none"}}
            onChange={e => handleFiles(e.target.files)}
          />
          {uploadedImgs.length === 0 ? (
            <>
              <div className="drop-icon">🖼️</div>
              <div className="drop-title">Drag & Drop Here</div>
              <div className="drop-sub">Or click to browse files</div>
              <div className="drop-hint">PNG · JPG · WEBP · up to 6 images</div>
            </>
          ) : (
            <div className="drop-sub" style={{color:"var(--gold)"}}>
              ✦ {uploadedImgs.length} image{uploadedImgs.length>1?"s":""} ready — click to add more
            </div>
          )}
        </div>

        {/* Image previews */}
        {uploadedImgs.length > 0 && (
          <div className="preview-grid">
            {uploadedImgs.map((src,i) => (
              <img key={i} src={src} className="preview-thumb" alt={`inspo ${i+1}`}/>
            ))}
          </div>
        )}

        {/* Analyse button */}
        <div className="analyse-btn-wrap">
          {uploadedImgs.length > 0 && !analysing && (
            <button className="btn-gold" onClick={handleAnalyse}>
              ✦ &nbsp; Analyse My Aesthetic
            </button>
          )}
          {analysing && (
            <>
              <div className="analysing-label">Gemini is reading your aesthetic...</div>
              <div className="analysing-bar"><div className="analysing-fill"/></div>
            </>
          )}
          <button className="btn-ghost" style={{marginTop:8}} onClick={() => setScreen("onboarding")}>
            ← Back to swipe
          </button>
        </div>
      </div>

      {/* ── TASTE GRAPH ── */}
      <div className={`screen taste-screen ${screen==="taste"?"active":""}`}>
        <div className="taste-bg"/>
        <div className="sec-title">Your Taste Graph</div>
        <div className="sec-sub">
          {aiResult
            ? `AI analysed ${uploadedImgs.length} images · ${activeTags.length} nodes mapped`
            : swipeTags.length > 0
              ? `${liked.length} resonances · ${swipeTags.length} nodes identified`
              : "Your visual identity, mapped as a constellation"}
        </div>

        {/* AI summary card — only shows if images were uploaded */}
        {aiResult && (
          <div className="ai-summary">
            {aiPalette.length > 0 && (
              <div className="ai-palette">
                {aiPalette.map((hex,i)=>(
                  <div key={i} className="palette-swatch" style={{background:hex}} title={hex}/>
                ))}
              </div>
            )}
            <div className="ai-text">{aiSummary}</div>
          </div>
        )}

        <div className="taste-layout">
          <div className="taste-left">
            <div className="constellation">
              {/* Star-field + nodes */}
              <Constellation nodesA={aiResult ? dynamicNodes : YOU_NODES} w={480}/>

              {/* SVG dashed connector lines: thumbnail → node */}
              {showGraphProducts && (
                <svg className="constellation-overlay" aria-hidden="true">
                  {tasteProductNodes.map(({product, node, thumbX, thumbY}) => (
                    <line key={product.id}
                      x1={`${node.x}%`}    y1={`${node.y}%`}
                      x2={`${thumbX}%`}    y2={`${thumbY}%`}
                      stroke="rgba(255,45,120,0.22)"
                      strokeWidth="1"
                      strokeDasharray="4 3"
                    />
                  ))}
                </svg>
              )}

              {/* Floating product thumbnails pinned to their matching nodes */}
              {showGraphProducts && tasteProductNodes.map(({product, thumbX, thumbY}, i) => (
                <div key={product.id}
                  className="tp-floating"
                  style={{ left:`${thumbX}%`, top:`${thumbY}%`, animationDelay:`${0.25+i*0.1}s` }}
                  onClick={() => openProduct(product)}
                >
                  <img className="tp-float-img" src={product.img} alt={product.name}
                    onError={e => { e.target.style.background='var(--surface2)'; }}
                  />
                  <div className="tp-float-tooltip">
                    <div>{product.name}</div>
                    <div style={{color:'var(--gold)',marginTop:2}}>{product.price}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowGraphProducts(v => !v)}
              style={{
                marginTop: 16,
                background: showGraphProducts ? 'var(--gold)' : 'none',
                border: '1px solid var(--gold)',
                color: showGraphProducts ? 'var(--bg)' : 'var(--gold)',
                padding: '7px 22px',
                borderRadius: 4,
                cursor: 'pointer',
                fontSize: 10,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                fontFamily: "'IBM Plex Mono', monospace",
                transition: 'all 0.2s',
              }}
            >
              {showGraphProducts ? '✦ Hide Products' : '✦ Show Products'}
            </button>

            <div className="taste-chips" style={{marginTop: 20}}>
              {activeTags.map((tag,i)=>{
                const c = COLOURS[i % COLOURS.length];
                return(
                  <span key={tag} className="taste-chip"
                    style={{borderColor:c, color:c, animationDelay:`${i*0.07}s`}}>
                    {tag}
                  </span>
                );
              })}
            </div>

            <button className="share-taste-link" style={{marginTop:12}}
              onClick={() => {
                const url = window.location.origin;
                if (navigator.share) {
                  navigator.share({ title: 'My Taste Graph', text: 'Check out my taste graph on Social Arcade ✦', url });
                } else {
                  navigator.clipboard.writeText(url);
                  alert('Link copied to clipboard!');
                }
              }}>
              ✦ &nbsp; Share your taste graph
            </button>
          </div>

          <div className="taste-right">
            <div className="compat-card">
              <div className="compat-num">{compatPct}%</div>
              <div className="compat-lbl" style={{marginTop:4}}>
                match to the{' '}
                <em>{activeTags[0] || 'minimal'}</em> aesthetic
              </div>
            </div>

            <button className="sr-enter-btn" style={{marginTop:18}}
              onClick={() => setShowroom({
                products: sortedTasteProducts,
                tags: activeTags,
                palette: aiPalette,
                title: crewType,
                spaceType: 'My Space',
                color: '#e8b84b',
              })}>
              ⬡ &nbsp; Enter Your Showroom
            </button>

            <button className="btn-gold" style={{marginTop:10,position:"relative"}}
              onClick={()=>setScreen("shop")}>
              Shop With Your Crew →
            </button>

            <button className="btn-ghost" style={{marginTop:8}}
              onClick={() => {
                const url = window.location.origin;
                if (navigator.share) {
                  navigator.share({ title: 'Social Arcade', text: 'Come shop with me on Social Arcade ✦', url });
                } else {
                  navigator.clipboard.writeText(url);
                  alert('Link copied to clipboard!');
                }
              }}>
              ✦ Invite Friends
            </button>
          </div>

        </div>
      </div>

      {/* ── SHOP TOGETHER ── */}
      <div className={`screen shop-screen ${screen==="shop"?"active":""}`}>

        {/* Friend cursor */}
        {!showroom && (
          <div className="friend-cursor" style={{left:cursor.x, top:cursor.y}}>
            <div className="cursor-pip"/>
            <div className="cursor-name">Maya is browsing</div>
          </div>
        )}

        {/* Header */}
        <div className="shop-hdr">
          <div className="shop-wm">
            <div className="shop-wm-top">SOCIAL</div>
            <div className="shop-wm-bot">ARCADE</div>
          </div>
          <div className="session-bar">
            <div className="live-pip"/>
            <span>Live Session</span>
            <div className="crew-av" style={{borderColor:"#00f0e0",background:"rgba(0,240,224,0.08)",color:"#00f0e0"}}>M</div>
            {!showroom && <span style={{color:"#00f0e0"}}>Maya is here</span>}
          </div>
          <button className="btn-ghost" style={{padding:"8px 20px"}} onClick={()=>setScreen("taste")}>
            ← Taste Graph
          </button>
        </div>

        <div className="shop-layout">
          {/* Products */}
          <div className="products-area">
            <div className="products-hdr">
              <div className="products-title">
                {productTab === "all" ? "All Picks" : productTab === "crew" ? "Crew Overlap" : "Small Shops"}
              </div>
              <div style={{display:'flex',alignItems:'center',gap:14}}>
                <div className="products-count">
                  {productTab === "all" && `✦ ${UNSPLASH_PRODUCTS.length} items`}
                  {productTab === "crew" && `✦ ${UNSPLASH_PRODUCTS.filter(p=>p.match).length} matches`}
                  {productTab === "small" && `✦ ${SMALL_SHOP_PRODUCTS.length} makers`}
                </div>
                {productTab === "all" && (
                  <button className="sr-enter-btn" style={{padding:'7px 16px',fontSize:'8px'}}
                    onClick={() => setShowroom({
                      products: sortedTasteProducts,
                      tags: activeTags,
                      palette: aiPalette,
                      title: crewType,
                      spaceType: 'My Space',
                      color: '#e8b84b',
                    })}>⬡ Showroom</button>
                )}
              </div>
            </div>

            {/* Product tabs */}
            <div className="ptabs">
              <button className={`ptab ${productTab==="all"?"on":""}`}   onClick={()=>setProductTab("all")}>All</button>
              <button className={`ptab ${productTab==="crew"?"on":""}`}  onClick={()=>setProductTab("crew")}>Crew Overlap</button>
              <button className={`ptab teal ${productTab==="small"?"on":""}`} onClick={()=>{ setProductTab("small"); setSideTab("wishlist"); }}>✦ Small Shops</button>
            </div>

            <div className="products-grid">
              {(productTab === "small" ? SMALL_SHOP_PRODUCTS
                : productTab === "crew" ? UNSPLASH_PRODUCTS.filter(p=>p.match)
                : UNSPLASH_PRODUCTS
              ).map((p,i)=>(
                <div key={p.id}
                  className={`p-card ${p.match && productTab!=="small" ? "match" : ""}`}
                  style={{animationDelay:`${i*0.05}s`}}
                  onClick={() => openProduct(p)}
                >
                  {productTab === "small" && <div className="sm-badge">✦ Independent Maker</div>}
                  {p.match && productTab !== "small" && <div className="match-badge">✦ Both love this</div>}
                  <div className="p-img-wrap">
                    <img
                      src={p.img}
                      className="p-img"
                      alt={p.name}
                      style={{marginTop: (p.match && productTab!=="small") || productTab==="small" ? 28 : 0}}
                      onError={e => { e.target.style.display="none"; }}
                    />
                    <div className="p-reactions">
                      {p.rx.you    && <span className="react-chip" style={{borderColor:"rgba(255,45,120,0.3)"}}>Y {p.rx.you}</span>}
                      {p.rx.friend && <span className="react-chip" style={{borderColor:"rgba(0,240,224,0.3)"}}>M {p.rx.friend}</span>}
                    </div>
                  </div>
                  <div className="p-info">
                    <div className="p-brand">{p.brand}</div>
                    <div className="p-name">{p.name}</div>
                    <div className="p-price">{p.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="stabs">
              <button className={`stab ${sideTab==="overlap"?"on":""}`}   onClick={()=>setSideTab("overlap")}>Taste</button>
              <button className={`stab ${sideTab==="chat"?"on":""}`}     onClick={()=>setSideTab("chat")}>Chat</button>
              <button className={`stab ${sideTab==="crew"?"on":""}`}     onClick={()=>setSideTab("crew")}>Crew</button>
              <button className={`stab teal ${sideTab==="wishlist"?"on":""}`} onClick={()=>setSideTab("wishlist")}>🛍 Saved</button>
            </div>
            <div className="sidebar-body">

              {sideTab === "overlap" && (
                <>
                  <div className="s-section">
                    <div className="s-eye">Taste Map</div>
                    <div className="mini-const">
                      <Constellation nodesA={aiResult?dynamicNodes:YOU_NODES} nodesB={FRIEND_NODES} showBoth w={280}/>
                    </div>
                    <div className="inline-compat">
                      <div className="ic-num">78%</div>
                      <div>
                        <div className="ic-lbl">Crew Compatibility</div>
                        <div className="ic-desc">"{crewType}s"</div>
                      </div>
                    </div>
                  </div>
                  <div className="s-section">
                    <div className="s-eye">Shared Nodes</div>
                    <div className="shared-chips">
                      {["minimal","organic","warm"].map(t=>(
                        <span key={t} className="shared-chip">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="s-section">
                    <div className="gift-card">
                      <div className="gift-text">
                        Maya would love the <strong>Soy Candle</strong> — it matches her <strong>coastal + warm</strong> nodes exactly.
                      </div>
                    </div>
                  </div>
                </>
              )}

              {sideTab === "chat" && (
                <div className="chat-wrap">
                  <div className="chat-msgs">
                    {messages.map(m=>(
                      <div key={m.id} className={`chat-msg ${m.from==="you"?"mine":""}`}>
                        <div className="chat-av" style={{
                          borderColor: m.from==="you"?"#ff2d78":"#00f0e0",
                          background:  m.from==="you"?"rgba(255,45,120,0.08)":"rgba(0,240,224,0.08)",
                          color:       m.from==="you"?"#ff2d78":"#00f0e0",
                        }}>{m.from==="you"?"Y":"M"}</div>
                        <div className="chat-bub">{m.text}</div>
                      </div>
                    ))}
                    <div ref={msgEndRef}/>
                  </div>
                  <div className="chat-row">
                    <input className="chat-in" placeholder="say something..."
                      value={chatInput}
                      onChange={e=>setChatInput(e.target.value)}
                      onKeyDown={e=>e.key==="Enter"&&sendMsg()}/>
                    <button className="chat-send" onClick={sendMsg}>→</button>
                  </div>
                </div>
              )}

              {sideTab === "crew" && (
                <div>
                  <div className="s-eye">Your Aesthetic Crew</div>
                  {CREW_MEMBERS.map(member => (
                    <div
                      key={member.id}
                      className={`crew-member-card ${activeCrew===member.id?"active-crew":""}`}
                      onClick={() => setActiveCrew(member.id)}
                    >
                      <div className="crew-av-lg" style={{
                        borderColor: member.color,
                        background: `${member.color}12`,
                        color: member.color,
                      }}>{member.avatar}</div>
                      <div className="crew-info">
                        <div className="crew-name">{member.name}</div>
                        <div className="crew-aesthetic">{member.type}</div>
                        <div className="crew-compat-row">
                          <div className="crew-compat-track">
                            <div className="crew-compat-fill"
                              style={{width:`${member.compat}%`, background:member.color}}/>
                          </div>
                          <div className="crew-pct" style={{color:member.color}}>{member.compat}%</div>
                        </div>
                        <div className="crew-tags-mini">
                          {member.tags.map(t=>(
                            <span key={t} className="crew-tag-mini"
                              style={{borderColor:`${member.color}30`, color:`${member.color}99`}}>
                              {t}
                            </span>
                          ))}
                        </div>
                        <button
                          className="crew-browse-btn"
                          style={{
                            borderColor: (activeCrew===member.id || requestedCrew.includes(member.id)) ? member.color : 'var(--border)',
                            color: (activeCrew===member.id || requestedCrew.includes(member.id)) ? member.color : 'var(--muted)',
                          }}
                          onClick={() => {
                            setActiveCrew(member.id);
                            if (member.id !== 'maya') setRequestedCrew(r => r.includes(member.id) ? r : [...r, member.id]);
                          }}
                        >
                          {member.id === 'maya'
                            ? (activeCrew===member.id ? '● Currently browsing together' : '○ Currently browsing together')
                            : (requestedCrew.includes(member.id) ? '● Request sent' : '○ Request to browse together')
                          }
                        </button>
                        {activeCrew === member.id && (
                          <button
                            className="sr-enter-btn"
                            style={{marginTop:8, width:'100%', justifyContent:'center', borderColor:`${member.color}40`, color:member.color, fontSize:'8px'}}
                            onClick={() => setShowroom({
                              owner: member.id,
                              products: TASTE_PRODUCTS.filter(p => p.tags.some(t => member.tags.includes(t))),
                              tags: member.tags,
                              palette: [],
                              title: `${member.name}'s Space`,
                              spaceType: member.type,
                              color: member.color,
                            })}
                          >⬡ &nbsp; Enter Their Showroom</button>
                        )}
                      </div>
                      {activeCrew===member.id && (
                        <div className="crew-live-dot" style={{background:member.color, boxShadow:`0 0 8px ${member.color}`}}/>
                      )}
                    </div>
                  ))}
                  <div className="crew-find-section">
                    <div className="crew-find-desc">
                      Discover strangers who share your exact aesthetic and shop the same overlap zone.
                    </div>
                    <button className="crew-find-btn">✦ &nbsp; Find more crew</button>
                    <div className="crew-count-badge">
                      <span className="crew-count-pip"/>
                      <span>2,847 {crewType}s online now</span>
                    </div>
                  </div>
                </div>
              )}

              {sideTab === "wishlist" && (
                <div className="s-section">
                  <div className="s-eye">🛍 Bag</div>
                  {bag.length === 0 ? (
                    <div className="wishlist-empty">
                      <div style={{fontSize:24,marginBottom:8}}>🛍</div>
                      <div>Add items to your bag to see them here</div>
                    </div>
                  ) : (
                    <div className="wishlist-list">
                      {bag.map(p => (
                        <div key={p.id} className="wishlist-item" onClick={() => openProduct(p)}>
                          <img className="wishlist-img" src={p.img} alt={p.name} onError={e=>e.target.style.display="none"}/>
                          <div className="wishlist-info">
                            <div className="wishlist-name">{p.name}</div>
                            <div className="wishlist-price" style={{color:'var(--gold)'}}>{p.price}</div>
                          </div>
                          <button className="wishlist-remove" onClick={e=>{ e.stopPropagation(); setBag(b=>b.filter(x=>x.id!==p.id)); }}>✕</button>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="s-eye" style={{marginTop:20}}>♡ Saved</div>
                  {wishlist.length === 0 ? (
                    <div className="wishlist-empty">
                      <div style={{fontSize:24,marginBottom:8}}>♡</div>
                      <div>Save items from any category to see them here</div>
                    </div>
                  ) : (
                    <div className="wishlist-list">
                      {wishlist.map(p => (
                        <div key={p.id} className="wishlist-item" onClick={() => openProduct(p)}>
                          <img className="wishlist-img" src={p.img} alt={p.name} onError={e=>e.target.style.display="none"}/>
                          <div className="wishlist-info">
                            <div className="wishlist-name">{p.name}</div>
                            <div className="wishlist-price" style={{color:'var(--gold)'}}>{p.price}</div>
                          </div>
                          <button className="wishlist-remove" onClick={e=>{ e.stopPropagation(); setWishlist(w=>w.filter(x=>x.id!==p.id)); }}>✕</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
      {/* ── SHOWROOM 3D ── */}
      {showroom && showroom.owner === "soleil" && (
        <ShowroomSoleil
          products={showroom.products}
          tags={showroom.tags}
          title={showroom.title}
          spaceType={showroom.spaceType}
          color={showroom.color}
          onClose={() => setShowroom(null)}
          onSelectProduct={p => openProduct(p)}
        />
      )}
      {showroom && showroom.owner === "daniel" && (
        <ShowroomDaniel
          products={showroom.products}
          tags={showroom.tags}
          title={showroom.title}
          spaceType={showroom.spaceType}
          color={showroom.color}
          onClose={() => setShowroom(null)}
          onSelectProduct={p => openProduct(p)}
        />
      )}
      {showroom && showroom.owner === "maya" && (
        <ShowroomMaya
          products={showroom.products}
          tags={showroom.tags}
          title={showroom.title}
          spaceType={showroom.spaceType}
          color={showroom.color}
          onClose={() => setShowroom(null)}
          onSelectProduct={p => openProduct(p)}
        />
      )}
      {showroom && !["soleil","daniel","maya"].includes(showroom.owner) && (
        <Showroom3D
          products={showroom.products}
          tags={showroom.tags}
          palette={showroom.palette}
          title={showroom.title}
          spaceType={showroom.spaceType}
          color={showroom.color}
          onClose={() => setShowroom(null)}
          onSelectProduct={p => openProduct(p)}
        />
      )}

      {/* ── PRODUCT DETAIL OVERLAY ── */}
      {selectedProduct && (
        <div className="prod-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="prod-overlay-inner" onClick={e => e.stopPropagation()}>
            <button className="prod-close" onClick={() => setSelectedProduct(null)}>✕</button>
            <div className="prod-drawer">
              <div className="prod-drawer-inner">
                <img className="prod-big-img" src={selectedProduct.img} alt={selectedProduct.name}
                  onError={e => { e.target.style.background='var(--surface2)'; }}
                />
                <div className="prod-details">
                  <div className="prod-eyebrow">✦ Independent Maker · {selectedProduct.shop || selectedProduct.brand}</div>
                  <div className="prod-title">{selectedProduct.name}</div>
                  <div className="prod-shop-name">by {selectedProduct.shop || selectedProduct.brand}</div>
                  <div className="prod-price-lg">{selectedProduct.price}</div>
                  {selectedProduct.tags?.length > 0 && (
                    <div className="prod-tags-row">
                      {selectedProduct.tags.map(t => (
                        <span key={t} className="prod-tag">{t}</span>
                      ))}
                    </div>
                  )}
                  <div className="prod-actions">
                    <button className="prod-save-btn" onClick={() => setWishlist(w => w.some(x=>x.id===selectedProduct.id) ? w.filter(x=>x.id!==selectedProduct.id) : [...w, selectedProduct])}>
                      {wishlist.some(x=>x.id===selectedProduct.id) ? '♥ \u00a0 Saved' : '♡ \u00a0 Save to wishlist'}
                    </button>
                    <button
                      className={`prod-bag-btn ${addedToBag ? 'added' : ''}`}
                      onClick={handleAddToBag}
                    >
                      {addedToBag ? '✓  Added to bag' : 'Add to bag'}
                    </button>
                    <button className="prod-crew-btn" onClick={handleShareWithCrew}>
                      ✦ &nbsp; Share with crew
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
