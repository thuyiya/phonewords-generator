import { STRINGS } from "app-constants";
import { substituteStringVariables, chefIfContains, inputValiadtion } from "utils/common";

describe("Common Functions: substituteStringVariables", () => {
  it("One param success", () => {
    expect(substituteStringVariables("My name is %s", "Thusitha")).toEqual(
      "My name is Thusitha"
    );
  });

  it("One param fail", () => {
    expect(substituteStringVariables("My name is %s", "Thusitha")).not.toEqual(
      "My name is ThusithaX"
    );
  });

  it("More than one param success", () => {
    expect(
      substituteStringVariables("My name is %s %s", "Thusitha", "And I love me")
    ).toEqual("My name is Thusitha And I love me");
  });
});

describe("Common Functions: chefIfContains", () => {
  it("Check Number Contain another digit", () => {
    expect(chefIfContains(2302, 0)).toBe(true);
  });
  it("Check Number Contain another digit failed with no contain", () => {
    expect(chefIfContains(2302, 6)).toBe(false);
  });
});

describe("Common Functions: inputValiadtion", () => {
    it("Empty should retern empty string", () => {
      expect(inputValiadtion("")).toEqual("");
    });
    
    it("Check Number Contain 1", () => {
        const inputNumber = 2341
        const inputValueToNumber = String(inputNumber)
        expect(inputValiadtion(inputValueToNumber)).toEqual(substituteStringVariables(STRINGS.VALIDATION.ERROR_INPUT, `${inputValueToNumber}`, "1"));
    });

    it("Check Number Contain 0", () => {
        const inputNumber = 2340
        const inputValueToNumber = String(inputNumber)
        expect(inputValiadtion(inputValueToNumber)).toEqual(substituteStringVariables(STRINGS.VALIDATION.ERROR_INPUT, `${inputValueToNumber}`, "0"));
    });
  });