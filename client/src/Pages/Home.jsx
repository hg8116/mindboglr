import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-inner-container">
        <h1 className="main-heading">MINDBOGLR</h1>
          <h2 className="subheading">Let Your Mind Boggle Excercise 🧠🏋️</h2>
        <div className="link-container">
          {/* <Link to="/crossword">
            <button>Play Crossword</button>
          </Link> */}
          <Link to="/wordle">
            <button>Play Wordle</button>
          </Link>
          <Link to="/memorymatch">
            <button>Play Memory Match</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
