define([
    'app',
    'segment',
], function (app) {
    app.controller('MainCtrl', ['$scope', '$http', '$ionicPlatform', '$$utils', '$ionicHistory', '$ionicLoading',
        function ($scope, $http, $ionicPlatform, $$utils, $ionicHistory, $ionicLoading) {
            $scope.show = function () {
                $ionicLoading.show({
                    template: 'Loading...'
                });
            };
            $scope.hide = function () {
                $ionicLoading.hide();
            };
            $scope.show();
            //URL参数
            var feedBack = {
                ecNo: '',//用户id
                Mobile: '18515222163',//手机号码
                reqType: '',//请求类型
                Channel: 'App',//渠道
            };
            //获取URL
            String.prototype.queryURLParameter = function () {
                var obj = {},
                    reg = /([^?=&#]+)=([^?=&#]+)/g;
                this.replace(reg, function () {
                    var key = arguments[1],
                        value = arguments[2];
                    obj[key] = value;
                });
                return obj;
            };
            // feedBack = window.location.href.queryURLParameter();
            $scope.channel = feedBack.Channel;

            //判断终端
            var ua = navigator.userAgent.toLowerCase();
            var isWeixin = ua.indexOf('micromessenger') != -1;
            //判断Ios
            var u = navigator.userAgent;
            var isIos = u.indexOf('iPhone') != -1;
            //判断android
            var isAndroid = u.indexOf('Android') != -1;

            //返回app
            $scope.goAppBack = function () {
                if (isAndroid) {
                    window.myticket.clickOnAndroid()
                } else if (isIos) {
                    window.location.href = 'iOS://popOnIOS';
                }
            };
            //    app的参数
            var security = $$utils.getParams().security;

            //获取未使用数据
            var unused = {
                "head": {
                    "action": "CouponAction",
                    "method": "qryCoupon",
                    "state": "new"
                },
                "info": {
                    "mobile": feedBack.Mobile,
                    "status": "0",
                    "currentPage": "1",//当前页数
                    "pageNum": "10",//页显行数
                },
                "security": security
            };
            $$utils.http(unused).then(function (data) {
                $scope.hide();
                if (data.length != 0) {
                    $scope.text = 'text0';
                }
                $scope.unusedLength = data.length;
                $scope.unuseds = data;
            }, function (err) {
                $scope.hide();
                _submitSelectSettings.show();
                $scope.submitStatus = "fail";
                $scope.errMsg = err;
            });

            //获取已使用数据
            var used = {
                "head": {
                    "action": "CouponAction",
                    "method": "qryCoupon",
                    "state": "new"
                },
                "info": {
                    "mobile": feedBack.Mobile,
                    "status": "1",
                    "currentPage": "1",//当前页数
                    "pageNum": "7",//页显行数
                },
                "security": security
            };
            $$utils.http(used).then(function (data) {
                if (data.length != 0) {
                    $scope.text1 = 'text1';
                }
                $scope.usedLength = data.length;
                $scope.useds = data;

            }, function (err) {
                // _submitSelectSettings.show();
                // $scope.submitStatus = "fail";
                $scope.errMsg = err;
            });

            //获取已过期数据
            var expired = {
                "head": {
                    "action": "CouponAction",
                    "method": "qryCoupon",
                    "state": "new"
                },
                "info": {
                    "mobile": feedBack.Mobile,
                    "status": "2",
                    "currentPage": "1",//当前页数
                    "pageNum": "7",//页显行数
                },
                "security": security
            };
            $$utils.http(expired).then(function (data) {
                if (data.length != 0) {
                    $scope.text2 = 'text2';
                }
                $scope.expiredLength = data.length;
                $scope.expireds = data;

            }, function (err) {
                //_submitSelectSettings.show();
                // $scope.submitStatus = "fail";
                $scope.errMsg = err;
            });

            var init = function () {
                //立即使用
                $scope.submit = function (item) {
                    if (item.productCode == 'JD') {
                        _submitSelectSettings.show();
                        $scope.submitStatus = "fail";
                        $scope.errMsg = '请您到京东商城使用该优惠券';
                        return false
                    }
                    if (isIos) {
                        var linked = {
                            "head": {
                                "action": "CouponAction",
                                "method": "retUrl",
                                "state": "new"
                            },
                            "info": {
                                "mobile": feedBack.Mobile,
                                "type": "2",
                                "couponCode": item.couponCode,
                            },
                            "security": security
                        };
                        $$utils.http(linked).then(function (data) {
                            if (item.productCode == 'IG') {
                                window.location.href = data.igurl;
                            } else if (item.productCode == 'YZT') {
                                if (item.bonusSubType == '32' || item.bonusSubType == '33') {
                                    window.location.href = data.jxqbcurl;
                                } else {
                                    window.location.href = data.jxqotherurl;
                                }
                            }
                        }, function (err) {
                            _submitSelectSettings.show();
                            $scope.submitStatus = "fail";
                            $scope.errMsg = err;
                        });

                    } else if (isAndroid) {
                        if (item.productCode == 'YZT') {
                            if (item.bonusSubType == '32' || item.bonusSubType == '33') {
                                window.myticket.eztOnAndroid(item.couponCode)
                            } else {
                                window.myticket.mallOnAndroid()
                            }
                        } else if (item.productCode == 'IG') {
                            window.myticket.huilifeOnAndroid()
                        }
                    } else if (isWeixin) {
                        if (item.productCode == 'YZT') {
                            if (item.bonusSubType == '32' || item.bonusSubType == '33') {
                                window.location.href = "iOS://YZTOnIOS?couponCode=" + item.couponCode;
                            } else {
                                window.location.href = "iOS://MallOnIOS";
                            }
                        } else if (item.productCode == 'IG') {
                            window.location.href = "iOS://YHuiLifeOnIOS";
                        }
                    }
                };
                //弹框
                var mobiScrollSettings = {
                    theme: 'mobiscroll',
                    lang: 'zh',
                    display: 'bottom',
                    mode: 'mixed'
                };
                $scope.submitSelectSettings = angular.copy(mobiScrollSettings);
                $scope.submitSelectSettings.buttons = [];
                $scope.submitSelectSettings.onInit = function (inst) {
                    _submitSelectSettings = inst;
                };
            };
            init();
        }]);

});
