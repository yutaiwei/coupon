
angular.module('cl.utils', ['ionic']).provider('$$utils', function () {
    var security= {
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
    };
    var mobiScrollSettings = {
        theme: 'mobiscroll',
        lang: 'zh',
        display: 'bottom',
        mode: 'mixed'
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
    return {
        $get: function ($http, $q) {
            return {
                http: function (reqData) {
                    var _data = angular.copy(reqData);
                    var deferred = $q.defer();
                        if (typeof http !== 'undefined') {
                            http.getData(function (data) {
                                dataSolve(data);
                            }, function (e) {
                                deferred.reject(e);
                            }, _data);
                        } else {
                            var _httpPackage = angular.copy(httpPackage);
                            _httpPackage.data = _data;
                            $http(_httpPackage).success(function (data) {
                                dataSolve(data);
                            }).error(function (e) {
                                deferred.reject(e);
                            })
                        }
                    // 返回的数据统一处理
                    function dataSolve(data) {
                        if (data.Flag == 'Y') {
                            deferred.resolve(data.Data);
                        } else {
                            deferred.reject(data.Flag.substr(2));
                        }
                    }
                    return deferred.promise;
                },
                getParams: function () {
                    return angular.copy(security);
                },
                getMobiScroll:function () {
                    return angular.copy(mobiScrollSettings)
                }
            }
        }
    }
});
