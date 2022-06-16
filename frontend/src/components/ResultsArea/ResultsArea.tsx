import React from "react";
import Box, { ColorTokens } from "@kiwicom/orbit-components/lib/Box";
import Text from "@kiwicom/orbit-components/lib/Text";
import { UI_SIZES, COLORS, STRINGS } from "app-constants";

type Props = {
  error: string;
  text: string;
};

const ResultsArea: React.FC<Props> = ({ text, error }) => {
  return (
    <Box
      display="flex"
      direction="column"
      align="start"
      padding="small"
      margin="small"
      color={COLORS.THEME.CLOUD_LIGHT as ColorTokens}
      textAlign="center"
      justify="between"
      width={UI_SIZES.RESULT_AREA.WIDTH}
      background={COLORS.THEME.ORANGE_LIGHT as ColorTokens}
    >
      <Text>{STRINGS.RESULT_AREA.TITLE}</Text>
      <Text type={!!error ? "critical" : "success"}>{text}</Text>
    </Box>
  );
};

export default ResultsArea;
