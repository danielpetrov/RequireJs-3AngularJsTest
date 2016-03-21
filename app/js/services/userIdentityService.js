define([], function userIdentityService() {
        'use strict';
        function userIdentityService() {
            var _identity;

            return {
                isLogged: function () {
                    return !!_identity;
                },

                login: function (email, password) {
                    console.log(arguments);
                }
            }
        }

        return userIdentityService;
    }
);