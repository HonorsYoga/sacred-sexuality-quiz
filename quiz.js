
let userGender = localStorage.getItem("userGender");
if (!userGender) {
  alert("No gender selected. Please return to the start.");
  window.location.href = "index.html";
}

let currentQuestion = 0;

const allQuestions = [
  { text: "Have you experienced breast orgasms?", type: "yesno", category: "energy" },
  { text: "Do you practice semen retention?", type: "yesno", category: "energy", gender: "male" },
  { text: "Have you experienced birth-gasms?", type: "yesno", category: "energy", gender: "female" }
];

const filteredQuestions = allQuestions.filter(q => !q.gender || q.gender === userGender);

function displayQuestion() {
  const container = document.getElementById("quiz-container");
  if (currentQuestion >= filteredQuestions.length) {
    container.innerHTML = "<h3>Thank you for completing the quiz!</h3>";
    return;
  }

  container.style.display = "block";
  document.getElementById("question-text").innerText = filteredQuestions[currentQuestion].text;
}

function submitAnswer(answer) {
  console.log("Answered:", answer, "to", filteredQuestions[currentQuestion].text);
  currentQuestion++;
  displayQuestion();
}

displayQuestion();
