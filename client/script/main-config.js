(function (angular) {

angular
	.module("myApp", ["ui.bootstrap", "ui.router", "appFilters", "appControllers", "appModels", "appDirectives"])
	.config(["$stateProvider", "$urlRouterProvider", "$httpProvider",
		function ($stateProvider, $urlRouterProvider, $httpProvider) {
			$stateProvider
				.state("simple", {
					url: "/simple",
					templateUrl: "views/simple.html",
					controller: "SimpleCtrl",
					data: { label: "Simple" }
				})
				
				$urlRouterProvider.otherwise("/simple");
				// $httpProvider.interceptors.push("authInterceptorFactory");
	}])

/*	.run(["$rootScope", "$state", "$location", "cacheFactory", "navigationFactory", function ($rootScope, $state, $location, cacheFactory, navigationFactory) {
		$rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams, options) {
			if (toState.name !== "login" && !sessionStorage.getItem("authData")) {
				$location.path("/login");
			}
		});
		$rootScope.$state = $state;
	}])*/

	.constant("SomeConsts", {
		"Option1": ["a", "b", "c"],
		"Option2": ["1", "2", "3"]
	})
	.constant("OtherConsts", ["A", "B", "C"
	])
	;
})(angular);