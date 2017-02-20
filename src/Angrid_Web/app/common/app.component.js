import './app.html';

class AppController {
    constructor($state) {
        'ngInject';
        this.$state = $state;
        this.user = "Mathieu DECROOCQ"
    }
    //logout() {
    //    return this.authService
    //        .logout()
    //        .then(() => this.$state.go('auth.login'));
    //}
};



export const appComponent = {
    templateUrl: 'app/common/app.html',
    controller: AppController
};