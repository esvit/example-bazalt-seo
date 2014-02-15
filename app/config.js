define([
    'app'
], function(module) {
    'use strict';

    module.config(['$routeProvider', '$routeSegmentProvider', '$locationProvider', 'bzConfigProvider', 'bzUserProvider', '$httpProvider',
        function ($routeProvider, $routeSegmentProvider, $locationProvider, bzConfigProvider, bzUser, $httpProvider) {
            $locationProvider
                .html5Mode(true)
                .hashPrefix('!');

            bzConfigProvider.templatePrefix('/views')
                            .checkSessionOnStart(false);

            $httpProvider.defaults.withCredentials = false;
            $routeSegmentProvider.options.autoLoadTemplates = true;

            $routeProvider.otherwise({
                redirectTo: '/'
            });
        }]);

    module.run(['$rootScope', 'bzUser', '$location', function($rootScope, bzUser, $location) {

        $rootScope.bazalt = window.bazalt;
        $rootScope.$on('$user:pemissionDenied', function (event, nextLocation, currentLocation) {
            $location.path('/login');
        });

    }]);
});