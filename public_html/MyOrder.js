var myOrder = angular.module('myOrder', ['cxForm']);
var MyOrderController = myOrder.controller('MyOrderController', [function() {
    this.remember = function(propertyName, value) {
        this[propertyName] = value === undefined ? '' : value;
        localStorage.setItem(propertyName, this[propertyName]);
    };

    //Defaults
    if (localStorage.getItem('instructionsVisible') === null) {
        localStorage.setItem('instructionsVisible', 'true');
    }
    if (localStorage.getItem('favouritesVisible') === null) {
        localStorage.setItem('favouritesVisible', 'true');
    }
    if (localStorage.getItem('stomaApplianceSchemeVisible') === null) {
        localStorage.setItem('stomaApplianceSchemeVisible', 'true');
    }
    if (localStorage.getItem('myOrderName') === null) {
        localStorage.setItem('myOrderName', '');
    }
    if (localStorage.getItem('myOrderEmail') === null) {
        localStorage.setItem('myOrderEmail', '');
    }
    if (localStorage.getItem('myOrderMemberNumber') === null) {
        localStorage.setItem('myOrderMemberNumber', '');
    }
    if (localStorage.getItem('myOrderOstomysEmail') === null) {
        localStorage.setItem('myOrderOstomysEmail', '');
    }

    this.instructionsVisible = localStorage.getItem('instructionsVisible') === 'true';
    this.favouritesVisible = localStorage.getItem('favouritesVisible') === 'true';
    this.stomaApplianceSchemeVisible = localStorage.getItem('stomaApplianceSchemeVisible') === 'true';
    this.myOrderName = localStorage.getItem('myOrderName');
    this.myOrderEmail = localStorage.getItem('myOrderEmail');
    this.myOrderMemberNumber = localStorage.getItem('myOrderMemberNumber');
    this.myOrderOstomysEmail = localStorage.getItem('myOrderOstomysEmail');
}]);

angular.module('cxForm', [])

/**
 * @ngdoc directive
 * @name validityBindFix
 * @module cxForm
 *
 * @description
 * Prevents ngModelController from nulling the model value when it's set invalid by some rule.
 * Works in both directions, making sure an invalid model value is copied into the view value and making sure an invalid
 * model value is copied into the model. **Warning:** totally bypasses formatters/parsers when invalid, but probably good 
 * enough to use in most cases, like maxlength or pattern.
 *
 * See angular issue: https://github.com/angular/angular.js/issues/1412
 *
 * Inspired by the strategy provided by Emil van Galen here:
 * http://blog.jdriven.com/2013/09/how-angularjs-directives-renders-model-value-and-parses-user-input/
 *
 * @restrict A
 * @scope
 *
 * @param {object} ngModel Required `ng-model` value. If not present in the same element an error occurs.
 */
.directive('validityBindFix', function () {
    'use strict';

    return {
        require: '?ngModel',
        priority: 9999,
        restrict: 'A',
        link: function ($scope, $element, $attrs, ngModelController) {
            ngModelController.$formatters.unshift(function (value) {
                if (ngModelController.$invalid && angular.isUndefined(value)) {
                    return ngModelController.$modelValue;
                } else {
                    return value;
                }
            });
            ngModelController.$parsers.push(function (value) {
                if (ngModelController.$invalid && angular.isUndefined(value)) {
                    return ngModelController.$viewValue;
                } else {
                    return value;
                }
            });
        }
    };
});