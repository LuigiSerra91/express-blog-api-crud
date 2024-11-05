const express = require('express')
const router = express.Router()

const routerController = require('../controllers/controller.js')

router.post('/', routerController.store)
router.get('/', routerController.index)
router.get('/:id', routerController.show)
module.exports = router 