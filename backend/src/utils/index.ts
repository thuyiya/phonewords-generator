import { CONVERSIONS_NUMBER_AND_WORD_CONFIG } from '../constants';

const GetAllWords = (pressed_buttons: Array<number>): string[] =>  {
  let letters = [];
  
  for (let i = 0; i < pressed_buttons.length; i++) {
    letters.push(CONVERSIONS_NUMBER_AND_WORD_CONFIG[pressed_buttons[i]]);
  }

  let progress = 0;
  const current_word = "";
  const limit = pressed_buttons.length;
  let found_words: Array<string> = [];

  const return_value = RecursiveWordGenerator(
    letters,
    progress,
    current_word,
    limit,
    found_words
  );

  return return_value
}

const RecursiveWordGenerator = (
  letters: string[][],
  progress: number,
  currentWord: string,
  limit: number,
  found_words: any[]
)  => {
  if (progress == limit) {
    found_words.push(currentWord);
  } else {
    for (var i = 0; i < letters[progress].length; i++) {
      var next_word = currentWord + letters[progress][i];

      RecursiveWordGenerator(
        letters,
        progress + 1,
        next_word,
        limit,
        found_words
      );
    }
  }

  return found_words;
}


export {
    GetAllWords
}