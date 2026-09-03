export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    if (request.method === 'OPTIONS') return new Response(null, {headers: cors});

    // V27.2 HALLEL
    if (url.pathname === "/v27.2/health" || url.pathname === "/v27.1/health") {
      return new Response(JSON.stringify({
        status: "alive",
        version: "27.2",
        bridge: "HALLEL",
        worker: "angels-hosts-api3",
        timestamp: new Date().toISOString()
      }), {headers: {...cors, 'Content-Type': 'application/json'}});
    }

    if (url.pathname === "/v27.2/architecture" || url.pathname === "/v27.1/architecture") {
      return new Response(JSON.stringify({
        version: "27.2",
        name: "HALLEL Bridge",
        components: ["videos","health","hallel","belsidus","register","frontend"],
        deployed_as: "angels-hosts-api3"
      }), {headers: {...cors, 'Content-Type': 'application/json'}});
    }

    if (url.pathname === "/v27.2/hallel" || url.pathname === "/v27.1/hallel") {
      if (request.method === "POST") {
        const data = await request.json().catch(()=>({}));
        return new Response(JSON.stringify({ success: true, received: data, message: "HALLEL V27.2 received" }), {headers: {...cors, 'Content-Type': 'application/json'}});
      }
      return new Response(JSON.stringify({ version: "27.2", endpoint: "hallel", status: "ready" }), {headers: {...cors, 'Content-Type': 'application/json'}});
    }

    if (url.pathname === "/v27.2/videos" || url.pathname === "/v27.1/videos") {
      const vids = ["dhLboOnPljo","SGPJWd2q2RM","mHBJN0QA8Fo","yKufPwpT4E4"];
      const embeds = vids.map(id => `
        <div class="card">
          <iframe width="100%" height="220"
            src="https://www.youtube.com/embed/${id}"
            frameborder="0" allowfullscreen>
          </iframe>
        </div>`).join("");
      const html = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HALLEL V27.2 Gallery</title>
<style>
body{background:#0a0a0a;color:#D4AF37;font-family:Arial;padding:20px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;max-width:1100px;margin:auto}
.card{background:#111;border:2px solid #D4AF37;border-radius:12px;padding:10px}
h1{text-align:center;text-shadow:0 0 10px #D4AF37}
</style></head><body>
<h1>H.A.L.EL PLATFORM V27.2 Gallery</h1>
<div class="grid">${embeds}</div>
<p style="text-align:center"><a href="/" style="color:#D4AF37">Back to Platform</a></p>
</body></html>`;
      return new Response(html, {headers: {...cors, 'Content-Type': 'text/html'}});
    }

    // Mailersend relay
    if (url.pathname === "/api/belsidus/send" && request.method === "POST") {
      const body = await request.json().catch(()=>({}));
      const { to, subject, text } = body;
      if (!to || !subject || !text) {
        return new Response(JSON.stringify({ success: false, error: "Missing to, subject, text" }), {status: 400, headers: {...cors, 'Content-Type': 'application/json'}});
      }
      if (!env.MAILERSEND_API_KEY) {
        return new Response(JSON.stringify({ success: false, error: "MAILERSEND_API_KEY not configured" }), {status: 500, headers: {...cors, 'Content-Type': 'application/json'}});
      }
      try {
        const msRes = await fetch("https://api.mailersend.com/v1/email", {
          method: "POST",
          headers: { "Authorization": `Bearer ${env.MAILERSEND_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from: { email: env.MAILERSEND_FROM || "trial@mailersend.net", name: "HALEL Bridge" },
            to: [{ email: to }],
            subject, text
          })
        });
        const msData = await msRes.json().catch(()=>({}));
        return new Response(JSON.stringify({ success: msRes.ok, status: msRes.status, mailersend: msData }), {headers: {...cors, 'Content-Type': 'application/json'}});
      } catch (e) {
        return new Response(JSON.stringify({ success: false, error: e.message }), {status: 500, headers: {...cors, 'Content-Type': 'application/json'}});
      }
    }

    // Register
    if (request.method === "POST" && url.pathname === "/register-affiliate-v1.5") {
      const data = await request.json().catch(()=>({}));
      const teams = ["Aleph","Bet","Gimel","Dalet","He","Vav","Zayin"];
      const assignedTeam = teams[Math.floor(Math.random()*7)];
      const captain_id = "CAPT"+Math.floor(1000+Math.random()*9000);
      const wa_links = { "A": "https://chat.whatsapp.com/LINK_A", "B": "https://chat.whatsapp.com/LINK_B", "C": "https://chat.whatsapp.com/LINK_C" };
      return new Response(JSON.stringify({
        success: true,
        captain_id,
        team: assignedTeam,
        message: `The Council assigned you to ${assignedTeam} TEAM. You are Vanguard.`,
        wa_invite: wa_links[data.lane] || "https://chat.whatsapp.com/LINK_A"
      }), {headers: {...cors, 'Content-Type': 'application/json'}});
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
<title>H.A.L.EL V27.2</title>
<style>
body{background:#0a0a0a;color:#D4AF37;font-family:Arial;margin:0;padding:20px;text-align:center}
h1{color:#D4AF37;text-shadow:0 0 10px #D4AF37}
.card{background:#111;border:2px solid #D4AF37;border-radius:12px;padding:20px;margin:20px auto;max-width:600px}
select,button,input{width:90%;padding:12px;margin:10px;border-radius:8px;border:1px solid #D4AF37;background:#000;color:#D4AF37}
button{background:#D4AF37;color:#000;font-weight:bold;cursor:pointer}
</style></head><body>
<h1>H.A.L.EL PLATFORM V27.2</h1>
<p>Humanitarian Angels & Ladies Le Yeshua Ha Elyon - HALLEL Bridge</p>
<div class="card">
<h2>STEP 1: ORDER</h2>
<select id="order">
<option value="">-- Which House? --</option>
<option>Havah - Emerald</option><option>Sarah - Sapphire</option>
<option>Ruth - Topaz</option><option>Esther - Amethyst</option>
<option>Deborah - Ruby</option><option>Miriam - Jasper</option>
<option>Candace - Diamond</option>
</select>
</div>
<div class="card">
<h2>STEP 2: TEAM</h2>
<div id="team-result">Awaiting Order...</div>
</div>
<div class="card">
<h2>STEP 3: PERSONA</h2>
<select id="persona">
<option value="">-- Mask? --</option>
<option value="Strategos">Strategos - Envoy</option>
<option value="Builder">Builder - Steward</option>
<option value="Artificer">Artificer - Engineer</option>
</select>
<input id="name" placeholder="Full Name">
<input id="email" placeholder="Email">
</div>
<div class="card">
<h2>STEP 4: LANE</h2>
<select id="lane">
<option value="">-- Node --</option>
<option value="A">LANE A: CORPS</option>
<option value="B">LANE B: ESG</option>
<option value="C">LANE C: PRO BONO</option>
</select>
<button onclick="register()">I AGREE. ENTER NODE.</button>
</div>
<p><a href="/v27.2/videos" style="color:#D4AF37">View V27.2 Gallery</a> | 
<a href="/v27.2/health" style="color:#D4AF37">Health</a></p>
<script>
async function register(){
  const payload = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    order_id: document.getElementById('order').value,
    persona_id: document.getElementById('persona').value,
    lane: document.getElementById('lane').value
  };
  const res = await fetch('/register-affiliate-v1.5', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if(data.success){
    document.getElementById('team-result').innerHTML = '<h3>'+data.message+'</h3>';
    alert(data.message + ' ID: ' + data.captain_id);
    window.location = data.wa_invite;
  }
}
document.getElementById('order').onchange = () => {
  document.getElementById('team-result').innerHTML = "Council assigning...";
}
<\/script>
</body></html>`;
