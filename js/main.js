document.addEventListener("DOMContentLoaded", function () {
  /* Light / Dark mode */
  var root = document.documentElement; // <html>
  var toggleBtn = document.querySelector("#toggle"); // husk # for id

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      root.classList.toggle("dark");
      console.log("Toggled dark mode:", root.classList.contains("dark"));
    });
  } else {
    console.log("Ingen #toggle knap fundet på denne side.");
  }

  /* Hotspots (infografik) */
  var btnSun = document.querySelector("#hotspotBtnSun");
  var btnLightning = document.querySelector("#hotspotBtnLightning");
  var btnBody = document.querySelector("#hotspotBtnBody");

  if (btnSun) btnSun.addEventListener("click", updateInfoboxSun);
  if (btnLightning) btnLightning.addEventListener("click", updateInfoboxLightning);
  if (btnBody) btnBody.addEventListener("click", updateInfoboxBody);

  if (!btnSun && !btnLightning && !btnBody) {
    console.log("Ingen infografik-hotspots fundet på denne side.");
  }

  /* Infobox funktioner */
  function updateInfoboxSun() {
    console.log("Sun clicked");
    var h2 = document.querySelector(".info-text h2");
    var placeholder = document.querySelector(".info-text .placeholder");
    if (h2) h2.textContent = "Reality-check: den lyse side";
    if (placeholder) placeholder.textContent = "Alt ser normalt ud, men små detaljer kan afsløre et forkert parallelunivers.";
    var eff = document.querySelector("#efficiency");
    var req = document.querySelector("#requirement");
    if (eff) eff.innerHTML = "<h3>Løsning</h3><p>30-sek tjek: 1) Sol/sky/skygger stemmer? 2) Smagstest: kaffe ≠ suppe. 3) Skilte/navne matcher?</p>";
    if (req) req.innerHTML = "<h3>Tips & Tricks</h3><p>Kendt PIN i hovedet, fælles minde-test, hurtigt foto til sammenligning, kontakt MRT.</p>";
  }

  function updateInfoboxLightning() {
    console.log("Lightning clicked");
    var h2 = document.querySelector(".info-text h2");
    var placeholder = document.querySelector(".info-text .placeholder");
    if (h2) h2.textContent = "Ustabil zone";
    if (placeholder) placeholder.textContent = "Energistorme og logik-glitches. Folk kan forveksle dig med dit parallelle jeg.";
    var eff = document.querySelector("#efficiency");
    var req = document.querySelector("#requirement");
    if (eff) eff.innerHTML = "<h3>Løsning</h3><p>Hold afstand til dit andet jeg. Søg ly, undgå metal/antenner, gå mod stabile områder.</p>";
    if (req) req.innerHTML = "<h3>Tips & Tricks</h3><p>Tal roligt, del ingen personlige data. Brug jetlag-protokol og kontakt MRT.</p>";
  }

  function updateInfoboxBody() {
    console.log("Body clicked");
    var h2 = document.querySelector(".info-text h2");
    var placeholder = document.querySelector(".info-text .placeholder");
    if (h2) h2.textContent = "Identitetsfejl: er det dig?";
    if (placeholder) placeholder.textContent = "Folk genkender dig, men du genkender dem ikke. Spejl/dokumenter kan vise små afvigelser.";
    var eff = document.querySelector("#efficiency");
    var req = document.querySelector("#requirement");
    if (eff) eff.innerHTML = "<h3>Løsning</h3><p>Tjek lommer/dokumenter. Kig efter mikroforskelle (ar/føflekker). Aftal sikkert mødested.</p>";
    if (req) req.innerHTML = "<h3>Tips & Tricks</h3><p>Send lokation + tidsstempel til MRT. Hold >50 m afstand til dit parallelle selv. Undgå ukendt mad (kaffe≈suppe).</p>";
  }

  var form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Form submitted - demo. Indhold kan håndteres her.");
      form.reset();
    });
  }
});
