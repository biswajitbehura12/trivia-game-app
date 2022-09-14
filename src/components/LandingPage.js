import React from 'react'

export default function LandingPage(props) {

  

  return (
    <div className="flex-wrapper">
      <div className="content">
        <h1>Trivia game</h1>
        <p> Test your knowledge! When you start the quiz, you will have to answer 1  questions. Good luck!</p>
        <button className="trivia-button" onClick={props.onStart}> Start quiz!</button>
      </div>
      <div className="footer">
        <footer>Biswajit</footer>
      </div>
    </div>
  )
}