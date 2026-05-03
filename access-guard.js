// access-guard.js
// À inclure dans ton index.html GitHub Pages AVANT tout autre script
// <script src="access-guard.js"></script>

(function () {
  const NETLIFY_VERIFY_URL = "https://coruscating-cactus-5dfec0.netlify.app/.netlify/functions/verify";
  // ☝️ Remplace par ton URL Netlify réelle

  // Récupère le token depuis le hash de l'URL (#token=xxx)
  function getTokenFromHash() {
    const hash = window.location.hash; // ex: #token=abc123
    const match = hash.match(/[#&]token=([a-f0-9]+)/);
    return match ? match[1] : null;
  }

  // Sauvegarde le token en sessionStorage pour éviter de le perdre si l'URL change
  function saveToken(token) {
    try {
      sessionStorage.setItem("bts_access_token", token);
    } catch (_) {}
  }

  function getSavedToken() {
    try {
      return sessionStorage.getItem("bts_access_token");
    } catch (_) {
      return null;
    }
  }

  // Affiche la page de blocage
  function showBlocked(reason) {
    const reasonMessages = {
      expired: "Votre lien d'accès a expiré (valable 24h). Veuillez soumettre à nouveau le formulaire.",
      unknown_token: "Lien d'accès non reconnu. Veuillez utiliser le lien reçu dans votre email.",
      default: "Accès réservé aux professionnels ayant soumis une demande.",
    };

    document.documentElement.style.visibility = "hidden";
    document.addEventListener("DOMContentLoaded", function () {
      document.documentElement.style.visibility = "visible";
      document.body.innerHTML = `
        <div style="
          min-height:100vh;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#0b0f19;
          font-family:'Open Sans', sans-serif;
        ">
          <div style="
            text-align:center;
            max-width:520px;
            padding:48px 32px;
            background:#111827;
            border-radius:16px;
            border:1px solid #1e2d45;
          ">
            <div style="
              font-size:11px;
              letter-spacing:0.15em;
              text-transform:uppercase;
              color:#4f7fff;
              margin-bottom:16px;
            ">BuyTryShare · Accès Privé</div>

            <div style="
              width:56px;height:56px;
              margin:0 auto 24px;
              background:#1a2540;
              border-radius:50%;
              display:flex;align-items:center;justify-content:center;
            ">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f7fff" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>

            <h1 style="color:#fff;font-size:22px;margin:0 0 12px;font-weight:600;">
              Accès restreint
            </h1>
            <p style="color:#95a2b7;font-size:15px;line-height:1.6;margin:0 0 32px;">
              ${reasonMessages[reason] || reasonMessages.default}
            </p>
            <a
              href="https://6ca13d8d.sibforms.com/serve/MUIFAFDZbZN3jRvSUagQznh8eIyPLHbwFvguEfz5y2-kGAHYugbx5bnOhKMZopRqgsQe4W-9HvyTcuRXn22CFBi2qOYheQeOUup2B9hZn4gOcs7Gh8Yx8pVNYjQ5VxPxo8dov3-X0_-UzTAazqm8FQ6IbszPUf7e9FxivxrYkWhwumHtgX6YF108fkDOhd-ozOA-1KUFU10bSdtdcQ=="
              style="
                display:inline-block;
                background:#4f7fff;
                color:#fff;
                text-decoration:none;
                padding:14px 28px;
                border-radius:8px;
                font-size:14px;
                font-weight:600;
                letter-spacing:0.03em;
              "
            >Demander l'accès</a>
          </div>
        </div>
      `;
    });
  }

  // Masque immédiatement le contenu pendant la vérification
  document.documentElement.style.visibility = "hidden";

  async function checkAccess() {
    // 1. Cherche le token dans l'URL ou en session
    const urlToken = getTokenFromHash();
    const token = urlToken || getSavedToken();

    if (!token) {
      showBlocked("default");
      return;
    }

    // Sauvegarde pour navigation interne
    if (urlToken) {
      saveToken(urlToken);
      // Nettoie le hash de l'URL (plus propre, sans perdre la session)
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    // 2. Vérifie le token côté serveur Netlify
    try {
      const res = await fetch(NETLIFY_VERIFY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();

      if (data.valid) {
        // ✅ Accès accordé — révèle la page
        document.documentElement.style.visibility = "visible";
      } else {
        // ❌ Token invalide ou expiré
        sessionStorage.removeItem("bts_access_token");
        showBlocked(data.reason || "default");
      }
    } catch (err) {
      // Erreur réseau — on laisse passer pour ne pas bloquer à tort
      console.warn("[BTS] Vérification impossible, accès temporairement accordé.", err);
      document.documentElement.style.visibility = "visible";
    }
  }

  checkAccess();
})();