let img;
class player {
    constructor(x, y, type){
        this.x = x;
        this.y = y;
        this.type = type;
        this.xSpeed = random(-2,2);
        this.ySpeed = random(-2,2);
        // this.xSpeed = random(-10,10);
        // this.ySpeed = random(-10,10);
        this.w = 25;

    }

    show(){

        switch(this.type){
            case "rock":
                image(rock, this.x, this.y, this.w, this.w);
                break;
            case "paper":
                image(paper, this.x, this.y, this.w, this.w);
                break;
            case "scissors":
                image(scissors, this.x, this.y, this.w,this.w);    
                break;
        }
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;  
    }

    bounce(){
        if (this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        } else if (this.y < 0 || this.y > height - this.w){
            this.ySpeed *= - 1;
        }
    }  
    
    collide(other){
        // return true if there's a collision, then we'll check the winner of the collision
        // may have to rethink this zzz

        // if (this.x > other.x && this.x < other.x + other.w &&
        //     this.y > other.y && this.y  < other.y + other.w) {
        if (this.x < other.x + other.w && this.x + this.w > other.x &&
            this.y < other.y + other.w && this.y + this.w > other.y) {
                // collision detected!
            
        // if (this.x + this.w >= other.x - other.w && this.x - this.w <= other.x + other.w &&
        //     this.y + this.w >= other.y - other.w && this.y - this.w <= other.y + other.w) {
       

            return true;
        } else {
            return false;
        }
    }

    changeShape(type){
        this.type = type;

    }




}
