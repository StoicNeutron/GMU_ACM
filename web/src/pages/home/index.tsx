import Head from "next/head";
import MainLayout from "@/layouts/Main";
import { ReactElement } from "react";
import { Flex } from "@mantine/core";
import { Container, Text, Paper } from '@mantine/core';
import Controller from "@/components/pages/home/Controller";
import Visualizer from "@/components/pages/home/Visualizer";

function Page<NextPageWithLayout>() {
  return (
    <>
      <Head>
        <title>Algorithms Visualizer</title>
      </Head>
      <Flex flex={1} h={{ base: "100%", sm: "calc(100dvh - 64px)" }}>
        {/* Main Content */}
        <Flex
          flex={1}
          direction={{ base: "column", sm: "row" }}
          m={16}
          gap={16}
        >
          <Visualizer />
          <Controller />
        </Flex>
      </Flex>
      <footer style={{ marginTop: 'auto' }}>
        <Text align="center">Copyright &copy; GMU ACM Club</Text>
      </footer>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
