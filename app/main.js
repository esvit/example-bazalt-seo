define('main', [
    'angular', 'app', 'config'
], function(angular, app) {
    'use strict';

    clearTimeout(window.startup);

    angular.bootstrap(document.documentElement, [app.name]);

    // for ngScenario
    /*var html = document.getElementsByTagName('html')[0];

    html.setAttribute('ng-app', 'app');
    html.dataset.ngApp = 'app';

    if (top !== window) {
        top.postMessage({
            type: 'loadamd'
        }, '*');
    }*/
});
//Fix bug in Firefox when script not run when open in new tab
window.startup = setTimeout(function() {
    'use strict';

    if (typeof angular != 'undefined') {
        angular.bootstrap(document.documentElement, ['app']);
    }
    if (typeof window.callPhantom === 'function') {
        window.callPhantom({ status: 'done' });
    }
}, 2000);