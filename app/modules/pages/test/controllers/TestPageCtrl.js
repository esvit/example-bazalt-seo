define([
    'modules/pages/test/module'
], function (module) {
    'use strict';

    module.controller('TestPageCtrl', ['$scope', 'bzSeoMeta',
        function ($scope, bzSeoMeta) {
            bzSeoMeta.title('Test page')
                .description('Test test test');
        }]);

});