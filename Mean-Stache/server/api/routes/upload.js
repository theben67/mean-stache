import express from 'express';
import Upload from '../models/upload.js';

let router = express.Router();

module.exports = (app) => {

    var upload = new Upload();

    router.get('/', upload.findAll);

    router.get('/:id', upload.findById);

    router.post('/', upload.create);

    router.put('/:id', upload.update);

    router.delete('/:id', upload.delete);

    app.use('/uploads', router);

}
