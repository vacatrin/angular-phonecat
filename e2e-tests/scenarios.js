'use strict';

// AngularJS E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('My app', function() {

  beforeEach(function() {
    browser.get('index.html');
  });
});

describe('PhoneListCtrl', function(){
    it('should create "phones" model with 3 phones', function() {
        var scope = {},
            ctrl = new PhoneListCtrl(scope);

        expect(scope.phones.length).toBe(4); 
    })
});