/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="fruiteditor.ts" />
var FruitApplication;
(function (FruitApplication) {
    var FruitCollection = (function () {
        function FruitCollection($scope, service) {
            var _this = this;
            this.$scope = $scope;
            this.service = service;
            service.setUpdateHandler(function (f) { return _this.fruits = f; });
        }
        Object.defineProperty(FruitCollection.prototype, "NewFruitName", {
            get: function () {
                return this._fruitName;
            },
            set: function (value) {
                this._fruitName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FruitCollection.prototype, "NewFruitColor", {
            get: function () {
                return this._fruitColor;
            },
            set: function (value) {
                this._fruitColor = value;
            },
            enumerable: true,
            configurable: true
        });
        FruitCollection.prototype.update = function (fruit) {
            this.service.updateFruit(fruit);
        };
        FruitCollection.prototype.Add = function () {
            var fruit = {
                Id: this.fruits.length + 1,
                Name: this._fruitName,
                Color: this._fruitColor
            };
            this.service.addFruit(fruit);
        };
        FruitCollection.prototype.delete = function (fruit) {
            this.service.deleteFruit(fruit.Id);
        };
        return FruitCollection;
    })();
    FruitApplication.FruitCollection = FruitCollection;
    // register FruitCollection Controller to editorModule
    FruitApplication.FruitEditor.fruitModule
        .controller("fruitCollection", ["$scope", "fruitDataService", FruitCollection]);
})(FruitApplication || (FruitApplication = {}));
