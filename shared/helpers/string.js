define(function() {
  var ExtendedString = String, prototype = ExtendedString.prototype;

  prototype.capitalizeFirstLetter = function() {
     return this.charAt(0).toUpperCase() + this.slice(1);
  };

  prototype.startsWith = function(needle) {
    return(this.indexOf(needle) == 0);
  };

  return ExtendedString;
});


