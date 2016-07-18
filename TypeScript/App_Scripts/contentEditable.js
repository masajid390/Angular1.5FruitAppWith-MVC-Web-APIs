/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="fruiteditor.ts" />
var FruitApplication;
(function (FruitApplication) {
    var ContentEditable = (function () {
        function ContentEditable() {
            this.ristrict = 'A';
            this.require = 'ngModal';
            this.link = function (scope, element, attr, ngModal) {
                function read() {
                    ngModal.$setViewValue(element.html());
                }
                ngModal.$render = function () {
                    element.html(ngModal.$viewValue || "");
                };
                element.bind('blur, keyup, change', function () {
                    scope.$apply(read);
                });
            };
        }
        ContentEditable.factory = function () {
            return function () { return new ContentEditable(); };
        };
        return ContentEditable;
    })();
    FruitApplication.FruitEditor.fruitModule.directive("contentEditable", ContentEditable.factory());
})(FruitApplication || (FruitApplication = {}));
