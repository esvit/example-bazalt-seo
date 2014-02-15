define([
    'modules/pages/test/module',
    'modules/pages/test/controllers/TestPageCtrl'
], function (module) {
    'use strict';

    module.config(['bzUserProvider', 'bzConfigProvider', '$routeSegmentProvider', function (bzUserProvider, bzConfigProvider, $routeSegmentProvider) {

        $routeSegmentProvider
            .when('/test', 'testPage')
            .segment('testPage', {
                controller: 'TestPageCtrl',
                templateUrl: bzConfigProvider.templateUrl('/test.html'),
                resolve: {
                    permissions: bzUserProvider.access([])
                },
                resolveFailed: bzConfigProvider.errorResolver()
            });

    }]);

    return module;

});