(function() {
  var flagApp = angular.module("flagApp", []);
  flagApp.controller("flagController", [
    '$scope',
    '$http',
    function($scope, $http) {
      $scope.search = function(olympicURL) {
         $scope.countryFlag = countryFlag;
         $scope.countries = countries;
        // console.log('Searching Wikipedia for ', searchTerm);
        // searchURL
        // var olympicURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + searchTerm +'&format=json&callback=JSON_CALLBACK'
        var flagURL = "https://en.wikipedia.org/w/api.php?action=parse&format=json&requestid=961522&pageid=961522&prop=text&section=17&formatversion=2&utf8=1&format=json&callback=JSON_CALLBACK";
        $http.jsonp(flagURL).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log('Success');
          // console.log(response.data.parse.text);
          // var matchArray = [];
          // $scope.data = response.data.parse.text;
          // var countArray = $scope.data.match(/wikipedia\/commons\/thumb/g);
          // // console.log(matchArray);
          // console.log(countArray.length);
          // for (i=0; i<countArray.length; i++){
          //   if(countArray[i] == /wikipedia\/commons\/thumb/g){
          //   }
          // };
 
          // console.log(imageArray);
      
          // $scope.data = response;
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