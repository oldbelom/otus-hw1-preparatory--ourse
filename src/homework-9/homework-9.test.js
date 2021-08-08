import {
  isTriangleRight,
  logCircleProps,
  logQuadraticRoots,
} from "./homework-9";

describe("homework-9", () => {
  describe("isTriangleRight", () => {
    it("return true if triangle is right", () => {
      expect(isTriangleRight(3, 4, 5)).toBe(true);
    });

    it("return false if triangle is not right", () => {
      expect(isTriangleRight(10, 16, 8)).toBe(false);
    });
  });

  describe("logCircleProps", () => {
    it("log circumference", () => {
      const spyLog = jest.spyOn(console, "log");
      logCircleProps(10);
      expect(spyLog).toHaveBeenCalledWith(63);
      spyLog.mockRestore();
    });

    it("log circle area", () => {
      const spyLog = jest.spyOn(console, "log");
      logCircleProps(10);
      expect(spyLog).toHaveBeenCalledWith(314);
      spyLog.mockRestore();
    });
  });

  describe("logQuadraticRoots", () => {
    it("log quadratic roots for 1, -3, -4", () => {
      const spy = jest.spyOn(console, "log");
      logQuadraticRoots(1, -3, -4);
      expect(spy).toHaveBeenCalledWith(4, -1);
      spy.mockRestore();
    });

    it("log 1 root if discriminant === 0", () => {
      const spy = jest.spyOn(console, "log");
      logQuadraticRoots(2, 4, 2);
      expect(spy).toHaveBeenCalledWith(-4);
      spy.mockRestore();
    });

    it('log "корней нет" if discriminant < 0', () => {
      const spy = jest.spyOn(console, "log");
      logQuadraticRoots(1, 1, 1);
      expect(spy).toHaveBeenCalledWith("корней нет");
      spy.mockRestore();
    });
  });
});
