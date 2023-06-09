import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem("user")
    if (auth) {
      navigate("/")
    }
  }, [])

  const collectData = async () => {
    console.log(name, email, password)
    let result = await fetch("https://mindboglr.onrender.com/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    result = await result.json()
    console.log(result)
    localStorage.setItem("user", JSON.stringify(result))
    navigate("/")
  }

  return (
    <div className="signup">
      <div className="singup-container">
        <h2>Sign Up</h2>
        <input
          className="inputBox"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          placeholder="Enter Name"
        />
        <input
          className="inputBox"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder="Enter Email"
        />
        <input
          className="inputBox"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          placeholder="Enter Password"
        />
        <button onClick={collectData} type="button">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default SignUp
