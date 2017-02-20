import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { rootComponent } from './root.component';
//import { common } from './common/common.module';
import { app } from './common/app.module';

import { components } from './components/components.module';

//note css du module prinicipal
//import './root.scss';

export const root = angular
    .module('root', [

        //npm modules
        'templates',
       //add module template for use html view compiled into one module by brunch (see $templateCache in angularjs doc)
        uiRouter,

        //apps modules
        app,
        components

    ])
    .component('root', rootComponent)
    .config(($urlRouterProvider, $locationProvider) => {
        'ngInject';

        $urlRouterProvider.otherwise("/"); //force ui-router to load state app and inject html in app component in ui-view div
        $locationProvider.html5Mode(true);
    });

