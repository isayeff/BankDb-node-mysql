const express = require('express')
const { getAllCards, createCard } = require('../controllers/card')
const router = express.Router()

router.get("/", getAllCards)
router.post("/add", createCard)

module.exports = router