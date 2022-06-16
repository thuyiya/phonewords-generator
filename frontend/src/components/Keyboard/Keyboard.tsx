import React, { SyntheticEvent } from "react";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import { STRINGS, UI_SIZES } from "app-constants";
import SeatMap from "components/Keyboard/SeatMap";
import { Alert } from "@kiwicom/orbit-components";

type Props = {
  onChnageText: Function;
};

const Keyboard: React.FC<Props> = ({ onChnageText }) => {
  const [text, setText] = React.useState("");
  const selectFromNumberPad = (key: any) => {
    const newValue = !isNaN(key) ? `${text}${key}` : "";
    onChange(newValue);
  };

  const onChange = (value: string) => {
    setText(value);
    onChnageText(value);
  };

  const onTypeHandler = (event: SyntheticEvent<HTMLInputElement, Event>) => {
    onChange((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <InputField
        value={text}
        id={STRINGS.KEYBOARD.INPUT.ID}
        width={UI_SIZES.KEYBOARD.INPUT_WIDTH}
        inputMode={"numeric"}
        placeholder={STRINGS.KEYBOARD.INPUT.PLACEHOLDER}
        spaceAfter="small"
        label={STRINGS.KEYBOARD.INPUT.LABEL}
        type={"number"}
        error={""}
        onChange={onTypeHandler}
      />
      <Alert title={null} icon={false} spaceAfter="small">{STRINGS.KEYBOARD.INPUT.HELP}</Alert>
      <SeatMap selectFromNumberPad={selectFromNumberPad}/>
    </div>
  );
};

export default Keyboard;
