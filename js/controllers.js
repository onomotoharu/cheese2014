var cheeseControllers = angular.module('cheeseControllers',[]);

cheeseControllers.controller('RecommendCtrl',function($scope,$http,$rootScope, $routeParams){
  $rootScope.headerShow = true;
  $rootScope.footerShow = false;

$(window).on('touchmove.noScroll', function(e) {
    e.preventDefault();
});

// function(){
	$(".recommend_card").draggable();
// };

});
