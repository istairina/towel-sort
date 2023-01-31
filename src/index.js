
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return (matrix) ? matrix.map((elem, ind) => {
    let newElem = elem;
    if (ind % 2) {
      newElem = elem.reverse();
    }
    return newElem;
  }).flat() : [];
}
