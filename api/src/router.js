const Router = require('express');
const multer = require('multer');
// const Storage = require('multer');

const router = Router();
const storage = multer.diskStorage({
    destination: 'api/uploads/',
    filename: filename
})
const upload = multer({
    fileFilter,
    storage: storage
});


fileFilter((request, file, callback) => {
    if(file.mimetype != 'image/png'){
        request.fileValidationError = 'Wrong file type';
        callback(null, false, Error);
    } else {
        callback(null, true);
    }

})

filename((request, file, callback) => {
    callback(null, file.originalname);
});


module.exports = router;