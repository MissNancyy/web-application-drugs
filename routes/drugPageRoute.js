const express = require('express')
const router = express.Router()
const drugController = require('../controllers/drugsController')


// router.get('/drugs', drugController.getDrugsMainPage)

router.get('/drugsSearch', drugController.getdrugs)
router.post('/createdrugs', drugController.createdrugs)

module.exports = router