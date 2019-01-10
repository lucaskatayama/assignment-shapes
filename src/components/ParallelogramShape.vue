<template>
  <g>
    <position-label :position="parallelogram.CM"/>
    <polygon :points="polygonPoints" fill="none" stroke="blue"></polygon>
  </g>
</template>

<script>
export default {
  name: "Parallelogram",
  components: {},
  props: {
    parallelogram: Object
  },
  computed: {
    polygonPoints() {
      return this.parallelogram.points
        .map(point => `${point.x},${point.y}`)
        .join(" ");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
