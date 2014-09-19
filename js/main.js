angular.module('Highlighter', []).controller('HighlighterController', function ($scope) {
    $scope.language = 'php';
    $scope.theme = 'solarized_dark';
    $scope.codeTextarea = '';

    $('#code code').each(function (i, block) {
        hljs.highlightBlock(block);
    });


    $scope.updateCode = function () {
        $('#code code').removeClass('hljs');
        $('#code code').html('');
        $('#code code').html($('#code-textarea').val());
        $('#code code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    };

}).directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keyup", function (event) {
            scope.$apply(function () {
                scope.$eval(attrs.ngEnter, {'event': event});
            });
        });
    };
});