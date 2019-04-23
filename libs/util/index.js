export const getElementHeight = function(elem) {
  const box = elem.getBoundingClientRect()
  return box.top + pageYOffset
}
