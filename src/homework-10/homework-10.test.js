import checkString from "./homework-10";

describe("homework-10", () => {
  describe("checkString", () => {
    it("identified string as a date", () => {
      const spyLog = jest.spyOn(console, "log");
      jest.spyOn(window, "prompt").mockReturnValue("21.04.1987");
      checkString();
      expect(spyLog).toHaveBeenCalledWith("Это дата");
      spyLog.mockRestore();
    });

    it("identified string as a email", () => {
      const spyLog = jest.spyOn(console, "log");
      jest.spyOn(window, "prompt").mockReturnValue("happy-student@learn.com");
      checkString();
      expect(spyLog).toHaveBeenCalledWith("Это почта");
      spyLog.mockRestore();
    });

    it("identified string as a phone", () => {
      const spyLog = jest.spyOn(console, "log");
      jest.spyOn(window, "prompt").mockReturnValue("+7-912-141-22-95");
      checkString();
      expect(spyLog).toHaveBeenCalledWith("Это телефон");
      spyLog.mockRestore();
    });
  });
});
