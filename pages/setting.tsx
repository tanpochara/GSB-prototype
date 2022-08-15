import { Center, Container, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Footer, Tabs } from "../src/components/Footer";

const Setting: NextPage = () => {
  return (
    <>
      <Container w="full" h="100vh">
        <Center>
          <Text fontSize="50px"> Setting page</Text>
        </Center>
      </Container>
      <Footer activeTab={Tabs.SETTING} />
    </>
  );
};

export default Setting;
