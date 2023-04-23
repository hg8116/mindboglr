import React, { useEffect } from "react"
import { Link, json, useNavigate } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const auth = localStorage.getItem("user")
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate("/signup")
  }
  return (
    <div className="nav">
      {auth ? (
        <div className="auth-container">
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/wordle">Wordle</Link>
          </li>
          <li>
            <Link to="/memorymatch">Memory Match</Link>
          </li>
          <li>
            <Link to="/">Stats</Link>
          </li>
        </ul>
        <ul className="nav-ul">
          <li>
            <Link onClick={logout} to="/signup">
              Logout
            </Link>
          </li>
          <li>
            Hey {JSON.parse(auth).name.toUpperCase()} !
          </li>
        </ul>
        </div>
      ) : (
        <div className="auth-container">
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          </ul>
          <ul className="nav-ul">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        </div>
      )}
    </div>
  )
}
export default Navbar
