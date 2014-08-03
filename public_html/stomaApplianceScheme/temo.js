/*global angular, localStorage, ostomyNetAu */

var stomaApplianceSchemeController = angular.module('stomaApplianceSchemeController', [])
    .controller('StomaApplianceSchemeController', [function () {
        'use strict';
        this.remember = function (propertyName, value) {
            this[propertyName] = value === undefined ? '' : value;
            localStorage.setItem(propertyName, this[propertyName]);
        };

        //Defaults
        if (localStorage.getItem('stomaApplianceSchemeVisible') === null) {
            localStorage.setItem('stomaApplianceSchemeVisible', 'true');
        }
        this.stomaApplianceSchemeVisible = localStorage.getItem('stomaApplianceSchemeVisible') === 'true';
    }]);
