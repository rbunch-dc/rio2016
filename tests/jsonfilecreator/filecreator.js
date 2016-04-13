(function() {
  var fileApp = angular.module("fileApp", []);
  fileApp.controller("jsonFileCreator", [
    '$scope',
    '$http',
    function($scope, $http) {

      $scope.someobject = {
        "employees": [{
          "firstName": "John",
          "lastName": "Doe"
        }, {
          "firstName": "Anna",
          "lastName": "Smith"
        }, {
          "firstName": "Peter",
          "lastName": "Jones"
        }]
      }

      // console.log($scope.someobject);

      $scope.saveToPc = function(data, filename) {

        if (!data) {
          console.error('No data');
          return;
        }

        if (!filename) {
          filename = 'download.json';
        }

        if (typeof data === 'object') {
          data = JSON.stringify(data, undefined, 2);
        }

        var blob = new Blob([data], {
            type: 'text/json'
          }),
          e = document.createEvent('MouseEvents'),
          a = document.createElement('a');

        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
      };
    }
  ]);
})();
