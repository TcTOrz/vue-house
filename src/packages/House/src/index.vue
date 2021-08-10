<!--
 * @Author: Li Jian
 * @Date: 2021-08-06 09:23:47
 * @LastEditTime: 2021-08-10 12:25:17
 * @LastEditors: Li Jian
-->
<template>
  <canvas id="container" width=2400 height=1400></canvas>
</template>

<script>
import { OrbitControls } from 'OrbitControls'

import imgl from '@imgs/0_l.jpg'
import imgr from '@imgs/0_r.jpg'
import imgf from '@imgs/0_f.jpg'
import imgb from '@imgs/0_b.jpg'
import imgu from '@imgs/0_u.jpg'
import imgd from '@imgs/0_d.jpg'

export default {
  name: 'TzHouse',
  props: {
    img_l: {
      type: String,
      default: imgl
    },
    img_r: {
      type: String,
      default: imgr
    },
    img_u: {
      type: String,
      default: imgu
    },
    img_d: {
      type: String,
      default: imgd
    },
    img_f: {
      type: String,
      default: imgf
    },
    img_b: {
      type: String,
      default: imgb
    }
  },
  data () {
    return {
      canvas: null,
      renderer: null,
      camera: null,
      scene: null,
      controls: null,
    }
  },
  beforeCreate() {
    if (this.$house) {
      this.$house.width ? this.$house.width = this.$house.width : this.$house.width = '300px'
      this.$house.height ? this.$house.height = this.$house.height : this.$house.height = '200px'
      this.$house.canvasWidth ? this.$house.canvasWidth = this.$house.canvasWidth : this.$house.canvasWidth = '2400'
      this.$house.canvasHeight ? this.$house.canvasHeight = this.$house.canvasHeight : this.$house.canvasHeight = '1400'
      'autoRotate' in this.$house ? this.$house.autoRotate = this.$house.autoRotate : this.$house.autoRotate = true
    } else {
      this.$house = {}
      this.$house.width = '300px'
      this.$house.height = '200px'
      this.$house.canvasWidth = '2400'
      this.$house.canvasHeight = '1400'
      this.$house.autoRotate = true
    }
  },
  mounted() {
    this.canvas = document.getElementById('container')
    this.canvas.style.width = this.$house.width + 'px'
    this.canvas.style.height = this.$house.height + 'px'
    this.canvas.width = this.$house.canvasWidth
    this.canvas.height = this.$house.canvasHeight
    this.start()
  },
  methods: {
    start() {

      this.renderer = new three.WebGLRenderer({ canvas: this.canvas })
      
      this.camera = new three.PerspectiveCamera(
        90,
        this.canvas.clientWidth / this.canvas.clientHeight,
        0.1,
        1000
      )
      
      this.camera.position.set(0, 0, 0.000001)

      this.scene = new three.Scene()

      this.controls = new OrbitControls(this.camera, this.canvas)
      // this.controls = new three.OrbitControls(this.camera, this.canvas)
      // this.controls = new orbit(this.camera, this.canvas)
      this.controls.autoRotate = this.$house.autoRotate

      this.scene.background = new three.Color(0xaaaaaa)

      const geometry = new three.BoxGeometry(1, 1, 1)

      const loader = new three.TextureLoader()

      const materials = [
        new three.MeshBasicMaterial({ map: loader.load(this.img_l) }), // 左
        new three.MeshBasicMaterial({ map: loader.load(this.img_r) }), // 右
        new three.MeshBasicMaterial({ map: loader.load(this.img_u) }), // 上
        new three.MeshBasicMaterial({ map: loader.load(this.img_d) }), // 下
        new three.MeshBasicMaterial({ map: loader.load(this.img_f) }), // 前
        new three.MeshBasicMaterial({ map: loader.load(this.img_b) }), // 后
      ]

      const cube = new three.Mesh(geometry, materials)
      cube.geometry.scale(1, 1, -1)

      this.scene.add(cube)
      const self = this
      function render() {
        requestAnimationFrame(render)
        // cube.rotation.x = time * 0.0001
        // cube.rotation.y = time * 0.0001
        // cube.rotation.z = time * 0.0001
        self.$house.autoRotate && self.controls.update()
        self.renderer.render(self.scene, self.camera)
      }
      requestAnimationFrame(render)
    }
  }
}
</script>

<style scoped>
  #container {
    width: 300px;
    height: 200px;
  }
</style>