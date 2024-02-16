import Head from "next/head";
import MainLayout from "@/layouts/Main";
import { ReactElement } from "react";
import { Box, Text, Title } from "@mantine/core";

function Page<NextPageWithLayout>() {
  return (
    <>
      {/* Main Content */}
      <Title order={1}>About</Title>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
