/*global angular, localStorage, ostomyNetAu */

var favouritesController = angular.module('favouritesController', [])
    .controller('FavouritesController', [function () {
        'use strict';
        this.remember = function (propertyName, value) {
            this[propertyName] = value === undefined ? '' : value;
            localStorage.setItem(propertyName, this[propertyName]);
        };

        //Defaults
        if (localStorage.getItem('favouritesVisible') === null) {
            localStorage.setItem('favouritesVisible', 'true');
        }
        this.favouritesVisible = localStorage.getItem('favouritesVisible') === 'true';
    }]);
