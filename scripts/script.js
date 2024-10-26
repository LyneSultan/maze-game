
// script.js

document.addEventListener("DOMContentLoaded", function () {
  const start = document.getElementById("start");
  const end = document.getElementById("end");
  const boundaries = document.querySelectorAll(".boundary");
  const status = document.getElementById("status");

  let gameLost = false;

  // Function to reset the game
  function resetGame() {
    gameLost = false;
    status.textContent = "Begin by moving your mouse over the 'S'.";
    boundaries.forEach(boundary => boundary.classList.remove("you-lose"));
  }

  // Function to handle losing the game
  function loseGame() {
    if (!gameLost) {
      gameLost = true;
      boundaries.forEach(boundary => boundary.classList.add("you-lose"));
      status.textContent = "You lost! Try again.";
    }
  }

  // Add event listeners
  start.addEventListener("mouseover", resetGame);

  boundaries.forEach(boundary => {
    boundary.addEventListener("mouseover", loseGame);
  });

  end.addEventListener("mouseover", function (event) {
    if (!gameLost) {
      const mousePosition = { x: event.clientX, y: event.clientY };
      if (checkWinCondition(mousePosition, end)) {
        alert("Congratulations! You won!");
        status.textContent = "You won! Well done!";
      }
    }
  });
});
