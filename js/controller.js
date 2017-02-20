//angular.module('starter.controllers', []).controller('MenuCtrl', function ($scope) {
//
//}).controller('CVCtrl', function ($scope) {
//
//});
angular.module('starter.controllers', []).controller('NavCtrl', function ($scope, $ionicSideMenuDelegate, $ionicModal) {

    $ionicModal.fromTemplateUrl('templates/modal/01_sample_login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });
     $ionicModal.fromTemplateUrl('templates/modal/04_contact_modal.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal_contact = modal;
    });

    $scope.showLeftMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.showRightMenu = function () {
        $scope.modal.show();
    };
     $scope.showContact = function () {
        $scope.modal_contact.show();
    };

    $scope.close_modal = function () {
        $scope.modal.hide();
        $scope.modal_contact.hide();
    };

    $scope.doLogin = function () {
        
    };

}).controller('HomeCtrl', function ($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('templates/modal/02_image_me.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal_image_me = modal;
    });

    $scope.showImageMe = function () {
        $scope.modal_image_me.show();
    };

    $scope.close_modal = function () {
        $scope.modal_image_me.hide();
    };

    $scope.this_year = (new Date()).getFullYear();

    home_control();
    load_snow();

}).controller('CVCtrl', function ($scope, NgMap, $ionicModal) {
    
    (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

    //send_ingredient($scope , $ionicModal);
    $ionicModal.fromTemplateUrl('templates/modal/03_image_me_cv.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal_image_me = modal;
    });
    $scope.showImageMeCV = function () {
        $scope.modal_image_me.show();
    };

    $scope.close_modal = function () {
        $scope.modal_image_me.hide();
    };

    $scope.tol_age = getAge("11/6/1992");
    NgMap.getMap().then(function (map) {
        this.map = map;
    });
    graph_cv_load();

}).controller('SettingCtrl', function ($scope, $window) {

}).controller('ContactCtrl', function ($scope, $window) {

});