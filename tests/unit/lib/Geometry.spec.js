import { expect } from "chai";
import geometry from "@/lib/Geometry.js";

describe("Geometry", function() {
  describe("for A(1, 0) and B(2, 0)", function() {
    const a = { x: 1, y: 0 };
    const b = { x: 2, y: 0 };
    it("distance should be 1", function() {
      expect(geometry.distance(a, b)).to.be.equal(1);
    });
    it("delta should be (1, 0)", function() {
      expect(geometry.delta(a, b)).to.deep.equal({ x: 1, y: 0 });
    });
  });
  describe("for A(2, 0) and B(1, 0)", function() {
    const a = { x: 2, y: 0 };
    const b = { x: 1, y: 0 };
    it("distance should be 1", function() {
      expect(geometry.distance(a, b)).to.be.equal(1);
    });
    it("delta should be (-1, 0)", function() {
      expect(geometry.delta(a, b)).to.deep.equal({ x: -1, y: 0 });
    });
  });
  describe("for A(0, 1) and B(0, 2)", function() {
    const a = { x: 0, y: 1 };
    const b = { x: 0, y: 2 };
    it("distance should be 1", function() {
      expect(geometry.distance(a, b)).to.be.equal(1);
    });
    it("delta should be (0, 1)", function() {
      expect(geometry.delta(a, b)).to.deep.equal({ x: 0, y: 1 });
    });
  });
  describe("for A(0, 2) and B(0, 1)", function() {
    const a = { x: 0, y: 2 };
    const b = { x: 0, y: 1 };
    it("distance should be 1", function() {
      expect(geometry.distance(a, b)).to.be.equal(1);
    });
    it("delta should be (0, -1)", function() {
      expect(geometry.delta(a, b)).to.deep.equal({ x: 0, y: -1 });
    });
  });
  describe("for A(1, 1) and B(0, 0)", function() {
    const a = { x: 1, y: 1 };
    const b = { x: 0, y: 0 };
    it("distance should be sqrt(2)", function() {
      expect(geometry.distance(a, b)).to.be.equal(Math.sqrt(2));
    });
    it("delta should be (-1, -1)", function() {
      expect(geometry.delta(a, b)).to.deep.equal({ x: -1, y: -1 });
    });
  });
});
