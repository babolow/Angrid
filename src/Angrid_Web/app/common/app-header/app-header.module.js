import { headerComponent } from './app-header.component';
//import './app-header.scss';

export const appHeader = angular
    .module('common.app-header', [])
    .component('appHeader', headerComponent).name;