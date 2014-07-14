var cheeseApp = angular.module('cheeseApp',[
	'ngRoute',
	'cheeseControllers'
	]);

cheeseApp.config(['$routeProvider',
  function($routeProvider) {
    console.debug($routeProvider);
    $routeProvider.
      when('/', {
        templateUrl: 'partials/recommend.html',
        controller: 'RecommendCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
