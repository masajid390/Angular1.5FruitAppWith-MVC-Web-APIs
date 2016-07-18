/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="fruiteditor.ts" />
module FruitApplication {
    export class FruitCollection {
        constructor(
            private $scope: ng.IScope,
            private service: FruitDataService) {

            service.setUpdateHandler((f) => this.fruits = f);
        }
        fruits: Array<Rest.Fruit>;
        private _fruitName: string;
        private _fruitColor: string;

        get NewFruitName() {
            return this._fruitName;
        }

        set NewFruitName(value: string) {
            this._fruitName = value;
        }

        get NewFruitColor() {
            return this._fruitColor;
        }

        set NewFruitColor(value: string) {
            this._fruitColor = value;
        }

        public update(fruit: Rest.Fruit) {
            this.service.updateFruit(fruit);
        }

        public Add() {
            var fruit: Rest.Fruit = {
                Id: this.fruits.length + 1,
                Name: this._fruitName,
                Color: this._fruitColor
            }

            this.service.addFruit(fruit);
        }

        public delete(fruit: Rest.Fruit) {
            this.service.deleteFruit(fruit.Id);
        }

    }

    // register FruitCollection Controller to editorModule
    FruitEditor.fruitModule
        .controller("fruitCollection", ["$scope", "fruitDataService", FruitCollection]);
}