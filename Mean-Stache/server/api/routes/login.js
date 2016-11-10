import express from 'express';
import Login from '../models/login.js';

let router = express.Router();

module.exports = (app) => {

    var login = new Login();

    router.get('/', login.findAll);

    router.get('/:id', login.findById);

    router.post('/', login.create);

    router.put('/:id', login.update);

    router.delete('/:id', login.delete);

    app.use('/logins', router);

}
