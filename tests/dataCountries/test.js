// var wikiApp = angular.module('wikiApp', ['ngRoute']);
// wikiApp.controller('mainController', function($scope, $http) {
//   $http.defaults.useXDomain = true;
//
//   $scope.message = "Hello World";
//   // var my_client_id = "9420874d921b49a1a0fc69e1d8da9494";
//   // var my_secret = "bb4e0e7f86bf4459b7d22df4143a9c05";
//   // var redirect_uri="http://willybman.com";
//
//   var olympicURL =
//     'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&prop=text&rvprop=content&format=json';
//   // $http.get(olympicURL).success(function(data) {
//   //   console.log(data);
//   // });
//
//   $http({
//     method: 'JSONP',
//     url: olympicURL
//   }).then(function successCallback(response) {
//     // this callback will be called asynchronously
//     // when the response is available
//     console.log(data);
//   }, function errorCallback(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   });
// });
(function() {
  var wikiApp = angular.module("wikiApp", []);
  wikiApp.controller("mainController", [
    '$scope',
    '$http',
    function($scope, $http) {

      $scope.search = function(olympicURL) {
        console.log('Searching Wikipedia for ', searchTerm);
        // searchURL
        // var olympicURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + searchTerm +'&format=json&callback=JSON_CALLBACK'
        var olympicURL = "https://en.wikipedia.org/w/api.php?action=parse&format=json&pageid=961522&prop=sections%7Clinks&section=17&utf8=1&format=json&callback=JSON_CALLBACK";
      
        $http.jsonp(olympicURL).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log('Success');
          // console.log(response.data.parse.links);
          $scope.data = response.data.parse.links;
          ast = '*';
          countryNameArray =[];
          for (i=0; i<$scope.data.length; i++){
            var country = $scope.data[i][ast];
            // console.log(country);
            var cut = country.indexOf("at the 2016");
            // console.log(cut);
            if(cut != -1){
              countryNameArray.push(country.slice(0,cut-1));
            }else{
              countryNameArray.push(country);
            }

          }
          console.log(countryNameArray);
          $scope.data = response;
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log('Failure');

          $scope.data = response;
          console.log('Failure');

          $scope.data = response;
          console.log('Failure');

          $scope.data = response;
        });
      };

    }
  ]);
})();
