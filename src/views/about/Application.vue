<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Application</h1>
      </div>
      <div class="content">
        <h2 id="goal">Goal</h2>
        <p>The goal of this application is to interact with the user and draws some geometrical shapes:</p>
        <ul>
          <li>a blue parallelogram, having three of its corners in the points selected by the user.</li>
          <li>a yellow circle, with the same area and centre of mass as the parallelogram.</li>
        </ul>
        <h2 id="calculations">Calculations</h2>
        <h3 id="parallelogram">Parallelogram</h3>
        <h4 id="4th-point-point-d-">4th point (point D)</h4>
        <p>The 4th was calculated by decomposing the edges BA and BC and them sum them to reach point D, like in the image below:</p>
        <p>
          <img class="graph" alt="Calculation point D" src="@/assets/img/about/calc_pointD.png">
        </p>
        <h4 id="area-of-a-parallelogram">Area of a Parallelogram</h4>
        <p>A parallelogram is made of 2 triangles with same area. One of them is determined by the 3 points A, B, C given by the user.</p>
        <p>To calculate the area of a triangle ABC, we can use the determinant of a matrix:</p>
        <p>
          <img class="math" alt="Area triangle ABC" src="@/assets/img/about/calc_areaabc.png">
        </p>
        <p>Or 2 times the triangle area is the parallelogram area:</p>
        <p>
          <img class="math" alt="Area ABCD" src="@/assets/img/about/calc_areaabcd.png">
        </p>
        <p>
          <img class="math"  alt="Area ABCD" src="@/assets/img/about/calc_areaabcd1.png">
        </p>
        <h4 id="center-of-mass">Center of Mass</h4>
        <p>The center of mass is calculated by summing to the point B, half of distance of the edge components BA and BC:</p>
        <p>
          <img class="graph" alt="Calculation Center of Mass" src="@/assets/img/about/calc_centermass.png">
        </p>
        <h3 id="circle">Circle</h3>
        <h4 id="center">Center</h4>
        <p>Center of the circle is the same as the center of mass of the parallelogram.</p>
        <h4 id="radius">Radius</h4>
        <p>The radius could be found using its area:</p>
        <p>
          <img class="math" alt="Calculation radius" src="@/assets/img/about/calc_radius.png">
        </p>
      </div>
  </div>
</template>

<style lang="scss" scoped>
img.graph {
  max-height: 30vh;
  max-width: 30vw;
}
img.math {
  height: 10vh;
}

.content {
  h2 {
    margin-top: 1em;
  }
}
</style>
