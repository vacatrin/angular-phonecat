'use strict';

// AngularJS E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('PhoneListCtrl', function(){

    beforeEach(module('phonecatApp'));

    it('should create "phones" model with 3 phones', inject(function($controller)
    {
        var scope = {},
            ctrl = $controller('PhoneListCtrl', {$scope:scope});

        expect(scope.phones.length).toBe(4);
    }));

    it('should display the name scope model', inject(function($controller){
        var scope = {},
            ctrl = $controller('PhoneListCtrl', {$scope:scope});

        expect(scope.name).toBe("This is the new scope name");
    }))

});

