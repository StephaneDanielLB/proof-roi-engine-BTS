// access-guard.js
(function () {
  const NETLIFY_VERIFY_URL = "https://coruscating-cactus-5dfec0.netlify.app/.netlify/functions/verify";
  const BREVO_FORM_URL = "https://urlr.me/D5fwnp";
  const BASE = "/proof-roi-engine-BTS";

  function getTokenFromHash() {
    const match = window.location.hash.match(/[#&]token=([a-f0-9]+)/);
    return match ? match[1] : null;
  }
  function saveToken(t) { try { sessionStorage.setItem("bts_tok", t); } catch (_) {} }
  function getSavedToken() { try { return sessionStorage.getItem("bts_tok"); } catch (_) { return null; } }

  function showBlocked() {
    document.addEventListener("DOMContentLoaded", function () {
      document.documentElement.style.visibility = "visible";
      document.body.style.cssText = "margin:0;padding:0;overflow:hidden;";

      document.head.insertAdjacentHTML("beforeend", `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@200;300;400;700;800&display=swap" rel="stylesheet">
        <style>
          @keyframes fadeUp {
            from { opacity:0; transform:translateY(18px); }
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
            background: #071628;
            overflow:hidden;
            font-family:'Open Sans', sans-serif;
            color:#fff;
          }
          /* Background image */
          .bts-bg {
            position:absolute; inset:0;
            background: url('${BASE}/Buy_Try_Share_.png') right center / cover no-repeat;
            opacity:0.9;
            animation: fadeIn 1.2s ease both;
          }
          /* Dark gradient over left half */
          .bts-overlay {
            position:absolute; inset:0;
            background: linear-gradient(
              90deg,
              #071628 0%,
              #071628 38%,
              rgba(7,22,40,0.85) 55%,
              rgba(7,22,40,0.2) 100%
            );
          }
          /* Content layer */
          .bts-content {
            position:relative; z-index:2;
            display:flex; flex-direction:column;
            height:100vh;
            padding:40px 56px;
            box-sizing:border-box;
          }
          /* ── TOP LEFT: Logo + slogan ── */
          .bts-header { display:flex; flex-direction:column; gap:6px; }
          .bts-logo { height:36px; width:auto; display:block; }
          .bts-slogan {
            font-size:13px; font-weight:200;
            color:rgba(255,255,255,0.82);
            line-height:1.55; letter-spacing:0.01em;
          }
          .bts-slogan b { font-weight:800; color:#fff; }

          /* ── CENTER: Main message ── */
          .bts-center {
            flex:1; display:flex;
            flex-direction:column; justify-content:center;
            max-width:580px;
            gap:0;
          }
          .bts-engine-logo {
            width: clamp(260px, 30vw, 420px);
            height:auto;
            margin-bottom:32px;
            filter: brightness(0) invert(1);
            animation: fadeUp 0.7s 0.2s ease both;
          }
          .bts-headline {
            font-size: clamp(13px, 1.1vw, 16px);
            font-weight:200;
            color:rgba(255,255,255,0.78);
            line-height:1.65;
            margin:0 0 8px;
            animation: fadeUp 0.7s 0.35s ease both;
          }
          .bts-headline b { font-weight:800; color:#fff; }

          .bts-restrict {
            font-size: clamp(13px, 1.1vw, 16px);
            font-weight:200;
            color:rgba(255,255,255,0.78);
            line-height:1.65;
            margin:0 0 8px;
            animation: fadeUp 0.7s 0.45s ease both;
          }
          .bts-restrict b { font-weight:800; color:#fff; }

          .bts-sectors {
            font-size: clamp(12px, 1vw, 14px);
            font-weight:200;
            color:rgba(255,255,255,0.65);
            line-height:1.7;
            margin:0 0 36px;
            animation: fadeUp 0.7s 0.55s ease both;
          }
          .bts-sectors b { font-weight:800; color:rgba(255,255,255,0.85); }

          /* ── CTA ── */
          .bts-cta {
            display:inline-flex; align-items:center; gap:10px;
            padding:14px 28px;
            background:#fff;
            color:#071628;
            border-radius:4px;
            text-decoration:none;
            font-size:14px; font-weight:700;
            letter-spacing:0.04em;
            width:fit-content;
            transition: background 0.2s, transform 0.15s;
            animation: fadeUp 0.7s 0.65s ease both;
          }
          .bts-cta:hover { background:#e8f0ff; transform:translateY(-1px); }
          .bts-cta-arrow { font-size:16px; }

          /* Mobile */
          @media (max-width:768px) {
            .bts-content { padding:28px 24px; }
            .bts-center { max-width:100%; }
            .bts-bg { opacity:0.25; }
            .bts-overlay {
              background: linear-gradient(180deg, rgba(7,22,40,0.97) 0%, rgba(7,22,40,0.9) 100%);
            }
          }
        </style>
      `);

      document.body.innerHTML = `
        <div class="bts-page">
          <div class="bts-bg"></div>
          <div class="bts-overlay"></div>
          <div class="bts-content">

            <!-- Header: BuyTryShare logo + slogan -->
            <header class="bts-header">
              <img class="bts-logo" src="${BASE}/bts-logo-inverted.png" alt="BuyTryShare">
              <div class="bts-slogan">
                Your ad is <b>seen</b>.<br>
                We make it <b>trusted</b>.
              </div>
            </header>

            <!-- Central message -->
            <main class="bts-center">

              <!-- The Proof ROI Engine logo -->
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
                Request access <span class="bts-cta-arrow">→</span>
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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (data.valid) {
        document.documentElement.style.visibility = "visible";
      } else {
        sessionStorage.removeItem("bts_tok");
        showBlocked();
      }
    } catch (err) {
      console.warn("[BTS] verify failed, granting access", err);
      document.documentElement.style.visibility = "visible";
    }
  }

  checkAccess();
})();