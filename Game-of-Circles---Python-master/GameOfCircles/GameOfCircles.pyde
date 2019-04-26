import platform
from Bullet import Bullet
from Enemy import Enemy
from Player import Player
from Raindrop import Raindrop
from JiggleBot import JiggleBot
from ScreenSaverBot import ScreenSaverBot
from ArmoredShooter import ArmoredShooter
from Teleporter import Teleporter


import SpriteManager

def setup():
    print "Built with Processing Python version " + platform.python_version()

    size(500, 500)
    playerTeam = 1
    enemyTeam = 2
    player = Player(width/2, height/2, playerTeam)
    SpriteManager.setPlayer(player)
    SpriteManager.spawn(Teleporter(150, 100 , enemyTeam))
                           
def draw():
    background(255)    
    SpriteManager.animate()
        
def keyPressed():
    SpriteManager.getPlayer().keyDown()    
        
def keyReleased():
    SpriteManager.getPlayer().keyUp()
