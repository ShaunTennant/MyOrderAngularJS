/*global angular, localStorage */

var stomaApplianceScheme = angular.module('stomaApplianceScheme');

//Defaults
if (localStorage.getItem('stomaApplianceSchemeVisible') === null) {
    localStorage.setItem('stomaApplianceSchemeVisible', 'true');
}
