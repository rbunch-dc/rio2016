var rioApp = angular.module("rioApp", []);

rioApp.factory('DataService', function($http) {


  var _data = {};
  var _baseUrl = 'https://en.wikipedia.org//w/api.php?';
  var _extendUrl = 'action=parse&format=json&text=&pageid=961522&prop=links&section=17';
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

  var getCountries = function(_callBack) {
    //console.log("joes test");
    $http.jsonp(_baseUrl + _extendUrl + _endUrl).then(function successCallback(res) {
        console.log('Success');
        //console.log(res.data.parse.links);
        //$scope.data = res.data.parse.links;
        var _dat = res.data.parse.links;
        var ast = '*';
        var _itemsNeeded = [];
        var _itemCounted = [];

        for (i = 0; i < _dat.length; i++) {
          var event = _dat[i][ast];
          var _item = event.match(/at\sthe\s2016\sSummer\sOlympics/g);

          if (_item != null) {
            var cut = event.indexOf("2016");
            //console.log(event.indexOf("2016"));

            _itemsNeeded.push(event.slice(0, cut - 8));
          }

          //console.log(event);
          // var cut = event.indexOf("at");
          // console.log(cut);
          // if (cut != -1) {
          //   eventArray.push(event.slice(0, cut - 1));
          // } else {
          //   eventArray.push(event);
          // }



          //console.log(event.match(/at\sthe\s2016\sSummer\sOlympics/g));
          //console.log(event);

        }
        //console.log(_itemsNeeded);
        _callBack(_itemsNeeded);

      },
      function errorCallback(res) {
        console.log('Failure');
        _callBack(res);
      });
  }

  return {
    getCountries: getCountries
  }
});


rioApp.controller('MainModule', function($scope) {
  // DataService.getCountries(function(poneys) {
  //   $scope.poneys = poneys;
  //   console.log(poneys);
  // });


});

// rioApp.run(function($rootScope, $location, $routeParams, $controller, DataService) {
//   console.log("Hello Controller");
// });

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

// rioApp.factory('DataService', function($http, $q, $rootScope) {
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
