import mongoose from 'mongoose';

const loginSchema = new mongoose.Schema({
    description: String,
    mail: String,
    pseudo: String,
    news: Boolean
});

let model = mongoose.model('Login', loginSchema);

export default class Login {

    findAll(req, res) {
        model.find({}, (err, logins) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(logins);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, login) => {
            if (err || !login) {
                res.sendStatus(403);
            } else {
                res.json(login);
            }
        });
    }

    create(req, res) {
        model.create({
          description: req.body.description,
          pseudo: req.body.pseudo,
          mail: req.body.mail,
          news: req.body.news
            },
            (err, login) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(login);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            description: req.body.description,
            pseudo: req.body.pseudo,
            mail: req.body.mail,
            news: req.body.news
        }, (err, login) => {
            if (err || !login) {
                res.status(500).send(err.message);
            } else {
                res.json(login);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        })
    }
}
