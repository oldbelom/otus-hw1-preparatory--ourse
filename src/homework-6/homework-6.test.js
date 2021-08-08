import { diff, isWord, pow } from "./homework-6";

describe("homework-6", () => {
  describe("diff", () => {
    it("is a function", () => {
      expect(diff).toBeInstanceOf(Function);
    });

    it("return correct value if the first argument is greater", () => {
      expect(diff(3, 7)).toBe(4);
      expect(diff(10, 40)).toBe(30);
    });

    it("return correct value if the second argument is greater", () => {
      expect(diff(6, 5)).toBe(1);
      expect(diff(17, 7)).toBe(10);
    });
  });

  describe("isWord", () => {
    it("is a function", () => {
      expect(isWord).toBeInstanceOf(Function);
    });

    it("return true for 'мама' string", () => {
      expect(isWord("мама")).toBe(true);
    });

    it("return true for ' мама ' string", () => {
      expect(isWord(" мама ")).toBe(true);
    });

    it("return false for 'мама мыла раму' string", () => {
      expect(isWord("мама мыла раму")).toBe(false);
    });
  });

  describe("pow", () => {
    it("raises 2 to power 1", () => {
      expect(pow(2, 1)).toBe(2);
    });

    it("raises 3 to power 3", () => {
      expect(pow(3, 3)).toBe(27);
    });

    it("raises 30 to power 0", () => {
      expect(pow(30, 0)).toBe(1);
    });

    it("raises 0 to power 7", () => {
      expect(pow(0, 7)).toBe(0);
    });
  });
});
