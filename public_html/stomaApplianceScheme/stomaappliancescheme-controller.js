/*global angular, localStorage, ostomyNetAu */

angular.module('stomaApplianceSchemeController', [])
    .controller('StomaApplianceSchemeController', [function () {
        'use strict';

        //Defaults
        if (localStorage.getItem('stomaApplianceSchemeVisible') === null) {
            localStorage.setItem('stomaApplianceSchemeVisible', 'true');
        }

        this.stomaApplianceScheme = {
            get Visible() {
                return localStorage.getItem('stomaApplianceSchemeVisible') === 'true';
            },
            set Visible(value) {
                localStorage.setItem('stomaApplianceSchemeVisible', value);
            }
        };
    }]);
