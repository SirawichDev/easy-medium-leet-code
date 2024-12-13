import { ContainDuplicate } from '../../arrays/contain-dupplicate'
describe("test contain dupplicate", () => {
    test('returns true for an array with duplicates', () => {
      expect(ContainDuplicate([1, 2, 3, 4, 1])).toBe(true);
    });
  
    test('returns false for an array without duplicates', () => {
      expect(ContainDuplicate([1, 2, 3, 4, 5])).toBe(false);
    });
  
    test('returns false for an empty array', () => {
      expect(ContainDuplicate([])).toBe(false);
    });
  
    test('returns false for an array with a single element', () => {
      expect(ContainDuplicate([42])).toBe(false);
    });
  
    test('handles an array with all elements being the same', () => {
      expect(ContainDuplicate([7, 7, 7, 7])).toBe(true);
    });
  
    test('handles large arrays with no duplicates', () => {
      const largeArray = Array.from({ length: 100000 }, (_, i) => i);
      expect(ContainDuplicate(largeArray)).toBe(false);
    });
  
    test('handles large arrays with duplicates', () => {
      const largeArray = Array.from({ length: 99999 }, (_, i) => i).concat(42);
      expect(ContainDuplicate(largeArray)).toBe(true);
    });
});
