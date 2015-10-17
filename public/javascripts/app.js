    var atanivnApp = angular.module("atanivn", ["ngRoute"]);

    // configure our routes
    atanivnApp.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'homeCtrl'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'about.html',
                controller  : 'aboutController'
            })

            // route for the Product page
            .when('/products', {
                templateUrl : 'products.html',
                controller  : 'productsController'
            })

            // route for the How To Buy page
            .when('/howtobuy', {
                templateUrl : 'howtobuy.html',
                controller  : 'howtoBuy'
            })
            // route for the More Info page
            .when('/moreInfo', {
                templateUrl : 'moreinfo.html',
                controller  : 'moreInfo'
            })
            // route for the Contact US page
            .when('/contactUS', {
                templateUrl : 'contactus.html',
                controller  : 'contactUS'
            })
            .otherwise({
               redirectTo:"/"
            });
    });

    //Main Controller
    atanivnApp.controller('atanimainCtrl', function ($scope) {
        $scope.title = "Atani Matcha Nhật Bản Nguyên Chất";
        $scope.siteName = "VIHABA";
        $scope.banner_url = "images/Banner.png";
        $scope.parentLogo = "images/vihaba_logo.png";
        $scope.logo_url = "images/Logo.png";
        $scope.menus = [{'name':'Trang chủ','icon':'glyphicon glyphicon-home','href':"#/",'css':"active",'id':"mainMenu"},
                        {'name':'giới thiệu','icon':'glyphicon glyphicon-thumbs-up','href':"#about",'index':'about','css':'toogleContent'},
                        {'name':'sản phẩm','icon':'glyphicon glyphicon-align-justify','href':"#products",'index':"products",'css':'toogleContent'},
                        {'name':"thông tin",'icon':'glyphicon glyphicon-info-sign','href':"#moreInfo"},
                        {'name':"mua hàng",'icon':'glyphicon glyphicon-question-sign','href':"#howtobuy"},
                        {'name':"liên hệ",'icon':'glyphicon glyphicon-earphone','href':"#contactUS"}
                        ];
        $scope.images = ["Images1", "Images2", "Image3", "Image4", "Image5"];
        $scope.anhcoc_url = "images/MatchaTea.png";
        $scope.notes = ["Matcha là gì", "Điều gì làm nên khác biệt giữa các loại matcha", "Matcha khác gì với trả xanh?", "Matcha của Atani là loại matcha nào",
                        "Vì sao nên sử dụng matcha","Tôi nên chọn loại matcha nào",
                        "Sử dụng matcha như thế nào","Hướng dẫn mua hàng"];

        //Company Info
        $scope.urlHome = "http://www.atani.vn";
        $scope.emailHome = "atani@vihaba.vn";
        $scope.subject = "Xin Chao Matcha Atani";
        $scope.urlFB = "https://www.facebook.com/matchaatani";
        $scope.urlFB_name = "ATANI Trà Xanh Nhật Bản";
    });

    atanivnApp.controller('homeCtrl', function ($scope) {
        $scope.anhBody_url = "images/body.png";
    });

    atanivnApp.controller('productsController', function ($scope) {
        $(".rating-system").rating({min: 0, max: 5,step: 0.5, showClear: false, showCaption: false, readonly: 1, hoverChangeCaption: false});
    });

    atanivnApp.controller('aboutController', function ($scope) {
        });

    atanivnApp.controller('howtoBuy', function ($scope) {
    });

    atanivnApp.controller('contactUS', function ($scope) {
    });

    atanivnApp.controller('moreInfo', function ($scope) {
    });

    $(document).ready(function() {
        //Click on menu (except main menu)
        $('.toogleConent').not(this).children().click(function (e) {
            $(".active").removeClass('active');
            $(this).parent().addClass('active');
        });

    });