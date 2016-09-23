var app = angular.module('myApp', []);
 
app.controller('MainCtrl', function($scope) {
    $scope.friendlist = [
        {'status': 'online',  'name': 'Sébastien'},
        {'status': 'offline', 'name': 'Marion'},
        {'status': 'online',  'name': 'Youssef'},
        {'status': 'offline', 'name': 'Romain'},
        {'status': 'offline', 'name': 'Laura'},
        {'status': 'offline', 'name': 'Julien'},
        {'status': 'online',  'name': 'Marie'}
    ];
});