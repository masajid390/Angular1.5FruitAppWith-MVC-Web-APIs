/// <reference path="fruit.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
var FruitApplication;
(function (FruitApplication) {
    FruitApplication.FruitEditor.fruitModule.factory('fruitDataService', ['$resource', function (r) {
            return new FruitDataService(r);
        }]);
    var FruitDataService = (function () {
        function FruitDataService($resource) {
            this.resource = $resource("http://localhost:50351/api/Fruit/:id", { id: '@id' }, {
                get: { method: 'GET' },
                save: { method: 'PUT' },
                query: { method: 'GET', isArray: true },
                delete: { method: 'DELETE' },
                create: { method: 'POST' }
            });
            this.retriveAllFruits();
        }
        FruitDataService.prototype.setUpdateHandler = function (evHandler) {
            this.onUpdate = evHandler;
        };
        FruitDataService.prototype.retriveAllFruits = function () {
            var _this = this;
            return this.resource.query().$promise.then(function (results) {
                _this.currentData = results;
                _this.onUpdate(_this.currentData);
            });
        };
        FruitDataService.prototype.updateFruit = function (fruit) {
            var _this = this;
            this.resource.save(fruit, function () { return _this.retriveAllFruits(); });
        };
        FruitDataService.prototype.addFruit = function (fruit) {
            var _this = this;
            this.resource.create(fruit, function () { return _this.retriveAllFruits(); });
        };
        FruitDataService.prototype.deleteFruit = function (id) {
            var _this = this;
            this.resource.delete({ Id: id }, function () { return _this.retriveAllFruits(); });
        };
        return FruitDataService;
    })();
    FruitApplication.FruitDataService = FruitDataService;
})(FruitApplication || (FruitApplication = {}));
