var cheeseControllers = angular.module('cheeseControllers',[]);

cheeseControllers.controller('RecommendCtrl',function($scope,$http,$rootScope, $routeParams){
  $rootScope.headerShow = true;
  $rootScope.footerShow = false;
  $rootScope.headerIconLeft = "fa-home"
  $rootScope.headerIconRight = "fa-user"
  $rootScope.headerIconLeftClass = ""
  $rootScope.headerIconRightClass = ""  
  // $(".recommend_card").draggable();


  $rootScope.carouselPrev = function(id){
    alert(id);
  }

});


cheeseControllers.controller('RecipeCtrl',function($scope,$http,$rootScope, $routeParams){
  $rootScope.headerShow = true;
  $rootScope.footerShow = false;
  $rootScope.headerIconLeft = "fa-chevron-circle-left"
  $rootScope.headerIconRight = ""
  $rootScope.headerIconLeftClass = ""
  $rootScope.headerIconRightClass = ""
});

cheeseControllers.controller('MypageCtrl',function($scope,$http,$rootScope, $routeParams){
  $rootScope.headerShow = true;
  $rootScope.footerShow = false;
  $rootScope.headerIconLeft = "fa-home"
  $rootScope.headerIconRight = "fa-cog"
  $rootScope.headerIconLeftClass = ""
  $rootScope.headerIconRightClass = ""
  $rootScope.title="マイページ"
});

cheeseControllers.controller('SettingCtrl',function($scope,$http,$rootScope, $routeParams){
  $rootScope.headerShow = true;
  $rootScope.footerShow = false;
  $rootScope.headerIconLeft = "fa-home"
  $rootScope.headerIconRight = "fa-user"
  $rootScope.headerIconLeftClass = ""
  $rootScope.headerIconRightClass = ""
  $rootScope.title="設定"
});


cheeseControllers.controller('PostCtrl',function($scope,$http,$rootScope, $routeParams){
  $rootScope.headerShow = true;
  $rootScope.footerShow = false;
  $rootScope.headerIconLeft = "fa-home"
  $rootScope.headerIconRight = "fa-pencil-square"
  $rootScope.headerIconLeftClass = ""
  $rootScope.headerIconRightClass = "header_button_post"
  $rootScope.title="投稿"
});