import GameBoard from '../factories/Gameboard'
import Ship from '../factories/Ship'
import { shipTypes } from '../modules/shipTypes'

describe('GameBoard function', () => {
  //   let carrier
  let gameBoard
  beforeEach(() => {
    // carrier = Ship(shipTypes.carrier)
    gameBoard = GameBoard(20)
  })

  test('Check placeship function', () => {
    expect(gameBoard.placeShip(0, 'carrier')).toEqual([
      { hasShip: true, isHit: false },
      { hasShip: true, isHit: false },
      { hasShip: true, isHit: false },
      { hasShip: true, isHit: false },
      { hasShip: true, isHit: false },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ])
  })

  test('Check if ship overflow outside board', () => {
    expect(gameBoard.placeShip(6, 'carrier')).toBe('Cannot place ship')
  })

    test('Check placing battleship', () => {
      expect(gameBoard.placeShip(7, 'battleship')).toBe('Cannot place ship')
    })

  test('Check placing carrier and battleship', () => {
    gameBoard.placeShip(3, 'carrier')
    expect(gameBoard.placeShip(10, 'battleship')).toEqual([
      null,
      null,
      null,
      {
        hasShip: true,
        isHit: false,
      },
      {
        hasShip: true,
        isHit: false,
      },
      {
        hasShip: true,
        isHit: false,
      },
      {
        hasShip: true,
        isHit: false,
      },
      {
        hasShip: true,
        isHit: false,
      },
      null,
      null,
      { hasShip: true, isHit: false },
      { hasShip: true, isHit: false },
      { hasShip: true, isHit: false },
      { hasShip: true, isHit: false },
      null,
      null,
      null,
      null,
      null,
      null,
    ])
  })
})
