import Head from "next/head";
import MainLayout from "@/layouts/Main";
import { ReactElement, useState } from "react";
import { Flex } from "@mantine/core";
import Controller from "@/components/pages/home/Controller";
import Visualizer from "@/components/pages/home/Visualizer";

function Page() {
  const [signal, setSignal] = useState<boolean>(false); // Lift state up to Page component

  const handleRun = (algorithm, speed) => {
    // Handle the selected algorithm and speed data here
    console.log("Selected Algorithm:", algorithm);
    console.log("Selected Speed:", speed);
    // You can perform any necessary actions with the selected data here

    // Set signal to true when RUN button is clicked
    if(signal == true){
      setSignal(false);
    }else{
      setSignal(true);
    }
    //setSignal(true);
  };

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
          {/* Pass signal state and handleRun function to Controller */}
          <Visualizer signal={signal} />
          <Controller onRun={handleRun} signal={signal} />
          {/* Pass signal state to Visualizer */}
        </Flex>
      </Flex>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;