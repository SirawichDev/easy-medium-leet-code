import LengthOfLongestSubstrings from "../../src/strings/length-of-longest-substrings";
describe("test length of longest substrings", () => {
	test("should return correct result if there are difference charecter in input", () => {
		expect(LengthOfLongestSubstrings("abcd")).toBe(4);
	});
	test("should return correct result if there are duplicate character in input", () => {
		expect(LengthOfLongestSubstrings("abcdeffkkvvc")).toBe(6);
	});
	test("should return one if there is one string on input", () => {
		expect(LengthOfLongestSubstrings("a")).toBe(1);
	});
});
