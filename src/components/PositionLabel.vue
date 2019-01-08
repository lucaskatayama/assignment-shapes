<template>
  <g>
    <text :x="position.x + translate.x" :y="position.y + translate.y" fill="black">
      ({{position.x}}, {{position.y}})
    </text>
  </g>
</template>

<script>
export default {
  name: "PositionLabel",
  props: {
    position: Object,
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

<style>
</style>
