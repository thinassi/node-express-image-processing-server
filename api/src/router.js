const { json } = require('body-parser');
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

router.post('/upload', upload.single('photo'), (request, response) => {
    try{
        request.fileValidationError;
        response.status(400);
        json({
            error: request.fileValidationError
        });
    } catch {
        response.status(201);
        json({
            success: true
        });
    }
});

module.exports = router;