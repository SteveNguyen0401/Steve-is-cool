import SpriteManager

from Sprite import Sprite

class ArmoredShooter(Sprite):
    armor = 10
    
    def display(self):
        stroke(100)
        strokeWeight(self.armor)
        fill(255, 0, 0)
        ellipse(self.x, self.y, self.diameter, self.diameter)
        noStroke()
        
    def handleCollision(self):
        self.armor -=1
        if self.armorarmor < 1:
            SpriteManager.destroy(self)
            
    
