// Array to store scores and names
const scores = [];

// Function to add a name and score to the array
function addScore() {
  const nameInput = document.getElementById("nameInput");
  const scoreInput = document.getElementById("scoreInput");
  const name = nameInput.value.trim();
  const score = parseFloat(scoreInput.value);

  if (!name || isNaN(score)) {
    alert("Please enter a valid name and score.");
    return;
  }

  scores.push({ name, score });
  nameInput.value = "";
  scoreInput.value = "";
  alert(`${name} with score ${score} added!`);
}

// Function to display the average and highest score
function displayResults() {
  if (scores.length === 0) {
    document.getElementById("results").textContent = "No scores available.";
    return;
  }

  const totalScore = scores.reduce((sum, item) => sum + item.score, 0);
  const averageScore = (totalScore / scores.length).toFixed(2);

  const highestScoreEntry = scores.reduce((max, item) =>
    item.score > max.score ? item : max
  );

  document.getElementById("results").textContent =
    `Average Score: ${averageScore}, Highest Score: ${highestScoreEntry.score} (${highestScoreEntry.name})`;
}

// Function to display all names and scores
function displayScores() {
  const scoreList = document.getElementById("scoreList");
  scoreList.innerHTML = "";

  if (scores.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No scores available.";
    scoreList.appendChild(li);
    return;
  }

  scores.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name}: ${item.score}`;
    scoreList.appendChild(li);
  });
}

// Attach event listeners to buttons
document.getElementById("addButton").addEventListener("click", addScore);
document.getElementById("resultsButton").addEventListener("click", displayResults);
document.getElementById("scoresButton").addEventListener("click", displayScores);
