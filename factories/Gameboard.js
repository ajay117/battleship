import Ship from './Ship'
import { shipTypes } from '../modules/shipTypes'

export default function GameBoard(length) {
  let gameBoard = new Array(length).fill(null)

  let placeShip = (location, shipType) => {
    let ship = Ship(shipTypes[shipType])
    let boardStart = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
    let boardEnd = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99]
    let pushShip = () => {
      // Place Carrier
      gameBoard.splice(location, ship.shipArr.length)
      ship.shipArr.forEach((element) => {
        let obj = { hasShip: true, isHit: false }
        gameBoard.splice(location, 0, obj)
        location++
      })
      return gameBoard
    }

    if (
      gameBoard[location] === null &&
      gameBoard[location + ship.shipArr.length - 1] === null
    ) {
      if (location >= 0 && location <= 9) {
        if (location + ship.shipArr.length - 1 <= 9) {
          return pushShip()
        } else {
          return 'Cannot place ship'
        }
      }

      if (location >= 10 && location <= 19) {
        if (location + ship.shipArr.length - 1 <= 19) {
          return pushShip()
        } else {
          return 'Cannot place ship'
        }
      }

      if (location >= 20 && location <= 29) {
        if (location + ship.shipArr.length - 1 <= 29) {
          return pushShip()
        } else {
          return 'Cannot place ship'
        }
      }

      if (location >= 30 && location <= 39) {
        if (location + ship.shipArr.length - 1 <= 39) {
          return pushShip()
        } else {
          return 'Cannot place ship'
        }
      }

      if (location >= 40 && location <= 49) {
        if (location + ship.shipArr.length - 1 <= 49) {
          return pushShip()
        } else {
          return 'Cannot place ship'
        }
      }

      if (location >= 50 && location <= 59) {
        if (location + ship.shipArr.length - 1 <= 59) {
          return pushShip()
        } else {
          return 'Cannot place ship'
        }
      }

      if (location >= 60 && location <= 69) {
        if (location + ship.shipArr.length - 1 <= 69) {
          return pushShip()
        } else {
          return 'Cannot place ship'
        }
      }

      if (location >= 70 && location <= 79) {
        if (location + ship.shipArr.length - 1 <= 79) {
          return pushShip()
        } else {
          return 'Cannot place ship'
        }
      }

      if (location >= 80 && location <= 89) {
        if (location + ship.shipArr.length - 1 <= 89) {
          return pushShip()
        } else {
          return 'Cannot place ship'
        }
      }

      if (location >= 90 && location <= 99) {
        if (location + ship.shipArr.length - 1 <= 99) {
          return pushShip()
        } else {
          return 'Cannot place ship'
        }
      }
    } else {
      return 'Cannot Overlap'
    }
  }

  return {
    placeShip,
  }
}
