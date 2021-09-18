class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            'restitution': 0,
            'friction': 0,
            'density': 1

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(userWorld, this.body);
    }
    display() {
        rectMode(CENTER);
        fill("pink");
        var pos = this.body.position;
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}