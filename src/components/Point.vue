<template>
  <g>
    <circle :cx="point.x" :cy="point.y" :r="radius" :stroke="color" fill="none"></circle>
    <position-label :position="point"/>
  </g>
</template>

<script>
import PositionLabel from "./PositionLabel.vue";

export default {
  name: "Point",
  components: {
    PositionLabel
  },
  props: {
    color: String,
    point: Object,
    radius: {
      type: String,
      default: "5.5px"
    }
  }
};
</script>

<style>
</style>
