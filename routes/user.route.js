var express = require('express');
var router = express.Router();

const controller = require('../controller/user.controller');
var db = require('../db');

router.use(express.json());
router.use(express.urlencoded({ extended: true }))

router.get('/', controller.index);


router.get('/search', controller.seach);

router.get('/id/:id', controller.id);

router.get('/create', controller.creatGet);


router.post('/create', controller.creatPost);

module.exports = router;