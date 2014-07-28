var myOrder = angular.module('myOrder', []);
var MyOrderController = myOrder.controller('MyOrderController', function() {
    
    function remember(key, defaultValue) {
        if (localStorage.getItem(key) === null) {
            localStorage.setItem(key, defaultValue);
        }
        Object.defineProperty(this, 'boolean', {
            get: function() {
                return localStorage.getItem(key) === 'true';
            },
            set: function(value) {
                localStorage.setItem(key, value ? 'true' : 'false');
            }
        });
        Object.defineProperty(this, 'text', {
            get: function() {
                return localStorage.getItem(key);
            },
            set: function(value) {
                localStorage.setItem(key, value);
            }
        });
    }
    this.instructions = new remember('instructionsVisible', true);
    this.favourites = new remember('favouritesVisible', true);
    this.stomaApplianceScheme = new remember('stomaApplianceSchemeVisible', true);
    this.myOrderName = new remember('myOrderName', 'Shaun')
});
