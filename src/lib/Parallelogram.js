import Geometry from "./Geometry.js";

class Parallelogram {
  constructor(pointA, pointB, pointC) {
    this.pointA = pointA;
    this.pointB = pointB;
    this.pointC = pointC;
  }

  /**
   * Calculates area by calculating a matrix determinant of a triangle
   *
   * @returns Area in pixels
   * @memberof pointArallelogram
   */
  getArea() {
    return Math.abs(
      this.pointA.x * this.pointB.y +
        this.pointA.y * this.pointC.x +
        this.pointB.x * this.pointC.y -
        this.pointC.x * this.pointB.y -
        this.pointC.y * this.pointA.x -
        this.pointB.x * this.pointA.y
    );
  }

  /**
   * Get last point D by decomposing the edges
   *
   * @returns point D {x: Number, y: Number}
   * @memberof pointArallelogram
   */
  getPointD() {
    const deltaBA = Geometry.delta(this.pointB, this.pointA);
    const deltaBC = Geometry.delta(this.pointB, this.pointC);

    return {
      x: this.pointB.x + deltaBA.x + deltaBC.x,
      y: this.pointB.y + deltaBA.y + deltaBC.y
    };
  }

  /**
   * Get center of mass.
   * @returns
   * @memberof Geometry
   */
  getCenterOfMass() {
    const deltaBA = Geometry.delta(this.pointB, this.pointA);
    const deltaBC = Geometry.delta(this.pointB, this.pointC);

    return {
      x: this.pointB.x + (deltaBA.x + deltaBC.x) / 2,
      y: this.pointB.y + (deltaBA.y + deltaBC.y) / 2
    };
  }

  get points() {
    return [this.pointA, this.pointB, this.pointC, this.getPointD()];
  }
}

export default Parallelogram;
