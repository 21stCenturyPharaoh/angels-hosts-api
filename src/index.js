// H.A.L.L.EL PLATFORM - V27.1 Bridge - DOUBLE L FINAL FIX
// Worker: angels-hosts-api3.pharangels.workers.dev
// Spelling: H.A.L.L.EL - double L - Humanitarian Angels & Ladies Le Yeshua Ha Elyon

const VIDEOS = [
  { id: "yKufPwpT4E4", title: "H.A.L.L.EL - Welcome & Lore", slot: "LORE / INTRO", youtube: "https://www.youtube.com/watch?v=yKufPwpT4E4" },
  { id: "dhLboOnPljo", title: "H.A.L.L.EL - Orders & Consulates", slot: "ORDERS / CONSULATES", youtube: "https://www.youtube.com/watch?v=dhLboOnPljo" },
  { id: "dhLboOnPljo", title: "H.A.L.L.EL - Nodes & Gates", slot: "TEAMS / GATES", youtube: "https://www.youtube.com/watch?v=dhLboOnPljo" },
  { id: "SGPJWd2q2RM", title: "H.A.L.L.EL - Game Mode Activated", slot: "MISSIONS / CORPS / ELEMENTS", youtube: "https://www.youtube.com/watch?v=SGPJWd2q2RM" }
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

function json(data, status=200){
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Cache-Control": "no-cache" }
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
.videos{max-width:1200px;margin:auto;padding:0 24px 24px 24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:16px}
.vid{background:#0f1630;border:1px solid #1e2a5a;border-radius:16px;overflow:hidden}
.vid iframe{width:100%;aspect-ratio:16/9;border:0}
.vid .meta{padding:10px 12px;font-size:12px;opacity:.8}
a{color:#8aa0ff;text-decoration:none}
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
</body>
</html>`;
}

export default {
  async fetch(request){
    const url = new URL(request.url);
    let path = url.pathname.toLowerCase();
    if(path.endsWith("/") && path.length > 1) path = path.slice(0,-1);

    if (path === "" || path === "/" || path === "/index.html") {
      return new Response(htmlPage(), { headers: { "Content-Type": "text/html; charset=utf-8", "Access-Control-Allow-Origin": "*" } });
    }
    if (path === "/v27.1/health" || path === "/health") {
      return json({ status: "ok", worker: "angels-hosts-api3", platform: "H.A.L.L.EL PLATFORM", version: "V27.1", spelling: "H.A.L.L.EL double L", timestamp: new Date().toISOString(), videos: VIDEOS.length });
    }
    if (path === "/v27.1/architecture") {
      return json(ARCH);
    }
    if (path === "/v27.1/videos") {
      return json({ version: "V27.1", platform: "H.A.L.L.EL PLATFORM", canonical: true, spelling: "H.A.L.L.EL", placements: VIDEOS });
    }
    if (path === "/v27.1/hallel" || path === "/v27.1/hall.el" || path === "/v27.1/hall-el") {
      return json({ platform: "H.A.L.L.EL PLATFORM", fullName: ARCH.fullName, shortName: "H.A.L.L.EL", gameMode: ARCH.mode, orders: ARCH.orders, nodes: ARCH.nodes, gates: ARCH.gates, corps: ARCH.corps, elements: ARCH.elements, videos: VIDEOS });
    }
    return json({ error: "Not Found", path: url.pathname, worker: "H.A.L.L.EL PLATFORM V27.1" }, 404);
  }
}
