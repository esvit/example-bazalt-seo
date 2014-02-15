requirejs.config({
    baseUrl: '/app',
    paths: {
        'requirejs': '../bower_components/requirejs/require',

        // bazalt
        'bz': '../bower_components/bazalt/build/bz-lite.src',
        'bz.pages': '../bower_components/bz.pages/build/pages',
        'bz.seo': '../bower_components/bz.seo/build/seo.src',

        'bz-model': '../bower_components/bz-model/bz-model.src',

        'elastic': '../bower_components/elastic.js/dist/elastic',
        'elastic-angular-client': '../bower_components/elastic.js/dist/elastic-angular-client',

        // jquery
        'jquery': '../bower_components/jquery/jquery',
        'jquery-ui': '../bower_components/jquery-ui/ui',
        'jquery.atwho': '../bower_components/jquery.atwho/src/jquery.atwho',
        'caretjs': '../bower_components/Caret.js/src/jquery.caret',

        //jquery-galleria
        'jquery-galleria': '../bazalt/bower_components/jquery-galleria/src/galleria',

        'bootstrap': '../bower_components/bootstrap/js',

        'angular': '../bower_components/angular/angular',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'angular-route': '../bower_components/angular-route/angular-route',
        'angular-animate': '../bower_components/angular-animate/angular-animate',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
        'angular-route-segment': '../bower_components/angular-route-segment/build/angular-route-segment',
        'angular-file-upload': '../bower_components/angular-file-upload/angular-file-upload',
        'angular-smoothscroll': '../bower_components/angular-smoothscroll/dist/scripts/c8742280.scripts',
        'angular-notify': '../bower_components/angular-notify/angular-notify',
        'ngSocial': '../bower_components/angular-social/angular-social.src',
        'angular-analytics': '../bower_components/angular-analytics/dist/angular-analytics',

        'speakingurl': '../bower_components/speakingurl/speakingurl.min',
        'fancybox': '../bower_components/fancybox/source/jquery.fancybox',
        'ng-videosharing-embed': '../bower_components/ng-videosharing-embed/build/ng-videosharing-embed',


        // angular modules
        'angular-ui-select2': '../bower_components/angular-ui-select2/src/select2',
        'ng-ckeditor': '../bower_components/ng-ckeditor/ng-ckeditor.src',
        'ng-editable-tree': '../bower_components/ng-editable-tree/ng-editable-tree',
        'ng-table': '../bower_components/ng-table/ng-table.src',
        'ngFinder': '../bower_components/ng-finder/ng-finder.src',
        'bzUploader': '../bower_components/bz-uploader/bz-uploader.src',
        'bz-nested-model': '../bower_components/bz-nested-model/bz-nested-model',

        // etc
        'ckeditor': '../assets/ckeditor/ckeditor',
        'select2': '../bower_components/select2/select2',

        'jquery-sticky': '../bower_components/jquery.sticky/jquery.sticky',

        'angular-strap': '../bower_components/angular-strap/dist/modules',
        'angular-date-parser': '../bower_components/angular-strap/dist/modules/date-parser',
        'angular-timepicker': '../bower_components/angular-strap/dist/modules/timepicker',
        'angular-datepicker': '../bower_components/angular-strap/dist/modules/datepicker',

        'bootstrap-datepicker': '../bower_components/bootstrap-datepicker/js/bootstrap-datepicker',
        'bootstrap-datepicker-locale': '../bower_components/bootstrap-datepicker/js/locales'
    },
    shim: {
        'angular-timepicker': { deps: ['angular', 'angular-strap/tooltip', 'angular-date-parser'] },
        'angular-datepicker': { deps: ['angular', 'angular-strap/tooltip', 'angular-date-parser', 'bootstrap-datepicker-locale/bootstrap-datepicker.uk'] },
        'angular-date-parser': {deps: ['angular']  },
        'angular-strap/dimensions': {deps: ['angular']  },
        'angular-strap/tooltip': {deps: ['angular', 'angular-strap/dimensions']  },

        'jquery': { exports: 'jQuery' },
        'angular': { exports: 'angular', deps: ['jquery'] },
        'angular-locale': { deps: ['angular'] },
        'angular-analytics': { deps: ['angular'] },
        'angular-resource': { deps: ['angular'] },
        'angular-route': { deps: ['angular'] },
        'angular-animate': { deps: ['angular'] },
        'angular-cookies': { deps: ['angular'] },
        'ngSocial': { deps: ['angular'] },
        'angular-route-segment': { deps: ['angular'] },
        'angular-smoothscroll': { deps: ['angular'] },
        'angular-file-upload': { deps: ['angular'] },
        'bz-nested-model': { deps: ['angular'] },
        'angular-ui-select2': { deps: ['angular', 'select2'] },
        'angular-notify': { deps: ['angular'] },
        'ng-videosharing-embed': { deps: ['angular'] },

        'elastic-angular-client': { deps: ['elastic', 'angular'] },
        'bz-model': { deps: ['angular', 'elastic-angular-client'] },

        'select2': { deps: ['jquery'] },

        'caretjs': { deps: ['jquery'] },
        'ckeditor': { deps: ['jquery'] },
        'jquery.atwho': { deps: ['caretjs'] },

        'ng-ckeditor': { deps: ['angular', 'ckeditor'] },
        'ng-editable-tree': { deps: ['angular', 'jquery-ui/jquery.ui.draggable', 'jquery-ui/jquery.ui.droppable', 'jquery-ui/jquery.ui.sortable'] },
        'ng-table': { deps: ['angular'] },
        'bzUploader': { deps: ['angular'] },
        'ngFinder': { deps: ['elfinder', 'angular'] },
        'elfinder': { deps: ['jquery-ui/jquery.ui.draggable', 'jquery-ui/jquery.ui.droppable', 'jquery-ui/jquery.ui.selectable'] },

        //jquery.sticky
        'jquery-ui/jquery.ui.core': { deps: ['jquery'] },

        // Bootstrap
        'bootstrap/modal': { deps: ['bootstrap/transition'] },
        'bootstrap-datepicker-locale/bootstrap-datepicker.uk': { deps: ['bootstrap-datepicker'] },

        // jquery ui for sortable
        'jquery-sticky': { deps: ['jquery'] },
        'jquery-ui/jquery.ui.widget': { deps: ['jquery-ui/jquery.ui.core'] },
        'jquery-ui/jquery.ui.mouse': { deps: ['jquery-ui/jquery.ui.widget'] },
        'jquery-ui/jquery.ui.draggable': { deps: ['jquery-ui/jquery.ui.mouse'] },
        'jquery-ui/jquery.ui.droppable': { deps: ['jquery-ui/jquery.ui.mouse'] },
        'jquery-ui/jquery.ui.selectable': { deps: ['jquery-ui/jquery.ui.mouse'] },
        'jquery-ui/jquery.ui.sortable': { deps: ['jquery-ui/jquery.ui.mouse'] },

        'main': { deps: ['../bazalt'] }
    },
    priority: [
        'jquery', 'angular'
    ],
    urlArgs: 'v=1.1'
});

require(['main']);