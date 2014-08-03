/*global angular, localStorage */

angular.module('instructionsController', ['rememberService'])
    .controller('InstructionsController', ['remember', function (remember) {
        'use strict';
        this.remember = function (propertyName, value) {
            remember.remember(this, propertyName, value);
        };

        //Defaults
        if (localStorage.getItem('instructionsVisible') === null) {
            localStorage.setItem('instructionsVisible', 'true');
        }

        this.instructions = {
            get Visible() {
                return localStorage.getItem('instructionsVisible') === 'true';
            },
            set Visible(value) {
                localStorage.setItem('instructionsVisible', value);
            }
        };

    }]);
