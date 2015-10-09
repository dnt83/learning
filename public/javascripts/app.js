    var atanivnApp = angular.module("atanivn", []);
    atanivnApp.controller('atanimainCtrl', function ($scope) {
        $scope.title = "Atani Matcha Nhật Bản Nguyên Chất";
        $scope.siteName = "VIHABA";
        $scope.banner_url = "images/Banner.png";
        $scope.parentLogo = "images/vihaba_logo.png";
        $scope.logo_url = "images/Logo.png";
        $scope.anhBody_url = "images/body.png";
        $scope.menus = [{'name':'Trang chủ','icon':'glyphicon glyphicon-home','href':"/",'css':"active",'id':"mainMenu"},
                        {'name':'giới thiệu','icon':'glyphicon glyphicon-thumbs-up','href':"/",'index':'about','css':'toogleContent'},
                        {'name':'sản phẩm','icon':'glyphicon glyphicon-align-justify','href':"/",'index':"products",'css':'toogleContent'},
                        {'name':"thông tin",'icon':'glyphicon glyphicon-info-sign','href':"/"},
                        {'name':"mua hàng",'icon':'glyphicon glyphicon-question-sign','href':"/"},
                        {'name':"liên hệ",'icon':'glyphicon glyphicon-earphone','href':"/"}
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

    atanivnApp.controller('AppContents', function ($scope) {
        $scope.title = "Atani Matcha Nhật Bản Nguyên Chất";
        $scope.abouts = [{'name':'Trang chủ','icon':'glyphicon glyphicon-home','href':"/",'css':"active",'id':"mainMenu"},
            {'name':'giới thiệu','icon':'glyphicon glyphicon-thumbs-up','href':"/",'index':'aboutmatcha','css':'toogleContent'},
            {'name':'sản phẩm','icon':'glyphicon glyphicon-align-justify','href':"/",'index':"products",'css':'toogleContent'},
            {'name':"thông tin",'icon':'glyphicon glyphicon-info-sign','href':"/"},
            {'name':"mua hàng",'icon':'glyphicon glyphicon-question-sign','href':"/"},
            {'name':"liên hệ",'icon':'glyphicon glyphicon-earphone','href':"/"}
        ];
    });


    $(document).ready(function(){
        $(document).click(function(){
            $("#antanicontent").addClass('hide');
            $("#mainContent").removeClass('hide');

            $(".active").removeClass('active');
            $("#mainMenu").addClass('active');
        });

        //Click on menu (except main menu)
        $('.toogleConent').not($("#mainMenu").children()).click(function(e) {
            //Stop other event
            e.stopPropagation();

            //Get target value
            var target = "#" + $(this).data("target");
            //Set active clicked element
            $(".active").removeClass('active');
            $(this).parent().addClass('active');

            $(target).removeClass('hide');
            $("#mainContent").addClass('hide');

            var strFileName = $(this).data('value') + ".html";

            if (strFileName != ".html")
                $.ajax({
                    url : strFileName,
                    dataType: "text",
                    success : function (data) {
                        $(target).html(data);
                    }
                });
        });


        if ($(document).width() <= 680)
        {
            var newSize = 80 - $(document).width()/450*5;
            $("#hlinef").last().css('padding-top',newSize + "px");
        }
        else
            $("#hlinef").last().css('padding-top',0);

        $(window).resize(function() {
            if ($(document).width() <= 680)
                {
                    var newSize = 80 - $(document).width()/450*5;
                    $("#hlinef").last().css('padding-top',newSize + "px");
                }
            else
                $("#hlinef").last().css('padding-top',0);
            //if ($(document).width() <= 680)
            //    $("#mainContent").last().addClass("contentPaddingTop-small");
            //else
            //    $("#mainContent").last().removeClass("contentPaddingTop-small");
        });
    });