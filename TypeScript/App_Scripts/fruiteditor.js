var FruitApplication;
(function (FruitApplication) {
    var FruitEditor = (function () {
        function FruitEditor() {
        }
        FruitEditor.fruitModule = angular.module('fruitEditor', ['ngRoute', 'ngResource']);
        return FruitEditor;
    })();
    FruitApplication.FruitEditor = FruitEditor;
})(FruitApplication || (FruitApplication = {}));
