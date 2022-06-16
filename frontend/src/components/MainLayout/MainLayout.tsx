import React from "react";
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";

type Props = {
  children?: JSX.Element;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <Layout type="MMB">
    <LayoutColumn>{children}</LayoutColumn>
  </Layout>
);

export default MainLayout;