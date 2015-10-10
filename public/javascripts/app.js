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

            // route for the contact page
            .when('/products', {
                templateUrl : 'products.html',
                controller  : 'productsController'
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

    atanivnApp.controller('homeCtrl', function ($scope) {
        $scope.anhBody_url = "images/body.png";
    });

    atanivnApp.controller('productsController', function ($scope) {
        $(".rating-system").rating({min: 0, max: 5,step: 0.5, showClear: false, showCaption: false, readonly: 1, hoverChangeCaption: false});
    });

    atanivnApp.controller('aboutController', function ($scope) {
        $scope.contents  = [{'href':'#about#matchalagi','id':'matchalagi','name':"Matcha là gì", 'content':"Matcha (抹茶, phiên âm tiếng Hán: mạt trà) là sản phẩm đặc trưng của văn hóa trà đạo Nhật Bản từ thế kỉ 12. Trà đạo Nhật Bản truyền thống vốn xoay quanh các hoạt động pha trà và thưởng thức matcha, lồng ghép vào đó các giá trị tinh thần và văn hóa. Sau hàng trăm năm thực hành văn hóa trà đạo, matcha hiện nay đã vươn ra khỏi nước Nhật, không chỉ là một loại đồ uống cổ truyền, mà còn là thức nguyên liệu đặc biệt trong ẩm thực lẫn trong thẩm mĩ, với màu sắc và hương vị đặc biệt, cùng những giá trị vàng cho sức khỏe."},
                            {'href':'#about#congdungthanhkycuamatcha','id':'congdungthanhkycuamatcha','name':"Công dụng thần kỳ của Matcha", 'content':"Sự thịnh hành gần đây của matcha xuất phát từ các nghiên cứu khoa học chỉ ra những ích lợi cho sức khỏe loại trà này mang lại. Trà xanh thông thường vốn được đánh giá là một thực phẩm chống oxi hóa tự nhiên, đặc biệt chứa EGCg – một chất chống oxi hóa cực mạnh, giúp tái tạo tế bào, và có khả năng phòng chống ung thư. Tuy nhiên pha trà trong nước nóng và bỏ bã như cách uống trà thông thường chỉ giúp chiết xuất được một phần các chất dinh dưỡng trong lá trà. Khi uống matcha, uống cả nước và bột lá trà giúp toàn bộ các chất dinh dưỡng và chất chống oxi hóa trong trà được hấp thụ vào cơ thể. Đó là lý do vì sao một ly matcha có thể tương đương với 10 ly trà xanh thường về giá trị dinh dưỡng và chứa nhiều gấp 137 lần chất chống oxi hóa."},
                            {'href':'#about#sanxuatmatcha','id':'sanxuatmatcha','name':'Sản xuất Matcha', 'content':"Mặc dù cùng có nguồn gốc từ cây trà xanh, song khác với trà pha trong nước nóng thông thường (phiên âm là Lục trà), còn nguyên cả lá, matcha (phiên âm là Mạt trà) được chế biến công phu hơn: các búp trà sau khi thu hoạch được hấp, phơi sấy khô, bỏ gân và cuống lá, và nghiền bằng cối đá cho đến khi thật mịn. Bột trà sau đó được pha và đánh đều cho sủi bọt trong nước nóng bằng chổi pha trà chuyên dụng. Chính quy trình chế biến đầy công phu khiến cho matcha có giá thành cao hơn bất kỳ loại trà nào khác. Trà xanh được trồng ở rất nhiều nơi, và thực tế, việc nghiền lá trà thành bột để đánh trong nước nóng đã được thực hành ở Trung Quốc từ khoảng thế kỉ 10. Nhưng loại matcha ngon nhất phải là matcha Nhật Bản, được sản xuất từ lá trà xanh trồng tại các vùng miền Nam đất nước như: Uji, Nishio, Shizuoka và Kyushu. Khoảng 20 ngày trước ngày thu hoạch, các cây trà xanh được che lại để các lá trà phát triển chậm trong bóng râm, không được tiếp xúc trực tiếp với ánh nắng. Thiếu ánh nắng thúc đẩy làm tăng nồng độ chất diệp lục trong lá trà (clorophyll – chất làm lá trà trở nên xanh thẫm hơn) và tăng cường sản xuất các amino acid trong lá trà, đặc biệt là L-Theanine, một amino axit tự nhiên chỉ có trong trà xanh và một số loại nấm. Chính các amino axit này tạo nên hương vị đặc trưng của matcha, và là bí quyết cho phép matcha vừa làm tĩnh tâm, đồng thời tăng khả năng tập trung cho người thưởng thức, như người Nhật Bản vẫn sử dụng trong nghệ thuật trà đạo.á trà sau khi thu hoạch ngay lập tức được hấp để tránh lên men, đồng thời giữ được màu xanh của lá. Trà sau đó được sấy khô, thu được tencha. Tencha đem chế biến bỏ gân lá, cuống lá và nghiền thật kỹ bằng cối đá sẽ trở thành bột mịn, chính là matcha – Mạt Trà."}
        ];
                    //"Sản xuất MATCHA",
                    //"Sử dụng MATCHA"];


    });


    $(document).ready(function() {
        //Click on menu (except main menu)
        $('.toogleConent').not(this).children().click(function (e) {
            $(".active").removeClass('active');
            $(this).parent().addClass('active');
        });

    });