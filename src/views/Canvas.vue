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
        <ul>
          <li v-if="points.length > 0">Points
            <ul>
              <li :key="idx" v-for="(point, idx) in points">({{point.x}}, {{point.y}})</li>
              <li v-if="p">({{p.pD.x}}, {{p.pD.y}})</li>
            </ul>
          </li>
          <template v-if="p">
            <li>Center of Mass: ({{p.CM.x}}, {{p.CM.y}})</li>
            <li>Area: {{p.area}}</li>
          </template>

        </ul>

        <h3>Circle</h3>
        <ul v-if="p">
          <li>Center of Mass: ({{p.CM.x}}, {{p.CM.y}})</li>
          <li>Area: {{p.area}}</li>
          <li>Radius: {{radius}}px</li>
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
          <parallelogram-shape :parallelogram="p" v-if="points.length === 3"></parallelogram-shape>
          <circle-shape :center="centerOfMass" :radius="radius" color="#FFD438" v-if="points.length === 3"></circle-shape>
          <point :point="mouse" color="#FF0000"></point>
          <point draggable :key="idx" :point="point" color="#FF0000" v-for="(point, idx) in points"></point>
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
import Point from "@/components/Point.vue";

export default {
  name: "home",
  components: {
    ParallelogramShape,
    CircleShape,
    Point
  },
  data() {
    return {
      mouse: {
        x: 0,
        y: 0
      },
      points: [],
      p: null,
      selectedPoint: null
    };
  },
  computed: {
    radius() {
      return Math.sqrt(this.p.area / Math.PI);
    },
    centerOfMass() {
      return this.p.CM;
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
      }
    },
    distance(a, b) {
      return Math.sqrt(Math.abs((a.x - b.x) ** 2 + (a.y - b.y) ** 2));
    },
    click(evt) {
      let mouse = this.getMousePos(this.canvas, evt);
      const point = this.points.find(p => {
        return this.distance(p, mouse) <= 5.5;
      });
      if (!point) {
        this.addParallelogramPoint(mouse);
      }
    },
    startDrag(evt) {
      let mouse = this.getMousePos(this.canvas, evt);
      const point = this.points.find(p => {
        return this.distance(p, mouse) <= 5.5;
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
