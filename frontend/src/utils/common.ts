import { STRINGS } from "../app-constants";

const substituteStringVariables = (str: string, ...args: string[]): string => {
  var counter: number = 0;
  return str.replace(/%s/g, () => args[counter++]);
}

const chefIfContains = (number: number, key: number): Boolean => {
    return String(number).includes(String(key))
}

const inputValiadtion = (text: string) => {

  if(text == "") {
    return ""
  }

  const inputValueToNumber = Number(text)

  if(inputValueToNumber == NaN) {
    return STRINGS.VALIDATION.PROVIDE_A_NUMBER
  }

  if(chefIfContains(inputValueToNumber, 0)) {
    return substituteStringVariables(STRINGS.VALIDATION.ERROR_INPUT, `${inputValueToNumber}`, "0")
  }

  if(chefIfContains(inputValueToNumber, 1)) {
    return substituteStringVariables(STRINGS.VALIDATION.ERROR_INPUT, `${inputValueToNumber}`, "1")
  }

  return ""
};

export { inputValiadtion, substituteStringVariables, chefIfContains };
