<template>
  <g>
    <position-label :position="position" />
    <circle :cx="position.x" :cy="position.y" :r="radius" fill="white" stroke="black"></circle>
  </g>
</template>

<script>
import PositionLabel from "./PositionLabel.vue";

export default {
  name: "MouseCircle",
  components: {
    PositionLabel
  },
  props: {
    position: Object,
    radius: {
      type: Number,
      default: 5
    },
    props: Object,
    translate: {
      type: Object,
      default() {
        return {
          x: 10,
          y: -10
        };
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
