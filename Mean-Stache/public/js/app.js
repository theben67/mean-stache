angular.module('app', ['ngRoute'])
        .service('todoService', todoService)
        .service('loginService', loginService)
        .service('uploadService', uploadService)
        .controller('mainController', mainController)
        .controller('loginController', loginController)
        .controller('uploadController', uploadController)
        .config(routes)
        ;
