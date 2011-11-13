class Glut extends Batman.App
  @global yes
  @root 'app#index'
  @route 'tips', 'app#tips'
class Calculate extends Batman.Model
  @accessor 'solute', -> Math.round( @get('dilution_volume') * 1.5 / @get('source') )
  @accessor 'solvent', -> Math.round( @get('dilution_volume') - @get('solute') )
class Glut.AppController extends Batman.Controller
  index: ->
  tips: =>
Glut.calculate = new Calculate
