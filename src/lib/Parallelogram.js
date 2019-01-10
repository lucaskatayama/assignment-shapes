class Parallelogram {
  constructor(pointA, pointB, pointC) {
    this.pA = pointA;
    this.pB = pointB;
    this.pC = pointC;
  }

  /**
   2 triangles together
   Determinant * 2
   */
  get area() {
    return Math.abs(
      this.pA.x * this.pB.y +
        this.pA.y * this.pC.x +
        this.pB.x * this.pC.y -
        this.pC.x * this.pB.y -
        this.pC.y * this.pA.x -
        this.pB.x * this.pA.y
    );
  }

  get deltaBA() {
    return {
      x: this.pA.x - this.pB.x,
      y: this.pA.y - this.pB.y
    };
  }

  get deltaBC() {
    return {
      x: this.pC.x - this.pB.x,
      y: this.pC.y - this.pB.y
    };
  }

  get pD() {
    return {
      x: this.pB.x + this.deltaBA.x + this.deltaBC.x,
      y: this.pB.y + this.deltaBA.y + this.deltaBC.y
    };
  }

  get CM() {
    return {
      x: this.pB.x + (this.deltaBA.x + this.deltaBC.x) / 2,
      y: this.pB.y + (this.deltaBA.y + this.deltaBC.y) / 2
    };
  }

  get points() {
    return [this.pA, this.pB, this.pC, this.pD];
  }
}

export default Parallelogram;
