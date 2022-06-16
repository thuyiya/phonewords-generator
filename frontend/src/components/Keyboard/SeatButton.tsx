import React from "react";
import Button from "@kiwicom/orbit-components/lib/Button";
import Box from "@kiwicom/orbit-components/lib/Box";
import { UI_SIZES } from "app-constants";

type Props = {
  currentSeat: number;
  onClick: Function;
};

const SeatButton: React.FC<Props> = ({ currentSeat, onClick }) =>
  currentSeat !== null ? (
    <Button
      onClick={() => onClick(currentSeat)}
      width={UI_SIZES.KEYBOARD.BUTTON_WIDTH}
      type="primary"
      tabIndex={currentSeat}
    >
      {`${currentSeat}`}
    </Button>
  ) : (
    <Box
      width={UI_SIZES.KEYBOARD.BUTTON_WIDTH}
      height={UI_SIZES.KEYBOARD.HEIGHT}
    />
  );

export default SeatButton;
