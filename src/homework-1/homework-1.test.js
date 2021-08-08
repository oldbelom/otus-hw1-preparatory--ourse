import { logСalculations, logStringsLength, logInputSum } from "./homework-1";

describe("homework-1", () => {
  describe("logСalculations", () => {
    it("is a function", () => {
      expect(logСalculations).toBeInstanceOf(Function);
    });

    it("is defined", () => {
      expect(logСalculations).toBeDefined();
    });

    it("nested console.log is called", () => {
      const spy = jest.spyOn(console, "log");
      logСalculations(1, 2);
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });

    it("nested console.log takes the correct argument", () => {
      const spy = jest.spyOn(console, "log");
      logСalculations(3, 5);
      expect(spy).toHaveBeenCalledWith(15, 8);
      spy.mockRestore();
    });
  });

  describe("logStringsLength", () => {
    it("nested console.log is called", () => {
      const spy = jest.spyOn(console, "log");
      logStringsLength("а", "б");
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });

    it("nested console.log takes the correct argument", () => {
      const spy = jest.spyOn(console, "log");
      logStringsLength("я", "строка");
      expect(spy).toHaveBeenCalledWith(7);
      spy.mockRestore();
    });
  });

  describe("logInputSum", () => {
    it("log sum of numbers", () => {
      const spy = jest.spyOn(console, "log");
      jest.spyOn(window, "prompt").mockReturnValue("623");
      logInputSum();
      expect(spy).toHaveBeenCalledWith(11);
      spy.mockRestore();
    });
    it("log sum of numbers again", () => {
      const spy = jest.spyOn(console, "log");
      jest.spyOn(window, "prompt").mockReturnValue("215");
      logInputSum();
      expect(spy).toHaveBeenCalledWith(8);
      spy.mockRestore();
    });
  });
});
