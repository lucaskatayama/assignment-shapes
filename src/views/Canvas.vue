<template>
  <div class="row">
    <nav class="col-md-3 d-none d-md-block bg-light sidebar px-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Info</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <button @click="reset()" class="btn btn-info">Reset</button>
        </div>
      </div>
      <div>
        <h3>Parallelogram</h3>
        <p v-if="parallelogram === null">
          No paralellogram
        </p>
        <ul v-else>
          <li v-if="points.length > 0">Points
            <ul>
              <li :key="idx" v-for="(point, idx) in points">({{point.x}}, {{point.y}})</li>
              <li v-if="parallelogram">({{pointD.x}}, {{pointD.y}})</li>
            </ul>
          </li>
          <template v-if="parallelogram">
            <li>Center of Mass: ({{centerOfMass.x}}, {{centerOfMass.y}})</li>
            <li>Area: {{parallelogram.getArea()}} px<sup>2</sup></li>
          </template>

        </ul>

        <h3>Circle</h3>
        <p v-if="circle === null">
          No circle
        </p>
        <ul v-else>
          <li>Center of Mass: ({{circle.center.x}}, {{circle.center.x}})</li>
          <li>Area: {{circle.area}} px<sup>2</sup></li>
          <li>Radius: {{circle.getRadius()}} px</li>
        </ul>
      </div>
    </nav>
    <main class="col-md-9 ml-sm-auto col-lg-9 px-4" role="main">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Canvas</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group mr-2"></div>
        </div>
      </div>

      <div class="home">
        <svg class="canvas" ref="canvas">
          <parallelogram-shape :parallelogram="parallelogram" v-if="points.length === 3"></parallelogram-shape>
          <circle-shape :center="circle.center" :radius="circle.getRadius()" color="#FFD438" v-if="points.length === 3"></circle-shape>
          <point-shape :point="mouse" color="#FF0000"></point-shape>
          <point-shape draggable :key="idx" :point="point" color="#FF0000" v-for="(point, idx) in points"></point-shape>
        </svg>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import ParallelogramShape from "@/components/ParallelogramShape.vue";
import CircleShape from "@/components/CircleShape.vue";
import Parallelogram from "@/lib/Parallelogram.js";
import Geometry from "@/lib/Geometry.js";
import Circle from "@/lib/Circle.js";
import PointShape from "@/components/PointShape.vue";

export default {
  name: "Canvas",
  components: {
    ParallelogramShape,
    CircleShape,
    PointShape
  },
  data() {
    return {
      mouse: {
        x: 0,
        y: 0
      },
      points: [],
      parallelogram: null,
      circle: null,
      selectedPoint: null
    };
  },
  computed: {
    pointD() {
      return this.parallelogram.getPointD();
    },
    centerOfMass() {
      return this.parallelogram.getCenterOfMass();
    },
    area() {
      return this.parallelogram.getArea();
    }
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
      this.parallelogram = null;
      this.circle = null;
    },
    updateShapes() {
      this.circle.setCenter(this.centerOfMass);
      this.circle.setArea(this.area);
    },
    createShapes() {
      this.parallelogram = new Parallelogram(
        this.points[0],
        this.points[1],
        this.points[2]
      );
      this.circle = new Circle(this.centerOfMass, this.area);
    },
    addParallelogramPoint(point) {
      if (this.points.length < 3) {
        this.points.push(point);
      }
      if (this.points.length === 3) {
        this.createShapes();
      }
    },
    click(evt) {
      let mouse = this.getMousePos(this.canvas, evt);
      const point = this.points.find(p => {
        return Geometry.distance(p, mouse) <= 5.5;
      });
      if (!point) {
        this.addParallelogramPoint(mouse);
      }
    },
    startDrag(evt) {
      let mouse = this.getMousePos(this.canvas, evt);
      const point = this.points.find(p => {
        return Geometry.distance(p, mouse) <= 5.5;
      });
      if (point) {
        this.selectedPoint = point;
        this.canvas.addEventListener("mousemove", this.drag, false);
      }
    },
    drag(evt) {
      if (this.selectedPoint) {
        let mouse = this.getMousePos(this.canvas, evt);
        this.selectedPoint.x = mouse.x;
        this.selectedPoint.y = mouse.y;
        this.updateShapes();
      }
    },
    endDrag() {
      if (this.selectedPoint) {
        this.selectedPoint.x = this.mouse.x;
        this.selectedPoint.y = this.mouse.y;
        this.selectedPoint = null;
        this.canvas.removeEventListener("mousemove", this.drag, false);
      }
    },
    mouseMove(evt) {
      this.mouse = this.getMousePos(this.canvas, evt);
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.canvas.addEventListener("mousemove", this.mouseMove, false);
    this.canvas.addEventListener("click", this.click, false);
    this.canvas.addEventListener("mousedown", this.startDrag, false);
    this.canvas.addEventListener("mouseup", this.endDrag, false);
  },
  unmounted() {
    this.canvas.removeEventListener("mousemove", this.mouseMove);
    this.canvas.removeEventListener("click", this.click);
    this.canvas.removeEventListener("mousedown", this.startDrag);
    this.canvas.removeEventListener("mouseup", this.endDrag);
  }
};
</script>

<style lang="scss" scoped>
.canvas {
  width: 100%;
  margin: 0;
  border: 1px solid #eee;
  height: calc(100vh - 150px);
}
</style>
