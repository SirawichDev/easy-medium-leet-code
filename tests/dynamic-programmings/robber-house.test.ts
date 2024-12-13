import RobberHouse from "../../src/dynamic-programming/robber-house";
describe("test climb stairs", () => {
	test("should find a maximum price and followin security rule", () => {
		expect(RobberHouse([2, 3, 4, 5, 1])).toBe(8);
	});
	test("should return 0 if there no house to rob", () => {
		expect(RobberHouse([])).toBe(0);
	});
	test("should return price of the house there is only one house to rob", () => {
		expect(RobberHouse([2])).toBe(2);
	});
	test("should return correct maximum price if there 2 houses to rob", () => {
		expect(RobberHouse([1, 2])).toBe(2);
	});
});
