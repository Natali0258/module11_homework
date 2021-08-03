import { repeatWord } from "./task_11.6.3.js";
describe("tests for repeatWord function", () => {
	it("should operate cottectly with positive number", () => {
		expect(repeatWord("кот", 3)).toBe(`кот1, кот2, кот3, `)
	});
	it("should operate cottectly with integer invalid (negative) number", () => {
		expect(repeatWord("кот", -3)).toBe(`Ошибка: число меньше или равно нулю`)
	});
	it("should operate cottectly with integer invalid number", () => {
		expect(repeatWord("кот", "b")).toBe(`Ошибка: count не число`)
	});
});