
import React ,{useState} from 'react'

export default function Quiz() {

    const questions = [
		{
			questionText: 'What is the capital of Morocco ?',
			answerOptions: [
				{ answerText: 'Casablanca', isCorrect: true },
				{ answerText: 'Dubai', isCorrect: false },
				{ answerText: 'Dakar', isCorrect: false },
				{ answerText: 'Ceiro', isCorrect: false },
			],
		},
		{
			questionText: 'What is the largest planet in our solar system?',
			answerOptions: [
				{ answerText: 'Earth', isCorrect: false },
				{ answerText: 'Jupiter', isCorrect: true },
				{ answerText: 'Mars', isCorrect: false },
				{ answerText: 'Venus', isCorrect: false },
			],
		},
		{
			questionText: 'What is the smallest country in the world?',
			answerOptions: [
				{ answerText: 'Monaco', isCorrect: false },
				{ answerText: 'Nauru', isCorrect: false },
				{ answerText: 'San Marino', isCorrect: false },
				{ answerText: 'Vatican City', isCorrect: true },
			],
		},
		{
			questionText: 'What is the highest mountain in the world?',
			answerOptions: [
				{ answerText: 'Mount Kilimanjaro', isCorrect: false },
				{ answerText: 'Mount Everest', isCorrect: true },
				{ answerText: 'Mount Fuji', isCorrect: false },
				{ answerText: 'Mount Whitney', isCorrect: false },
			],
		},
        {
			questionText: 'Who painted the Mona Lisa?',
			answerOptions: [
				{ answerText: 'Vincent van Gogh', isCorrect: false },
				{ answerText: 'Pablo Picasso', isCorrect: false },
				{ answerText: 'Leonardo da Vinci', isCorrect: true },
				{ answerText: 'Michelangelo', isCorrect: false},
			],
		},
	];

    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }else {
            setShowScore(true);
        }
    };

    return(
        <div class="container mt-5">
        <div class="d-flex justify-content-center row">
            <div class="col-md-10 col-lg-10">
            <h3 class="text-center p-b-22">
				MCQ Quiz
			</h3>
                <div class="border">
                    {showScore ? (
                    <div class="question bg-white p-3 border-bottom">
                        
                        <div class="d-flex flex-row justify-content-between align-items-center mcq">
                            <h4>MCQ Quiz you scored</h4><span>({score} of {questions.length})</span></div>
                    </div>
                    ) : (
                        <>
                    <div class="question bg-white p-3 border-bottom">
                        <div class="d-flex flex-row align-items-center question-title">
                            <h3 class="text-danger">Q.{currentQuestion + 1}</h3>/{questions.length}
                            <h5 class="mt-1 ml-2">{questions[currentQuestion].questionText}</h5>
                        </div>
                        
                        <div class="ans ml-2">
                          <div class="d-flex flex-row justify-content-between">
                         {questions[currentQuestion].answerOptions.map((answerOption) => ( 
                          <button  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}class="btn btn-primary border-success align-items-center btn-success" type="button">{answerOption.answerText}<i class="fa fa-angle-right ml-2"></i>
                          </button>
                          ))}
                           </div>    
                            </div>
                                 </div>
                            </>
                            )}
                </div>
            </div>
        </div>
    </div>
    );
}
