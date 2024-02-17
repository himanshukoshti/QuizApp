import React from 'react'
import questions from '../data/questions.json'
import './Style.css'

const Summary = ({ answers, onShowAnswers }) => {
  const correctAnswers = answers.filter(answer => answer.isCorrect).length
  const incorrectAnswers = answers.filter(answer => !answer.isCorrect && !answer.isSkipped).length
  const escapedAnswers = answers.filter(answer => answer.isSkipped).length

  return (
    <div className='row summary-row'>
      <h1 className='text-center mt-3 mb-3 text-white'>Quiz Summary</h1>
      <div className="row justify-content-center">
        <div className='col-md-4 summary-box'>Total Questions: {questions.length}</div>
        <div className='col-md-4 summary-box'>Correct Answers: {correctAnswers}</div>
        <div className='col-md-4 summary-box'>Incorrect Answers: {incorrectAnswers}</div>
        <div className='col-md-4 summary-box'>Escaped Answers: {escapedAnswers}</div>
      </div>
      <div className='text-center'>
        <button className="btn btn-primary mt-4" onClick={onShowAnswers}>Show Answers</button>
      </div>
    </div>
  )
}

export default Summary