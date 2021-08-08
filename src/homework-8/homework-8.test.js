import { logWeekDay, getMinutesToday, getYoungerPerson } from "./homework-8";

describe("homework-8", () => {
  describe("logWeekDay", () => {
    it("log 'ЧТ' for '25.03.2021'", () => {
      const spyLog = jest.spyOn(console, "log");
      jest.spyOn(window, "prompt").mockReturnValue("25.03.2021");
      logWeekDay();
      expect(spyLog).toHaveBeenCalledWith("ЧТ");
      spyLog.mockRestore();
    });
    it("log 'ВС' for '23.09.2007'", () => {
      const spyLog = jest.spyOn(console, "log");
      jest.spyOn(window, "prompt").mockReturnValue("23.09.2007");
      logWeekDay();
      expect(spyLog).toHaveBeenCalledWith("ВС");
      spyLog.mockRestore();
    });
  });

  describe("getMinutesToday", () => {
    it("is a function", () => {
      expect(getMinutesToday).toBeInstanceOf(Function);
    });

    it("is defined", () => {
      expect(getMinutesToday).toBeDefined();
    });

    it("console.log have been called", () => {
      const spyLog = jest.spyOn(console, "log");
      getMinutesToday();
      expect(spyLog).toHaveBeenCalled();
    });
  });

  describe("getYoungerPerson", () => {
    it("log younger for '25.03.1991' and '26.03.1991'", () => {
      const spyLog = jest.spyOn(console, "log");
      getYoungerPerson("25.03.1991", "26.03.1991");
      expect(spyLog).toHaveBeenCalledWith("Первый пользователь младше");
    });

    it("log younger for '25.03.1990' and '26.03.1968'", () => {
      const spyLog = jest.spyOn(console, "log");
      getYoungerPerson("25.03.1990", "26.03.1968");
      expect(spyLog).toHaveBeenCalledWith("Второй пользователь младше");
    });
  });
});
