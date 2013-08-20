angular.module('app', [], function($locationProvider, $interpolateProvider) {
    $locationProvider.hashPrefix('');
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});

