// H.A.L.L.EL PLATFORM - V27.1 Bridge - WITH LIVE REGISTRATION
// Worker: angels-hosts-api3.pharangels.workers.dev
// Spelling: H.A.L.L.EL - double L - Humanitarian Angels & Ladies Le Yeshua Ha Elyon

const VIDEOS = [
  {
    id: "SGPJWd2q2RM",
    title: "H.A.L.L.EL Official Video / Training",
    slot: "H.A.L.L.EL",
    youtube: "https://www.youtube.com/watch?v=SGPJWd2q2RM"
  },
  {
    id: "yKufPwpT4E4",
    title: "TOTH The Scribe",
    slot: "TOTH / SCRIBE",
    youtube: "https://www.youtube.com/watch?v=yKufPwpT4E4"
  },
  {
    id: "dhLboOnPljo",
    title: "Pharaoh Conglomerate Autonomous Synthetic Assets",
    slot: "PHARAOH CONGLOMERATE",
    youtube: "https://www.youtube.com/watch?v=dhLboOnPljo"
  },
  {
    id: "Dk2nBc8_97M",
    title: "Registry Affiliate Accelerator",
    slot: "REGISTRY ACCELERATOR",
    youtube: "https://www.youtube.com/watch?v=Dk2nBc8_97M"
  },
  {
    id: "4JIA5fNc4qw",
    title: "Autonomous Synthetic Assets Trailer @ThePharaohConglomerate @UnsealingTheProphets",
    slot: "AUTONOMOUS SYNTHETIC ASSETS",
    youtube: "https://www.youtube.com/watch?v=4JIA5fNc4qw"
  }
];

const IMAGES = [
  "https://cdn.jsdelivr.net/gh/21stCenturyPharaoh/angels-hosts-api@main/assets/halel-map.jpg",
  "https://cdn.jsdelivr.net/gh/21stCenturyPharaoh/angels-hosts-api@main/assets/halel-pages.jpg"
];

const ARCH = {
  platform: "H.A.L.L.EL PLATFORM",
  fullName: "Humanitarian Angels & Ladies Le Yeshua Ha Elyon",
  shortName: "H.A.L.L.EL",
  version: "V27.1",
  mode: "游戏模式 · Game Mode",
  bridge: "OPERATIONS / GAME LAYER",
  command: "TOTH / HERMES COMMAND CENTER (upstream only)",
  workers: {
    hallel: "angels-hosts-api3.pharangels.workers.dev",
    autoDelivery: "pharaoh-auto-delivery.pharangels.workers.dev"
  },
  orders: ["Havah","Sarah","Rebecca","Leah","Bilhah","Zilpah","Miriam","Candace","Ruth","Esther","Elizabeth","Hagar"],
  nodes: ["Aleph","Bet","Gimel","Dalet","He","Vav","Zayin"],
  gates: ["North","South","East","West","Central - Africa"],
  corps: ["Humanitarian Angels Corps","Humanitarian Ladies Corps","Humanitarian Divas Corps"],
  elements: ["AIR","WATER","EARTH","FIRE"]
};

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

function json(data, status=200){
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-cache", ...cors }
  });
}

function htmlPage(){
return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>H.A.L.L.EL PLATFORM - Humanitarian Angels & Ladies Le Yeshua Ha Elyon</title>
<style>
body{margin:0;font-family:system-ui;background:#070a12;color:#e8e8f0}
.hero{padding:48px 24px;text-align:center;background:linear-gradient(180deg,#111a33,#070a12);border-bottom:1px solid #1e2a5a}
.hero h1{font-size:42px;letter-spacing:3px;margin:0}
.hero h2{font-weight:300;opacity:.8;margin:8px 0}
.badge{display:inline-block;padding:6px 14px;border:1px solid #3a4ea0;border-radius:20px;margin-top:12px;font-size:12px;letter-spacing:2px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;padding:24px;max-width:1200px;margin:auto}
.card{background:#0f1630;border:1px solid #1e2a5a;border-radius:16px;padding:18px;cursor:pointer;transition:.2s}
.card:hover{transform:translateY(-2px);border-color:#5a78ff}
.card h3{margin:0 0 6px 0;letter-spacing:1px}
.gallery{max-width:1200px;margin:auto;padding:0 24px 24px 24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}
.gallery img{width:100%;border-radius:16px;border:1px solid #1e2a5a;display:block}
.videos{max-width:1200px;margin:auto;padding:0 24px 24px 24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:16px}
.vid{background:#0f1630;border:1px solid #1e2a5a;border-radius:16px;overflow:hidden}
.vid iframe{width:100%;aspect-ratio:16/9;border:0}
.vid .meta{padding:10px 12px;font-size:12px;opacity:.8}
a{color:#8aa0ff;text-decoration:none}
.reg{max-width:600px;margin:0 auto 24px auto;background:#0f1630;border:1px solid #1e2a5a;border-radius:16px;padding:24px}
.reg h2{margin-top:0;text-align:center;letter-spacing:2px}
.reg select,.reg input,.reg button{width:100%;box-sizing:border-box;padding:12px;margin:8px 0;border-radius:8px;border:1px solid #3a4ea0;background:#070a12;color:#e8e8f0;font-size:16px}
.reg button{background:#d4af37;color:#000;font-weight:bold;cursor:pointer;border:none}
.reg button:hover{box-shadow:0 0 12px #d4af37}
#reg-result{margin-top:12px;font-size:14px;min-height:20px}
</style>
</head>
<body>
<div class="hero">
<h1>H.A.L.L.EL PLATFORM</h1>
<h2>Humanitarian Angels & Ladies Le Yeshua Ha Elyon</h2>
<div>游戏模式 · Game Mode</div>
<div class="badge">V27.1 BRIDGE • OPERATIONS / GAME LAYER</div>
<p style="max-width:700px;margin:18px auto;opacity:.7">The optional LARP layer of the Volunteer Exchange Portal. Choose your Order, Consulate, Node Team, Gate, Corps, and Element.</p>
</div>

<div class="reg" id="register">
<h2>JOIN THE COUNCIL</h2>
<select id="order_id">
<option value="">-- Which House Calls You? --</option>
<option value="1">Order of Havah — Emerald</option>
<option value="2">Order of Sarah — Sapphire</option>
<option value="3">Order of Ruth — Topaz</option>
<option value="4">Order of Esther — Amethyst</option>
<option value="5">Order of Deborah — Ruby</option>
<option value="6">Order of Miriam — Jasper</option>
<option value="7">Order of Candace — Diamond</option>
<option value="8">Order of Elizabeth — Pearl</option>
</select>
<select id="persona_id">
<option value="">-- Which Mask Will You Wear? --</option>
<option value="1">Strategos / Strategia — Envoy</option>
<option value="2">Builder / Matriarch — Steward</option>
<option value="3">Artificer / Artificia — Engineer</option>
</select>
<input id="name" placeholder="Full Name">
<input id="email" placeholder="Email">
<select id="lane">
<option value="">-- Choose Your Node --</option>
<option value="A">LANE A — H.A.L.L.EL CORPS — Commission</option>
<option value="B">LANE B — BRI ESG CORPS — Credits</option>
<option value="C">LANE C — PRO BONO CORPS — Certificates</option>
</select>
<button onclick="registerCaptain()">I AGREE. ENTER THE NODE.</button>
<div id="reg-result"></div>
</div>

<div class="grid">
<div class="card" onclick="location.href='#missions'"><h3>MISSIONS</h3><div>Mission Board & Active Tasks</div></div>
<div class="card" onclick="location.href='#teams'"><h3>TEAMS</h3><div>Node Teams: Aleph, Bet, Gimel, Dalet, He, Vav, Zayin</div></div>
<div class="card" onclick="location.href='#orders'"><h3>ORDERS</h3><div>12 Orders: Havah → Hagar</div></div>
<div class="card" onclick="location.href='#consulates'"><h3>CONSULATES</h3><div>Consul, Deputy, Quartermaster, Archivist, Event, Training, Hospitality</div></div>
<div class="card" onclick="location.href='#gates'"><h3>GATES</h3><div>North, South, East, West, Central (Africa)</div></div>
<div class="card" onclick="location.href='#corps'"><h3>CORPS</h3><div>Angels Corps | Ladies Corps | Divas Corps</div></div>
<div class="card" onclick="location.href='#elements'"><h3>ELEMENTS</h3><div>AIR · WATER · EARTH · FIRE</div></div>
<div class="card" onclick="location.href='#lore'"><h3>LORE</h3><div>Synthetic Assets & Command</div></div>
</div>
<div class="gallery">
${IMAGES.map(src=>`<img src="${src}" alt="H.A.L.L.EL asset">`).join('')}
</div>
<div class="videos">
${VIDEOS.map(v=>`<div class="vid"><iframe src="https://www.youtube.com/embed/${v.id}" allowfullscreen></iframe><div class="meta"><b>${v.slot}</b> — ${v.title}<br><a href="${v.youtube}" target="_blank">${v.youtube}</a></div></div>`).join('')}
</div>
<div style="max-width:1200px;margin:auto;padding:24px">
<h3 id="missions">MISSIONS</h3><p>Volunteer Exchange Portal missions feed - placeholder for /v27.1/hallel tasks.</p>
<h3 id="teams">TEAMS</h3><p>${ARCH.nodes.join(' · ')}</p>
<h3 id="orders">ORDERS</h3><p>${ARCH.orders.join(' · ')}</p>
<h3 id="consulates">CONSULATES</h3><p>Roles: Consul, Deputy Consul, Quartermaster, Archivist, Event Coordinator, Training Coordinator, Hospitality Coordinator</p>
<h3 id="gates">GATES</h3><p>${ARCH.gates.join(' · ')}</p>
<h3 id="corps">CORPS</h3><p>${ARCH.corps.join(' · ')}</p>
<h3 id="elements">ELEMENTS</h3><p>AIR - Bird conservation & drone mapping · WATER - Rivers/Oceans · EARTH - Wildlife/Forestry/Agriculture · FIRE - Emergency logistics</p>
<h3 id="lore">LORE</h3><p>Command: TOTH / HERMES → H.A.L.L.EL WORKER (Game/Operations) + AUTO-DELIVERY WORKER (Delivery/Registry) → Real Platforms. Synthetic Assets: Hermes-Toth-Agent, HALL.EL, Michael, Gabriel, Raphael, Uriel, Sariel, Raguel, Remiel.</p>
<hr style="border:0;border-top:1px solid #1e2a5a;margin:32px 0">
<p style="font-size:12px;opacity:.6">Endpoints: <a href="/v27.1/health">/v27.1/health</a> · <a href="/v27.1/architecture">/v27.1/architecture</a> · <a href="/v27.1/videos">/v27.1/videos</a> · <a href="/v27.1/hallel">/v27.1/hallel</a></p>
</div>
<script>
async function registerCaptain(){
  const payload = {
    name: document.getElementById('name').value || 'Captain',
    email: document.getElementById('email').value,
    order_id: parseInt(document.getElementById('order_id').value || '1'),
    persona_id: parseInt(document.getElementById('persona_id').value || '1'),
    lane: document.getElementById('lane').value || 'A'
  };
  const resultBox = document.getElementById('reg-result');
  resultBox.textContent = 'Submitting to the Council...';
  try {
    const res = await fetch('/register-affiliate-v1.5', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if(data.success){
      resultBox.innerHTML = '<b>' + data.message + '</b><br>Captain ID: ' + data.captain_id;
      if(data.wa_invite){
        setTimeout(()=>{ window.location = data.wa_invite; }, 1500);
      }
    } else {
      resultBox.textContent = 'Registration failed. Please try again.';
    }
  } catch(e) {
    resultBox.textContent = 'Error contacting the Council: ' + e.message;
  }
}
</script>
</body>
</html>`;
}

export default {
  async fetch(request, env){
    const url = new URL(request.url);
    let path = url.pathname.toLowerCase();
    if(path.endsWith("/") && path.length > 1) path = path.slice(0,-1);

    if (request.method === "OPTIONS") return new Response(null, { headers: cors });

    if (path === "" || path === "/" || path === "/index.html") {
      return new Response(htmlPage(), { headers: { "Content-Type": "text/html; charset=utf-8", ...cors } });
    }
    if (path === "/v27.1/health" || path === "/health") {
      return json({ status: "ok", worker: "angels-hosts-api3", platform: "H.A.L.L.EL PLATFORM", version: "V27.1", spelling: "H.A.L.L.EL double L", timestamp: new Date().toISOString(), videos: VIDEOS.length, images: IMAGES.length });
    }
    if (path === "/v27.1/architecture") {
      return json(ARCH);
    }
    if (path === "/v27.1/videos" || path === "/v27.1/videos.json") {
      return json({ version: "V27.1", platform: "H.A.L.L.EL PLATFORM", canonical: true, spelling: "H.A.L.L.EL", placements: VIDEOS, images: IMAGES });
    }
    if (path === "/v27.1/hallel" || path === "/v27.1/hall.el" || path === "/v27.1/hall-el") {
      if (request.method === "POST") {
        const data = await request.json().catch(() => ({}));
        return json({ success: true, received: data, message: "HALLEL bridge received payload" });
      }
      return json({ platform: "H.A.L.L.EL PLATFORM", fullName: ARCH.fullName, shortName: "H.A.L.L.EL", gameMode: ARCH.mode, orders: ARCH.orders, nodes: ARCH.nodes, gates: ARCH.gates, corps: ARCH.corps, elements: ARCH.elements, videos: VIDEOS });
    }

    // === Registration: assign order/team/lane ===
    if (path === "/register-affiliate-v1.5" && request.method === "POST") {
      const data = await request.json().catch(() => ({}));
      const { name, email, order_id, persona_id, lane } = data;
      const teams = ARCH.nodes;
      const assignedTeam = teams[Math.floor(Math.random() * teams.length)];
      const captain_id = "CAPT" + Math.floor(1000 + Math.random() * 9000);
      const wa_links = {
        "A": "https://chat.whatsapp.com/LINK_A",
        "B": "https://chat.whatsapp.com/LINK_B",
        "C": "https://chat.whatsapp.com/LINK_C"
      };
      return json({
        success: true,
        captain_id,
        team: assignedTeam,
        message: `The Council has assigned you to ${assignedTeam} TEAM. You are the Vanguard.`,
        wa_invite: wa_links[lane] || null
      });
    }

    // === Mailersend trial relay stub (Nefetari β) ===
    if (path === "/api/belsidus/send" && request.method === "POST") {
      const body = await request.json().catch(() => ({}));
      const { to, subject, text } = body;

      if (!to || !subject || !text) {
        return json({ success: false, error: "Missing required fields: to, subject, text" }, 400);
      }
      if (!env.MAILERSEND_API_KEY) {
        return json({ success: false, error: "MAILERSEND_API_KEY not configured in Worker env" }, 500);
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
        return json({ success: msRes.ok, status: msRes.status, mailersend: msData });
      } catch (e) {
        return json({ success: false, error: e.message }, 500);
      }
    }

    return json({ error: "Not Found", path: url.pathname, worker: "H.A.L.L.EL PLATFORM V27.1" }, 404);
  }
};
