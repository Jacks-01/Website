
(function(){

    // put the rest of your code here
    
    function buildQuiz(){

        const output = [];
        
        myQuestions.forEach( 
            (currentQuestion, questionNumber) => {
    
                const answers = [];
    
                for(letter in currentQuestion.answers){
    
                    answers.push(
                        `<label>
                        <input type="radio" name="question${questionNumber}" value = "${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                        </label>`
                    );
                }
    
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                     <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );
            quizContainer.innerHTML = output.join('');
    }
    
    function showResults(){
        const answerContainers = quizContainer.querySelectorAll('.answers');
    
        let numCorrect = 0;
    
        myQuestions.forEach( (currentQuestion, questionNumber) => {
    
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=questions${questionsNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
            if(userAnswer === currentQuestion.correctAnswer){
                numCorrect++;
    
                answerContainers[questionNumber].style.color = 'lightgreen';
    
            }
    
            else{
                
                answerContainer[questionNumber].style.color = 'red';
            }
       });   
    
       resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    
    }
    
    const quizContainer = document.getElementById('quiz');
    
    const resultsContainer = document.getElementById('results');
    
    const submitButton = document.getElementById('submit');
    
    const myQuestions = [
        {
            question: "What is Luna's nickname?",
            answers: {
                a: "Tuba",
                b: "Tuna",
                c: "Zumba"
            },
            correctAnswer: "b"
        },
        {
            question: "How did I come up with Milo's name?",
            answers: {
                a: "A song that I heard",
                b: "My uncle's dog had the same name",
                c: "I used a random name generator"
            },
            correctAnswer: "a"
        },
        {
            questions: "What was Kora's foster name (before I renamed her)?",
            answers: {
                a: "Missy",
                b: "Snickers",
                c: "Tasha"
            },
            correctAnswer: "c"
        },
    ];
    
    buildQuiz();
    
    submitButton.addEventListener('click', showResults);

  })();
  
