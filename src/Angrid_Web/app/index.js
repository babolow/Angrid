import angular from 'angular';

import './root.module';
//import 'templates';

angular.element(document).ready(function () {
    angular.bootstrap(document, ['root'], {
        strictDi: true
    });
});