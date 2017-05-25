define([
    'app',
], function (app) {
    app.config([ '$stateProvider','$urlRouterProvider','$$utilsProvider',function($stateProvider, $urlRouterProvider,$$utilsProvider) {

        $$utilsProvider.useIonicLoading(true);
        $$utilsProvider.setIgnoreLoadingList('qryCoupon');

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
    }]);
});
