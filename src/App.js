import React, { useState } from 'react'
import StartPage from './components/StartPage'
import Quiz from './components/Quiz'
import Summary from './components/Summary'
import ShowAnswers from './components/ShowAnswers'
import './style.css'

function App() {
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])
  const [showAnswersPage, setShowAnswersPage] = useState(false)

  const startQuiz = () => {
    setStarted(true)
  }

  const finishQuiz = (answers) => {
    setFinished(true)
    setAnswers(answers)
  }

  const showAnswers = () => {
    setShowAnswersPage(true)
  }

  return (
    <div className="App container-fluid">
      {!started && !finished && <StartPage onStart={startQuiz} />}
      {started && !finished && <Quiz onFinish={finishQuiz} />}
      {finished && <Summary answers={answers} onShowAnswers={showAnswers}/>}
      {showAnswersPage && <ShowAnswers answers={answers} />}
    </div>
  )
}

export default App