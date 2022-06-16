import React from "react";
import type { NextPage } from "next";
import Box from "@kiwicom/orbit-components/lib/Box";
import Keyboard from "components/Keyboard/Keyboard";
import MainLayout from "components/MainLayout/MainLayout";
import { inputValiadtion } from "utils/common";
import ResultsArea from "components/ResultsArea/ResultsArea";
import EndpointService from "services/endpoint";
import { STRINGS } from "app-constants";
import Page from "components/Page/Page";

const Home: NextPage = () => {
  const [text, setText] = React.useState("");
  const [results, setResults] = React.useState("");

  React.useEffect(() => {
    const search = async () => {
      if (text.length <= 0) {
        setResults("");
        return;
      }

      try {
        const endpoint = new EndpointService(text);
        const response = await fetch(endpoint.convertedWords);

        if (response.status !== 200 || !response.ok) {
          throw STRINGS.ERROR_MESSAGES.NUMBER_TO_WORD_CONVERT.SERVER_ERROR;
        }

        const _results = await response.json();
        setResults(_results.data);
      } catch (error) {
        setResults(STRINGS.ERROR_MESSAGES.NUMBER_TO_WORD_CONVERT.NO_RESULTS);
      }
    };

    search();
  }, [text]);

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
          <ResultsArea text={results} error={inputValiadtion(text)} />
        </Box>
      </MainLayout>
    </Page>
  );
};

export { Home };
