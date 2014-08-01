/*global angular, localStorage, ostomyNetAu */

var instructionsController = angular.module('instructionsController', [])
    .controller('InstructionsController', [function () {
        'use strict';
        this.remember = function (propertyName, value) {
            this[propertyName] = value === undefined ? '' : value;
            localStorage.setItem(propertyName, this[propertyName]);
        };

        //Defaults
        if (localStorage.getItem('instructionsVisible') === null) {
            localStorage.setItem('instructionsVisible', 'true');
        }
        this.instructionsVisible = localStorage.getItem('instructionsVisible') === 'true';
    }]);
