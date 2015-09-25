var atanivnApp = angular.module("atanivn", []);
atanivnApp.controller('atanimainCtrl', function ($scope) {
    $scope.banner_url = "https://dl.dropboxusercontent.com/u/2004952/Atani/banner%20Trans.png";
    $scope.logo_url = "https://dl.dropboxusercontent.com/u/2004952/Atani/Logo.png";
    $scope.menus = ["giới thiệu","sản phẩm","thông tin","mua hàng","liên hệ"];
    $scope.images = ["Images1", "Images2","Image3","Image4","Image5"];
    $scope.anhcoc_url = "https://dl.dropboxusercontent.com/u/2004952/Atani/MatchaTea.png"
    $scope.notes=[" Matcha là gì"," Điều gì làm nên khác biệt giữa các loại matcha"," Matcha khác gì với trả xanh?"," Matcha của Atani là loại matcha nào"];
});