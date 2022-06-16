import type { Request, Response } from 'express';
import { SUCCESS_RESPONCE, ERROR_RESPONCE } from '../common/messages';
import { GetAllWords } from '../utils';

const ConvertorController = async (req: Request, res: Response) => {
  try {
    const value = req.query.value as string;
    const digitsStringArray = value.split("");
    
    let digits: number[] = [];

    digitsStringArray.forEach((digit) => {
      digits.push(Number(digit))
    });

    if (digits && digits.length > 0) {
      const convertion = GetAllWords(digits);

      return res.status(200).json(SUCCESS_RESPONCE.success(convertion.join(", ")))
    } else {
      throw new Error("not working");
    }
  } catch (e) {
    return res.status(400).json(ERROR_RESPONCE.notFound((e as Error).message));
  }
};

export {
  ConvertorController,
};
