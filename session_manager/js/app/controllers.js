/**
 * Controller
 * 
 * @author Igor Peonte <igor.144@gmail.com>
 */

angular.module('sessionManagerController', ['ngCookies']).controller('session-manager-controller', 
  ['$scope', '$cookies', 'services',
    function($scope, $cookies, services) {
    
      $scope.session_path = "/sessions";
      $scope.session_cookie_name = "JSESSIONID";
      $scope.urls = ["http://localhost:8082/client"];
      $scope.attributes = {
           "userName": "user"
      };
      
      $scope.params = {};
      
      $scope.data_set = false;
        
      $scope.set = function() {
        services.set($scope.url + $scope.session_path, $scope.attributes)
          .then(function(response) {
             $scope.data_set = true;
             $scope.session_id = $cookies.get($scope.session_cookie_name);
           });
      }
      
      $scope.get = function(key) {
         services.get($scope.url + $scope.session_path, key)
          .then(function(response) {
             $scope.params[key] = response.data;
           }
         );
         
      };
    }
]);
