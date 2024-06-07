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

}).controller('HomeCtrl', function ($scope, $ionicSideMenuDelegate, $ionicModal) {
    $ionicSideMenuDelegate.canDragContent(false);
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

    load_snow();
    setTimeout(() => {
        home_control();
    },3000)

}).controller('CVCtrl', function ($scope, $ionicSideMenuDelegate, NgMap, $ionicModal) {
    
//     (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v2.8";
//   fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));

    //send_ingredient($scope , $ionicModal);
    // $ionicModal.fromTemplateUrl('templates/modal/03_image_me_cv.html', {
    //     scope: $scope
    // }).then(function (modal) {
    //     $scope.modal_image_me = modal;
    // });
    // $scope.showImageMeCV = function () {
    //     $scope.modal_image_me.show();
    // };

    $scope.close_modal = function () {
        $scope.modal_image_me.hide();
    };

    $scope.isToggle = false
    $scope.isToggle = decisionToggleMode()

    let my_y_animate = (((new Date()).getFullYear()) - 1992) - 1

    $('#age_pure').html("0 Year 0 Month And 0 Days")

    let maxTimeanimate = 6900
    let goodDevide = maxTimeanimate / my_y_animate

    for(let i = 1; i <= maxTimeanimate; i++){
        setTimeout(function() {
            if(i < maxTimeanimate - 10){
                $('#age_pure').html(`${Math.floor(i / goodDevide)} Years ${randomIntFromInterval(1, 9)} Months And ${randomIntFromInterval(10, 28)} Days`)
            } else {
                $('#age_pure').html(getAge("11/6/1992"))
            }
        }, i)
    }

    //$scope.tol_age = getAge("11/6/1992");

    graph_cv_load();
    $ionicSideMenuDelegate.canDragContent(false);

    $scope.scopeOnMoonClick = function () {
        $scope.isToggle = true;

        onMoonClick()
    }

    // NgMap.getMap().then(function (map) {
    //     this.map = map;
    // });

}).controller('SettingCtrl', function ($scope, $window) {

}).controller('ContactCtrl', function ($scope, $window) {

}).controller('TollyTradeCtrl', function ($scope, $ionicSideMenuDelegate) {

    // Hide menu
    $('.buttons-left').hide()
    $('.buttons-right').hide()
    $ionicSideMenuDelegate.canDragContent(false);
    // checkAvailableBalance(setMarginType) This line make api hard call 

    checkExchangeInfoAndPercentMarket()

    $scope.cab = checkAvailableBalance
});
