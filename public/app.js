var app = angular.module("app", []);

app.controller('rwscontroller', function($scope,$http) {

    $scope.sendData = function () {
        if ($scope.upwd == $scope.cpwd) {
            var jsonobj = {"name": $scope.uname, "age": $scope.age, "email": $scope.email, "pwd": $scope.upwd,}
            $http.post('url', jsonobj).then(function (data) {
                $scope.res = data;
            })
        }
        else {
            alert("password mismatch");
        }
    }


    $scope.getData=function() {
        var jsonobj = {"name": $scope.uname, "pwd": $scope.pwd}
        $http.get('url', jsonobj)
            .then(function (data) {
                $scope.res = data;

            })

    }




});/**
 * Created by w5rtc on 12/7/17.
 */
