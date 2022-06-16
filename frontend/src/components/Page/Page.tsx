import React from "react";
import Head from "next/head";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const Page: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};

export default Page;
