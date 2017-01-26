import xform_point from "./xform_point"
import compose     from "./compose"

it("identity doesnt modify the point", () => {
  var xform = xform_point([ 1, 0, 0, 1, 0, 0 ])

  expect(xform({ x:1, y:2 })).toEqual({ x:1, y:2 })
  expect(xform({ x:3, y:4 })).toEqual({ x:3, y:4 })
  expect(xform({ x:0, y:0 })).toEqual({ x:0, y:0 })
  expect(xform({ x:0, y:0, type:"M" })).toEqual({ x:0, y:0, type:"M" })
})

it("can translate a point", () => {
  var xform = xform_point([ 1, 0, 0, 1, 5, 4 ])

  expect(xform({ x:1, y:2 })).toEqual({ x:6, y:6 })
  expect(xform({ x:3, y:4 })).toEqual({ x:8, y:8 })
  expect(xform({ x:0, y:0 })).toEqual({ x:5, y:4 })
  expect(xform({ x:0, y:0, type:"M" })).toEqual({ x:5, y:4, type:"M" })
})

it("can scale a point", () => {
  var xform = xform_point([ 2, 0, 0, 0.5, 0, 0 ])

  expect(xform({ x:1, y:2 })).toEqual({ x:2, y:1 })
  expect(xform({ x:3, y:4 })).toEqual({ x:6, y:2 })
  expect(xform({ x:0, y:0 })).toEqual({ x:0, y:0 })
  expect(xform({ x:0, y:0, type:"M" })).toEqual({ x:0, y:0, type:"M" })
})

it("can rotate a point", () => {
  var xform = xform_point([ 0, 1, -1, 0, 0, 0 ])

  expect(xform({ x:1, y:2 })).toEqual({ x:-2, y:1 })
  expect(xform({ x:3, y:4 })).toEqual({ x:-4, y:3 })
  expect(xform({ x:0, y:0 })).toEqual({ x:0, y:0 })
  expect(xform({ x:0, y:0, type:"M" })).toEqual({ x:0, y:0, type:"M" })
})

it("can all of the above", () => {
  var xform = xform_point(compose(
    [ 1, 0,  0, 1,   0, 0 ],
    [ 1, 0,  0, 1,   5, 4 ],
    [ 2, 0,  0, 0.5, 0, 0 ],
    [ 0, 1, -1, 0,   0, 0 ],
  ))

  expect(xform({ x:1, y:2 })).toEqual({ x:1, y:4.5 })
  expect(xform({ x:3, y:4 })).toEqual({ x:-3, y:5.5 })
  expect(xform({ x:0, y:0 })).toEqual({ x:5, y:4 })
  expect(xform({ x:0, y:0, type:"M" })).toEqual({ x:5, y:4, type:"M" })
})
