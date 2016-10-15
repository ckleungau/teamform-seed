export default class LoginCtrl {
    constructor($state, $timeout, userService) {
        this.$state = $state;
        this.$timeout = $timeout;
        this.userService = userService;
        this.loading = false;
        this.credential = {
            email: '',
            password: ''
        };
        this.error = null;
    }

    login() {
        this.userService.auth(this.credential)
            .then((result) => {
                this.$state.go(this.$state.params.toState, this.$state.params.toParams);
            })
            .catch((error) => {
                this.$timeout(() => {
                    this.error = error;
                    this.loading = false;
                });
            });
    }
}

LoginCtrl.$inject = ['$state', '$timeout', 'UserService'];
