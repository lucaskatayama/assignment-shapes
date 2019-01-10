class Circle {
  constructor(center, area) {
    this.center = center;
    this.area = area;
  }

  setCenter(center) {
    this.center.x = center.x;
    this.center.y = center.y;
  }

  setArea(area) {
    this.area = area;
  }

  /**
   * Get radius from area
   *
   * @returns
   * @memberof Circle
   */
  getRadius() {
    return Math.sqrt(this.area / Math.PI);
  }
}

export default Circle;
