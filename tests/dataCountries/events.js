(function() {
  var eventApp = angular.module("eventApp", []);
  eventApp.controller("eventController", [
    '$scope',
    '$http',
    function($scope, $http) {

      $scope.search = function(eventURL) {
        console.log('Searching Wikipedia for ', searchTerm);
        // searchURL
        // var olympicURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + searchTerm +'&format=json&callback=JSON_CALLBACK'
        var eventURL = "https://en.wikipedia.org//w/api.php?action=parse&format=json&pageid=961522&prop=sections%7Clinks&section=15&utf8=1&format=json&callback=JSON_CALLBACK";
      
      
        $http.jsonp(eventURL).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log('Success');
          console.log(response.data.parse.links);
          $scope.data = response.data.parse.links;
          ast = '*';
          eventArray =[];
          for (i=0; i<$scope.data.length; i++){
            var event = $scope.data[i][ast];
            console.log(event);
            var cut = event.indexOf("at");
            console.log(cut);
            if(cut != -1){
              eventArray.push(event.slice(0,cut-1));
            }else{
              eventArray.push(event);
            }
          }
          
           console.log(eventArray);
          
          
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