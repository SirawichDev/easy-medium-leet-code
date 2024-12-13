import ValidPalidrome from '../../src/strings/valid-palindrome'
describe('test valid palindrome', () => { 
  test('should return true when string input is palindrome', () =>{
    expect(ValidPalidrome('aba')).toBe(true)
  })
  test('should return false when string input is not palindrome', () =>{
    expect(ValidPalidrome('aaxx')).toBe(false)
  })
 })