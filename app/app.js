define('app', [
    'angular',
    'angular-locale',
    'bz', 'bz.seo',

    'modules/pages/config'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'bz', 'bz.seo',
        'bz.pages'
    ]);
});