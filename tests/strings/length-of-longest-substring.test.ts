import { lengthOfLongestSubstrings } from '../../strings/length-of-longest-substrings'
describe('test length of longest substrings', () => { 
  test('should return correct result if there are difference charecter in input', () =>{
    expect(lengthOfLongestSubstrings('abcd')).toBe(4)
  })
  test('should return correct result if there are duplicate character in input', () =>{
    expect(lengthOfLongestSubstrings('abcdeffkkvvc')).toBe(6)
  })
  test('should return one if there is one string on input', () =>{
    expect(lengthOfLongestSubstrings('a')).toBe(1)
  })
 })