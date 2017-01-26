import { zip, apply, times } from "../__lib__/seq"
import round                 from "./round"

var split = d => d.split(/(?=(?:..)*$)/)
var color = d => parseInt(d, 16)
var alpha = d => round(color(d) / 255)
var appli = [alpha, ...times(3, color)]

export default unit =>
  zip(split(unit), appli, apply)
