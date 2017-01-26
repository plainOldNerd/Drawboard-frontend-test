import decon from "./unit_deconstruct.js"

it("deconstructs unit colors", () => {
  expect(decon("FFFFFFFF")).toEqual([1,255,255,255])
  expect(decon("00000000")).toEqual([0,0,0,0])
  expect(decon("FF000000")).toEqual([1,0,0,0])
  expect(decon("FFFF0000")).toEqual([1,255,0,0])
  expect(decon("FF00FF00")).toEqual([1,0,255,0])
  expect(decon("FF0000FF")).toEqual([1,0,0,255])
  expect(decon("CC000000")).toEqual([0.8,0,0,0])
  expect(decon("FFFFCC00")).toEqual([1,255,204,0])
})
