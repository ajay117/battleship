import Ship from './Ship'

export default function GameBoard(length) {
  let gameBoard = new Array(length).fill(null)
  let placeShip = (location, carrier) => {
    let boardEnd = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99]
    if (boardEnd.some((elem) => elem < location + carrier.shipArr.length - 1)) {
      return 'Cannot place ship'
    } else {
      let board = [...gameBoard]
      board.splice(location, carrier.shipArr.length)
      carrier.shipArr.forEach((element) => {
        let obj = { hasShip: true, isHit: false }
        board.splice(location, 0, obj)
        location++
      })
      return board
    }
  }

  return {
    placeShip,
  }
}
