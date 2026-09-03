export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    if (request.method === 'OPTIONS') return new Response(null, {headers: cors});

    if (url.pathname === "/v27.3/health" || url.pathname === "/v27.2/health" || url.pathname === "/v27.1/health") {
      return new Response(JSON.stringify({
        status: "alive", version: "27.3", bridge: "HALLEL",
        worker: "angels-hosts-api3",
        timestamp: new Date().toISOString()
      }), {headers: {...cors, 'Content-Type': 'application/json'}});
    }

    if (url.pathname.includes("/videos")) {
      return Response.redirect("https://angels-hosts-api3.pharangels.workers.dev/#videos", 302);
    }

    if (url.pathname === "/api/belsidus/send" && request.method === "POST") {
      const body = await request.json().catch(()=>({}));
      const { to, subject, text } = body;
      if (!env.MAILERSEND_API_KEY) return new Response(JSON.stringify({ success: false, error: "MAILERSEND_API_KEY not set" }), {status: 500, headers: {...cors, 'Content-Type': 'application/json'}});
      const msRes = await fetch("https://api.mailersend.com/v1/email", {
        method: "POST",
        headers: { "Authorization": `Bearer ${env.MAILERSEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: { email: env.MAILERSEND_FROM || "trial@mailersend.net", name: "HALEL Bridge" }, to: [{ email: to }], subject, text })
      });
      const msData = await msRes.json().catch(()=>({}));
      return new Response(JSON.stringify({ success: msRes.ok, mailersend: msData }), {headers: {...cors, 'Content-Type': 'application/json'}});
    }

    if (request.method === "POST" && url.pathname === "/register-affiliate-v1.5") {
      const data = await request.json().catch(()=>({}));
      const teams = ["Aleph","Bet","Gimel","Dalet","He","Vav","Zayin"];
      const assignedTeam = teams[Math.floor(Math.random()*7)];
      const captain_id = "CAPT"+Math.floor(1000+Math.random()*9000);
      const wa_links = { "A": "https://chat.whatsapp.com/LINK_A", "B": "https://chat.whatsapp.com/LINK_B", "C": "https://chat.whatsapp.com/LINK_C" };
      return new Response(JSON.stringify({ success: true, captain_id, team: assignedTeam, message: `Council assigned you to ${assignedTeam} TEAM. You are Vanguard.`, wa_invite: wa_links[data.lane] || wa_links["A"] }), {headers: {...cors, 'Content-Type': 'application/json'}});
    }

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(INDEX_HTML, {headers: {'Content-Type': 'text/html'}});
    }
    return new Response("404 - Node Not Found", {status: 404});
  }
}

const INDEX_HTML = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>H.A.L.EL V27.3</title>
<style>
body{background:#0a0a0a;color:#D4AF37;font-family:Arial;margin:0;padding:20px;text-align:center}
h1{color:#D4AF37;text-shadow:0 0 10px #D4AF37;margin:10px 0}
.card{background:#111;border:2px solid #D4AF37;border-radius:12px;padding:20px;margin:20px auto;max-width:800px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;margin:20px auto;max-width:1100px}
.vid{background:#111;border:2px solid #D4AF37;border-radius:12px;padding:8px}
select,button,input{width:90%;padding:12px;margin:10px;border-radius:8px;border:1px solid #D4AF37;background:#000;color:#D4AF37}
button{background:#D4AF37;color:#000;font-weight:bold;cursor:pointer}
a{color:#D4AF37}
</style></head><body>
<h1>H.A.L.EL PLATFORM V27.3</h1>
<p>Humanitarian Angels & Ladies Le Yeshua Ha Elyon - HALLEL Bridge LIVE</p>

<div id="videos" class="card">
<h2>HALLEL GALLERY - VIDEOS ON ROOT</h2>
<div class="grid">
<div class="vid"><iframe width="100%" height="200" src="https://www.youtube.com/embed/dhLboOnPljo" frameborder="0" allowfullscreen></iframe><p>Video 1 - dhLboOnPljo</p></div>
<div class="vid"><iframe width="100%" height="200" src="https://www.youtube.com/embed/SGPJWd2q2RM" frameborder="0" allowfullscreen></iframe><p>Video 2 - SGPJWd2q2RM</p></div>
<div class="vid"><iframe width="100%" height="200" src="https://www.youtube.com/embed/mHBJN0QA8Fo" frameborder="0" allowfullscreen></iframe><p>Video 3 - mHBJN0QA8Fo</p></div>
<div class="vid"><iframe width="100%" height="200" src="https://www.youtube.com/embed/yKufPwpT4E4" frameborder="0" allowfullscreen></iframe><p>Video 4 - yKufPwpT4E4</p></div>
</div>
</div>

<div class="card"><h2>STEP 1: ORDER</h2>
<select id="order"><option value="">-- Which House? --</option><option>Havah - Emerald</option><option>Sarah - Sapphire</option><option>Ruth - Topaz</option><option>Esther - Amethyst</option><option>Deborah - Ruby</option><option>Miriam - Jasper</option><option>Candace - Diamond</option></select>
</div>
<div class="card"><h2>STEP 2: TEAM</h2><div id="team-result">Awaiting Order...</div></div>
<div class="card"><h2>STEP 3: PERSONA</h2>
<select id="persona"><option value="">-- Mask? --</option><option value="Strategos">Strategos - Envoy</option><option value="Builder">Builder - Steward</option><option value="Artificer">Artificer - Engineer</option></select>
<input id="name" placeholder="Full Name"><input id="email" placeholder="Email">
</div>
<div class="card"><h2>STEP 4: LANE</h2>
<select id="lane"><option value="">-- Node --</option><option value="A">LANE A: CORPS</option><option value="B">LANE B: ESG</option><option value="C">LANE C: PRO BONO</option></select>
<button onclick="register()">I AGREE. ENTER NODE.</button>
</div>
<p><a href="/v27.3/health">Health Check</a> | V27.3 GOLDEN</p>
<script>
async function register(){
  const payload = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    order_id: document.getElementById('order').value,
    persona_id: document.getElementById('persona').value,
    lane: document.getElementById('lane').value
  };
  const res = await fetch('/register-affiliate-v1.5', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)});
  const data = await res.json();
  if(data.success){ document.getElementById('team-result').innerHTML = '<h3>'+data.message+'</h3>'; alert(data.message + ' ID: ' + data.captain_id); window.location = data.wa_invite; }
}
<\/script>
</body></html>`;
