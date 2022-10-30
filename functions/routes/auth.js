const express = require('express')
const {register,login, getUserData,setUserData} = require('../controller/userService')

const router = require('express').Router()

router.post("/register",register)
router.post("/login",login)
router.get("/getuserdetails/:id",getUserData)
//router.post("/setuserdetails/:id",setUserData)


module.exports = router