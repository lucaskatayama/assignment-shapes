import { expect } from "chai";
import Circle from "@/lib/Circle.js";

describe("Circle", function() {
  describe("for area 1", function() {
    let circle = new Circle({ x: 0, y: 0 }, 1);
    it("radius should be close to 0.564189822", function() {
      expect(circle.getRadius()).to.be.closeTo(0.564189822, 0.00001);
    });
  });
  describe("for area equals to 3.14159", function() {
    let circle = new Circle({ x: 0, y: 0 }, 3.14159);
    it("radius should be close to 1", function() {
      expect(circle.getRadius()).to.be.closeTo(1, 0.00001);
    });
  });
});
