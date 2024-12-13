import ClimbStairs from '../../dynamic-programming/climb-stairs'
describe('test climb stairs', () => { 
  test('should return n when there are n step less than 3', () =>{
    expect(ClimbStairs(1)).toBe(1)
    expect(ClimbStairs(2)).toBe(2)
    expect(ClimbStairs(3)).toBe(3)
  })

  test('should return correct answer when there are n step more than 3', () =>{
    expect(ClimbStairs(4)).toBe(5)
  })
  test('should return correct answer when there are n step reach max 45', () =>{
    expect(ClimbStairs(45)).toBe(1836311903)
  })
})