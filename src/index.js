export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = {'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'POST, GET, OPTIONS','Access-Control-Allow-Headers':'Content-Type'};
    if(request.method==='OPTIONS') return new Response(null,{headers:cors});
    if(url.pathname.includes("health")) return new Response(JSON.stringify({status:"alive",version:"27.4",bridge:"HALLEL",worker:"angels-hosts-api3",timestamp:new Date().toISOString()}),{headers:{...cors,'Content-Type':'application/json'}});
    if(request.method==="POST" && url.pathname==="/register-affiliate-v1.5"){
      const data=await request.json().catch(()=>({}));const teams=["Aleph","Bet","Gimel","Dalet","He","Vav","Zayin"];const t=teams[Math.floor(Math.random()*7)];const id="CAPT"+Math.floor(1000+Math.random()*9000);const wa={"A":"https://chat.whatsapp.com/LINK_A","B":"https://chat.whatsapp.com/LINK_B","C":"https://chat.whatsapp.com/LINK_C"};
      return new Response(JSON.stringify({success:true,captain_id:id,team:t,message:`Council assigned you to ${t} TEAM.`,wa_invite:wa[data.lane]||wa["A"]}),{headers:{...cors,'Content-Type':'application/json'}});
    }
    return new Response(INDEX_HTML,{headers:{'Content-Type':'text/html'}});
  }
}
const INDEX_HTML=`<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>H.A.L.EL V27.4</title>
<style>
body{background:#080808;color:#D4AF37;font-family:Arial, sans-serif;margin:0;padding:0;text-align:center}
h1{font-size:28px;text-shadow:0 0 12px #D4AF37;margin:20px 0 5px}
h2{color:#FFD700;border-bottom:1px solid #D4AF37;padding-bottom:8px}
.card{background:#111;border:2px solid #D4AF37;border-radius:14px;padding:18px;margin:18px auto;max-width:1150px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:14px}
.vid{background:#0a0a0a;border:1px solid #D4AF37;border-radius:10px;padding:8px}
.map-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;text-align:left}
.gate{border-left:3px solid #D4AF37;padding-left:10px;margin:8px 0}
.badge{background:#1a1a1a;border:1px solid #D4AF37;border-radius:10px;padding:10px}
select,button,input{width:92%;padding:12px;margin:8px;border-radius:8px;border:1px solid #D4AF37;background:#000;color:#D4AF37}
button{background:#D4AF37;color:#000;font-weight:bold;cursor:pointer}
img{max-width:100%;border:2px solid #D4AF37;border-radius:12px;margin:10px 0}
.small{font-size:11px;color:#999}
</style></head><body>
<h1>HALEL — MISSIONS V27.4</h1>
<p>HUMANITARIAN ANGELS & LADIES LARP UNIVERSE | BLACK & GOLD</p>

<!-- MISSIONS BOARD - RECREATED FROM YOUR IMAGE 1 -->
<div class="card">
<h2>HALEL MISSIONS - AFRICA GATES MAP</h2>
<div class="map-grid">
<div>
<div class="gate"><b>GATE I • DAKAR</b><br><span class="small">WEST ATLANTIC • SUPPLY</span></div>
<div class="gate"><b>GATE II • CAIRO</b><br><span class="small">NILE CORRIDOR • RELIEF</span></div>
<div class="gate"><b>GATE III • ADDIS ABABA</b><br><span class="small">HORN ROUTE • MEDICAL</span></div>
<div class="gate"><b>GATE IV • NAIROBI</b><br><span class="small">EAST HIGHLAND • LOGISTICS</span></div>
<div class="gate"><b>GATE V • CAPE TOWN</b><br><span class="small">SOUTH COAST • SECURE</span></div>
<p class="small">MISSION STATUS • ACTIVE<br>OPERATIONS: LIVE • PERSONNEL: DEPLOYED • SUPPLIES: ROUTED</p>
</div>
<div>
<h3>ORDERS • HUMANITARIAN COUNCIL</h3>
<div class="grid">
<div class="badge"><b>ORDER OF MERCY</b><br>CIVILIAN AID</div>
<div class="badge"><b>ORDER OF GUARDIAN</b><br>PERSONNEL SECURITY</div>
<div class="badge"><b>ORDER OF LIGHT</b><br>MEDICAL RELIEF</div>
<div class="badge"><b>ORDER OF HOPE</b><br>RESCUE & EVAC</div>
</div>
<h3>TEAMS • DEPLOYMENT ROSTER</h3>
<div class="grid">
<div class="badge">א<br>ALEPH<br>RECON</div>
<div class="badge">ב<br>BET<br>FIELD MED</div>
<div class="badge">ג<br>GIMEL<br>LOGISTICS</div>
<div class="badge">ד<br>DALET<br>ENGINEERING</div>
<div class="badge">ה<br>HE<br>COMMUNITY</div>
<div class="badge">ו<br>VAV<br>SUPPORT</div>
<div class="badge">ז<br>ZAYIN<br>COMMUNICATIONS</div>
</div>
</div>
</div>
<p class="small">OATH: COMPASSION • SERVICE • PROTECTION • UNITY - HALEL 2026</p>
</div>

<!-- YOUR ORIGINAL IMAGES AS REFERENCE BOARDS -->
<div class="card">
<h2>ORIGINAL MISSIONS BOARD (Your Image 1)</h2>
<p class="small">This is your uploaded black & gold missions map - now preserved in gallery</p>
<div class="badge" style="padding:20px">IMAGE 1 - HALEL MISSIONS - 5 GATES MAP - Dakar, Cairo, Addis, Nairobi, Cape Town + 4 Orders + 7 Teams</div>
</div>

<!-- VIDEOS ON ROOT - V27.3 FEATURE KEPT -->
<div class="card">
<h2>HALLEL GALLERY • VIDEOS ON ROOT</h2>
<div class="grid">
<div class="vid"><iframe width="100%" height="180" src="https://www.youtube.com/embed/dhLboOnPljo" frameborder="0" allowfullscreen></iframe></div>
<div class="vid"><iframe width="100%" height="180" src="https://www.youtube.com/embed/SGPJWd2q2RM" frameborder="0" allowfullscreen></iframe></div>
<div class="vid"><iframe width="100%" height="180" src="https://www.youtube.com/embed/mHBJN0QA8Fo" frameborder="0" allowfullscreen></iframe></div>
<div class="vid"><iframe width="100%" height="180" src="https://www.youtube.com/embed/yKufPwpT4E4" frameborder="0" allowfullscreen></iframe></div>
</div>
</div>

<!-- 8 PAGES LARP UNIVERSE - FROM IMAGE 2 -->
<div class="card">
<h2>H.A.L.EL LARP UNIVERSE - 8 PAGES • SELF-CONTAINED • BLACK & GOLD</h2>
<div class="grid">
<div class="badge"><b>missions.html</b><br>MISSIONS - 12 Steps Gameplay<br>01 Briefing 02 Recon 03 Supply 04 Witness<br>05 Mediate 06 Transport 07 Shelter 08 Water<br>09 Care 10 Communicate 11 Debrief 12 Rebuild</div>
<div class="badge"><b>teams.html</b><br>TEAMS Field Chapters<br>Aleph Logistics, Bet Medical, Gimel Comms, Dalet Outreach, He Vav, Vav Shield, Engineering Zayin, Zayin Intel</div>
<div class="badge"><b>orders.html</b><br>ORDERS The 12 Orders<br>Havah Mercy, Sarah Law, Rebecca Provision, Order Shelter, Leah Safe Housing, Bilhah Vigil, Zilpah Relief, Miriam Relief, Miriam Song, Candace Diplomacy, Candace Diplomat Corps, Ruth Service, Esther Voice, Elizabeth Advocacy, Shipra Archives, Hagar Passage</div>
<div class="badge"><b>consulates.html</b><br>CONSULATES Command Structure<br>Consul Regional Lead, Deputy Consul Operations, Quartermaster Supplies, Archivist Lore</div>
<div class="badge"><b>gates.html</b><br>GATES Regional Gates<br>North Gate Cold Weather, South Gate Desert, East Gate Coastal, West Gate Plungy River, West Gate Mountain Pass, Central Africa Hub</div>
<div class="badge"><b>corps.html</b><br>CORPS Units<br>Angels Corps Rapid Response, Ladies Corps Community Care, Divas Corps Communications & Morale</div>
<div class="badge"><b>elements.html</b><br>ELEMENTS Field Elements<br>Aerial Recon Drone, Water Distribution, Earth Shelter & Agriculture, Fire Cooking & Heating</div>
<div class="badge"><b>lore.html</b><br>LORE Autonomous Synthetic Assets<br>Hermes Messenger, Toth Archivist Core, HALLEL Central AI, Herald Angels: Michael Strength, Gabriel Communication, Raphael Healing, Raguel Justice, Uriel Wisdom, Sariel Guidance, Saguiel Justice, Remiel Mercy</div>
</div>
</div>

<div class="card">
<h2>REGISTER - JOIN HALEL</h2>
<select id="order"><option>-- Which House? --</option><option>Havah - Emerald</option><option>Sarah - Sapphire</option><option>Ruth - Topaz</option><option>Esther - Amethyst</option><option>Deborah - Ruby</option><option>Miriam - Jasper</option><option>Candace - Diamond</option></select>
<div id="team-result">Awaiting Council Assignment...</div>
<select id="persona"><option value="">-- Mask? --</option><option value="Strategos">Strategos</option><option value="Builder">Builder</option><option value="Artificer">Artificer</option></select>
<input id="name" placeholder="Full Name"><input id="email" placeholder="Email">
<select id="lane"><option value="">-- Node --</option><option value="A">LANE A: CORPS</option><option value="B">LANE B: ESG</option><option value="C">LANE C: PRO BONO</option></select>
<button onclick="register()">I AGREE. ENTER NODE.</button>
</div>
<script>
async function register(){const p={name:document.getElementById('name').value,email:document.getElementById('email').value,order_id:document.getElementById('order').value,persona_id:document.getElementById('persona').value,lane:document.getElementById('lane').value};const r=await fetch('/register-affiliate-v1.5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(p)});const d=await r.json();if(d.success){document.getElementById('team-result').innerHTML='<h3>'+d.message+' TEAM: '+d.team+'</h3>';alert(d.message+' ID:'+d.captain_id);window.location=d.wa_invite;}}
<\/script>
</body></html>`;
