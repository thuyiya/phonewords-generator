const STRINGS = {
    KEYBOARD: {
      INPUT: {
        ID: "search_input",
        LABEL: "Phone number",
        HELP: "Make sure to input 2 to 9",
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
      WIDTH: "280px",
    },
  };
  
  const COLORS = {
    THEME: {
      ORANGE_LIGHT: "orangeLight",
      CLOUD_LIGHT: "cloudLight",
    },
  };
  
  export {
    KEY_BORAD_LAYOUT,
    UI_SIZES,
    STRINGS,
    COLORS,
  };
  