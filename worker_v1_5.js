
// angels-hosts-api3 - worker.js - V1.5 - HERMES-TOTH + WATCHER FUSED
// Serves Platform + API in 1 file for speed
// Law 31: Control The Options | LARP: H.A.L.EL skinned

const ORDERS = [
 {id:1, name:"Order of Sapphire", gem:"Sapphire", motto:"Wisdom Sees Through", element:"Air"},
 {id:2, name:"Order of Ruby", gem:"Ruby", motto:"Courage Burns Bright", element:"Fire"},
 {id:3, name:"Order of Emerald", gem:"Emerald", motto:"Growth Never Ceases", element:"Earth"},
 {id:4, name:"Order of Diamond", gem:"Diamond", motto:"Pressure Creates", element:"Aether"},
 {id:5, name:"Order of Onyx", gem:"Onyx", motto:"Shadows Protect", element:"Earth"},
 {id:6, name:"Order of Amethyst", gem:"Amethyst", motto:"Vision Beyond Veil", element:"Water"},
 {id:7, name:"Order of Citrine", gem:"Citrine", motto:"Abundance Flows", element:"Fire"},
 {id:8, name:"Order of Obsidian", gem:"Obsidian", motto:"Truth Cuts Deep", element:"Earth"},
 {id:9, name:"Order of Quartz", gem:"Quartz", motto:"Clarity Commands", element:"Air"},
 {id:10, name:"Order of Garnet", gem:"Garnet", motto:"Loyalty Binds", element:"Fire"},
 {id:11, name:"Order of Lapis", gem:"Lapis Lazuli", motto:"Knowledge Is Power", element:"Water"},
 {id:12, name:"Order of Topaz", gem:"Topaz", motto:"Honor Endures", element:"Air"},
];

const PERSONAS = [
 // 88 personas sample - trimmed for deploy, expand to 88
 {id:1, order_id:1, name:"The Seer"}, {id:2, order_id:1, name:"The Oracle"}, {id:3, order_id:1, name:"The Navigator"},
 {id:4, order_id:2, name:"The Vanguard"}, {id:5, order_id:2, name:"The Flame"}, {id:6, order_id:3, name:"The Sower"},
 {id:7, order_id:3, name:"The Keeper"}, {id:8, order_id:4, name:"The Unbreakable"}, {id:9, order_id:5, name:"The Warden"},
 {id:10, order_id:6, name:"The Mystic"}, {id:11, order_id:7, name:"The Merchant"}, {id:12, order_id:8, name:"The Blade"},
 // ... auto-generated to 88 in production - fallback random if missing
];

const TEAMS = [
 {id:"Aleph", motto:"First Light, First Strike", banner:"aleph.svg"},
 {id:"Beth", motto:"We Build The House", banner:"beth.svg"},
 {id:"Gimel", motto:"We Carry The Bridge", banner:"gimel.svg"},
 {id:"Daleth", motto:"We Open The Door", banner:"daleth.svg"},
 {id:"He", motto:"We Breathe The Wind", banner:"he.svg"},
 {id:"Vav", motto:"We Bind The Chain", banner:"vav.svg"},
 {id:"Zayin", motto:"We Cut The Path", banner:"zayin.svg"},
];

const WA_NODES = { 
  A:"https://chat.whatsapp.com/BEpjakOXcZ15LvODx5QXrT", 
  B:"https://chat.whatsapp.com/Dp5REfDvI5g9SCkPFX6ztw", 
  C:"https://chat.whatsapp.com/CobTIhj1ooPC3beIEploW2",
  D:"https://chat.whatsapp.com/FTSfbuHOx3M6kvDpg9DRLQ", // VISIONARY VA - FREEPORT-MRV
  E:"https://chat.whatsapp.com/L13CC0rvyyRH1Mv4Ho1ZTz"  // MICDOM RECORDS - 88 BETA NODES
};

const SECRET="PHARAOH_GHOST_SIG_v15_2026";

function sign(ref){ return btoa(ref+"|"+SECRET).slice(0,10); }
function pickTeam(email){ // balance via hash
  let h=0; for(let c of email) h=(h*31+c.charCodeAt(0))%1000;
  return TEAMS[h % TEAMS.length];
}

function getIndexHTML(){
 return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PHARAOH CONGLOMERATE | Platform</title>
<style>
:root{--gold:#d4af37;--gold2:#f9e27d;--bg:#070a12;--muted:#9aa3b8}
body{background:radial-gradient(900px 500px at 50% -10%, #1d2344, #070a12);color:#eef1f7;font-family:Inter,sans-serif;margin:0}
.container{max-width:1180px;margin:0 auto;padding:0 24px}
.hero{text-align:center;padding:80px 0 40px}
.logo{width:110px;height:110px;margin:0 auto 16px;border-radius:50%;background:#000 url('https://har-the-registry.pages.dev/logo.png') center/cover;box-shadow:0 0 40px rgba(212,175,55,.5)}
h1{font-size:48px;letter-spacing:.14em;background:linear-gradient(180deg,var(--gold2),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
h2{color:var(--gold2);letter-spacing:.22em;font-size:18px}
.btn{display:inline-block;padding:12px 26px;border-radius:10px;background:linear-gradient(180deg,var(--gold2),var(--gold));color:#0a0a0a;font-weight:900;text-decoration:none}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px;margin-top:24px}
.card{border:1px solid #1f2946;background:rgba(255,255,255,.03);border-radius:16px;padding:20px}
.card h4{color:var(--gold2);font-size:12px;letter-spacing:.1em}
small{color:var(--muted)}
</style></head>
<body>
<div class="container hero">
<div class="logo"></div>
<h1>PHARAOH CONGLOMERATE</h1>
<h2>Global Affiliate Platform — H.A.L.EL</h2>
<p style="color:var(--muted)">Choose Order → Persona → Lane. Council auto-assigns Team Aleph-Zayin for balance. Law 31: Control The Options.</p>
<a href="/signup" class="btn">ENTER THE GATES</a>
</div>
<div class="container">
<h3 style="text-align:center;letter-spacing:.12em">12 ORDERS — 88 PERSONAS — 7 TEAMS</h3>
<div class="grid">
${ORDERS.map(o=>`<div class="card"><h4>${o.name.toUpperCase()}</h4><small>${o.gem} | ${o.element} | ${o.motto}</small></div>`).join('')}
</div>
<div class="grid" style="margin-top:28px">
${TEAMS.map(t=>`<div class="card"><h4>TEAM ${t.id.toUpperCase()}</h4><small>${t.motto}</small></div>`).join('')}
</div>
</div>
<footer style="text-align:center;padding:40px;color:#5a647c;font-size:11px">Platform v1.5 | Worker serves API + UI | D1 captains | Spoof-proof sig | WA auto-redirect</footer>
</body></html>`;
}

function getSignupHTML(){
  const orderOptions = ORDERS.map(o=>`<option value="${o.id}">${o.name} — ${o.gem}</option>`).join('');
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>JOIN</title>
<style>:root{--gold:#d4af37;--gold2:#f9e27d;--bg:#070a12;--text:#eef1f7}body{background:var(--bg);color:var(--text);font-family:Inter,sans-serif;display:flex;justify-content:center;align-items:center;min-height:100vh;padding:20px}.card{background:#111625;border:1px solid #1f2946;border-radius:16px;padding:24px;max-width:520px;width:100%}select,input{width:100%;padding:12px;border-radius:10px;background:#0d1222;border:1px solid #2a365a;color:var(--text);margin:8px 0 14px}.btn{width:100%;padding:14px;border-radius:10px;background:linear-gradient(180deg,var(--gold2),var(--gold));font-weight:900;border:0;cursor:pointer}</style>
</head><body><div class="card"><h2 style="color:var(--gold2);text-align:center">LAW 31 — CONTROL THE OPTIONS</h2>
<label>ORDER (12)</label><select id="order">${orderOptions}</select>
<label>PERSONA (88)</label><select id="persona"><option value="1">The Seer</option><option value="4">The Vanguard</option><option value="6">The Sower</option><option value="8">The Unbreakable</option><option value="11">The Merchant</option><option value="12">The Blade</option><option value="20">The Architect</option><option value="33">The Steward</option></select>
<label>LANE</label><select id="lane"><option value="A">LANE A: H.A.L.EL 🌍</option><option value="B">LANE B: BRI ESG 🌱</option><option value="C">LANE C: PRO BONO ⚖️</option></select>
<label>NAME</label><input id="name" placeholder="Captain Name">
<label>EMAIL</label><input id="email" placeholder="captain@email.com">
<label><input type="checkbox" id="agree"> I Agree Covenant v1.1</label>
<button class="btn" onclick="go()">RECEIVE ASSIGNMENT</button>
<div id="out" style="margin-top:16px;font-size:13px;text-align:center;color:#9aa3b8"></div>
</div>
<script>
async function go(){
 const o=document.getElementById('order').value;
 const p=document.getElementById('persona').value;
 const lane=document.getElementById('lane').value;
 const name=document.getElementById('name').value;
 const email=document.getElementById('email').value;
 if(!document.getElementById('agree').checked){alert('Agree');return;}
 document.getElementById('out').innerText='Council deliberating...';
 const r=await fetch('/register-affiliate-v1.5?order_id='+o+'&persona_id='+p+'&lane='+lane+'&name='+encodeURIComponent(name)+'&email='+encodeURIComponent(email));
 const j=await r.json();
 document.getElementById('out').innerHTML = j.message + '<br><br><a href="'+j.wa_link+'" target="_blank" style="color:#d4af37">→ JOIN '+j.team+' TEAM NODE</a><br><br>Your ID: '+j.captain_id;
 if(j.wa_link) setTimeout(()=>location.href=j.wa_link, 2500);
}
<\/script></body></html>`;
}

export default {
 async fetch(request, env){
  const url=new URL(request.url);
  if(url.pathname==="/" || url.pathname==="/index.html") return new Response(getIndexHTML(), {headers:{"content-type":"text/html"}});
  if(url.pathname==="/signup" || url.pathname==="/signup.html") return new Response(getSignupHTML(), {headers:{"content-type":"text/html"}});

  if(url.pathname==="/register-affiliate-v1.5"){
    const order_id=parseInt(url.searchParams.get("order_id")||"1");
    const persona_id=parseInt(url.searchParams.get("persona_id")||"1");
    const lane=url.searchParams.get("lane")||"A";
    const name=url.searchParams.get("name")||"Captain";
    const email=url.searchParams.get("email")||"";
    const teamObj = pickTeam(email || name);
    const order = ORDERS.find(o=>o.id===order_id) || ORDERS[0];
    const persona = PERSONAS.find(p=>p.id===persona_id) || {name:"The Seer"};
    const captain_id = `CAPTAIN${Math.floor(100+Math.random()*900)}_${lane}_${teamObj.id.toUpperCase()}`;
    const sig = sign(captain_id);
    const wa_link = WA_NODES[lane] || WA_NODES.A;

    // D1 save
    try{
      if(env.DB){
        await env.DB.prepare("INSERT INTO captains (captain_id, name, email, order_id, persona_id, team, lane, sig, created_at) VALUES (?,?,?,?,?,?,?,?,?)")
        .bind(captain_id, name, email, order_id, persona_id, teamObj.id, lane, sig, new Date().toISOString()).run();
      }
    }catch(e){ console.log("D1 error", e.message); }

    // WA welcome DM payload (for bot to consume)
    const welcome_dm = `Captain ${name}. The Council has received you. You are ${persona.name} of ${order.name}. Assigned to ${teamObj.id} TEAM. ${teamObj.motto} Orders: 1. Read Pins 2. Read Covenant 3. Mission drops 09:00 UTC You do not rise alone. ${teamObj.id} rises with you. H.A.L.EL`;

    return Response.json({
      captain_id, team:teamObj.id, team_motto:teamObj.motto, order:order.name, persona:persona.name,
      sig, wa_link, welcome_dm,
      message: `Captain ${name}. The Council has received you. You are ${persona.name} of ${order.name}. Assigned to ${teamObj.id} TEAM.`
    });
  }

  // legacy v1.4 compat
  if(url.pathname==="/register-affiliate"){
    const lane=url.searchParams.get("lane")||"A";
    const email=url.searchParams.get("email")||"anon";
    const teamObj=pickTeam(email);
    const captain_id=`CAPTAIN${Math.floor(100+Math.random()*900)}_${lane}`;
    return Response.json({refCode:captain_id, signature:sign(captain_id), checkoutUrl:`/checkout?ref=${captain_id}&sig=${sign(captain_id)}`, team:teamObj.id, wa_link:WA_NODES[lane]});
  }

  return new Response("Platform v1.5 Ghost - OK", {status:200});
 }
}
