const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        })

}
