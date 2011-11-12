class Glut extends Batman.App
  @global yes
class Calculate extends Batman.Model
  @accessor 'solute', -> Math.round( @get('dilution_volume') * 1.5 / @get('source') )
  @accessor 'solvent', -> Math.round( @get('dilution_volume') - @get('solute') )
Glut.calculate = new Calculate
