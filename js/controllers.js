var cheeseControllers = angular.module('cheeseControllers',[]);

cheeseControllers.controller('RecommendCtrl',function($scope,$http,$rootScope, $routeParams){
  $rootScope.headerShow = true;
  $rootScope.footerShow = false;
  $rootScope.headerIconLeft = "fa-home"
  $rootScope.headerIconRight = "fa-user"
  $(".recommend_card").draggable();
});


cheeseControllers.controller('RecipeCtrl',function($scope,$http,$rootScope, $routeParams){
  $rootScope.headerShow = true;
  $rootScope.footerShow = true;
  $rootScope.headerIconLeft = "fa-chevron-circle-left"
  $rootScope.headerIconRight = ""
});

cheeseControllers.controller('MypageCtrl',function($scope,$http,$rootScope, $routeParams){
  $rootScope.headerShow = true;
  $rootScope.footerShow = false;
  $rootScope.headerIconLeft = "fa-home"
  $rootScope.headerIconRight = "fa-cog"
  $rootScope.title="マイページ"
});

cheeseControllers.controller('SettingCtrl',function($scope,$http,$rootScope, $routeParams){
  $rootScope.headerShow = true;
  $rootScope.footerShow = false;
  $rootScope.headerIconLeft = "fa-home"
  $rootScope.headerIconRight = "fa-user"
  $rootScope.title="設定"
});