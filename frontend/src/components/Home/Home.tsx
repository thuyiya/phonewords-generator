import React from "react";
import type { NextPage } from "next";
import Text from "@kiwicom/orbit-components/lib/Text";
import MainLayout from "components/MainLayout/MainLayout";
import Page from "components/Page/Page";

const Home: NextPage = () => {
  return (
    <Page title={"Home"}>
      <MainLayout>
          <Text>Welcome</Text>
      </MainLayout>
    </Page>
  );
};

export { Home };
