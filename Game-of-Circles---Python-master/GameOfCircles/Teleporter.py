import SpriteManager
from Sprite import Sprite
from Shooter import Shooter
    

class Teleporter(Shooter, Sprite):

    mark2 = 0
    wait2 = 6000
    speed = 12
    diameter = 25
    c = color(150,150,0)
    
    def move(self):
        super(Teleporter, self).move()
        self.x += self.speed
        if self.x < 0 or self.x > width:
            self.speed *= -1
            
        self.teleport()
            
    def teleport(self):
        println("millis = " + str(millis()) + ", mark = " + str(self.mark) + ", wait = " + str(self.wait))
        println(millis() - self.mark > self.wait)
        if millis() - self.mark2 > self.wait2:
            self.x = random(width)
            self.y = random(height)
            self.mark2 = millis()
    
                
