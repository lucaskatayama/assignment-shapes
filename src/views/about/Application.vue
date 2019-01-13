<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Application</h1>
      </div>
      <div class="content">
        <section>
          <h2 id="goal">Goal</h2>
          <p>The goal of this application is to interact with the user and draws some geometrical shapes:</p>
          <ul>
            <li>a blue parallelogram, having three of its corners in the points selected by the user.</li>
            <li>a yellow circle, with the same area and centre of mass as the parallelogram.</li>
          </ul>
        </section>
        <section>
          <h2 id="calculations">How to use</h2>
          <p>Access the [Canvas] using the navigation bar on the top left</p>
          <p>Them click 3 times on the canvas located on the main section, on the right side.</p>
          <p>After the 3rd point, you will see all the information about the shape on the left side.</p>
          <p>
            <ul>
              <li>You can found all 3 points selected by click in the format (x, y) in pixels.</li>
              <li>The parallelogram's 4th point.</li>
              <li>The area in pixels<sup>2</sup> and its center of mass in the format (x, y) in pixels.</li>
              <li>You can also find the circle's information. Its area (pixels<sup>2</sup>) and its radius (pixels).</li>
          </p>
          <p>If you want to move one of the 3 points, just move the cursor on top of one point, and drag it to the new position.</p>
          <p>All the information should be updated.</p>
          <p> To reset the canvas, click on the button [Reset], located on the right side.</p>
        </section>
        <section>
          <h2>How the information was calculated?</h2>
          <p>You can find out how I calculated all the information, by accessing the [Geometry] section on the right side.</p>
        </section>
        <section>
          <h2>Source code</h2>
          <p>
            All the source code can be cloned on the github repository:
            <a target="_blank" href="https://github.com/lucaskatayama/assignment-shapes"> https://github.com/lucaskatayama/assignment-shapes</a>
          </p>
          <p>
            An online version can be found here:
            <a target="_blank" href="http://github.lucaskatayama.com/assignment-shapes/">
            http://github.lucaskatayama.com/assignment-shapes/
            </a>
          </p>
        </section>
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
