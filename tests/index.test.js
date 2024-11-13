const yourName = 'Farhan Rafly'

const number1 = 10
const number2 = 20

describe('Example Testing', () => {
  it('Check Name', () => {
    expect(yourName).toBe('Farhan Rafly')
  })

  it('Check Sum', () => {
    expect(number1 + number2).toBe(30)
  })
})

test('Minus Sum', () => {
  expect(number2 - number1).toBe(10)
})
