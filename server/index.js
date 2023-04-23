import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import connectDB from "./db/config.js"
import User from "./db/User.js"

dotenv.config()
const app = express()
app.use(express.json({ limit: "50mb" }))
app.use(cors())

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello db",
  })
})

app.use(express.json())
app.post("/register", async (req, res) => {
  let user = new User(req.body)
  let result = await user.save()
  result = result.toObject()
  delete result.password
  res.send(result)
})

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password")
    if (user) res.send(user)
    else res.send({ result: "User not found" })
  } else res.send({ result: "Email or password not correct" })
})

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL)
    app.listen(8080, () => console.log("Server started on port 8080"))
  } catch (error) {
    console.log(error)
  }
}

startServer()
