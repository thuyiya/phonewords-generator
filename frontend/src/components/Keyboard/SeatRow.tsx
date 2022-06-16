import React from "react";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import SeatButton from "components/Keyboard/SeatButton";

type Props = {
  rowDetails: Array<number>, 
  selectFromNumberPad: Function
};

const SeatRow: React.FC<Props> = ({ rowDetails, selectFromNumberPad }) => (
  <Stack direction="row" align="center">
    {rowDetails.map((seat, i) => (
      <SeatButton key={i} currentSeat={seat} onClick={selectFromNumberPad} />
    ))}
  </Stack>
);

export default SeatRow;