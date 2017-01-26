import rgba from "./unit_to_rgba"

it("converts unit to rgba", () => {
  expect(rgba("FFFFFFFF")).toEqual("rgba(255,255,255,1)")
  expect(rgba("00000000")).toEqual("rgba(0,0,0,0)")
  expect(rgba("FF000000")).toEqual("rgba(0,0,0,1)")
  expect(rgba("FFFF0000")).toEqual("rgba(255,0,0,1)")
  expect(rgba("FF00FF00")).toEqual("rgba(0,255,0,1)")
  expect(rgba("FF0000FF")).toEqual("rgba(0,0,255,1)")
  expect(rgba("CC000000")).toEqual("rgba(0,0,0,0.8)")
  expect(rgba("FFFFCC00")).toEqual("rgba(255,204,0,1)")
})
