import { addAgeProp, createObjectCopy, destructsObject } from "./homework-4";

describe("homework-4", () => {
  const obj = {
    name: "John",
  };

  describe("addAgeProp", () => {
    it("'age' property is added to the object", () => {
      jest.spyOn(window, "prompt").mockReturnValue("19");
      addAgeProp(obj);
      expect(obj).toHaveProperty("age");
    });

    it("add value to object", () => {
      jest.spyOn(window, "prompt").mockReturnValue("35");
      addAgeProp(obj);
      expect(obj.age).toBe(35);
    });
  });

  describe("createObjectCopy", () => {
    it("add 'role' property to object", () => {
      const objCopy = createObjectCopy(obj);
      expect(objCopy.role).toBe("admin");
    });

    it("objects have the same properties", () => {
      const admin = createObjectCopy(obj);
      expect(admin.name).toBe(obj.name);
      expect(admin.age).toBe(obj.age);
    });
  });

  describe("destructsObject", () => {
    it("properties are written to variables", () => {
      const admin = createObjectCopy(obj);
      const spy = jest.spyOn(console, "log");
      destructsObject(admin);
      expect(spy).toHaveBeenCalledWith("John", 35, "admin");
    });
  });
});
