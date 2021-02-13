<template>
    <section class="canvas-wrapper"></section>
</template>

<script>

import p5 from 'p5'
import Vue from 'vue'
import Fourier from './Fourier.js'
import { random as RandomColor } from './../helpers/Palette.js'

export default Vue.extend({
    data () {
        return {
            sketch: [],
            instance: [],
        }
    },
    mounted () {
        this.sketch = (s) => {
            let canvas = []

            s.elements = [
                new Fourier(0.04, 70, '#21BFC2', 9, s)
            ]

            s.randomWithRange = (max, min) => {
                return (Math.random() * (max - min) + min)
            }

            s.addWave = () => {
                const increment = s.randomWithRange(0.01, 0.09)
                const radius = s.randomWithRange(30, 150)
                const iterations = s.randomWithRange(3, 12)

                s.elements.push(new Fourier(increment, radius, RandomColor(), iterations, s))
            }

            s.setup = () => {
                canvas = s.createCanvas(window.innerWidth, window.innerHeight)
                document.querySelector('section.canvas-wrapper').append(canvas.canvas)
                s.frameRate(60)
            }

            s.draw = () =>{
                // Grey background
                s.background('#15202B')

                // Translate to the center
                s.translate(200, s.height / 2)

                for (const element of s.elements) {
                    element.show()
                }
            }
        }


        this.$store.dispatch('setInstance', new p5(this.sketch))
    }
})

</script>

<style>

</style>