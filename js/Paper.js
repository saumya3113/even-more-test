class Paper{
   constructor(x,y,r){
        var options={
            isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
        }
        
        this.x=x;
		this.y=y;
		this.r=70
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world, this.body);
        //this.image=loadImage("images.jpg")
        
    }
    display(){
    
        var paperpos=this.body.position;

        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        strokeWeight(2);
        fill("red");
        ellipse(0,0,this.r,this.r)
        pop();
    }
}