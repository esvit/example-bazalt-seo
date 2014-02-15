define([
    'angular',

    'modules/pages/~index/config',
    'modules/pages/test/config'
], function (angular) {
    'use strict';

    return angular.module('bz.pages', [
        'bz.pages.index',
        'bz.pages.test'
    ]);
});