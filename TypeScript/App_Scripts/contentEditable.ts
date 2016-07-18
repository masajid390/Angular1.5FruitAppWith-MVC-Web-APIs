/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="fruiteditor.ts" />
module FruitApplication {
    class ContentEditable implements ng.IDirective {
        static factory(): ng.IDirectiveFactory {
            return () => new ContentEditable();
        }

        ristrict = 'A';
        require = 'ngModal';
        link = (scope: ng.IScope, element: ng.IRootElementService, attr: any, ngModal: ng.INgModelController) => {
            function read() {
                ngModal.$setViewValue(element.html());
            }

            ngModal.$render = function () {
                element.html(ngModal.$viewValue || "");
            }

            element.bind('blur, keyup, change', function () {
                scope.$apply(read);
            });
        };
    }

    FruitEditor.fruitModule.directive("contentEditable", ContentEditable.factory());
}