// access-guard.js
(function () {
  const NETLIFY_VERIFY_URL = "https://coruscating-cactus-5dfec0.netlify.app/.netlify/functions/verify";
  const BREVO_FORM_URL = "https://urlr.me/D5fwnp";

  function getTokenFromHash() {
    const match = window.location.hash.match(/[#&]token=([a-f0-9]+)/);
    return match ? match[1] : null;
  }

  function saveToken(token) {
    try { sessionStorage.setItem("bts_access_token", token); } catch (_) {}
  }

  function getSavedToken() {
    try { return sessionStorage.getItem("bts_access_token"); } catch (_) { return null; }
  }

  function showBlocked() {
    document.addEventListener("DOMContentLoaded", function () {
      document.documentElement.style.visibility = "visible";
      document.body.style.margin = "0";
      document.body.style.padding = "0";
      document.body.innerHTML = `
        <div style="
          min-height:100vh;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          background: linear-gradient(135deg, #020b1a 0%, #041428 40%, #071e3d 100%);
          font-family:'Open Sans', sans-serif;
          color:#fff;
          padding:40px 48px;
          box-sizing:border-box;
          position:relative;
          overflow:hidden;
        ">

          <!-- Logo BuyTryShare -->
          <div>
            <div style="font-size:22px;font-weight:700;letter-spacing:0.02em;">
              <span style="color:#2196f3;">Buy.</span><span style="color:#4caf50;">Try.</span><span style="color:#f44336;">Share.</span><span style="color:#fff;">®</span>
            </div>
            <div style="font-size:13px;color:#90a4c0;margin-top:6px;font-weight:300;">
              Your ad is <strong style="color:#fff;font-weight:700;">seen.</strong><br>
              We make it <strong style="color:#fff;font-weight:700;">trusted.</strong>
            </div>
          </div>

          <!-- Contenu central -->
          <div style="max-width:620px;">
            <div style="margin-bottom:40px;">
              <img src="/proof-roi-engine-BTS/proof-roi-engine.png" alt="The Proof ROI Engine" style="height:80px;width:auto;" onerror="this.style.display='none'">
            </div>

            <p style="font-size:20px;font-weight:300;line-height:1.5;margin:0 0 12px;">
              <strong style="font-weight:700;">Private</strong> access.
            </p>
            <p style="font-size:20px;font-weight:300;line-height:1.5;margin:0 0 12px;">
              Access restricted to <strong style="font-weight:700;">marketing professionals</strong>.
            </p>
            <p style="font-size:20px;font-weight:300;line-height:1.5;margin:0 0 32px;">
              BuyTryShare's Proof ROI Engine is <strong style="font-weight:700;">only accessible</strong>
            </p>
            <p style="font-size:20px;font-weight:300;line-height:1.5;margin:0 0 40px;">
              via this link:&nbsp;
              <a href="${BREVO_FORM_URL}" style="color:#90caf9;text-decoration:underline;font-weight:400;">urlr.me/D5fwnp</a>
            </p>
          </div>

          <!-- Grille d'images décorative (droite) -->
          <div style="
            position:absolute;
            right:0;top:0;bottom:0;
            width:55%;
            display:grid;
            grid-template-columns:repeat(3,1fr);
            grid-template-rows:repeat(4,1fr);
            gap:4px;
            opacity:0.35;
            pointer-events:none;
          ">
            ${Array(12).fill('').map((_, i) => `
              <div style="
                background:linear-gradient(135deg,#0d2a4a,#1a3a6b);
                border-radius:4px;
              "></div>
            `).join('')}
          </div>

        </div>
      `;
    });
  }

  // Masque immédiatement
  document.documentElement.style.visibility = "hidden";

  async function checkAccess() {
    const urlToken = getTokenFromHash();
    const token = urlToken || getSavedToken();

    if (!token) {
      showBlocked();
      return;
    }

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
        sessionStorage.removeItem("bts_access_token");
        showBlocked();
      }
    } catch (err) {
      console.warn("[BTS] Vérification impossible, accès temporairement accordé.", err);
      document.documentElement.style.visibility = "visible";
    }
  }

  checkAccess();
})();