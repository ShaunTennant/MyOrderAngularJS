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
        this.instructionsVisible = localStorage.getItem('instructionsVisible') === 'true';
        this.genusText = remember.genus;
    }]);
