define([
    'modules/pages/~index/module'
], function (module) {
    'use strict';

    module.controller('IndexPageCtrl', ['$scope', 'bzSeoMeta',
        function ($scope, bzSeoMeta) {
            bzSeoMeta.title('Main page')
                .description('Page description');
        }]);

});