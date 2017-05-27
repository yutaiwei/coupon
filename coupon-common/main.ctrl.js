define([
    'app',
    'segment',
], function (app) {
    app.controller('MainCtrl', ['$scope', '$http', '$ionicPlatform', '$$utils', '$timeout',
        function ($scope, $http, $ionicPlatform, $$utils, $timeout) {
            //URL参数
            var feedBack = {
                ecNo: '',//用户id
                Mobile: '15135594727',//手机号码
                Channel: 'weixin',//渠道
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
             //feedBack = window.location.href.queryURLParameter();
            $scope.channel = feedBack.Channel;
            //弹框
            var mobiScrollSettings = $$utils.getMobiScroll();
            $scope.submitSelectSettings = angular.copy(mobiScrollSettings);
            $scope.submitSelectSettings.buttons = [];
            $scope.submitSelectSettings.onInit = function (inst) {
                _submitSelectSettings = inst;
            };
            //判断终端 微信
            var ua = navigator.userAgent.toLowerCase();
            isWeixin = ua.indexOf('micromessenger') != -1;
            //ios
            var u = navigator.userAgent;
            isIos = u.indexOf('iPhone') != -1;
            //android
            isAndroid = u.indexOf('Android') != -1;

            //返回app
            $scope.goAppBack = function () {
                if (isAndroid) {
                    window.myticket.clickOnAndroid()
                } else if (isIos) {
                    window.location.href = 'iOS://popOnIOS';
                }
            };
            //详细信息
            $scope.mask=function ($event,item) {
                $event.stopPropagation();
                item.mask=!item.mask;

            };
            //立即使用
            $scope.submit = function (item) {
                if (item.productCode == 'JD') {
                    _submitSelectSettings.show();
                    $scope.submitStatus = "fail";
                    $scope.errMsg = '请您到京东商城使用该优惠券';
                    return false
                }
                if (isWeixin) {
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
                } else if (isIos) {
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
            //app的参数
            var security = $$utils.getParams();
            //数据请求
            var vm = $scope.vm = {
                pagination: {
                    unused: 0,
                    used: 1,
                    expired: 1,
                },
                is: {
                    unused: false,
                    used: false,
                    expired: false,
                },
                data: {
                    unuseds: [],
                    useds: [],
                    expireds: [],
                },
                length: {
                    unusedLength: null,
                    usedLength: null,
                    expiredLength: null,
                },
                init: function () {
                    /*   var unused = {
                        "head": {
                            "action": "CouponAction",
                            "method": "qryCoupon",
                            "state": "new"
                        },
                        "info": {
                            "mobile": feedBack.Mobile,
                            "status": "0",
                            "currentPage": vm.pagination.unused + '',
                            "pageNum": "6",
                        },
                        "security": security
                    };
                      $$utils.http(unused).then(function (data) {
                     vm.data.unuseds = data;
                     vm.length.unusedLength = vm.data.unuseds.length;
                     if(data.length==0){

                     }
                     }, function (err) {
                     vm.is.unused = true;
                     _submitSelectSettings.show();
                     $scope.submitStatus = "fail";
                     $scope.errMsg = err;
                     });*/
                    var used = {
                        "head": {
                            "action": "CouponAction",
                            "method": "qryCoupon",
                            "state": "new"
                        },
                        "info": {
                            "mobile": feedBack.Mobile,
                            "status": "1",
                            "currentPage": vm.pagination.used + '',
                            "pageNum": "6",
                        },
                        "security": security
                    };
                    $$utils.http(used).then(function (data) {
                        if(data.length==0){
                            $scope.text1='text1';
                            vm.is.used = true;
                        }
                        vm.data.useds = data;
                        vm.length.usedLength = vm.data.useds.length;

                    });
                    var expired = {
                        "head": {
                            "action": "CouponAction",
                            "method": "qryCoupon",
                            "state": "new"
                        },
                        "info": {
                            "mobile": feedBack.Mobile,
                            "status": "2",
                            "currentPage": vm.pagination.expired + '',
                            "pageNum": "6",
                        },
                        "security": security
                    };
                    $$utils.http(expired).then(function (data) {
                        if(data.length==0){
                            $scope.text2='text2';
                            vm.is.expired = true;
                        }
                        vm.data.expireds = data;
                        vm.length.expiredLength = vm.data.expireds.length;
                    });
                },
                unuseds: function () {
                    vm.pagination.unused += 1;
                    var unused = {
                        "head": {
                            "action": "CouponAction",
                            "method": "qryCoupon",
                            "state": "new"
                        },
                        "info": {
                            "mobile": feedBack.Mobile,
                            "status": "0",
                            "currentPage": vm.pagination.unused + '',
                            "pageNum": "6",
                        },
                        "security": security
                    };
                    $$utils.http(unused).then(function (data) {
                        if (data.length == 0) {
                            $scope.text0='text0';
                            vm.is.unused = true;
                            return
                        }
                       vm.data.unuseds = vm.data.unuseds.concat(data);
                        vm.length.unusedLength = vm.data.unuseds.length;
                        $timeout(function () {
                            $scope.$broadcast('scroll.infiniteScrollComplete');
                        });

                    }, function (err) {
                        vm.is.unused = true;
                        _submitSelectSettings.show();
                        $scope.submitStatus = "fail";
                        $scope.errMsg = err;
                    });
                },
                useds: function () {
                    vm.pagination.used += 1;
                    var used = {
                        "head": {
                            "action": "CouponAction",
                            "method": "qryCoupon",
                            "state": "new"
                        },
                        "info": {
                            "mobile": feedBack.Mobile,
                            "status": "1",
                            "currentPage": vm.pagination.used + '',
                            "pageNum": "6",
                        },
                        "security": security
                    };
                    $$utils.http(used).then(function (data) {
                        if (data.length == 0) {
                            $scope.text1='text1';
                            vm.is.used = true;
                            return
                        }
                        vm.data.useds = vm.data.useds.concat(data);
                       vm.length.usedLength = vm.data.useds.length;
                        $timeout(function () {
                            $scope.$broadcast('scroll.infiniteScrollComplete');
                        })
                    }, function (err) {
                        vm.is.used = true;
                        _submitSelectSettings.show();
                        $scope.submitStatus = "fail";
                        $scope.errMsg = err;
                    });
                },
                expireds: function () {
                    vm.pagination.expired += 1;
                    var expired = {
                        "head": {
                            "action": "CouponAction",
                            "method": "qryCoupon",
                            "state": "new"
                        },
                        "info": {
                            "mobile": feedBack.Mobile,
                            "status": "2",
                            "currentPage": vm.pagination.expired + '',
                            "pageNum": "6",
                        },
                        "security": security
                    };
                    $$utils.http(expired).then(function (data) {
                        if (data.length == 0) {
                            $scope.text2='text2';
                            vm.is.expired = true;
                            return
                        }
                        vm.data.expireds = vm.data.expireds.concat(data);
                       vm.length.expiredLength = vm.data.expireds.length;
                        $timeout(function () {
                            $scope.$broadcast('scroll.infiniteScrollComplete');
                        })
                    }, function (err) {
                        vm.is.expired = true;
                        _submitSelectSettings.show();
                        $scope.submitStatus = "fail";
                        $scope.errMsg = err;
                    });
                }
            };
            vm.init();
        }
    ])
});

