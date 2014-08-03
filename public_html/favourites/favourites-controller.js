/*global angular, localStorage */

angular.module('favouritesController', [])
    .controller('FavouritesController', [function () {
        'use strict';
        //Defaults
        if (localStorage.getItem('favouritesVisible') === null) {
            localStorage.setItem('favouritesVisible', 'true');
        }

        this.favourites = {
            get Visible() {
                return localStorage.getItem('favouritesVisible') === 'true';
            },
            set Visible(value) {
                localStorage.setItem('favouritesVisible', value);
            }
        };
    }]);
