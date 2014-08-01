/*global angular, localStorage */

var favourites = angular.module('favourites');

//Defaults
if (localStorage.getItem('favouritesVisible') === null) {
    localStorage.setItem('favouritesVisible', 'true');
}
