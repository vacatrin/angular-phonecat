// define the name of the app MODULE
var phonecatApp = angular.module('phonecatApp', []);

// define the controller that belongs / is part of that phonecatApp module
phonecatApp.controller('PhoneListCtrl', function($scope){
    $scope.phones = [
        {'name': 'Nexus S',
        'snippet': 'Fast just got faster with Nexus S.'},
       {'name': 'Motorola XOOM™ with Wi-Fi',
        'snippet': 'The Next, Next Generation tablet.'},
       {'name': 'MOTOROLA XOOM™',
        'snippet': 'The Next, Next Generation tablet.'}
    ];
});
