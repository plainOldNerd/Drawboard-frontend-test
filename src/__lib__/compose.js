import multiply from "./multiply"

// recursively multiply, until there's nothing left to multiply by!
var compose = (first, ...mxs) => {
  if (!mxs.length) return first
  var [next, ...rest] = mxs
  return compose(multiply(first, next), ...rest)
}

export default compose
