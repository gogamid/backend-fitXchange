const express = require('express')
const {register,login, getUserData,setUserData} = require('../controller/userService.js')

const router = require('express').Router()

router.post("/register",register)
router.get("/login",login)
router.get("/getuserdetails/:id",getUserData)
//router.post("/setuserdetails/:id",setUserData)


module.exports = router