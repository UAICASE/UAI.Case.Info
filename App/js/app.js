
angular.module('uai-landing', [ 'uai-landing.filters' ])

.controller('MainCtrl', function($scope, $interval, $http, $sce) {
	$scope.student = false;

	$scope.toggleCheck = function () {
		$scope.student = !$scope.student;
	}
  
  $scope.setLang = function(lang) {
    window.location.href = "/lang/"+lang;
  };

  $scope.isLang = function(lang) {
    return lang === CURRENT_LANG;
  };

});
