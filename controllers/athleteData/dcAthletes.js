// creating a module called myModule
angular.module("AthletePopulator", [])
  .controller("athleteController", function($scope) {
    //bellow I'm adding a property of message to the scope object (in the view)
    //$scope.message = "Angular js tutorial";

    // var data = {
    //   athletes: [{
    //     "href": "http://www.teamusa.org/usa-bobsled-skeleton-federation/athletes/Hakeem-Abdul-Saboor",
    //     "athlete": "Hakeem Abdul-Saboor",
    //     "image": "http://www.teamusa.org/~/media/USA_Bobsled_Skeleton/2015-2016-Head-Shots/abdulsaboor.jpg?mh=147&mw=124",
    //     "sport": "Bobsled & Skeleton"
    //   }, {
    //     "href": "http://www.teamusa.org/usa-synchronized-swimming/athletes/Brooke-Abel",
    //     "athlete": "Brooke Abel",
    //     "image": "http://www.teamusa.org/~/media/TeamUSA/Images/11Hopefuls/Brooke_Abel.jpg?mh=147&mw=124",
    //     "sport": "Synchro"
    //   }, {
    //     "href": "http://www.teamusa.org/usa-archery/athletes/Garrett-Abernethy",
    //     "athlete": "Garrett Abernethy",
    //     "image": "http://www.teamusa.org/~/media/TeamUSA/Images/11Hopefuls/Garrett_Abernethy.jpg?mh=147&mw=124",
    //     "sport": "Archery"
    //   }, {
    //     "href": "http://www.teamusa.org/usa-team-handball/athletes/Farida-AbouZeida",
    //     "athlete": "Farida Abou-Zeida",
    //     "image": "http://www.teamusa.org/~/media/USA_Team_Handball/Images/Headshots_WNT/WNT_AbouZeida150x250.jpg?mh=147&mw=124",
    //     "sport": "Team Handball"
    //   }, {
    //     "href": "http://www.teamusa.org/para-track-and-field/athletes/Megan-Absten",
    //     "athlete": "Megan Absten",
    //     "image": "http://www.teamusa.org/~/media/USA_Paralympics/Images/Toronto-2015/Track-and-Field-Headshots/absten_megan_120x187.jpg?mh=147&mw=124",
    //     "sport": "Track and Field"
    //   }, {
    //     "href": "http://www.teamusa.org/usa-modern-pentathlon/athletes/Samantha-Achterberg",
    //     "athlete": "Samantha Achterberg",
    //     "image": "http://www.teamusa.org/~/media/USA_Modern_Pentathlon/athletes/2013-Athlete-Images/Achterberg-Samantha/Achterberg_Samantha20130626_0070_120x187.jpg?mh=147&mw=124",
    //     "sport": "Pentathlon"
    //   }, {
    //     "href": "http://www.teamusa.org/us-speedskating/athletes/Petra-Acker",
    //     "athlete": "Petra Acker",
    //     "image": "http://www.teamusa.org/~/media/Images/Defaults/AthleteProfileDefaultImage.jpg?mh=147&mw=124",
    //     "sport": "Speedskating"
    //   }, {
    //     "href": "http://www.teamusa.org/usa-track-and-field/athletes/Amy-Acuff",
    //     "athlete": "Amy Acuff",
    //     "image": "http://www.teamusa.org/~/media/TeamUSA/Galleries/Amy-Acuff-2012/Acuff_Amy_Headshot.jpg?mh=147&mw=124",
    //     "sport": "Track and Field"
    //   }, {
    //     "href": "http://www.teamusa.org/usa-swimming/athletes/Cammile-Adams",
    //     "athlete": "Cammile Adams",
    //     "image": "http://www.teamusa.org/~/media/TeamUSA/Galleries/Cammile-Adams-2012/head.jpg?mh=147&mw=124",
    //     "sport": "Swimming"
    //   }, {
    //     "href": "http://www.teamusa.org/usa-canoe-kayak/athletes/Lisa-Adams",
    //     "athlete": "Lisa Adams",
    //     "image": "http://www.teamusa.org/~/media/TeamUSA/Images/11Hopefuls/Lisa_Adams.jpg?mh=147&mw=124",
    //     "sport": "Canoe/Kayak"
    //   }]
    // }
    //
    // $scope.athletes = data.athletes;
    $scope.products = [{
      name: 'Super cool cam',
      type: 'x-sup-c'
    }, {
      name: 'Ultra cool cam',
      type: 'x-ult-c'
    }];


  })
  .directive('athletes', function() {
    return {
      restrict: 'E',
      scope: {
        product: '=productData'
      },
      template: '<p>Product: {{product.name}}<br />Type: {{product.type}}</p>'
    }
  });
