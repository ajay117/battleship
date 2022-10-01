import Ship from '../modules/Ship'

describe('Ship functions', () => {
  let ship
  beforeEach(() => {
    ship = Ship(3)
  })

  test('Mark position as hit', () => {
    expect(ship.hit(2)).toEqual([null, null, 'hit'])
    expect(ship.hit(1)).toEqual([null, 'hit', 'hit'])
    expect(ship.hit(0)).toEqual(['hit', 'hit', 'hit'])
  })

  test('Check if ship sanked', () => {
    ship.hit(0)
    ship.hit(1)
    ship.hit(2)
    expect(ship.isSunk()).toBe(true)
  })

  test('Check if ship in not sanked', () => {
    ship.hit(0)
    ship.hit(1)
    expect(ship.isSunk()).toBe(false)
  })
})
