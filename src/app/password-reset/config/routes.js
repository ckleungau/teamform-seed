import PasswordResetView from '../views/password_reset.html';

export default ['$stateProvider', ($stateProvider) => {
    $stateProvider
        .state('password_reset', {
            auth: (authService) => {
                return authService.checkRules({guest: true});
            },
            url: '/password_reset',
            template: PasswordResetView,
            controller: 'PasswordResetCtrl',
            controllerAs: 'passwordReset',
            ncyBreadcrumb: {
                label: 'Password Reset'
            }
        });
}];
