/**
 * Simple JavaScript Console Quiz Game
 * This program runs entirely in the browser console, using prompt() for input
 * and alert() for feedback/results.
 */

// 1. Define the quiz questions and answers in an array of objects
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        answer: "hyper text markup language"
    },
    {
        question: "What keyword is used to declare a variable in modern JavaScript (ES6+)?",
        answer: "let"
    },
    {
        question: "Which data type is used to store true or false values?",
        answer: "boolean"
    },
    {
        question: "What is the result of the expression: 5 + '5'?",
        answer: "55"
    },
    {
        question: "Which JavaScript function is used to print content to the console?",
        answer: "console.log"
    }
];

// Initialize the score counter
let score = 0;

// 2. Define the main game function
function runQuiz() {
    console.log("--- Starting the JavaScript Console Quiz! ---");
    alert("Welcome to the JavaScript Quiz! Click OK to start.");

    // 3. Loop through each question in the array using a for loop
    for (let i = 0; i < quizQuestions.length; i++) {
        const currentQ = quizQuestions[i];

        // Prompt the user for their answer
        // Note: The prompt is run outside the console, showing the question
        let userAnswer = prompt(Question ${i + 1}/${quizQuestions.length}: ${currentQ.question});
        
        // Check if the user cancelled the prompt (result is null)
        if (userAnswer === null) {
            alert("Quiz cancelled. Thanks for playing!");
            return; // Exit the function immediately
        }

        // 4. Process the user's input for accurate comparison
        // Convert to lower case and remove leading/trailing whitespace
        const cleanAnswer = userAnswer.toLowerCase().trim();

        // 5. Check the answer and provide immediate feedback
        if (cleanAnswer === currentQ.answer) {
            score++; // Increment score if correct
            console.log(Question ${i + 1}: Correct! Current Score: ${score});
            alert("Correct! 🎉");
        } else {
            console.log(Question ${i + 1}: Incorrect. The correct answer was: ${currentQ.answer});
            alert(Incorrect. 🙁 The correct answer was: ${currentQ.answer});
        }
    }

    // 6. Display the final score
    const finalMessage = Quiz Finished!\n\nYou scored ${score} out of ${quizQuestions.length} correct.;
    
    // Output final score to the console and display an alert
    console.log("-----------------------------------------");
    console.log(finalMessage);
    alert(finalMessage);
    console.log("-----------------------------------------");
}

// 7. Execute the function to start the game
runQuiz();
