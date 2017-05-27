define([
    'app',
], function (app) {
    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .when('', '/');
        $urlRouterProvider.otherwise('/');
        $stateProvider
        //首页
            .state('main', {
                url: "/",
                cache: false,
                views: {
                    'main': {
                        templateUrl: "coupon-dashboard/statement.tpl.html"
                    }
                }
            })
            //声明界面
            .state('dashboard', {
                url: "/dashboard",
                cache: false,
                views: {
                    'main': {
                        templateUrl: "coupon-dashboard/dashboard.tpl.html"
                    }
                }
            })
    });
});
