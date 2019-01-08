<template>
  <div class="home">

    <div>
      <button @click="reset()">Reset</button>
    </div>
    <svg class="canvas" ref="canvas">
      <parallelogram-component v-if="points.length === 3" :p="p"/>
      <circle v-if="points.length === 3" :cx="p.CM.x" :cy="p.CM.y" :r="radius" fill="none"stroke="black"></circle>
      <mouse-circle
        :position="mouse"
      />
    </svg>
  </div>
</template>

<script>
// @ is an alias to /src
import ParallelogramComponent from "@/components/Parallelogram.vue";
import MouseCircle from "@/components/MouseCircle.vue";
import Parallelogram from "@/lib/parallelogram.js";

export default {
  name: "home",
  components: {
    ParallelogramComponent,
    MouseCircle
  },
  data() {
    return {
      mouse: {
        x: 0,
        y: 0
      },
      points: [],
      p: null,
      radius: 0
    };
  },
  methods: {
    getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    },
    reset() {
      this.points = [];
    },
    addParallelogramPoint(point) {
      if (this.points.length < 3) {
        this.points.push(point);
      }
      if (this.points.length === 3) {
        this.p = new Parallelogram(
          this.points[0],
          this.points[1],
          this.points[2]
        );
        this.radius = Math.sqrt(this.p.area / Math.PI);
      }
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.canvas.addEventListener(
      "mousemove",
      evt => {
        this.mouse = this.getMousePos(this.canvas, evt);
      },
      false
    );
    this.canvas.addEventListener(
      "click",
      evt => {
        let mouseClickPosition = this.getMousePos(this.canvas, evt);
        this.addParallelogramPoint(mouseClickPosition);
      },
      false
    );
  }
};
</script>

<style lang="scss" scoped>
.canvas {
  width: 100%;
  margin: 0;
  padding: 2px;
  border-collapse: collapse;
  height: 100%;
}
</style>
