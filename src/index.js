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
          id: "dhLboOnPljo",
          title: "Pharaoh Conglomerate Mission Architecture",
          role: "Mission Architecture"
        },
        {
          id: "SGPJWd2q2RM",
          title: "Welcome to H.A.L.L.EL.",
          role: "Official H.A.L.L.EL. LARP Training"
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
            message: "H.A.L.L.EL. bridge received payload"
          }),
          {
            headers: {
              ...cors,
              "Content-Type": "application/json"
            }
          }
        );
      }

      return new Response(
        JSON.stringify({
          version: "27.1",
          endpoint: "hallel",
          platform: "H.A.L.L.EL.",
          status: "ready"
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
    // MAILERSEND RELAY
    // Existing production functionality preserved.
    // Requires MAILERSEND_API_KEY in Worker environment.
    // ============================================================

    if (
      url.pathname === "/api/belsidus/send" &&
      request.method === "POST"
    ) {
      const body = await request.json().catch(() => ({}));

      const { to, subject, text } = body;

      if (!to || !subject || !text) {
        return new Response(
          JSON.stringify({
            success: false,
            error: "Missing required fields: to, subject, text"
          }),
          {
            status: 400,
            headers: {
              ...cors,
              "Content-Type": "application/json"
            }
          }
        );
      }

      if (!env.MAILERSEND_API_KEY) {
        return new Response(
          JSON.stringify({
            success: false,
            error:
              "MAILERSEND_API_KEY not configured in Worker environment"
          }),
          {
            status: 500,
            headers: {
              ...cors,
              "Content-Type": "application/json"
            }
          }
        );
      }

      try {
        const mailerSendResponse = await fetch(
          "https://api.mailersend.com/v1/email",
          {
            method: "POST",

            headers: {
              "Authorization":
                `Bearer ${env.MAILERSEND_API_KEY}`,
              "Content-Type": "application/json"
            },

            body: JSON.stringify({
              from: {
                email:
                  env.MAILERSEND_FROM ||
                  "trial@yourtrialdomain.mailersend.net",
                name: "H.A.L.L.EL. Bridge"
              },

              to: [
                {
                  email: to
                }
              ],

              subject: subject,
              text: text
            })
          }
        );

        const mailerData =
          await mailerSendResponse
            .json()
            .catch(() => ({}));

        return new Response(
          JSON.stringify({
            success: mailerSendResponse.ok,
            status: mailerSendResponse.status,
            mailersend: mailerData
          }),
          {
            headers: {
              ...cors,
              "Content-Type": "application/json"
            }
          }
        );

      } catch (error) {

        return new Response(
          JSON.stringify({
            success: false,
            error: error.message
          }),
          {
            status: 500,
            headers: {
              ...cors,
              "Content-Type": "application/json"
            }
          }
        );
      }
    }

    // ============================================================
    // EXISTING REGISTRATION
    // ============================================================

    if (
      request.method === "POST" &&
      url.pathname === "/register-affiliate-v1.5"
    ) {

      const data =
        await request.json().catch(() => ({}));

      const {
        name,
        email,
        order_id,
        persona_id,
        lane
      } = data;

      const teams = [
        "Aleph",
        "Bet",
        "Gimel",
        "Dalet",
        "He",
        "Vav",
        "Zayin"
      ];

      const assignedTeam =
        teams[Math.floor(Math.random() * teams.length)];

      const captain_id =
        "CAPT" +
        Math.floor(
          1000 + Math.random() * 9000
        );

      const wa_links = {
        A: "https://chat.whatsapp.com/LINK_A",
        B: "https://chat.whatsapp.com/LINK_B",
        C: "https://chat.whatsapp.com/LINK_C"
      };

      return new Response(
        JSON.stringify({
          success: true,
          name: name || "",
          email: email || "",
          order_id: order_id || "",
          persona_id: persona_id || "",
          lane: lane || "",
          captain_id: captain_id,
          team: assignedTeam,

          message:
            `The H.A.L.L.EL. Council has assigned you to ${assignedTeam} TEAM. You are the Vanguard.`,

          wa_invite:
            wa_links[lane] || ""
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
    // ROOT FRONTEND
    // ============================================================

    if (
      url.pathname === "/" ||
      url.pathname === "/index.html"
    ) {

      return new Response(INDEX_HTML, {
        headers: {
          ...cors,
          "Content-Type": "text/html"
        }
      });
    }

    // ============================================================
    // 404
    // ============================================================

    return new Response(
      "404 - H.A.L.L.EL. Node Not Found",
      {
        status: 404,
        headers: cors
      }
    );
  }
};


// ================================================================
// H.A.L.L.EL. FRONTEND
// ================================================================

const INDEX_HTML = `
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
>

<title>
H.A.L.L.EL. PLATFORM V27.1
</title>

<style>

body {
  background: #080808;
  color: #D4AF37;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  text-align: center;
}

h1 {
  color: #D4AF37;
  text-shadow: 0 0 12px #D4AF37;
}

h2 {
  color: #D4AF37;
}

p {
  color: #ffffff;
}

.card {
  background: #111111;
  border: 2px solid #D4AF37;
  border-radius: 14px;
  padding: 20px;
  margin: 20px auto;
  max-width: 650px;
}

select,
button,
input {
  width: 90%;
  padding: 13px;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid #D4AF37;
  background: #000000;
  color: #D4AF37;
  font-size: 16px;
  box-sizing: border-box;
}

button {
  background: #D4AF37;
  color: #000000;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  box-shadow: 0 0 15px #D4AF37;
}

.asian {
  font-size: 20px;
  margin: 15px 0;
}

.notice {
  border: 1px solid #555;
  padding: 15px;
  border-radius: 10px;
  color: #ffffff;
}

.success {
  color: #D4AF37;
  font-weight: bold;
}

</style>

</head>

<body>

<h1>
H.A.L.L.EL.
</h1>

<p>
The Humanitarian Angels & Ladies
Le Yeshua Ha Elyon
</p>

<div class="asian">
公益 · 智慧 · 使命 · 服务 · 守护 · 连接
</div>

<div class="notice">

<strong>
GAME MODE NOTICE
</strong>

<br><br>

H.A.L.L.EL. contains a fictional
LARP/game layer.

The real Volunteer Exchange Portal
remains the operational system.

</div>


<!-- ============================================================
     STEP 1
============================================================= -->

<div class="card">

<h2>
STEP 1: CHOOSE YOUR ORDER
</h2>

<select id="order">

<option value="">
-- Which House Calls You? --
</option>

<option value="Havah">
Order of Havah — Emerald
</option>

<option value="Sarah">
Order of Sarah — Sapphire
</option>

<option value="Ruth">
Order of Ruth — Topaz
</option>

<option value="Esther">
Order of Esther — Amethyst
</option>

<option value="Deborah">
Order of Deborah — Ruby
</option>

<option value="Miriam">
Order of Miriam — Jasper
</option>

<option value="Candace">
Order of Candace — Diamond
</option>

<option value="Elizabeth">
Order of Elizabeth — Pearl
</option>

<option value="Mary">
Order of Mary — Aquamarine
</option>

<option value="Leah">
Order of Leah — Onyx
</option>

<option value="Rachel">
Order of Rachel — Garnet
</option>

<option value="Bilhah">
Order of Bilhah — Citrine
</option>

</select>

</div>


<!-- ============================================================
     STEP 2
============================================================= -->

<div class="card">

<h2>
STEP 2: COUNCIL ASSIGNS YOUR TEAM
</h2>

<p>
Team assignment is used for balance.
</p>

<div id="team-result">
Awaiting Order Selection...
</div>

</div>


<!-- ============================================================
     STEP 3
============================================================= -->

<div class="card">

<h2>
STEP 3: CHOOSE YOUR PERSONA
</h2>

<select id="persona">

<option value="">
-- Which Mask Will You Wear? --
</option>

<option value="Strategos">
Strategos / Strategia — Envoy
</option>

<option value="Builder">
Builder / Matriarch — Steward
</option>

<option value="Artificer">
Artificer / Artificia — Engineer
</option>

</select>

<input
  id="name"
  type="text"
  placeholder="Full Name"
>

<input
  id="email"
  type="email"
  placeholder="Email"
>

</div>


<!-- ============================================================
     STEP 4
============================================================= -->

<div class="card">

<h2>
STEP 4: CHOOSE YOUR LANE
</h2>

<select id="lane">

<option value="">
-- Choose Your Node --
</option>

<option value="A">
LANE A — H.A.L.L.EL. CORPS — Commission
</option>

<option value="B">
LANE B — BRI ESG CORPS — Credits
</option>

<option value="C">
LANE C — PRO BONO CORPS — Certificates
</option>

</select>

<button onclick="register()">
I AGREE. ENTER THE NODE.
</button>

</div>


<!-- ============================================================
     JAVASCRIPT
============================================================= -->

<script>

async function register() {

  const name =
    document.getElementById("name").value.trim();

  const email =
    document.getElementById("email").value.trim();

  const order =
    document.getElementById("order").value;

  const persona =
    document.getElementById("persona").value;

  const lane =
    document.getElementById("lane").value;


  if (!name || !email || !order || !persona || !lane) {

    alert(
      "Please complete all four steps before entering the node."
    );

    return;
  }


  const payload = {

    name: name,

    email: email,

    order_id: order,

    persona_id: persona,

    lane: lane

  };


  try {

    const response =
      await fetch(
        "/register-affiliate-v1.5",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body:
            JSON.stringify(payload)
        }
      );


    const data =
      await response.json();


    if (data.success) {

      document.getElementById(
        "team-result"
      ).innerHTML =

        "<div class='success'>" +

        "<h3>" +
        data.message +
        "</h3>" +

        "<p>" +
        "Captain ID: " +
        data.captain_id +
        "</p>" +

        "<p>" +
        "Order: " +
        data.order_id +
        "</p>" +

        "<p>" +
        "Persona: " +
        data.persona_id +
        "</p>" +

        "</div>";


      alert(data.message);


      if (data.wa_invite) {

        window.location =
          data.wa_invite;

      }

    } else {

      alert(
        "Registration was not completed."
      );

    }

  } catch (error) {

    console.error(error);

    alert(
      "Connection error. Please try again."
    );

  }

}


document.getElementById(
  "order"
).addEventListener(
  "change",
  function () {

    document.getElementById(
      "team-result"
    ).innerHTML =
      "Council is assigning Team...";

  }
);

</script>

</body>

</html>
`;
