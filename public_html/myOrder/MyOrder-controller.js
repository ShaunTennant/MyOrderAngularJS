/*global angular, localStorage */

var myOrderController = ostomyNetAu.controller('MyOrderController', [function () {
        'use strict';
        this.remember = function (propertyName, value) {
            this[propertyName] = value === undefined ? '' : value;
            localStorage.setItem(propertyName, this[propertyName]);
        };

        //Defaults
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

