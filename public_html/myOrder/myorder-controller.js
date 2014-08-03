/*global angular, localStorage */

angular.module('myOrderController', [])
    .controller('MyOrderController', [function () {
        'use strict';
        //Default)s)
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

        this.myOrder = {
            get Name() {
                return localStorage.getItem('myOrderName');
            },
            set Name(value) {
                localStorage.setItem('myOrderName', (value === undefined || value === null) ? '' : value);
            },
            get Email() {
                return localStorage.getItem('myOrderEmail');
            },
            set Email(value) {
                localStorage.setItem('myOrderEmail', (value === undefined || value === null) ? '' : value);
            },
            get MemberNumber() {
                return localStorage.getItem('myOrderMemberNumber');
            },
            set MemberNumber(value) {
                localStorage.setItem('myOrderMemberNumber', (value === undefined || value === null) ? '' : value);
            },
            get OstomysEmail() {
                return localStorage.getItem('myOrderOstomysEmail');
            },
            set OstomysEmail(value) {
                localStorage.setItem('myOrderOstomysEmail', (value === undefined || value === null) ? '' : value);
            }
        };
    }]);
