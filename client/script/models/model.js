(function (angular){
'use strict';
var appModels = angular.module("appModels", []);

/*
 * Project Factory
 */
appModels.factory("myDataFactory", ["$http", function ($http) {
	var theFactory = {};
	
	theFactory.getData = function (id) {
		var promise = $http.get("api/data?id="+id);
		return promise;
	};

	return theFactory;
}]);

})(angular);