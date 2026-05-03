// access-guard.js
(function () {
  const NETLIFY_VERIFY_URL = "https://coruscating-cactus-5dfec0.netlify.app/.netlify/functions/verify";
  const BREVO_FORM_URL = "https://urlr.me/D5fwnp";
  const BASE = "/proof-roi-engine-BTS";

function getTokenFromHash() {
  const match = window.location.hash.match(/[#&]token=([a-f0-9]+)/);
    if (match) return match[1];
    const p = new URLSearchParams(window.location.search);
    return p.get("token");
  }
  function saveToken(t) { try { sessionStorage.setItem("bts_tok", t); } catch (_) {} }
  function getSavedToken() { try { return sessionStorage.getItem("bts_tok"); } catch (_) { return null; } }

  function showBlocked() {
    document.addEventListener("DOMContentLoaded", function () {
      document.documentElement.style.visibility = "visible";
      document.body.style.cssText = "margin:0;padding:0;overflow:hidden;";

      document.head.insertAdjacentHTML("beforeend", `
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@200;300;400;700;800&display=swap" rel="stylesheet">
        <style>
          @keyframes fadeUp {
            from { opacity:0; transform:translateY(16px); }
            to   { opacity:1; transform:translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity:0; }
            to   { opacity:1; }
          }
          .bts-page {
            position:relative;
            width:100vw; height:100vh;
            display:flex; flex-direction:column;
            background:#071628;
            overflow:hidden;
            font-family:'Open Sans', sans-serif;
            color:#fff;
          }
          .bts-bg {
            position:absolute; inset:0;
            background: url('${BASE}/BTS_environment.png') right center / cover no-repeat;
            animation: fadeIn 1.4s ease both;
          }
          .bts-overlay {
            position:absolute; inset:0;
            background: linear-gradient(
              90deg,
              #071628 0%,
              #071628 35%,
              rgba(7,22,40,0.88) 52%,
              rgba(7,22,40,0.15) 100%
            );
          }
          .bts-content {
            position:relative; z-index:2;
            display:flex; flex-direction:column;
            height:100vh;
            padding:40px 56px;
            box-sizing:border-box;
          }

          /* ── HEADER ── */
          .bts-header {
            display:flex; flex-direction:column;
            align-items:flex-start;
            gap:8px;
            animation: fadeUp 0.6s 0.1s ease both;
          }
          /* Logo inverted: fond noir transparent — on le coupe proprement */
          .bts-logo-wrap {
              display:inline-block;
              line-height:0;
          }
          .bts-logo {
            height:60px;
            width:auto;
            display:block;
            margin-left:-22px;
          }
          .bts-slogan {
            font-size:13px;
            font-weight:200;
            color:rgba(255,255,255,0.8);
            line-height:1.55;
            letter-spacing:0.01em;
            margin:0;
          }
          .bts-slogan b { font-weight:800; color:#fff; }

          /* ── CENTER ── */
          .bts-center {
            flex:1;
            display:flex; flex-direction:column;
            justify-content:center;
            max-width:560px;
            gap:16px;
          }

          .bts-engine-logo {
            width: clamp(220px, 26vw, 380px);
            height:auto;
            display:block;
            margin-bottom:8px;
            filter: brightness(0) invert(1);
            animation: fadeUp 0.7s 0.25s ease both;
          }

          .bts-headline {
            font-size:clamp(14px, 1.15vw, 17px);
            font-weight:200;
            color:rgba(255,255,255,0.80);
            line-height:1.65;
            margin:0;
            animation: fadeUp 0.7s 0.38s ease both;
          }
          .bts-headline b { font-weight:800; color:#fff; }

          .bts-restrict {
            font-size:clamp(14px, 1.15vw, 17px);
            font-weight:200;
            color:rgba(255,255,255,0.80);
            line-height:1.65;
            margin:0;
            animation: fadeUp 0.7s 0.48s ease both;
          }
          .bts-restrict b { font-weight:800; color:#fff; }

          .bts-sectors {
            font-size:clamp(12px, 1vw, 14px);
            font-weight:200;
            color:rgba(255,255,255,0.60);
            line-height:1.7;
            margin:0;
            animation: fadeUp 0.7s 0.58s ease both;
          }
          .bts-sectors b { font-weight:800; color:rgba(255,255,255,0.82); }

          /* ── CTA ── */
          .bts-cta {
            display:inline-flex; align-items:center; gap:10px;
            margin-top:8px;
            padding:13px 28px;
            background:#fff;
            color:#071628;
            border-radius:3px;
            text-decoration:none;
            font-size:14px; font-weight:700;
            letter-spacing:0.05em;
            width:fit-content;
            transition: background 0.2s, transform 0.15s;
            animation: fadeUp 0.7s 0.68s ease both;
          }
          .bts-cta:hover { background:#dceeff; transform:translateY(-1px); }

          @media (max-width:768px) {
            .bts-content { padding:28px 24px; }
            .bts-center { max-width:100%; }
            .bts-bg { opacity:0.2; }
            .bts-overlay {
              background:rgba(7,22,40,0.95);
            }
          }
        </style>
      `);

      document.body.innerHTML = `
        <div class="bts-page">
          <div class="bts-bg"></div>
          <div class="bts-overlay"></div>
          <div class="bts-content">

            <header class="bts-header">
              <img class="bts-logo" src="${BASE}/BuyTryShare_Logo__inverted_.png" alt="BuyTryShare">
              <p class="bts-slogan">
                Your ad is <b>seen</b>.<br>
                We make it <b>trusted</b>.
              </p>
            </header>

            <main class="bts-center">
              <img
                class="bts-engine-logo"
                src="${BASE}/The_Proof_ROI_Engine_White_on_Whie_Background_.png"
                alt="The Proof ROI Engine"
                onerror="this.style.display='none'"
              >
              <p class="bts-headline">
                A simulation environment to quantify the <b>business impact</b> of <b>consumer proof</b> in <b>media</b>.
              </p>
              <p class="bts-restrict">
                Access is restricted to <b>marketing decision-makers</b>.
              </p>
              <p class="bts-sectors">
                Used to model <b>incremental ROI</b> across:<br>
                Automotive &bull; Telecom &bull; Bank / Insurance &bull; FMCG &bull; Retail &bull; Tourism
              </p>
              <a class="bts-cta" href="${BREVO_FORM_URL}">
                Request access →
              </a>
            </main>

          </div>
        </div>
      `;
    });
  }

  document.documentElement.style.visibility = "hidden";

  async function checkAccess() {
    const urlToken = getTokenFromHash();
    const token = urlToken || getSavedToken();
    if (!token) { showBlocked(); return; }
    if (urlToken) {
      saveToken(urlToken);
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    try {
      const res = await fetch(NETLIFY_VERIFY_URL, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ token }),
      });
      const data = await res.json();
      if (data.valid) {
        if (window.location.hostname === "stephanedaniellb.github.io") {
          window.top.location.href = "https://buytryshare.com/the-proof-roi-engine";
          return;
        }
        document.documentElement.style.visibility = "visible";
      } else {
        sessionStorage.removeItem("bts_tok");
        showBlocked();
      }
    } catch(err) {
      console.warn("[BTS] verify failed, granting access", err);
      document.documentElement.style.visibility = "visible";
    }
  }

  checkAccess();
})();