import Head from "next/head";
import MainLayout from "@/layouts/Main";
import { ReactElement } from "react";
import { Box, Text, Title } from "@mantine/core";

function Page<NextPageWithLayout>() {
  return (
    <>
      {/* Main Content */}
      <Title order={1}>Welcome to the Algorithm Visualizer</Title>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
