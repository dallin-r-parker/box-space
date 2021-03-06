angular.module('app', ['ui.router'])

    //testing a pull request
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: "./views/login.html"
            })

            .state('home', {
                url: '/',
                controller: 'mainCtrl',
                templateUrl: "./views/home.html"
            })

            .state('cohort', {
                url: '/cohort',
                templateUrl: "./views/cohort.html",
                controller: 'mainCtrl'
            })


    });