import React, { useEffect, useState } from "react"
import useWordle from "../../Hooks/useWordle"
import Grid from "./Grid"
import Keypad from "./Keypad"
import Modal from "./Modal"

const WordleWords = ({ solution }) => {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup)

    if(isCorrect){
      // console.log('You Win!')
      setTimeout(() => {setShowModal(true)}, 2000)
      window.removeEventListener("keyup", handleKeyup)
    }

    if(turn > 5){
      // console.log('You Lose!')
      setTimeout(() => {setShowModal(true)}, 2000)
      window.removeEventListener("keyup", handleKeyup)
    }

    return () => window.removeEventListener("keyup", handleKeyup)
  }, [handleKeyup, isCorrect])

  // useEffect(() => {
  //   console.log(guesses, turn, isCorrect)
  // }, [guesses, turn, isCorrect])

  return (
    <div>
      {/* <div>Solution - {solution}</div>
      <div>current guess - {currentGuess}</div> */}
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
      <Keypad usedKeys={usedKeys} />
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
    </div>
  )
}

export default WordleWords
