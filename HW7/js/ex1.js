// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The letter E"
  }
];

// Get the <div> element to display the questions
const content = document.getElementById("content");

// Loop through the list of questions and create a button and solution text for each
questions.forEach((q) => {
  // Create a <p> element for the question statement
  const questionP = document.createElement("p");
  questionP.textContent = q.statement;
  content.appendChild(questionP);

  // Create a <button> element to show the answer
  const showAnswerBtn = document.createElement("button");
  showAnswerBtn.textContent = "Show the answer";
  content.appendChild(showAnswerBtn);

  // Add an event listener to the button to show the answer
  showAnswerBtn.addEventListener("click", () => {
    // Remove the button
    content.removeChild(showAnswerBtn);

    // Add the solution text
    const solutionP = document.createElement("p");
    solutionP.textContent = q.answer;
    content.appendChild(solutionP);
  });
});

