var rioApp = angular.module("rioApp", []);

rioApp.factory('rioDataService', function($http) {


  var _data = {};
  var _baseUrl = 'https://en.wikipedia.org//w/api.php?';
  var _extendUrl = 'action=parse&format=json&pageid=961522&prop=sections%7Clinks&section=15&utf8=1';
  var _finalUrl = '';
  var _endUrl = '&format=json&callback=JSON_CALLBACK';

  // var eventURL = "https://en.wikipedia.org//w/api.php?action=parse&format=json&pageid=961522&prop=sections%7Clinks&section=15&utf8=1&format=json&callback=JSON_CALLBACK";

  var createUrl = function() {
    // Bring in extended url path to attach to base
    // do work here on the url to prepare it for delivery.
    // FIXME: This may need to be broken up into different call functions
  }

  var setUrlPath = function(_url) {
    _extendUrl = _url;
  }

  var getUrlPath = function(_url) {
    return _extendUrl;
  }

  var getCountries = function() {
    _data = $http.jsonp(_baseUrl + _extendUrl + _endUrl).then(function successCallback(res) {
      console.log('Success');
      console.log(response.data.parse.links);
      $scope.data = response.data.parse.links;
      ast = '*';
      eventArray = [];
      for (i = 0; i < $scope.data.length; i++) {
        var event = $scope.data[i][ast];
        console.log(event);
        var cut = event.indexOf("at");
        console.log(cut);
        if (cut != -1) {
          eventArray.push(event.slice(0, cut - 1));
        } else {
          eventArray.push(event);
        }
      }

      $scope.data = res;
    }, function errorCallback(res) {
      console.log('Failure');

      $scope.data = res;
      console.log('Failure');

      $scope.data = res;
      console.log('Failure');

      $scope.data = res;
    });
  }
  return _data;
});


rioApp.controller('rioMainModule', function($scope, rioDataService) {



});

// return {
//   store: function(key, value) {
//     data[key] = value;
//     //$rootScope.$broadcast('rioStoreData', data[key]);
//   },
//   get: function(key) {
//     return data[key];
//   },
//   getAll: function() {
//     return data;
//   }

// rioApp.factory('rioDataService', function($http, $q, $rootScope) {
//
//   var data = {};
//
//   return {
//     store: function(key, value) {
//       data[key] = value;
//       //$rootScope.$broadcast('rioStoreData', data[key]);
//     },
//     get: function(key) {
//       return data[key];
//     },
//     getAll: function() {
//       return data;
//     }
//   }
// });
