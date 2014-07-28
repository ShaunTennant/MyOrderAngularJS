var myOrder = angular.module('myOrder', []);
var MyOrderController = myOrder.controller('MyOrderController', function() {
    
    function rememberShowHide(key, defaultValue) {
        if (localStorage.getItem(key) === null) {
            localStorage.setItem(key, defaultValue);
        }
        
        Object.defineProperty(this, 'visible', {
            get: function() {
                return localStorage.getItem(key) === 'true';
            },
            set: function(value) {
                localStorage.setItem(key, value ? 'true' : 'false');
            }
        });
    }
    this.instructions = new rememberShowHide('instructionsVisible', true);
    this.favourites = new rememberShowHide('favouritesVisible', true);
    this.stomaApplianceScheme = new rememberShowHide('stomaApplianceSchemeVisible', true);
});
