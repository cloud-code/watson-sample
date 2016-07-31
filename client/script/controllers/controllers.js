(function (angular){
'use strict';
	
var appControllers = angular.module("appControllers", []);

appControllers.controller("SimpleCtrl", ["$scope", "$state",
	function ($scope, $state) {
		$scope.ui = {};
		$scope.ui.textToSay = "Hello World";

		$scope.loadText = function () {
			initAudioUrl();
		}

		function initAudioUrl() {
			$scope.ui.soundUrl = "/api/watsonapis/textToSpeach?voice=en-US_AllisonVoice&text="+$scope.ui.textToSay;
		}
		
		function init() {
			initAudioUrl();
		}
		init();
	}]);
})(angular);
