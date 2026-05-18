const messages = [
  "Your smile is my favorite thing to hear and get kilig about",
  "You make the world feel softer, brighter, and much more worth noticing",
  "I love the way you turn simple moments into memories I want to replay",
  "Being loved by you feels like finding spring in the middle of a long long day",
  "If I could give you a flower for every reason I adore you, this garden would never end",
  "I hope this little rose reminds you how deeply you are loved by me and your favourite ones there",
  "You are my favorite notification and the sweetest part of every day. I love you so much mwaaah",
  "Every day with you feels like another flower blooming in my heart."
];

const flowers = document.querySelectorAll(".flower");
const messageCard = document.querySelector("#messageCard");
const messageCount = document.querySelector("#messageCount");
const messageText = document.querySelector("#messageText");
const surpriseButton = document.querySelector("#surpriseButton");
const surprise = document.querySelector("#surprise");
const passwordScreen = document.querySelector("#passwordScreen");
const passwordForm = document.querySelector("#passwordForm");
const passwordInput = document.querySelector("#passwordInput");
const passwordError = document.querySelector("#passwordError");
const openingScreen = document.querySelector("#openingScreen");
const enterGarden = document.querySelector("#enterGarden");
const openingPhoto = document.querySelector("#openingPhoto");
const photoFallback = document.querySelector("#photoFallback");
const photoOptions = [
  "her-photo.jpg",
  "her-photo.jpeg",
  "her-photo.jpg.jpeg",
  "her-photo.png"
];
let photoOptionIndex = 0;
const anniversaryAnswers = new Set([
  "mar202026",
  "march202026",
  "march20th2026",
  "mar20th2026",
  "03202026",
  "3202026"
]);

function normalizeAnswer(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function openGarden() {
  openingScreen.classList.add("hide");
}

function unlockSecretGarden() {
  passwordScreen.classList.add("hide");
  passwordError.textContent = "";
  window.setTimeout(openGarden, 5200);
}

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = normalizeAnswer(passwordInput.value);

  if (anniversaryAnswers.has(answer)) {
    unlockSecretGarden();
    return;
  }

  passwordError.textContent = "Almost, my love... Try our anniversary date again naaaa. How can you forget hushhh... Shibal:(";
  passwordInput.select();
});

openingPhoto.addEventListener("error", () => {
  photoOptionIndex += 1;

  if (photoOptionIndex < photoOptions.length) {
    openingPhoto.src = photoOptions[photoOptionIndex];
    return;
  }

  openingPhoto.classList.add("missing");
  photoFallback.classList.add("show");
});

enterGarden.addEventListener("click", openGarden);

function showMessage(index) {
  flowers.forEach((flower) => flower.classList.remove("active"));
  flowers[index].classList.add("active");

  messageCount.textContent = `Flower ${index + 1} of ${messages.length}`;
  messageText.textContent = messages[index];

  messageCard.classList.remove("pop");
  void messageCard.offsetWidth;
  messageCard.classList.add("pop");
}

flowers.forEach((flower) => {
  flower.addEventListener("click", () => {
    showMessage(Number(flower.dataset.index));
  });
});

surpriseButton.addEventListener("click", () => {
  const isHidden = surprise.hasAttribute("hidden");
  surprise.toggleAttribute("hidden", !isHidden);
  surpriseButton.textContent = isHidden ? "Close note" : "Open one more note";
});
