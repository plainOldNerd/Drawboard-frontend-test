import { bind, tail, head } from "../__lib__/seq"
import deconstruct          from "./unit_deconstruct"

var join = d => d.join(",")
var rgb  = d => `rgba(${ d })`

var jigger = argb =>
  [...tail(argb), head(argb)]

export default unit =>
  bind(unit, [deconstruct, jigger, join, rgb])
