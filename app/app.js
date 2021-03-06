'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'firebase',
    'myApp.tournamentView',
    'myApp.tournamentCreateView',
    'myApp.mainView',
    'myApp.players',
    'myApp.version',
    'myApp.auth',
    'ui.bootstrap',
    'ngMessages',
    'ngAnimate',
    'angularSpinners'

]).run(["$rootScope", "$location", function ($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function (event, next, previous, error) {
        // We can catch the error thrown when the $requireSignIn promise is rejected
        // and redirect the user back to the home page
        if (error === "AUTH_REQUIRED") {
            $location.path("/login");
        }
    });
}])
    .config(['$routeProvider', function ($routeProvider) {
       // $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/'});
    }]);