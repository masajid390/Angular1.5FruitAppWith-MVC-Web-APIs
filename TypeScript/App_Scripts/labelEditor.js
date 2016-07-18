var LabelApplication;
(function (LabelApplication) {
    var LabelEditor = (function () {
        function LabelEditor() {
        }
        LabelEditor.editorModule = angular.module('labelEditor', ['']);
        return LabelEditor;
    })();
    LabelApplication.LabelEditor = LabelEditor;
})(LabelApplication || (LabelApplication = {}));
