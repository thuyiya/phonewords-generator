import React, { SyntheticEvent } from "react";
import styled from "styled-components";

import SeatMap from "components/Keyboard/SeatMap";
import { Alert } from "@kiwicom/orbit-components";
import Text from "@kiwicom/orbit-components/lib/Text";
import InputField from "@kiwicom/orbit-components/lib/InputField";

import { inputValiadtion } from "utils/common";
import { STRINGS, UI_SIZES } from "app-constants";


type Props = {
  onChnageText: Function;
};

const Container = styled.div`
  width: ${UI_SIZES.KEYBOARD.INPUT_WIDTH}
`


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
    <Container>
      <InputField
        value={text}
        id={STRINGS.KEYBOARD.INPUT.ID}
        width={UI_SIZES.KEYBOARD.INPUT_WIDTH}
        inputMode={"numeric"}
        placeholder={STRINGS.KEYBOARD.INPUT.PLACEHOLDER}
        spaceAfter="small"
        label={STRINGS.KEYBOARD.INPUT.LABEL}
        type={"number"}
        error={inputValiadtion(text)}
        onChange={onTypeHandler}
      />
      <Alert title={null} icon={false} spaceAfter="small">
        <Text>{STRINGS.KEYBOARD.INPUT.HELP}</Text>
      </Alert>
      <SeatMap selectFromNumberPad={selectFromNumberPad}/>
    </Container>
  );
};

export default Keyboard;

