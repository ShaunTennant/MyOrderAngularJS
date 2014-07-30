var myOrder = angular.module('myOrder', []);
var MyOrderController = myOrder.controller('MyOrderController', function() {

    function rememberBoolean(propertyName, localStorageKey, defaultValue) {
        if (localStorage.getItem(localStorageKey) === null) {
            localStorage.setItem(localStorageKey, defaultValue);
        }
        Object.defineProperty(this, propertyName, {
            get: function() {
                return localStorage.getItem(localStorageKey) === 'true';
            },
            set: function(value) {
                localStorage.setItem(localStorageKey, value ? 'true' : 'false');
            }
        });
    }
    function rememberString(propertyName, localStorageKey, defaultValue) {
        if (localStorage.getItem(localStorageKey) === null) {
            localStorage.setItem(localStorageKey, defaultValue);
        }
        Object.defineProperty(this, propertyName, {
            get: function() {
                return localStorage.getItem(localStorageKey);
            },
            set: function(value) {
                if (value !== undefined) {
                    localStorage.setItem(localStorageKey, value === undefined ? '' : value);
                }
            }
        });
    }
    this.instructions = new rememberBoolean('visible', 'instructionsVisible', true);
    this.favourites = new rememberBoolean('visible', 'favouritesVisible', true);
    this.stomaApplianceScheme = new rememberBoolean('visible', 'stomaApplianceSchemeVisible', true);
    this.myOrderName = new rememberString('text', 'myOrderName', '');
    this.test = '12345';
});
