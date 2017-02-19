angular.module('starter.routes', []).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('settings', {
        url: '/settings',
        templateUrl: 'templates/03_setting.html',
        controller: 'SettingCtrl'
    }).state('home', {
        url: "/home",
        templateUrl: "templates/01_home.html",
        controller: 'HomeCtrl'
    }).state('cv', {
        url: "/cv",
        templateUrl: "templates/02_cv.html",
        controller: 'CVCtrl'
    }).state('contact', {
        url: "/contact",
        templateUrl: "templates/04_contact.html"
    }).state('java_project', {
        url: "/java_project",
        templateUrl: "templates/05_java_project.html"
    }).state('php_project', {
        url: "/php_project",
        templateUrl: "templates/06_php_project.html"
    }).state('nodejs_project', {
        url: "/nodejs_project",
        templateUrl: "templates/07_nodejs_project.html"
    }).state('google_map_project', {
        url: "/google_map_project",
        templateUrl: "templates/08_google_map_project.html"
    }).state('c_sharp_project', {
        url: "/c_sharp_project",
        templateUrl: "templates/09_c_sharp_project.html"
    });
    $urlRouterProvider.otherwise('/home');
});