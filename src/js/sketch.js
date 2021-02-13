// const el = new Fourier(0.04, 90, '#FAB795', 4)
// const el2 = new Fourier(0.04, 40, '#6C6F93', 3)
const el3 = new Fourier(0.04, 70, '#21BFC2', 9)
function setup() {
    createCanvas(window.innerHeight, window.innerHeight)
    frameRate(60)
}

function draw() {
    // Grey background
    background('#333333')

    // Translate to the center
    translate(200, width/2)
    // el.show()
    // el2.show()
    el3.show()
}