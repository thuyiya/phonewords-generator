import React from "react";
import type { NextPage } from "next";
import Box from "@kiwicom/orbit-components/lib/Box";
import Keyboard from "components/Keyboard/Keyboard";
import MainLayout from "components/MainLayout/MainLayout";
import ResultsArea from "components/ResultsArea/ResultsArea";
import Page from "components/Page/Page";

const Home: NextPage = () => {
  return (
    <Page title={"Home"}>
      <MainLayout>
      <Box
          margin="small"
          padding="small"
          display="flex"
          direction="column"
          align="center"
          justify="center"
        >
          <Keyboard />
          <ResultsArea text={"results"} error={""} />
        </Box>
      </MainLayout>
    </Page>
  );
};

export { Home };
