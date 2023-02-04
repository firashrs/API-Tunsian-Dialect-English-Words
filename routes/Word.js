
const express = require('express');
const router = express.Router();

const wordController = require('../controllers/Word');

router.get('/', wordController.getAllWords);
router.get('/:id', wordController.getOneWord);
router.get('/tn-en/:word', wordController.getWordTnEn);
router.get('/en-tn/:word', wordController.getWordEnTn);


module.exports = router;