define([
  'MathematicsProvider',
  'utils/toArray'
], function(MathematicsProvider, toArray){

  function CalculatorController(provider){
    if(!(provider instanceof MathematicsProvider))throw new Error(
      'provider was not an instance of MathematicsProvider'
    );

    this.add = function(){
      return provider.addition.apply(provider, toArray(arguments));
    };

    this.divide = function(){
      return provider.division.apply(provider, toArray(arguments));
    };

    this.multiply = function(){
      return provider.multiplication.apply(provider, toArray(arguments));
    };

    this.subtract = function(){
      return provider.subtraction.apply(provider, toArray(arguments));
    };
  }

  return CalculatorController;
});
