import mongoose from 'mongoose';

const uploadSchema = new mongoose.Schema({
    description: String,
    image: String,
    localisation: String
});

let model = mongoose.model('Upload', uploadSchema);

export default class Upload {

    findAll(req, res) {
        model.find({}, (err, uploads) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(uploads);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, upload) => {
            if (err || !upload) {
                res.sendStatus(403);
            } else {
                res.json(upload);
            }
        });
    }

    create(req, res) {
        model.create({
                description: req.body.description,
                image: req.body.image,
                localisation : req.body.localisation
            },
            (err, upload) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(upload);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            description: req.body.description,
            image: req.body.image,
            localisation : req.body.localisation
        }, (err, upload) => {
            if (err || !upload) {
                res.status(500).send(err.message);
            } else {
                res.json(upload);
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
