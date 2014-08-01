/*global angular, localStorage */

var instructions = angular.module('instructions');

//Defaults
if (localStorage.getItem('instructionsVisible') === null) {
    localStorage.setItem('instructionsVisible', 'true');
}
