define([
    'modules/pages/~index/module',
    'modules/pages/~index/controllers/IndexPageCtrl'
], function (module) {
    'use strict';

    module.config(['bzUserProvider', 'bzConfigProvider', '$routeSegmentProvider', function (bzUserProvider, bzConfigProvider, $routeSegmentProvider) {

        $routeSegmentProvider
            .when('/', 'home')
            .segment('home', {
                controller: 'IndexPageCtrl',
                templateUrl: bzConfigProvider.templateUrl('/index.html'),
                resolve: {
                    permissions: bzUserProvider.access([])
                },
                resolveFailed: bzConfigProvider.errorResolver()
            });

    }]);

    return module;

});