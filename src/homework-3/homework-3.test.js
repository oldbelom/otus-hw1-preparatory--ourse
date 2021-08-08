import { logSum, logMultiplyTable, logAarithmeticMean } from "./homework-3";

describe("homework-3", () => {
  describe("logSum", () => {
    it("log sum of numbers from a 50 to 100", () => {
      const spy = jest.spyOn(console, "log");
      logSum(50);
      expect(spy).toHaveBeenCalledWith(3825);
      spy.mockRestore();
    });

    it("log sum of numbers from a 90 to 100", () => {
      const spy = jest.spyOn(console, "log");
      logSum(90);
      expect(spy).toHaveBeenCalledWith(1045);
      spy.mockRestore();
    });
  });

  describe("logMultiplyTable", () => {
    it("log multiply table for 7", () => {
      const spy = jest.spyOn(console, "log");
      logMultiplyTable(7);
      expect(spy).toHaveBeenCalledWith("7 x 1 = 7");
      expect(spy).toHaveBeenCalledWith("7 x 2 = 14");
      expect(spy).toHaveBeenCalledWith("7 x 3 = 21");
      expect(spy).toHaveBeenCalledWith("7 x 4 = 28");
      expect(spy).toHaveBeenCalledWith("7 x 5 = 35");
      expect(spy).toHaveBeenCalledWith("7 x 6 = 42");
      expect(spy).toHaveBeenCalledWith("7 x 7 = 49");
      expect(spy).toHaveBeenCalledWith("7 x 8 = 56");
      expect(spy).toHaveBeenCalledWith("7 x 9 = 63");
      expect(spy).toHaveBeenCalledWith("7 x 10 = 70");
      spy.mockRestore();
    });

    it("console.log calls 10 times", () => {
      const spy = jest.spyOn(console, "log");
      logMultiplyTable(9);
      expect(spy).toBeCalledTimes(10);
      spy.mockRestore();
    });
  });

  describe("logAarithmeticMean", () => {
    it("log 5 for number === 9", () => {
      const spyLog = jest.spyOn(console, "log");
      jest.spyOn(window, "prompt").mockReturnValue("9");
      logAarithmeticMean();
      expect(spyLog).toHaveBeenCalledWith(5);
      spyLog.mockRestore();
    });

    it('log "NaN" for number === 0', () => {
      const spyLog = jest.spyOn(console, "log");
      jest.spyOn(window, "prompt").mockReturnValue("0");
      logAarithmeticMean();
      expect(spyLog).toHaveBeenCalledWith(NaN);
      spyLog.mockRestore();
    });
  });
});
