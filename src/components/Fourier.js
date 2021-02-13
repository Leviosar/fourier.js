export default class Fourier {
    constructor(increment, radius, color, n, renderer) {
        this.renderer = renderer
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

    update (n) {
        this.radius = this.baseRadius * (4 / (n * Math.PI))
        

        this.prevX = this.x
        this.prevY = this.y

        this.x += this.radius * this.renderer.cos( n * this.time )
        this.y += this.radius * this.renderer.sin( n * this.time )

        if (this.wave.length > 1800) {
            this.wave.pop()
        }
    }

    show () {
        this.x = 0
        this.y = 0
        this.time += this.speed
        for (let i = 0; i < this.n; i++) {
            this.update(i * 2 + 1)

            // Outter circle
            this.renderer.noFill()
            this.renderer.stroke('#FFF')
            this.renderer.ellipse(this.prevX, this.prevY, this.radius * 2)

            // Inside circle
            this.renderer.fill(this.color)
            this.renderer.stroke(this.color)
            this.renderer.line(this.prevX, this.prevY, this.x, this.y)
            this.renderer.ellipse(this.x, this.y, 8)

        }

        this.wave.unshift({
            x: this.x,
            y: this.y
        })

        this.renderer.line(this.x, this.y, this.waveDistance, this.wave[0].y)
        
        this.renderer.translate(this.waveDistance, 0)
        this.renderer.beginShape()
        this.renderer.noFill()
        
        for (let index = 0; index < this.wave.length; index++) {
            this.renderer.vertex(index, this.wave[index].y)
        }

        this.renderer.endShape()
        this.renderer.translate(-this.waveDistance, 0)
    }
}