import { head, tail, empty, bind, apply, zip, times } from "./seq"

it("head", () => {
  expect(head([])).toEqual(undefined)
  expect(head([1])).toEqual(1)
  expect(head([1,2,3,4,5,6])).toEqual(1)
})

it("tail", () => {
  expect(tail([])).toEqual([])
  expect(tail([1])).toEqual([])
  expect(tail([1,2,3,4,5,6])).toEqual([2,3,4,5,6])
})

it("empty", () => {
  expect(empty([])).toBeTruthy()
  expect(empty([1])).toBeFalsy()
  expect(empty([1,2,3,4,5,6])).toBeFalsy()
})

it("bind", () => {
  var fn1 = a => a * 2
  var fn2 = a => a / 2

  expect(bind(1, [fn1])).toEqual(2)
  expect(bind(2, [fn2])).toEqual(1)
  expect(bind(1, [fn1, fn2])).toEqual(1)
  expect(bind(5, [fn1, fn2])).toEqual(5)
  expect(bind(5, [fn1, fn2, fn1, fn2, fn1, fn2])).toEqual(5)
})

it("apply", () => {
  expect(apply(2, a=>a*2)).toEqual(4)
})

it("zip", () => {
  var add = (a,b) => a + b
  var mul = (a,b) => a * b

  var arr1 = [1,2,3]
  var arr2 = [1,2,3,4]

  expect(zip(arr1,arr1,add)).toEqual([2,4,6])
  expect(zip(arr1,arr2,add)).toEqual([2,4,6])
  expect(zip(arr2,arr1,add)).toEqual([2,4,6])
  expect(zip(arr2,arr2,add)).toEqual([2,4,6,8])

  expect(zip(arr1,arr1,mul)).toEqual([1,4,9])
  expect(zip(arr1,arr2,mul)).toEqual([1,4,9])
  expect(zip(arr2,arr1,mul)).toEqual([1,4,9])
  expect(zip(arr2,arr2,mul)).toEqual([1,4,9,16])
})

it("times", () => {
  expect(times(1,5)).toEqual([5])
  expect(times(2,5)).toEqual([5,5])
  expect(times(3,5)).toEqual([5,5,5])
  expect(times(4,5)).toEqual([5,5,5,5])
  expect(times(5,5)).toEqual([5,5,5,5,5])
})
