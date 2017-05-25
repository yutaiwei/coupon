'use strict';

define([
    'angular',
    'mc-util',
    'angular-local-storage',
    'ng-cordova',
    'ngIOS9UIWebViewPatch',
    'mobiscroll'
],function($){

    var app = angular.module('mc.coupon',[
        'ionic',
        'cl.utils',
        'LocalStorageModule',
        'ngCordova',
        'ngIOS9UIWebViewPatch',
        'mobiscroll-datetime',
        'mobiscroll-form',
        'mobiscroll-widget',
        'mobiscroll-select'
    ]);
    return app;

});
