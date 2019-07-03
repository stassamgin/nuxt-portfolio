const express = require('express')
const controller = require('../controllers/client')

const router = express.Router()

router.get('/data', controller.getData)

module.exports = router
