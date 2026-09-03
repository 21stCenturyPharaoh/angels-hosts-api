export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS for local testing
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    if (request.method === 'OPTIONS') return new Response(null, {headers: cors});

    // === V27.1 HALLEL BRIDGE ===
    if (url.pathname === "/v27.1/health") {
      return new Response(JSON.stringify({
        status: "alive",
        version: "27.1",
        bridge: "HALLEL",
        worker: "angels-hosts-api3",
        timestamp: new Date().toISOString()
      }), {headers: {...cors, 'Content-Type': 'application/json'}});
    }

    if (url.pathname === "/v27.1/architecture") {
      return new Response(JSON.stringify({
        version: "27.1",
        name: "HALLEL Bridge",
        components: ["videos", "architecture", "health", "hallel"],
        deployed_as: "angels-hosts-api3",
        repo: "angels-hosts-api"
      }), {headers: {...cors, 'Content-Type': 'application/json'}});
    }

    // Video + image gallery — HTML page with embeds
    if (url.pathname === "/v27.1/videos") {
      const videos = [
        "dhLboOnPljo",
        "SGPJWd2q2RM",
        "mHBJN0QA8Fo",
        "yKufPwpT4E4"
      ];
      const images = [
        "https://cdn.jsdelivr.net/gh/21stCenturyPharaoh/angels-hosts-api@main/assets/halel-map.jpg",
        "https://cdn.jsdelivr.net/gh/21stCenturyPharaoh/angels-hosts-api@main/assets/halel-pages.jpg"
      ];

      const videoEmbeds = videos.map(id => `
        <div class="card">
          <iframe width="100%" height="220" src="https://www.youtube.com/embed/${id}"
            title="HALEL Mission Video" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>`).join("");

      const imageEmbeds = images.map(src => `
        <div class="card"><img src="${src}" style="width:100%;border-radius:8px" alt="HALEL asset"></div>`).join("");

      const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>H.A.L.EL V27.1 — Gallery</title>
      <style>
        body{background:#0a0a0a;color:#D4AF37;font-family:Arial;margin:0;padding:20px}
        h1{text-align:center;text-shadow:0 0 10px #D4AF37}
        .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;max-width:1100px;margin:0 auto}
        .card{background:#111;border:2px solid #D4AF37;border-radius:12px;padding:10px}
      </style></head><body>
      <h1>H.A.L.EL PLATFORM — V27.1 Gallery</h1>
      <div class="grid">${imageEmbeds}${videoEmbeds}</div>
      </body></html>`;

      return new Response(html, {headers: {...cors, 'Content-Type': 'text/html'}});
    }

    if (url.pathname === "/v27.1/hallel") {
      if (request.method === "POST") {
        const data = await request.json().catch(() => ({}));
        return new Response(JSON.stringify({
          success: true,
          received: data,
          message: "HALLEL bridge received payload"
        }), {headers: {...cors, 'Content-Type': 'application/json'}});
      }
      return new Response(JSON.stringify({
        version: "27.1",
        endpoint: "hallel",
        status: "ready"
      }), {headers: {...cors, 'Content-Type': 'application/json'}});
    }

    // === Mailersend trial relay stub (Nefetari β) ===
    if (url.pathname === "/api/belsidus/send" && request.method === "POST") {
      const body = await request.json().catch(() => ({}));
      const { to, subject, text } = body;

      if (!to || !subject || !text) {
        return new Response(JSON.stringify({
          success: false, error: "Missing required fields: to, subject, text"
        }), {status: 400, headers: {...cors, 'Content-Type': 'application/json'}});
      }

      if (!env.MAILERSEND_API_KEY) {
        return new Response(JSON.stringify({
          success: false, error: "MAILERSEND_API_KEY not configured in Worker env"
        }), {status: 500, headers: {...cors, 'Content-Type': 'application/json'}});
      }

      try {
        const msRes = await fetch("https://api.mailersend.com/v1/email", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${env.MAILERSEND_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            from: { email: env.MAILERSEND_FROM || "trial@yourtrialdomain.mailersend.net", name: "HALEL Bridge" },
            to: [{ email: to }],
            subject,
            text
          })
        });
        const msData = await msRes.json().catch(() => ({}));
        return new Response(JSON.stringify({
          success: msRes.ok, status: msRes.status, mailersend: msData
        }), {headers: {...cors, 'Content-Type': 'application/json'}});
      } catch (e) {
        return new Response(JSON.stringify({
          success: false, error: e.message
        }), {status: 500, headers: {...cors, 'Content-Type': 'application/json'}});
      }
    }

    // === EXISTING: API: REGISTER + AUTO-ASSIGN TEAM ===
    if (request.method === "POST" && url.pathname === "/register-affiliate-v1.5") {
      const data = await request.json();
      const { name, email, order_id, persona_id, lane } = data;

      const teams = ["Aleph","Bet","Gimel","Dalet","He","Vav","Zayin"];
      const assignedTeam = teams[Math.floor(Math.random() * 7)];
      const captain_id = "CAPT" + Math.floor(1000 + Math.random() * 9000);

      const wa_links = {
        "A": "https://chat.whatsapp.com/LINK_A",
        "B": "https://chat.whatsapp.com/LINK_B",
        "C": "https://chat.whatsapp.com/LINK_C"
      }

      return new Response(JSON.stringify({
        success: true,
        captain_id,
        team: assignedTeam,
        message: `The Council has assigned you to ${assignedTeam} TEAM. You are the Vanguard.`,
        wa_invite: wa_links[lane]
      }), {headers: {...cors, 'Content-Type': 'application/json'}});
    }

    // SERVE FRONTEND
    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(INDEX_HTML, {headers: {'Content-Type': 'text/html'}});
    }

    return new Response("404 - Node Not Found", {status: 404});
  }
}

const INDEX_HTML = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>H.A.L.EL PLATFORM V1.5</title><style>
body{background:#0a0a0a;color:#D4AF37;font-family:Arial;margin:0;padding:20px;text-align:center}
h1{color:#D4AF37;text-shadow:0 0 10px #D4AF37}
.card{background:#111;border:2px solid #D4AF37;border-radius:12px;padding:20px;margin:20px auto;max-width:600px}
select,button,input{width:90%;padding:12px;margin:10px;border-radius:8px;border:1px solid #D4AF37;background:#000;color:#D4AF37;font-size:16px}
button{background:#D4AF37;color:#000;font-weight:bold;cursor:pointer}
button:hover{box-shadow:0 0 15px #D4AF37}
.gem{font-size:24px}
</style></head><body>
<h1>H.A.L.EL PLATFORM</h1>
<p>Humanitarian Angels & Ladies Le Yeshua Ha Elyon</p>

<div class="card">
  <h2>STEP 1: CHOOSE YOUR ORDER</h2>
  <select id="order">
    <option value="">-- Which House Calls You? --</option>
    <option value="Havah">Order of Havah <span class="gem">💎 Emerald</span></option>
    <option value="Sarah">Order of Sarah <span class="gem">💎 Sapphire</span></option>
    <option value="Ruth">Order of Ruth <span class="gem">💎 Topaz</span></option>
    <option value="Esther">Order of Esther <span class="gem">💎 Amethyst</span></option>
    <option value="Deborah">Order of Deborah <span class="gem">💎 Ruby</span></option>
    <option value="Miriam">Order of Miriam <span class="gem">💎 Jasper</span></option>
    <option value="Candace">Order of Candace <span class="gem">💎 Diamond</span></option>
    <option value="Elizabeth">Order of Elizabeth <span class="gem">💎 Pearl</span></option>
    <option value="Mary">Order of Mary <span class="gem">💎 Aquamarine</span></option>
    <option value="Leah">Order of Leah <span class="gem">💎 Onyx</span></option>
    <option value="Rachel">Order of Rachel <span class="gem">💎 Garnet</span></option>
    <option value="Bilhah">Order of Bilhah <span class="gem">💎 Citrine</span></option>
  </select>
</div>
<div class="card">
  <h2>STEP 2: COUNCIL ASSIGNS YOUR TEAM</h2>
  <p>Law 31: Control The Options. Team assigned for balance.</p>
  <div id="team-result">Awaiting Order Selection...</div>
</div>
<div class="card">
  <h2>STEP 3: CHOOSE YOUR PERSONA</h2>
  <select id="persona">
    <option value="">-- Which Mask Will You Wear? --</option>
    <option value="Strategos">The Strategos ♂️ / Strategia ♀️ - Envoy</option>
    <option value="Builder">The Builder ♂️ / Matriarch ♀️ - Steward</option>
    <option value="Artificer">The Artificer ♂️ / Artificia ♀️ - Engineer</option>
  </select>
  <input id="name" placeholder="Full Name">
  <input id="email" placeholder="Email">
</div>

<div class="card">
  <h2>STEP 4: CHOOSE YOUR LANE</h2>
  <select id="lane">
    <option value="">-- Choose Your Node --</option>
    <option value="A">LANE A: H.A.L.EL CORPS 🌍 - Commission</option>
    <option value="B">LANE B: BRI ESG CORPS  🌱 - Credits</option>
    <option value="C">LANE C: PRO BONO CORPS ⚖️ - Certificates</option>
  </select>
  <button onclick="register()">I AGREE. ENTER THE NODE.</button>
</div>

<script>
async function register(){
  const payload = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    order_id: document.getElementById('order').value,
    persona_id: document.getElementById('persona').value,
    lane: document.getElementById('lane').value
  };
  const res = await fetch('/register-affiliate-v1.5', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)});
  const data = await res.json();
  if(data.success){
    document.getElementById('team-result').innerHTML = '<h3>' + data.message + '</h3>';
    alert(data.message);
    window.location = data.wa_invite;
  }
}
document.getElementById('order').onchange = (e) => {
  document.getElementById('team-result').innerHTML = "Council is assigning Team...";
}
</script>
</body></html>`;
