export default function Ship(length) {
  let shipArr = new Array(length).fill(null)
  let hit = (index) => {
    shipArr.splice(index, 1, 'hit')
    return shipArr
  }

  let isSunk = () => {
    return shipArr.every((elem) => {
      return elem === 'hit'
    })
  }
  return {
    // length,
    shipArr,
    hit,
    isSunk,
  }
}
