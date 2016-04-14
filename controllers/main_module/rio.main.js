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

  var data = {
    athletes: [{
      "href": "http://www.teamusa.org/usa-bobsled-skeleton-federation/athletes/Hakeem-Abdul-Saboor",
      "athlete": "Hakeem Abdul-Saboor",
      "image": "http://www.teamusa.org/~/media/USA_Bobsled_Skeleton/2015-2016-Head-Shots/abdulsaboor.jpg?mh=147&mw=124",
      "sport": "Bobsled & Skeleton"
    }, {
      "href": "http://www.teamusa.org/usa-synchronized-swimming/athletes/Brooke-Abel",
      "athlete": "Brooke Abel",
      "image": "http://www.teamusa.org/~/media/TeamUSA/Images/11Hopefuls/Brooke_Abel.jpg?mh=147&mw=124",
      "sport": "Synchro"
    }, {
      "href": "http://www.teamusa.org/usa-archery/athletes/Garrett-Abernethy",
      "athlete": "Garrett Abernethy",
      "image": "http://www.teamusa.org/~/media/TeamUSA/Images/11Hopefuls/Garrett_Abernethy.jpg?mh=147&mw=124",
      "sport": "Archery"
    }, {
      "href": "http://www.teamusa.org/usa-team-handball/athletes/Farida-AbouZeida",
      "athlete": "Farida Abou-Zeida",
      "image": "http://www.teamusa.org/~/media/USA_Team_Handball/Images/Headshots_WNT/WNT_AbouZeida150x250.jpg?mh=147&mw=124",
      "sport": "Team Handball"
    }, {
      "href": "http://www.teamusa.org/para-track-and-field/athletes/Megan-Absten",
      "athlete": "Megan Absten",
      "image": "http://www.teamusa.org/~/media/USA_Paralympics/Images/Toronto-2015/Track-and-Field-Headshots/absten_megan_120x187.jpg?mh=147&mw=124",
      "sport": "Track and Field"
    }, {
      "href": "http://www.teamusa.org/usa-modern-pentathlon/athletes/Samantha-Achterberg",
      "athlete": "Samantha Achterberg",
      "image": "http://www.teamusa.org/~/media/USA_Modern_Pentathlon/athletes/2013-Athlete-Images/Achterberg-Samantha/Achterberg_Samantha20130626_0070_120x187.jpg?mh=147&mw=124",
      "sport": "Pentathlon"
    }, {
      "href": "http://www.teamusa.org/us-speedskating/athletes/Petra-Acker",
      "athlete": "Petra Acker",
      "image": "http://www.teamusa.org/~/media/Images/Defaults/AthleteProfileDefaultImage.jpg?mh=147&mw=124",
      "sport": "Speedskating"
    }, {
      "href": "http://www.teamusa.org/usa-track-and-field/athletes/Amy-Acuff",
      "athlete": "Amy Acuff",
      "image": "http://www.teamusa.org/~/media/TeamUSA/Galleries/Amy-Acuff-2012/Acuff_Amy_Headshot.jpg?mh=147&mw=124",
      "sport": "Track and Field"
    }, {
      "href": "http://www.teamusa.org/usa-swimming/athletes/Cammile-Adams",
      "athlete": "Cammile Adams",
      "image": "http://www.teamusa.org/~/media/TeamUSA/Galleries/Cammile-Adams-2012/head.jpg?mh=147&mw=124",
      "sport": "Swimming"
    }, {
      "href": "http://www.teamusa.org/usa-canoe-kayak/athletes/Lisa-Adams",
      "athlete": "Lisa Adams",
      "image": "http://www.teamusa.org/~/media/TeamUSA/Images/11Hopefuls/Lisa_Adams.jpg?mh=147&mw=124",
      "sport": "Canoe/Kayak"
    }]
  }

  $scope.athletes = data.athletes;


});
