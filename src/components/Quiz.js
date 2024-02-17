import React, { useState, useEffect } from 'react'
import questions from '../data/questions.json'
import Question from './Question'

const Quiz = ({ onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [timer, setTimer] = useState(10)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (timer === 0) {
      handleAnswer('') 
    }
  }, [timer])

  const handleAnswer = (answer) => {
    const isSkipped = (answer==='') ? true : false 
    const isCorrect = questions[currentQuestion].correctAnswer === answer
    setAnswers([...answers, { question: currentQuestion, answer, isCorrect, isSkipped }])
    console.log(answers)
    nextQuestion([...answers, { question: currentQuestion, answer, isCorrect, isSkipped }])
  }
    

  const nextQuestion = (updatedAnswers) => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setTimer(10)
    } else {
      onFinish(updatedAnswers)
    }
  }  

  return (
    <div>
      <Question
        question={questions[currentQuestion]}
        timer={timer}
        onAnswer={handleAnswer}
      />
    </div>
  )
}

export default Quiz