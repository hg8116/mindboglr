import React from 'react'

const Modal = ({isCorrect, turn, solution,}) => {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1>You Win!</h1>
                <p className='solution'>{solution} is the right answer</p>
                <p>You took {turn} guesses!!</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>You Lose!</h1>
                <p className='solution'>{solution} is the right answer</p>
                <p>Better luck next time!</p>
            </div>
        )}
    </div>
  )
}

export default Modal