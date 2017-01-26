/*
*   | a b c |   | x |   | ax + by + cz |
*   | d e f | * | y | = | dx + ey + fz |
*   | g h i |   | z |   | gx + hy + iz |
*
*   | 1 0 5 |   | 3 |   | 8 |
*   | 0 1 6 | * | 1 | = | 7 |
*   | 0 0 1 |   | 1 |   | 1 |
*
*   -------------------------------------
*
*   import xform_point from "./xform_point"
*
*   var xform = xform_point([1,0,0,1,5,6])
*   
*   xform({ x:3, y:1, type:"M" })
*   // { x:8, y:7, type:"M" }
*
*   xform({ x:3, y:1, type:"L" })
*   // { x:8, y:7, type:"L" }
*
*   xform({ type:"Z" })
*   // { type:"Z" }
*
*   -------------------------------------
*
*   https://developer.mozilla.org/en/docs/Web/SVG/Attribute/transform
*/

export default ([a, d, b, e, c, f]) => ({ x, y, ...rest }) =>
  (x==null || y==null)
    ? rest
    : {
        ...rest,
        x: (a*x) + (b*y) + (c*1),
        y: (d*x) + (e*y) + (f*1),
      }
