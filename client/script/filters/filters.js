(function () {
'use strict';

var appFilters = angular.module("appFilters", []);

appFilters.filter("linefeedFilter", function () {
	return function (text) {
		if (text) {
			text = text.split("\n").join("<br/>");
		}
		return text;
	}
});

}());

