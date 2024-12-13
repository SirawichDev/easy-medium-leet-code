import { TwoSums } from '../../arrays/two-sums'
describe("Two sums", () => {
	test("it should return empty array when no element found", () => {
		expect(TwoSums([2, 7, 11, 15], 111)).toStrictEqual([]);
	});
	test("it should return correct index when found the elements and combine to target", () => {
		expect(TwoSums([2, 7, 11, 15], 9)).toStrictEqual([0,1]);
	});
	test("it should return correct index when array contained with negative number", () => {
		expect(TwoSums([-1, -2, -3, 15], 12)).toStrictEqual([2,3]);
	});
	test("it should return correct index when array contained with 0", () => {
		expect(TwoSums([0, -2, -3, 0], 0)).toStrictEqual([0,3]);
	});
});
