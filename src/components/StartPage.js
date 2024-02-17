import React from 'react'

const StartPage = ({ onStart }) => {
  return (
    <div className="container text-center mt-5 text-white">
      <h1>Welcome to the Quiz App!</h1>
      <p className="mt-3">Read the instructions and click start when you're ready.</p>
      <p>1. You will have 60 seconds to answer a question.</p>
      <p>2. There are 10 questions in total.</p>
      <p>3. Once clicked on "Next" then you cannot attempt that question again.</p>
      <button className="btn btn-success mt-3" onClick={onStart}>Start Quiz</button>
    </div>
  )
}

export default StartPage