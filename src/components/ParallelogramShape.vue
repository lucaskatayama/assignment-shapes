<template>
  <g>
    <point :key="idx" :point="point" color="#FF0000" v-for="(point, idx) in firstThree"/>
    <position-label :position="parallelogram.CM"/>
    <polygon :points="polygonPoints" fill="none" stroke="blue"></polygon>
  </g>
</template>

<script>
import Point from "./Point.vue";

export default {
  name: "Parallelogram",
  components: {
    Point
  },
  props: {
    parallelogram: Object
  },
  computed: {
    polygonPoints() {
      return this.parallelogram.points
        .map(point => `${point.x},${point.y}`)
        .join(" ");
    },
    firstThree() {
      return this.parallelogram.points.slice(0, 3);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
