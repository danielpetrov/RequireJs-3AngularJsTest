require.config({
    baseUrl: "app/",
    // alias libraries paths.  Must set 'angular'
    paths: {
        angular : '../node_modules/angular/angular.min',
        'angular-route': '../node_modules/angular-route/angular-route.min',
        angularAMD : '../node_modules/angular-amd/angularAMD.min',
        userIdentityService : 'js/services/userIdentityService'

    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        angular: {
            exports : 'angular'
        },
        angularAMD: ['angular'],
        'angular-route': ['angular']
    },

    // kick start application
    deps: ['app']
});