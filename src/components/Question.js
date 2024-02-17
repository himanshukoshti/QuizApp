import React, { useState, useEffect } from 'react'
import './Style.css'

const Question = ({ question, timer, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('')
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false)

  useEffect(() => {
    setIsNextButtonEnabled(selectedOption !== '');
  }, [selectedOption])

  const handleOptionClick = (option) => {
    setSelectedOption(option)
  }

  const handleNextClick = () => {
    onAnswer(selectedOption)
    setSelectedOption('')
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer === 0) {
        onAnswer(selectedOption)
        setSelectedOption('')
      }
    }, 1000)

    return () => clearInterval(timerInterval)
  }, [timer, onAnswer, selectedOption])

  return (
    <div className="question-container">
      <h2>{question.text}</h2>
      {question.options.map((option, index) => (
        <div key={index}>
          <label className="option-label">
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionClick(option)}
              className="option-input"
            />
            {option}
          </label>
        </div>
      ))}
      <div className='mt-4'>
      <button className="next-btn" onClick={handleNextClick} disabled={!isNextButtonEnabled}>
        Next
      </button>
      <span className='timer-button'>Time Left: {timer} sec</span>
      </div>
    </div>
  )
}

export default Question