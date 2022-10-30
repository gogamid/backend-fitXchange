const express = require('express')

require('dotenv').config()

const authRoute = require('./routes/auth')
const app = express()

app.use(express.json())

app.use("/api/auth",authRoute)

app.listen(process.env.PORT,() => {
    console.log(`Backend service is running on  ${process.env.PORT}`)
})