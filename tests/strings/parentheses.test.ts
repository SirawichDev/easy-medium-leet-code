import { ValidParentheses } from '../../strings/parentheses'
describe('test valid parentheses', () => { 
  test('should return true when there contained with opening and closing tag', () =>{
    expect(ValidParentheses('([{}])')).toBe(true)
  })
  test('should return falsy when there contained with opening but dont have closing tag', () =>{
    expect(ValidParentheses('((')).toBe(false)
  })
  test('should return falsy when there contained with opening but thare are wrong closing tag', () =>{
    expect(ValidParentheses('((}]')).toBe(false)
  })
  test('should return falsy when there start with closing tag', () =>{
    expect(ValidParentheses(']')).toBe(false)
  })
 })