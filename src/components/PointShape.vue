<template>
  <g>
    <circle :class="{draggable: draggable}" :cx="point.x" :cy="point.y" :r="radius" :stroke="color" fill="transparent"></circle>
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
    draggable: {
      type: Boolean,
      default: false
    },
    color: String,
    point: Object,
    radius: {
      type: String,
      default: "5.5px"
    }
  }
};
</script>

<style scoped>
.draggable {
  cursor: move;
}
</style>
