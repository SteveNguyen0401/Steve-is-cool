mark = 0
wait = 1000
go = True

def setup():
    size(500,500)
    
def draw():
    background(255)
    global go, mark, wait
    if(millis() - mark > wait):
        go = not go
        mark = millis()
        
    if(go):
        fill(255, 0, 0)
    else:
        fill(0, 255, 0)
        ellipse(50, 50, 50, 50)
