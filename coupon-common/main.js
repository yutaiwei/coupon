require.config({
    baseUrl: '',
    urlArgs: 'v=0.0.2',
    paths: {
        'jquery': 'assets/js/jquery/jquery-2.1.4',
        'angular': 'assets/js/ionic/ionic.bundle-1.3.1',    //用angular命名替代ionic，确保APP和PC使用统一API
        'ng-cordova': 'assets/js/ng-cordova/ng-cordova',
        'angular-local-storage': 'assets/js/angular-local-storage/angular-local-storage',
        'angular-cookies': 'assets/js/angular-cookies/angular-cookies.min',
        'angular-mocks': 'assets/js/angular-mocks/angular-mocks',
        'ngIOS9UIWebViewPatch': 'assets/js/ngIOS9UIWebViewPatch',
        'mobiscroll': 'assets/js/mobiscroll',
        'segment': 'assets/js/segment',
        'app': 'coupon-common/app',
        'routeDefs': 'coupon-common/routeDefs',
        'mainCtrl': 'coupon-common/main.ctrl',
        'mc-util': 'coupon-common/cl.util',
        'constants': 'coupon-common/constants',
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'angular': {
            deps: ['jquery']
        },
        'angular-mocks': {
            deps: ['angular']
        },
        'angular-local-storage': {
            deps: ['angular']
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'ng-cordova': {
            deps: ['angular']
        },
        'ngIOS9UIWebViewPatch': {
            deps: ['angular']
        },
        'mobiscroll': {
            deps: ['angular']
        },
        'segment': {
            deps: ['angular']
        },
        'mc-util': {
            deps: ['angular']
        }

    },
    priority: [
        'jquery',
        'angular'
    ],
    waitSeconds: 2000
});

require([
        'jquery',
        'angular',
        'mainCtrl',
        'app',
        'routeDefs',
    ],
    function ($) {
        angular.element().ready(function () {
            angular.bootstrap($('#ng-app'), ['mc.coupon']);
        });
    }
);
