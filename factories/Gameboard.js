import Ship from './Ship'
import { shipTypes } from '../modules/shipTypes'

export default function GameBoard(length) {
  let gameBoard = new Array(length).fill(null)
  let carrier = Ship(shipTypes.carrier)
  let battleship = Ship(shipTypes.battleship)

  let placeShip = (locationCarrier, locationBattleship) => {
    let boardEnd = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99]
    if (
      boardEnd.some(
        (elem) => elem < locationCarrier + carrier.shipArr.length - 1
      )
    ) {
      return 'Cannot place ship'
    } else {
      let board = [...gameBoard]

      // Place Carrier
      board.splice(locationCarrier, carrier.shipArr.length)
      carrier.shipArr.forEach((element) => {
        let obj = { hasShip: true, isHit: false }
        board.splice(locationCarrier, 0, obj)
        locationCarrier++
      })

      // Place Battleship
      board.splice(locationBattleship, battleship.shipArr.length)
      battleship.shipArr.forEach((element) => {
        let obj = { hasShip: true, isHit: false }
        board.splice(locationBattleship, 0, obj)
        locationBattleship
      })

      return board
    }
  }

  return {
    placeShip,
  }
}
