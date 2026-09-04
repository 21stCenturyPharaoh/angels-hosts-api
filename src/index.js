export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // ============================================================
    // H.A.L.L.EL. — THE HUMANITARIAN ANGELS & LADIES
    // LE YESHUA HA ELYON
    // Worker: angels-hosts-api3
    // V27.1
    // ============================================================

    // CORS
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors });
    }

    // ============================================================
    // V27.1 HEALTH
    // ============================================================

    if (url.pathname === "/v27.1/health") {
      return new Response(
        JSON.stringify({
          status: "alive",
          version: "27.1",
          bridge: "H.A.L.L.EL.",
          worker: "angels-hosts-api3",
          timestamp: new Date().toISOString()
        }),
        {
          headers: {
            ...cors,
            "Content-Type": "application/json"
          }
        }
      );
    }

    // ============================================================
    // V27.1 ARCHITECTURE
    // ============================================================

    if (url.pathname === "/v27.1/architecture") {
      return new Response(
        JSON.stringify({
          version: "27.1",
          name: "H.A.L.L.EL. Bridge",
          full_name:
            "The Humanitarian Angels & Ladies Le Yeshua Ha Elyon",
          components: [
            "videos",
            "architecture",
            "health",
            "hallel",
            "registration",
            "mailer"
          ],
          deployed_as: "angels-hosts-api3",
          repo: "angels-hosts-api"
        }),
        {
          headers: {
            ...cors,
            "Content-Type": "application/json"
          }
        }
      );
    }

    // ============================================================
    // V27.1 VIDEO GALLERY
    // ============================================================

    if (url.pathname === "/v27.1/videos") {
      const videos = [
        {
          id: "yKufPwpT4E4",
          title: "THOTH — The Scribe of Pharaoh",
          role: "Toth / Scribe Teaching"
        },
        {
          id: "dhLboOnPljo",
          title: "Pharaoh Conglomerate Master Architecture",
          role: "Master Architecture"
        },
        {
          id: "4JIA5fNc4qw",
          title: "Synthetic Assets Trailer @ThePharaohConglomerate @UnsealingTheProphets",
          role: "Master Civilizational Strategy Trailer v2.0 (formerly 'The Return')"
        },
        {
          id: "SGPJWd2q2RM",
          title: "Welcome to H.A.L.L.EL.",
          role: "Official H.A.L.L.EL. LARP Training"
        },
        {
          id: "Dk2nBc8_97M",
          title: "Registry's Affiliate Accelerator",
          role: "Affiliate Accelerator"
        }
      ];

      const videoEmbeds = videos
        .map(
          (video, index) => `
          <div class="card">
            <div class="number">VIDEO ${index + 1}</div>
            <h2>${video.title}</h2>
            <p>${video.role}</p>

            <iframe
              width="100%"
              height="240"
              src="https://www.youtube.com/embed/${video.id}"
              title="${video.title}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
        `
        )
        .join("");

      const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>H.A.L.L.EL. V27.1 — Gallery</title>

<style>

body {
  background: #080808;
  color: #D4AF37;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

header {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto 30px auto;
}

h1 {
  font-size: 32px;
  text-shadow: 0 0 12px #D4AF37;
}

.subtitle {
  color: #ffffff;
  font-size: 16px;
}

.asian {
  font-size: 22px;
  margin-top: 10px;
}

.grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: auto;
}

.card {
  background: #111111;
  border: 2px solid #D4AF37;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 0 15px rgba(212,175,55,0.15);
}

.card h2 {
  font-size: 20px;
}

.card p {
  color: #ffffff;
}

.number {
  font-weight: bold;
  letter-spacing: 2px;
}

iframe {
  border-radius: 10px;
}

footer {
  text-align: center;
  margin-top: 40px;
  color: #aaa;
}

</style>
</head>

<body>

<header>

<h1>H.A.L.L.EL.</h1>

<div class="subtitle">
The Humanitarian Angels & Ladies
Le Yeshua Ha Elyon
</div>

<div class="asian">
公益 · 智慧 · 使命 · 服务 · 守护 · 连接
</div>

</header>

<div class="grid">

${videoEmbeds}

</div>

<footer>

H.A.L.L.EL. V27.1<br>
Game Layer • Service Layer • Technology Bridge

</footer>

</body>
</html>
`;

      return new Response(html, {
        headers: {
          ...cors,
          "Content-Type": "text/html"
        }
      });
    }

    // ============================================================
    // H.A.L.L.EL. BRIDGE ENDPOINT
    // ============================================================

    if (url.pathname === "/v27.1/hallel") {
      if (request.method === "POST") {
        const data = await request.json().catch(() => ({}));

        return new Response(
          JSON.stringify({
            success: true,
            received: data,
            message: "H.A.L.L.EL. bridge received payload”
              
