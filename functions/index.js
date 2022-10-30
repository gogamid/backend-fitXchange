const functions = require("firebase-functions");

const express = require('express')

require('dotenv').config()

const authRoute = require('./routes/auth')
const app = express()

app.use(express.json())

app.use("/api/auth",authRoute)


exports.expressApi = functions.https.onRequest(app)

