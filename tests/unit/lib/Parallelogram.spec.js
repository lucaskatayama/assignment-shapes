import { expect } from "chai";
import Parallelogram from "@/lib/Parallelogram.js";

describe("Parallelogram", function() {
  describe("for points A(0,1) B(0, 0) C(1, 0)", function() {
    let p = new Parallelogram({ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 0 });
    it("area should be 1", function() {
      expect(p.getArea()).to.equal(1);
    });
    it("point D should be (1, 1)", function() {
      const pointD = p.getPointD();
      expect(pointD.x).to.equal(1);
      expect(pointD.y).to.equal(1);
    });
    it("center of mass should be (0.5, 0.5)", function() {
      const centerOfMass = p.getCenterOfMass();
      expect(centerOfMass.x).to.equal(0.5);
      expect(centerOfMass.y).to.equal(0.5);
    });
  });

  describe("for points A(0,1) B(0, 0) C(1, 1)", function() {
    let p = new Parallelogram({ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 1 });
    it("area should be 1", function() {
      expect(p.getArea()).to.be.closeTo(1, 0.00001);
    });
    it("point D should be (1, 2)", function() {
      const pointD = p.getPointD();
      expect(pointD.x).to.equal(1);
      expect(pointD.y).to.equal(2);
    });
    it("center of mass should be (0.5, 2)", function() {
      const centerOfMass = p.getCenterOfMass();
      expect(centerOfMass.x).to.equal(0.5);
      expect(centerOfMass.y).to.equal(1);
    });
  });

  describe("for points A(0,0) B(2,2*Math.sqrt(3)) C(4,0)", function() {
    let p = new Parallelogram(
      { x: 0, y: 0 },
      { x: 2, y: 2 * Math.sqrt(3) },
      { x: 4, y: 0 }
    );
    it("area should be 8*Math.sqrt(3)", function() {
      expect(p.getArea()).to.be.closeTo(8 * Math.sqrt(3), 0.00001);
    });
    it("point D should be (2, -2 * Math.sqrt(3))", function() {
      const pointD = p.getPointD();
      expect(pointD.x).to.equal(2);
      expect(pointD.y).to.equal(-2 * Math.sqrt(3));
    });
    it("center of mass should be (2, 0)", function() {
      const centerOfMass = p.getCenterOfMass();
      expect(centerOfMass.x).to.equal(2);
      expect(centerOfMass.y).to.equal(0);
    });
  });
});
