import uiRouter from 'angular-ui-router';
import { appComponent } from './app.component';
import { appHeader } from './app-header/app-header.module';
//import { appSidebar } from './app-sidebar-menu/app-sidebar-menu.module';
//import { appFooter } from './app-footer/app-footer.module';

//import './app.scss';

export const app = angular
    .module('common.app', [
        uiRouter,
        appHeader
        //appSidebar,
        //appFooter
    ])
    .component('app', appComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app', {
                // redirectTo: 'dashboard',
                url: '/',
                //data: {
                //    requiredAuth: true,
                //},
                component: 'app'
                
            });
    })
    .name;