const express = require("express");
const { logParser } = require("./controllers");
const { parsefile } = require("./middlewares/parsefile");
const router = express.Router();


router.post('/logparser',parsefile.single('file'), logParser);

module.exports = router;