const routes = ($routeProvider, $httpProvider) => {

    $routeProvider

        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController',
            controllerAs: 'vm'
        })
        .when('/upload', {
            templateUrl: 'views/upload.html',
            controller: 'uploadController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        })

}
