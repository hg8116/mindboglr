import React, { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem('user')
    if(auth)
      navigate('/')
  }, [])

  const handleLogin = async () => {
    let result = await fetch("http://localhost:8080/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    result = await result.json()
    console.log(result)
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result))
      navigate("/")
    } else {
      alert("Please enter correct details!")
    }
  }

  return (
    <div className="login">
      <div className="login-container">
        <h2>LOGIN</h2>
      <input
        className="inputBox"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Enter Email"
      />
      <input
        className="inputBox"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Enter Password"
      />
      <button onClick={handleLogin} type="button">
        Login
      </button>
      </div>
    </div>
  )
}

export default Login
