<template>
  <g>
    <circle
      v-for="(point, idx) in p.points"
      :cx="point.x"
      :cy="point.y"
      :r="5.5"
      fill="white"
      stroke="blue"></circle>
    <circle
      :cx="p.CM.x"
      :cy="p.CM.y"
      :r="5.5"
      fill="white"
      stroke="blue"></circle>
    <position-label
      :position="p.CM" />

    <position-label
      v-for="(point, idx) in p.points"
      :position="point" />
    <polygon :points="polygonPoints" stroke="blue" fill="none"></polygon>

  </g>
</template>

<script>
import PositionLabel from "./PositionLabel.vue";

export default {
  name: "Parallelogram",
  components: {
    PositionLabel
  },
  props: {
    p: Object
  },
  computed: {
    polygonPoints() {
      console.log(this.p);
      return this.p.points.map(point => `${point.x},${point.y}`).join(" ");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
