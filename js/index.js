
let particles = [];

function setup() {

    createCanvas(window.innerWidth, window.innerHeight);

    const numberOfParticles = width / 10;

    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
    }

}

function draw() {

    background('rgb(0, 132, 155)');

    particles.forEach((particle, index) => {

        particle.update();
        particle.draw();
        particle.connectParticle(particles.slice(index));
    });


}

class Particle {

    constructor() {

        this.position = createVector(random(window.innerWidth), random(window.innerHeight));
        this.radius = 10;
        this.velocity = createVector(random(-1, 1), random(-1, 1))
    }

    update() {
        this.detectEdges();
        this.position.add(this.velocity);
    }

    draw() {
        noStroke();
        fill('rgba(255, 255, 255, 0.5');
        circle(this.position.x, this.position.y, this.radius);
    }

    detectEdges() {
        if (this.position.x < 0 || this.position.x > width) {
            this.velocity.x *= -1;
        }

        if (this.position.y < 0 || this.position.y > height) {
            this.velocity.y *= -1;
        }
    }

    connectParticle(particles) {
        particles.forEach(particle => {

            const distance = dist(this.position.x, this.position.y, particle.position.x, particle.position.y);

            if (distance < 120) {
                stroke('rgba(255, 255, 255, 0.3)');
                line(this.position.x, this.position.y, particle.position.x, particle.position.y);
            }
        });

    }

}