angular.module('session-manager', ['ngCookies']).controller('session-manager-controller', 
  ['$scope', '$http', '$cookies', 
    function($scope, $http, $cookies) {
    
      $scope.session_path = "/sessions";
      $scope.session_cookie_name = "JSESSIONID";
      $scope.urls = ["http://localhost:8082/client"];
      $scope.attributes = {
           "userName": "user"
      };
      
      $scope.params = {};
      
      $scope.data_set = false;
        
      $scope.set = function() {
        $http.post($scope.url + $scope.session_path, $scope.attributes, 
              {withCredentials: true}).then(function(response) {
             $scope.data_set = true;
             $scope.session_id = $cookies.get($scope.session_cookie_name);
           });
      }
      
      $scope.get = function(key) {
         $http.get($scope.url + $scope.session_path + "/" + key, 
              {withCredentials: true}).then(
           function(response) {
             $scope.params[key] = response.data;
           });
      };
    }
]);
