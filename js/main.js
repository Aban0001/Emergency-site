// Sol
document.querySelector("#hotspotBtnSun").addEventListener("click", updateInfoboxSun);
// Lyn
document.querySelector("#hotspotBtnLightning").addEventListener("click", updateInfoboxLightning);
// Krop
document.querySelector("#hotspotBtnBody").addEventListener("click", updateInfoboxBody);

function updateInfoboxSun() {
  console.log("Sun clicked");
  document.querySelector(".info-text h2").textContent = "Reality-check: den lyse side";
  document.querySelector(".info-text .placeholder").textContent = "Alt ser normalt ud, men små detaljer kan afsløre et forkert parallelunivers.";

  document.querySelector("#efficiency").innerHTML = "<h3>Løsning</h3><p>30-sek tjek: 1) Sol/sky/skygger stemmer? 2) Smagstest: kaffe ≠ suppe. 3) Skilte/navne matcher?</p>";

  document.querySelector("#requirement").innerHTML = "<h3>Tips & Tricks</h3><p>Kendt PIN i hovedet, fælles minde-test, hurtigt foto til sammenligning, kontakt MRT.</p>";
}

function updateInfoboxLightning() {
  console.log("Lightning clicked");
  document.querySelector(".info-text h2").textContent = "Ustabil zone";
  document.querySelector(".info-text .placeholder").textContent = "Energistorme og logik-glitches. Folk kan forveksle dig med dit parallelle jeg.";

  document.querySelector("#efficiency").innerHTML = "<h3>Løsning</h3><p>Hold afstand til dit andet jeg. Søg ly, undgå metal/antenner, gå mod stabile områder.</p>";

  document.querySelector("#requirement").innerHTML = "<h3>Tips & Tricks</h3><p>Tal roligt, del ingen personlige data. Brug jetlag-protokol og kontakt MRT.</p>";
}

function updateInfoboxBody() {
  console.log("Body clicked");
  document.querySelector(".info-text h2").textContent = "Identitetsfejl: er det dig?";
  document.querySelector(".info-text .placeholder").textContent = "Folk genkender dig, men du genkender dem ikke. Spejl/dokumenter kan vise små afvigelser.";

  document.querySelector("#efficiency").innerHTML = "<h3>Løsning</h3><p>Tjek lommer/dokumenter. Kig efter mikroforskelle (ar/føflekker). Aftal sikkert mødested.</p>";

  document.querySelector("#requirement").innerHTML = "<h3>Tips & Tricks</h3><p>Send lokation + tidsstempel til MRT. Hold >50 m afstand til dit parallelle selv. Undgå ukendt mad (kaffe≈suppe).</p>";
}

//////Forms / register.js/////
const form = document.querySelector("form");

const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const passwordOutput = document.querySelector("#password_output");
const termsOutput = document.querySelector("#terms_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new formData(form);
  const firstName = formData.get(firstName);
  const lastName = formData.get(lastName);
  const emailName = formData.get(emailName);

  firstOutput.textContent = firstName;
  firstOutput.textContent = lastName;
  firstOutput.textContent = emailName;

  form.reset();
}
