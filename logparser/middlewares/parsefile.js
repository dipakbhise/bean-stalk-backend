const multer = require("multer"); // to parse the file
const storage = multer.memoryStorage(); // to store file in multer
module.exports.parsefile = multer({ storage: storage }); 