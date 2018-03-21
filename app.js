var app = angular.module("LunchCheck", []);

app.controller("LunchCheckController", function($scope) {
	$scope.lunchItems = "";
	$scope.result = "";
	$scope.checkIfTooMuch = function() {
		if($scope.lunchItems == "") {
			$scope.result = "Please enter data first";
		}
		else {
			var splitLunchItems = $scope.lunchItems.split(",");
			if(splitLunchItems.length <= 3) {
				$scope.result = "Enjoy!";
			}
			else {
				$scope.result = "Too Much!";
			}
		}
	}
});