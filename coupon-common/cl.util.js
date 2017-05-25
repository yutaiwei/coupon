
angular.module('cl.utils', ['ionic']).provider('$$utils', function () {
    // 默认数据为积分抽奖的数据
    var _params = {
        security: {
            "AV": "2.0",
            "DAC": "WIFI",
            "DMA": "Apple",
            "DMO": "iPhone 5 (GSM+CDMA)",
            "DOV": "10.0.1",
            "DU": "FB7F0416-FCA8-4F2F-869B-2ABFB3B28B8D",
            "Memory": "",
            "NC": "",
            "NCA": "测试电脑",
            "OS": "iOS",
            "RSL": "320*568",
            "Resolution": "",
            "USERID": "1328495419744",
            "USETIME": "1000",
            "X": "",
            "Y": "",
            "appversion": "2.0",
            "buildversion": "Ver:2.7.7_CUS_Test_160824",
            "devicemodel": "iPhone",
            "enterprise": "N",
            "id": "",
            "manufacturer": "Apple",
            "model": "iPhone",
            "name": "",
            "password": "",
            "session": "",
            "sysversion": "10.0.1",
            "udid": "FB7F0416-FCA8-4F2F-869B-2ABFB3B28B8D"
        }
    };
    var httpPackage = {
        method: 'POST',
        dataType: 'json',
        url: 'http://10.7.2.136:8080/mi/MobileServlet',
        contentType: 'application/json: charset=UTF-8',
        useDefaultXhrHeader: false,
        header: {},
        data: {},
        timeout: 30000
    };
    var isUseIonicLoading=false;
    var ignoreLoadingList=['90', false, '11'];
    return {
        setHttpPackage: function (options) {
            httpPackage = angular.merge(httpPackage, options);
            console.log(httpPackage);
        },
        setInitParams: function (params) {
            _params = params;
        },
        useIonicLoading:function(isUse){
            isUseIonicLoading=isUse;
        },
        setIgnoreLoadingList:function(ignoreList){
            ignoreLoadingList=ignoreList;
        },
        $get: function ($http, $q, $timeout,$ionicLoading) {
            var reqNum=0;
            var reqAndRes=function (type,method) {
                console.log(type,method);
                if(ignoreLoadingList.indexOf(method)>-1){
                    console.log('忽略的方法',method);
                    return;
                }
                if(type=='req'){
                    reqNum++;
                }else{
                    reqNum--;
                }
                if(!isUseIonicLoading){
                    return false;
                }
                if(reqNum>0){
                    $ionicLoading.show({
                        template:'请等待'
                    })
                }else{
                    $ionicLoading.hide();
                }
            };

            return {
                http: function (reqData) {
                    var _data = angular.copy(reqData);
                    var deferred = $q.defer();
                    // 请求数量+1
                    reqAndRes('req',reqData.head.method);

                        if (typeof http !== 'undefined') {
                            http.getData(function (data) {
                                dataSolve(data);
                            }, function (e) {
                                deferred.reject(e);
                                // 请求数量-1
                                reqAndRes('res',reqData.head.method);
                            }, _data);
                        } else {
                            var _httpPackage = angular.copy(httpPackage);
                            _httpPackage.data = _data;
                            $http(_httpPackage).success(function (data) {
                                dataSolve(data);
                            }).error(function (e) {
                                // 请求数量-1
                                reqAndRes('res',reqData.head.method);
                                deferred.reject(e);
                            })
                        }

                    // 返回的数据统一处理
                    function dataSolve(data) {
                        // 请求数量-1
                        reqAndRes('res',reqData.head.method);
                        if (data.Flag == 'Y') {
                            deferred.resolve(data.Data);
                        } else {
                            deferred.reject(data.Flag.substr(2));
                        }
                    }

                    return deferred.promise;
                },
                setParams: function () {
                    var _query = window.location.search.substr(1);
                    if (_query.length == 0) {
                        return false;
                    }
                    var args = _query.split(/&|=/);
                    var argsObj = {};
                    for (var i = 0; i < args.length; i += 2) {
                        var _value = decodeURIComponent(args[i + 1]);
                        if(_value.substr(0,1)=='{') {
                            try {
                                _value = JSON.parse(_value)
                            } catch (e) {
                            }
                        }
                        argsObj[args[i]] = _value;
                    }

                    _params = argsObj;
                },
                getParams: function () {
                    return angular.copy(_params);
                }
            }
        }
    }
})
/**
 * @ngdoc method
 * @name valid
 * @methodOf $$crocus
 *
 * @description
 * valid，用于监听手机ngModel，用来判断手机号码是否符合要求
 * @param {String} restrict 属性
 * @param {boolean} replace 替换
 **/
    .directive('valid', ['$timeout', function ($timeout) {
        return {
            restrict: 'A',
            require: '^ngModel',
            compile: function () {
                var tests = {
                    'chineseName': /^[\u4e00-\u9fa5]{2,10}$/,
                    'mobile': /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
                    'validationCode': /\d{6}$/,
                    'email': /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
                };
                //通用验证方法
                var validFn = function (ctrl, attr, scope) {
                    if (ctrl.$viewValue == '') {
                        ctrl.$setValidity(attr.name, true);
                        collectionErrorMsg(true, attr.warnText, scope);
                        return;
                    }
                    ctrl.$setValidity(attr.name, tests[attr.valid].test(ctrl.$viewValue));
                    collectionErrorMsg(tests[attr.valid].test(ctrl.$viewValue), attr.warnText, scope);
                };
                return function (scope, ele, attr, ctrl) {
                    $timeout(function () {
                        validFn(ctrl, attr, scope);
                    }, 100);
                    if (attr.trigger == 'change') {
                        ctrl.$viewChangeListeners.unshift(function () {
                            validFn(ctrl, attr, scope);
                        })
                    }
                    ele.on('blur', function () {
                        scope.$apply(function () {
                            validFn(ctrl, attr, scope);
                        });

                    });
                    scope.$on('$destroy', function () {
                        collectionErrorMsg(true, attr.warnText, scope);
                    });
                }
            }
        }
    }])
    /**
     * @ngdoc method
     * @name idCard
     * @methodOf $$crocus
     *
     * @description
     * idCard，用于监听身份证ngModel，用来判断身份证号码是否符合规范
     * @param {String} restrict 属性
     * @param {boolean} replace 替换
     **/
    .directive('idCard', ['$timeout', '$parse', function ($timeout, $parse) {
        return {
            require: 'ngModel',
            restrict: 'A',
            compile: function () {


                var _validFn = function (ctrl, attrs, $scope, setSexFn, setBirFn) {
                    if (ctrl.$viewValue == '') {
                        ctrl.$setValidity(attrs.name, true);
                        collectionErrorMsg(true, attrs.warnText, $scope);
                        return;
                    }
                    var _result = validIdCard(ctrl.$viewValue);
                    ctrl.$setValidity(attrs.name, _result);
                    collectionErrorMsg(_result, attrs.warnText, $scope);
                    if (_result) {
                        setSexFn($scope.$parent, checkSex(ctrl.$viewValue));
                        setBirFn($scope.$parent, new Date(checkBirthday(ctrl.$viewValue)));
                    }
                };
                return function ($scope, element, attrs, ctrl) {
                    var $setSexValue = $parse(attrs.sexValue).assign;
                    var $setBirthDayValue = $parse(attrs.birthdayValue).assign;
                    $timeout(function () {
                        _validFn(ctrl, attrs, $scope, $setSexValue, $setBirthDayValue);
                    }, 100);
                    element.on('blur', function () {
                        $scope.$apply(function () {
                            _validFn(ctrl, attrs, $scope, $setSexValue, $setBirthDayValue);
                        });
                    });
                    $scope.$on('$destroy', function () {
                        collectionErrorMsg(true, attrs.warnText, $scope);
                    });
                }
            }
        }
    }])
    /**
     * @ngdoc method
     * @name segmentIcon
     * @methodOf $$crocus.$$util
     *
     * @description
     * 指令segmentIcon，用于监听attr.trigger及勾划成功、失败动画
     **/
    .directive('segmentIcon', function () {
        return {
            restrict: 'A',
            replace: true,
            link: function (scope, element, attr) {
                var segments = [];
                angular.forEach(element[0].children, function (path) {
                    var segment = new Segment(path);
                    segment.draw('100%', '100%', 0);
                    segments.push(segment);
                });
                attr.$observe('trigger', function (a) {
                    try {
                        if (eval(a)) {
                            angular.forEach(segments, function (segment) {
                                segment.draw('100%', '0', 1);
                            });
                        } else {
                            angular.forEach(segments, function (segment) {
                                segment.draw('100%', '100%', 0);
                            });
                        }
                    } catch (e) {
                        console.log(e);
                    }
                });
            }
        }
    });
