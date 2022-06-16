import React from "react";
import type { NextPage } from "next";
import Box from "@kiwicom/orbit-components/lib/Box";
import Keyboard from "components/Keyboard/Keyboard";
import MainLayout from "components/MainLayout/MainLayout";
import ResultsArea from "components/ResultsArea/ResultsArea";
import { STRINGS } from "app-constants";
import Page from "components/Page/Page";

const Home: NextPage = () => {
  const [text, setText] = React.useState("");
  const [results, setResults] = React.useState("");

  return (
    <Page title={STRINGS.PAGES.HOME.TITLE}>
      <MainLayout>
        <Box
          margin="small"
          padding="small"
          display="flex"
          direction="column"
          align="center"
          justify="center"
        >
          <Keyboard onChnageText={setText} />
          <ResultsArea text={results} error={""} />
        </Box>
      </MainLayout>
    </Page>
  );
};

export { Home };
