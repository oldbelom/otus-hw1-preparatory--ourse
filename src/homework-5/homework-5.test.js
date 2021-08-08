import {
  logSumOfArrayElements,
  createMultipliedArray,
  logMaxAndMinArrayEl,
} from "./homework-5";

describe("homework-5", () => {
  const arr1 = [11, 3, 15, 21];
  const arr2 = [1];

  describe("logSumOfArrayElements", () => {
    it("log sum of arr1 elements", () => {
      const spy = jest.spyOn(console, "log");
      logSumOfArrayElements(arr1);
      expect(spy).toHaveBeenCalledWith(50);
      spy.mockRestore();
    });
    it("log sum of arr2 elements", () => {
      const spy = jest.spyOn(console, "log");
      logSumOfArrayElements(arr2);
      expect(spy).toHaveBeenCalledWith(1);
      spy.mockRestore();
    });
  });

  describe("createMultipliedArray", () => {
    it("log log multiplied by 2 arr1", () => {
      const spy = jest.spyOn(console, "log");
      createMultipliedArray(arr1);
      expect(spy).toHaveBeenCalledWith([22, 6, 30, 42]);
      spy.mockRestore();
    });
    it("log multiplied by 2 arr2", () => {
      const spy = jest.spyOn(console, "log");
      createMultipliedArray(arr2);
      expect(spy).toHaveBeenCalledWith([2]);
      spy.mockRestore();
    });
  });

  describe("logMaxAndMinArrayEl", () => {
    it("log min and max for arr1", () => {
      const spyLog = jest.spyOn(console, "log");
      logMaxAndMinArrayEl(arr1);
      expect(spyLog).toHaveBeenCalledWith("Наибольший элемент: ", 21);
      expect(spyLog).toHaveBeenCalledWith("Наименьший элемент: ", 3);
      spyLog.mockRestore();
    });

    it("log min and max for arr2", () => {
      const spyLog = jest.spyOn(console, "log");
      logMaxAndMinArrayEl(arr2);
      expect(spyLog).toHaveBeenCalledWith("Наибольший элемент: ", 1);
      expect(spyLog).toHaveBeenCalledWith("Наименьший элемент: ", 1);
      spyLog.mockRestore();
    });
  });
});
