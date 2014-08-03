/*global angular, localStorage */

angular.module('rememberService', [])
    .factory('remember', function () {
        'use strict';
        var remember = function (ctrl, propertyName, value) {
            ctrl[propertyName] = value;
            localStorage.setItem(propertyName, ctrl[propertyName]);
        };

        return {
            remember: remember
        };
    });