var cheeseApp = angular.module('cheeseApp',[
	'ngRoute',
  'ngTouch',
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
      when('/recipe', {
        templateUrl: 'partials/recipe.html',
        controller: 'RecipeCtrl'
      }).
      when('/mypage', {
        templateUrl: 'partials/mypage.html',
        controller: 'MypageCtrl'
      }).
      when('/setting', {
        templateUrl: 'partials/setting.html',
        controller: 'SettingCtrl'
      }).
      when('/post', {
        templateUrl: 'partials/post.html',
        controller: 'PostCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
