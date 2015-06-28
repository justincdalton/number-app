(function() {
  'use strict';

  describe('number abrv filter', function(){

    beforeEach(module('numberApp'));

    it('returns the number if less than 1000', inject(function($filter) {
      var filter = $filter('numberAbrvFilter');
      var result = filter(100);

      expect(result).toBe(100);
    }));

    it('returns the number + K if between 1000 and 1000000', inject(function($filter) {
      var filter = $filter('numberAbrvFilter');
      var result = filter(12345);

      expect(result).toBe('12.3K');
    }));

    it('returns the number + M if between 1000000 and 1000000000', inject(function($filter) {
      var filter = $filter('numberAbrvFilter');
      var result = filter(1987654);

      expect(result).toBe('1.99M');
    }));

    it('returns the number + B if between billion and trillion', inject(function($filter) {
      var filter = $filter('numberAbrvFilter');
      var result = filter(9123456789);

      expect(result).toBe('9.12B');
    }));

    it('returns the number + T if between trillion and trillion', inject(function($filter) {
      var filter = $filter('numberAbrvFilter');
      var result = filter(912345678900000);

      expect(result).toBe('912T');
    }));

    it('returns the number + T if greater than trillion', inject(function($filter) {
      var filter = $filter('numberAbrvFilter');
      var result = filter(91234567890000000);

      expect(result).toBe('91235T');
    }));

  });
})();