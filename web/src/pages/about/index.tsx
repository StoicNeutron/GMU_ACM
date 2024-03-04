import MainLayout from "@/layouts/Main";
import { ReactElement } from "react";
import { Flex } from "@mantine/core";
import LeftPanel from "@/components/about/LeftPanel";
import RightPanel from "@/components/about/RightPanel";

function Page<NextPageWithLayout>() {
  return (
    <>
      <Flex flex={1} h={{ base: "100%", sm: "calc(100dvh - 64px)" }}>
        <Flex
          flex={1}
          direction={{ base: "column", sm: "row" }}
          m={16}
          gap={16}
        >
          <LeftPanel />
          <RightPanel />
        </Flex>
      </Flex>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
