/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeleditor.ts" />
var LabelApplication;
(function (LabelApplication) {
    var LabelCollection = (function () {
        function LabelCollection($scope) {
            this.$scope = $scope;
            this.fruits = [
                {
                    Name: 'Apple',
                    Color: 'Red'
                },
                {
                    Name: 'Mango',
                    Color: 'Yellow'
                },
                {
                    Name: 'Guava',
                    Color: 'Green'
                }
            ];
        }
        return LabelCollection;
    })();
    LabelApplication.LabelCollection = LabelCollection;
    // register LabelCollection Controller to editorModule
    LabelApplication.LabelEditor.editorModule
        .controller("labelCollection", ["$scope", LabelCollection]);
})(LabelApplication || (LabelApplication = {}));
