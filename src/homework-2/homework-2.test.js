import { logNumbersCompare, logMonth, logFiguresCompare } from "./homework-2";

describe("homework-2", () => {
  describe("logNumbersCompare", () => {
    it("log first number if it is greater", () => {
      const spy = jest.spyOn(console, "log");
      logNumbersCompare(57, 11);
      expect(spy).toHaveBeenCalledWith(57);
      spy.mockRestore();
    });

    it("log second number if it is greater", () => {
      const spy = jest.spyOn(console, "log");
      logNumbersCompare(2, 4);
      expect(spy).toHaveBeenCalledWith(4);
      spy.mockRestore();
    });
  });

  describe("logMonth", () => {
    it('log "Март" if user entered 3', () => {
      const spyLog = jest.spyOn(console, "log");
      jest.spyOn(window, "prompt").mockReturnValue("3");
      logMonth();
      expect(spyLog).toHaveBeenCalledWith("Март");
      spyLog.mockRestore();
    });

    it('log "Август" if user entered 8', () => {
      const spyLog = jest.spyOn(console, "log");
      jest.spyOn(window, "prompt").mockReturnValue("8");
      logMonth();
      expect(spyLog).toHaveBeenCalledWith("Август");
      spyLog.mockRestore();
    });
  });

  describe("logFiguresCompare", () => {
    it("if circle fits", () => {
      const spy = jest.spyOn(console, "log");
      logFiguresCompare(20, 30);
      expect(spy).toHaveBeenCalledWith("Круг уместится");
      spy.mockRestore();
    });

    it("if circle does not fit", () => {
      const spy = jest.spyOn(console, "log");
      logFiguresCompare(25, 30);
      expect(spy).toHaveBeenCalledWith("Круг не уместится");
      spy.mockRestore();
    });
  });
});
