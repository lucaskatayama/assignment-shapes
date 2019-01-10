/**
 * Distance between 2 points
 *
 * @param {*} a
 * @param {*} b
 * @returns distance in pixles
 */
function distance(a, b) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

/**
 * Coordinate variation between 2 points
 *
 * @param {*} startPoint
 * @param {*} endPoint
 * @returns Variation in pixels
 */
function delta(startPoint, endPoint) {
  return {
    x: endPoint.x - startPoint.x,
    y: endPoint.y - startPoint.y
  };
}

export default {
  distance,
  delta
};
