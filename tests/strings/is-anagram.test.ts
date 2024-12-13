import IsAnagram from "../../src/strings/is-anagram";
describe("test is anagram", () => {
	test("should return falsy when 2 input dont have a same length ", () => {
		expect(IsAnagram("ggwp", "ggezzz")).toBeFalsy;
	});
	test("should return true when input have a same length and the same character", () => {
		expect(IsAnagram("ggwp", "ggwp")).toBeTruthy;
	});
	test("should return true when input have a same length but swap position", () => {
		expect(IsAnagram("ggwp", "wpgg")).toBeTruthy;
	});
	test("should return false when first string input used a value all it up", () => {
		expect(IsAnagram("ggwp", "wggg")).toBeFalsy;
	});
});
