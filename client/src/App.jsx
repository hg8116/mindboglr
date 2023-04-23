import { useState } from "react"
import "./App.css"
import Home from "./Pages/Home"
import MemoryMatch from "./Pages/MemoryMatch/MemoryMatch"
import Crossword from "./Pages/Crossword/Crossword"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Wordle from "./Pages/Wordle/Wordle"
import Navbar from "./Components/Navbar/Navbar"
import SignUp from "./Pages/SignUp"
import PrivateComponent from "./Components/PrivateComponent"
import Login from "./Pages/Login"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route element={<PrivateComponent />}>
            {/* <Route path="/crossword" element={<Crossword />} /> */}
            <Route path="/wordle" element={<Wordle />} />
            <Route path="/memorymatch" element={<MemoryMatch />} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
