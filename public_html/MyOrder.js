var myOrder = angular.module('myOrder', []);
var MyOrderController = myOrder.controller('MyOrderController', function() {
    this.remember = function(obj, propertyName, value) {
        obj[propertyName] = value;
        localStorage.setItem(propertyName, value);
    };

    this.instructionsVisible = localStorage.getItem('instructionsVisible') === null ? true : localStorage.getItem('instructionsVisible') === 'true';
    this.favouritesVisible = localStorage.getItem('favouritesVisible') === null ? true : localStorage.getItem('favouritesVisible') === 'true';
    this.stomaApplianceSchemeVisible = localStorage.getItem('stomaApplianceSchemeVisible') === null ? true : localStorage.getItem('stomaApplianceSchemeVisible') === 'true';

//    this.myOrderName = new rememberString('text', 'myOrderName', '');
});
