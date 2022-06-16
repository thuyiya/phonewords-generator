import type { Request, Response, NextFunction } from 'express';
import { ERROR_RESPONCE } from '../common/messages';
import { STRINGS, NUMBER_CONFIG } from '../constants';

const ValidateNumberArray = (data: string): boolean => {
    const value = data as string;
    const digitsStringArray = value.split("");
    if(digitsStringArray.length > 0) {
        return true
    }

    return false
}

const validateNumberWithPhone = (number: string): boolean => {
  if(number.length <= NUMBER_CONFIG.MAX_LENGTH) {
    const reg = new RegExp(NUMBER_CONFIG.REGEX);
    return reg.test(number)    
  };

  return false
}

const ConvertorValidator = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if(!req.query.value) {
      throw new Error(STRINGS.MESSAGES.VALUE_QUERY_NOT_DEFINED)
    }

    const validateQueryValue = ValidateNumberArray(req.query.value as string)

    if(!validateQueryValue) {
        throw new Error(STRINGS.MESSAGES.PROVIDE_TWO_TO_NINE_NUMBERS)
    }

    if(!validateNumberWithPhone(req.query.value as string)) {
      throw new Error(STRINGS.MESSAGES.NO_TWOZERO_TOAND_ONE_NUMBERS)
  }

    next()
  } catch (e) {
    return res.status(400).json(ERROR_RESPONCE.validation((e as Error).message));
  }
};

export {
    ConvertorValidator,
};
