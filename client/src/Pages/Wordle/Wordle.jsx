import React, { useEffect, useState } from "react"
import WordleWords from "../../Components/WordleWords/WordleWords"
import solutions from "../../../data/words"

const Wordle = () => {
  const [solution, setSolution] = useState("")

  useEffect(() => {
    // fetch('http://localhost:3001/solutions')
    //   .then(res => res.json())
    //   .then(json => {
    //     const randomSolution = json[Math.floor(Math.random() * json.length)]
    //     setSolution(randomSolution.word.toLowerCase())
    //   })

    const randomSolution =
      solutions[Math.floor(Math.random() * solutions.length)]
    setSolution(randomSolution.word.toLowerCase())
  }, [setSolution])

  return (
    <div className="wordle">
      <div className="wordle-container">
        <h1>Wordle</h1>
        {solution && <WordleWords solution={solution} />}
      </div>
    </div>
  )
}

export default Wordle
