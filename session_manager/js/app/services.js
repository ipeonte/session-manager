/**
 * Services
 * 
 * @author Igor Peonte <igor.144@gmail.com>
 */

angular.module('sessionManagerServices', []).factory('services', 
  ['$http',  function($http) {
    return {
            set : function(url, data) {
                return $http.post(url, data, 
                    {withCredentials: true});
            },

            get: function(url, key) {
                return $http.get(url + "/" + key, 
                    {withCredentials: true});
            }
    }
}]).config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
}]);
