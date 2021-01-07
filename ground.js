class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
   
   this.ground=Bodies.rectangle(450,390,900,20,options)
   World.add(world,this.ground)
    }
        
    display(){
        push()
			rectMode(CENTER)
			fill(128,128,128)
			rect(this.ground.position.x,this.ground.position.y,900,20);
			pop()

    }
}