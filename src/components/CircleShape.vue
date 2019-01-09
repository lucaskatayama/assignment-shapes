<template>
  <g>
    <circle :cx="center.x"
            :cy="center.y"
            :r="radius"
            fill="none"
            :stroke="color"></circle>
  </g>
</template>

<script>
export default {
  name: "CircleShape",
  props: {
    center: Object,
    radius: Number,
    color: String
  }
};
</script>

<style>
</style>
