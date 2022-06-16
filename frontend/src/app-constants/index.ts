const STRINGS = {
  KEYBOARD: {
    INPUT: {
      ID: "search_input",
      LABEL: "Phone number",
      HELP: "Make sure to input only 2 to 9 digits, \n for better results.",
      PLACEHOLDER: "Type...",
    },
  },
  PAGES: {
    HOME: {
      TITLE: "Home",
    },
  },
  RESULT_AREA: {
    TITLE: "Results:",
  },
  VALIDATION: {
    PROVIDE_A_NUMBER: "Error: Please provide a number",
    ERROR_INPUT: "Error: Input value \"%s\" contain \"%s\""
  },
  ERROR_MESSAGES: {
    NUMBER_TO_WORD_CONVERT: {
      SERVER_ERROR: "Server Error, Please Try Again!",
      NO_RESULTS: "No Results",
    },
  },
};

const ENDPOINTS = {
  convert: `convertor/?value=`,
};

const KEY_BORAD_LAYOUT = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [null, 0, "Clear"],
];

const UI_SIZES = {
  KEYBOARD: {
    INPUT_WIDTH: "280px",
    BUTTON_WIDTH: "84px",
    HEIGHT: "44px",
  },
  RESULT_AREA: {
    WIDTH: "290px",
  },
};

const COLORS = {
  THEME: {
    ORANGE_LIGHT: "orangeLight",
    CLOUD_LIGHT: "cloudLight",
  },
};

export {
  ENDPOINTS,
  KEY_BORAD_LAYOUT,
  UI_SIZES,
  STRINGS,
  COLORS,
};
