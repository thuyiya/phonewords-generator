import React from "react";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import { KEY_BORAD_LAYOUT } from "app-constants";
import SeatRow from "components/Keyboard/SeatRow";

type Props = {
  selectFromNumberPad: Function;
};

const SeatMap: React.FC<Props> = ({ selectFromNumberPad }) => (
  <Stack>
    {KEY_BORAD_LAYOUT.map((row, i) => (
      <SeatRow
        key={i}
        rowDetails={row as Array<number>}
        selectFromNumberPad={selectFromNumberPad}
      />
    ))}
  </Stack>
);

export default SeatMap;
