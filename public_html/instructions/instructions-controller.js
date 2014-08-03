/*global angular, localStorage */

angular.module('instructionsController', [])
    .controller('InstructionsController', [function () {
        'use strict';

        //Default(s)
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
