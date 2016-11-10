class uploadController {

    constructor(uploadService) {
        this.uploadService = uploadService;
        this.load();
    }

    load() {
        this.uploadService.getAll().then((res) => {
            this.uploads = res.data;
            this.uploads.map((e) => {
                this.uploadService.getComment(e._id).then((re) => {
                    e.comments = re.data;
                })
                return e;
            })
        })
    }

    create() {
        this.uploadService.create(this.upload).then(() => {
            this.upload = {};
            this.load()
        })
    }

    update(upload) {
        this.uploadService.update(upload._id, upload).then(() => {
            this.load()
        })
    }

    delete(upload) {
        this.uploadService.delete(upload._id).then(() => {
            this.load()
        })
    }

}
