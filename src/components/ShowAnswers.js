import React from 'react'
import questions from '../data/questions.json'
import './Style.css'

const ShowAnswers = ({ answers }) => {
  return (
    <div className='row show-answers mt-5'>
      <h1 className='text-white text-center'>Quiz Answers</h1>
      {answers.map((answer, index) => (
        <div key={index} className='question-box'>
          <p
            style={{
              backgroundColor:
                answer.isSkipped ? 'yellow' : 'transparent'
            }}
            className='fs-5'>
            Question: {questions[answer.question].text}
          </p>
            {questions[answer.question].options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                style={{
                  backgroundColor:
                    option === answer.answer
                      ? answer.isCorrect
                        ? 'rgb(122, 253, 122)' // User selected correct answer
                        : 'rgb(255, 109, 109)' // User selected incorrect answer
                      : option === questions[answer.question].correctAnswer
                      ? 'rgb(122, 253, 122)' // Correct answer
                      : 'white', // Other options
                }}
              >
                {option}
              </div>
            ))}
        </div>
      ))}
    </div>
  )
}

export default ShowAnswers