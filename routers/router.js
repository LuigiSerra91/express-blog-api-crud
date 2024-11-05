const express = require('express')
const router = express.Router()

const routerController = require('../controllers/controller.js')

router.post('/', routerController.store)
router.get('/', routerController.index)

module.exports = router 