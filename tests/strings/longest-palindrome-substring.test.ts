import LongestPalindromeSubstring from "../../src/strings/longest-palindrome-substring";
describe("test Longest Palindromic Substring", () => {
	test("it should return correct longest substring of palindrome", () => {
		expect(LongestPalindromeSubstring("ccsdabacsss")).toBe("aba");
	});
	test("it should return correct string when input is single character", () => {
		expect(LongestPalindromeSubstring("a")).toBe("a");
	});
	test("it should return correct string when input is palindrome ", () => {
		expect(LongestPalindromeSubstring("aaaaaaa")).toBe("aaaaaaa");
	});
	test("it should return empty string if input is empty string ", () => {
		expect(LongestPalindromeSubstring("")).toBe("");
	});
});
