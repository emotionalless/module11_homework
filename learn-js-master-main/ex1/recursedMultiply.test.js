import { recursedMultiply } from "./recursedMultiply";

describe('tests for recursedMultiply function', () => {

    it("should raise to a positive power", () => expect(recursedMultiply(2, 2)).toBe(4));

    it("should raise to a negative power", () => expect(recursedMultiply(2, -2)).toBe(0.25));

    it("should check if the data is a number", () => expect(recursedMultiply(2, '2')).toBe("Данные должны быть числами"));

    it("should check if the data is an integer", () => expect(recursedMultiply(2, 2.2)).toBe("Числа должны быть целыми"));
})