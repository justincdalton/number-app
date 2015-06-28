(function() {
  'use strict';

  describe('main controller', function(){

    beforeEach(module('numberApp'));

    it('should set up number properties', inject(function($controller) {
      var vm = $controller('MainController');

      expect(vm.fields.length).toBe(3);
      expect(vm.availableFieldCounts.length).toBe(8);
      expect(vm.fieldCount).toBe(3);
    }));

    it('returns the total from fields', inject(function($controller) {
      var vm = $controller('MainController');
      vm.fieldCount = 10;
      vm.resetFields();
      for (var i = 0; i < vm.fields.length; i++) {
        vm.fields[i].val = i;
      }
      vm.getTotal();

      expect(vm.total).toBe(45);
    }));

    it('gets the abbreviated total', inject(function($controller) {
      var vm = $controller('MainController');
      vm.fields[0].val = 20000;
      vm.fields[1].val = 2000;
      vm.fields[2].val = 100;
      vm.getTotal();

      expect(vm.total).toBe('22.1K');
    }));

    it('ranks the inputs', inject(function($controller) {
      var vm = $controller('MainController');
      vm.fields[0].val = 2;
      vm.fields[1].val = 20;
      vm.fields[2].val = 10;
      vm.rankFields();

      expect(vm.fields[0].rank).toBe('#3');
      expect(vm.fields[1].rank).toBe('#1');
      expect(vm.fields[2].rank).toBe('#2');
    }));
  });
})();
