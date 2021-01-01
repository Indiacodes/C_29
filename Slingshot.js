class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //strokeWeight(4);
            stroke("#301708");
            image(this.image3, pointA.x - 20, pointA.y - 10, 50, 25);
            line(pointA.x -20, pointA.y, pointB.x - 20, pointB.y);
            line(pointA.x +20, pointA.y, pointB.x + 25, pointB.y + 10);

        }
        push();
        imageMode(CENTER);
        image(this.image1, 223, 160, 50, 130);
        image(this.image2, 189, 132, 50, 75);
        pop();
    }
    
}