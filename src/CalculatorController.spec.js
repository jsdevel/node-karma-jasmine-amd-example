define([
  'CalculatorController',
  'MathematicsProvider'
], function(CalculatorController, MathematicsProvider){
  describe('CalculatorController', function(){
    it('should be a constructor', function(){
      expect(typeof CalculatorController).toEqual('function');
    });

    describe('instantiation', function(){
      it('expects a MathematicsProvider', function(){
        expect(function(){
          new CalculatorController(null);
        }).toThrow();
      });
    });

    describe('with a MathematicsProvider', function(){
      var sut;

      beforeEach(function(){
        sut = new CalculatorController(new MathematicsProvider());
      });

      it('can add', function(){
        expect(sut.add(2, 3)).toEqual(5);
      });

      it('can divide', function(){
        expect(sut.divide(6, 2)).toEqual(3);
      });

      it('can multiply', function(){
        expect(sut.multiply(6, 2)).toEqual(12);
      });

      it('can subtract', function(){
        expect(sut.subtract(6, 2)).toEqual(4);
      });
    });
  });
});
