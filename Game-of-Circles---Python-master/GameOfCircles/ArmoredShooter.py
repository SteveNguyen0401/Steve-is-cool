import SpriteManager
from Bullet import Bullet

from Sprite import Sprite

class ArmoredShooter(Sprite):
    armor = 10
    speed = 5
    
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
            
    def move(self):
        super(ArmoredShooter, self).move()
        self.x += self.speed
        if self.x < 0 or self.x > width:
            self.speed *= -1
            
            
    
