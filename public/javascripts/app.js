    var atanivnApp = angular.module("atanivn", []);
    atanivnApp.controller('atanimainCtrl', function ($scope) {
        $scope.title = "Atani Matcha";
        $scope.siteName = "VIHABA";
        $scope.banner_url = "images/banner%20Trans.png";
        $scope.parentLogo = "images/vihaba_logo.png";
        $scope.logo_url = "images/Logo.png";
        $scope.menus = [{'name':'Trang chu','icon':'glyphicon glyphicon-home','href':"/",'css':"active"},
                        {'name':'giới thiệu','icon':'glyphicon glyphicon-thumbs-up','href':"/"},
                        {'name':'sản phẩm','icon':'glyphicon glyphicon-align-justify','href':"/"},
                        {'name':"thông tin",'icon':'glyphicon glyphicon-info-sign','href':"/"},
                        {'name':"mua hàng",'icon':'glyphicon glyphicon-question-sign','href':"/"},
                        {'name':"liên hệ",'icon':'glyphicon glyphicon-earphone','href':"/"}
                        ];
        $scope.images = ["Images1", "Images2", "Image3", "Image4", "Image5"];
        $scope.anhcoc_url = "images/MatchaTea.png";
        $scope.notes = [" Matcha là gì", " Điều gì làm nên khác biệt giữa các loại matcha", " Matcha khác gì với trả xanh?", " Matcha của Atani là loại matcha nào"];
    });