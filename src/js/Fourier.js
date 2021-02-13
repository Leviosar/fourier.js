class Fourier{
    constructor(increment, radius, color, n){
        this.baseRadius = radius
        this.radius = radius
        this.speed = increment
        this.time = 0
        this.wave = []
        this.color = color
        this.x = 0
        this.y = 0
        this.n = n
        this.prevX
        this.prevY
        this.waveDistance = radius * 2
    }

    update(n){
        this.radius = this.baseRadius * (4 / (n * Math.PI))
        

        this.prevX = this.x
        this.prevY = this.y

        this.x += this.radius * cos( n * this.time )
        this.y += this.radius * sin( n * this.time )

        if (this.wave.length > 600) {
            this.wave.pop()
        }
    }

    show(){
        this.x = 0
        this.y = 0
        this.time += this.speed
        for (let i = 0; i < this.n; i++) {
            this.update(i * 2 + 1)

            // Outter circle
            noFill()
            stroke('#FFF')
            ellipse(this.prevX, this.prevY, this.radius * 2)

            // Inside circle
            fill(this.color)
            stroke(this.color)
            line(this.prevX, this.prevY, this.x, this.y)
            ellipse(this.x, this.y, 8)

        }

        this.wave.unshift({
            x: this.x,
            y: this.y
        })

        line(this.x, this.y, this.waveDistance, this.wave[0].y)
        
        translate(this.waveDistance, 0)
        beginShape()
        noFill()
        for (let index = 0; index < this.wave.length; index++) {
            vertex(index, this.wave[index].y)
        }
        endShape()
        translate(-this.waveDistance, 0)
    }
}