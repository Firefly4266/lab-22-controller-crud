'usestrict';

describe('testing list-controller', function() {
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($controller, $httpBackend) => {
      this.listCtrl = new $controller('ListController');
      this.$httpBackend = $httpBackend;
    });
  });
  it('testing createList', () => {
    let url = 'http://localhost:3000/api/list';
    let requestData = {name: 'example name'};
    this.$httpBackend.expectPOST(url, requestData)
    .respond(200, {
      name: 'example name',
      _id: '123456',
      __v: 0,
      notes:[],
    });
    this.listCtrl.createList(requestData);
    this.$httpBackend.flush();
  });
});
