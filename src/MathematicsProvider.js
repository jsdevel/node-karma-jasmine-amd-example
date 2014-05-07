define(function(){

  function MathematicsProvider(){

  }

  MathematicsProvider.prototype.addition  = function(a,b){
    return a + b;
  };

  MathematicsProvider.prototype.subtraction = function(a, b){
    return a - b;
  };

  MathematicsProvider.prototype.multiplication = function(a, b){
    return a * b;
  };

  MathematicsProvider.prototype.division = function(a, b){
    return a / b;
  };

  return MathematicsProvider;
});
