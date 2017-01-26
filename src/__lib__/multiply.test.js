import multiply from "./compose"

it("composes matrices", () => {
  expect(multiply([1,0,0,1,0,0], [1,0,0,1,0,0])).toEqual([1,0,0,1,0,0])
  expect(multiply([1,0,0,1,0,0], [2,0,0,2,0,0])).toEqual([2,0,0,2,0,0])
  expect(multiply([2,0,0,2,0,0], [1,0,0,1,0,0])).toEqual([2,0,0,2,0,0])
  expect(multiply([1,1,1,1,1,1], [1,1,1,1,1,1])).toEqual([2,2,2,2,3,3])
  expect(multiply([1,0,0,1,4,4], [1,0,0,1,5,5])).toEqual([1,0,0,1,9,9])
  expect(multiply([2,0,0,2,4,4], [1,0,0,1,5,5])).toEqual([2,0,0,2,14,14])
  expect(multiply([0.5,0,0,0.5,4,4], [1,0,0,1,4,4])).toEqual([0.5,0,0,0.5,6,6])
  expect(multiply([2,0,0,2,0,0], [0.5,0,0,0.5,0,0])).toEqual([1,0,0,1,0,0])
  expect(multiply([2,0,0,2,0,0], [2,0,0,2,0,0])).toEqual([4,0,0,4,0,0])
})

