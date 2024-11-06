const express = require('express')
const router = express.Router()
const animeController = require('../controllers/controllerAnime.js')


router.get('/', animeController.index)
router.get('/:id', animeController.show)
router.post('/', animeController.store)

module.exports = router