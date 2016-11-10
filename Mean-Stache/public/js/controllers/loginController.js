class loginController {

    constructor(loginService) {
        this.loginService = loginService;
        this.load();
    }

    load() {
        this.loginService.getAll().then((res) => {
            this.logins = res.data;
        })
    }

    create() {
        this.loginService.create(this.login).then(() => {
            this.login = {};
            this.load()
        })
    }

    update(login) {
        this.loginService.update(login._id,login).then(() => {
            this.load()
        })
    }

    delete(login) {
        this.loginService.delete(login._id).then(() => {
            this.load()
        })
    }

}
