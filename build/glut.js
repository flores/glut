(function() {
  var Calculate, Glut;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Glut = (function() {

    __extends(Glut, Batman.App);

    function Glut() {
      Glut.__super__.constructor.apply(this, arguments);
    }

    Glut.global(true);

    return Glut;

  })();

  Calculate = (function() {

    __extends(Calculate, Batman.Model);

    function Calculate() {
      Calculate.__super__.constructor.apply(this, arguments);
    }

    Calculate.accessor('solute', function() {
      return Math.round(this.get('dilution_volume') * 1.6 / this.get('source'));
    });

    Calculate.accessor('solvent', function() {
      return Math.round(this.get('dilution_volume') - this.get('solute'));
    });

    return Calculate;

  })();

  Glut.calculate = new Calculate;

}).call(this);
