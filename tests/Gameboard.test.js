import GameBoard from '../factories/Gameboard'
import Ship from '../factories/Ship'
import { shipTypes } from '../modules/shipTypes'

describe('GameBoard function', () => {
  let carrier
  let gameBoard
  beforeEach(() => {
    carrier = Ship(shipTypes.carrier)
    gameBoard = GameBoard(7)
  })

  test('Check placeship function', () => {
    expect(gameBoard.placeShip(0, carrier)).toEqual([
      { hasShip: true, isHit: false },
      { hasShip: true, isHit: false },
      { hasShip: true, isHit: false },
      { hasShip: true, isHit: false },
      { hasShip: true, isHit: false },
      null,
      null,
    ])
  })

  test('Check if ship overflow outside board', () => {
    expect(gameBoard.placeShip(6, carrier)).toBe('Cannot place ship')
  })

  
})
