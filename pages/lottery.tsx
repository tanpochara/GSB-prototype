import type { NextPage } from "next";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Container,
  Tabs,
  Text,
  Button,
} from "@chakra-ui/react";
import { LastTwo } from "../src/components/lastTwo";
import { LastThree } from "../src/components/lastThree";
import { NonFilter } from "../src/components/Nonfilter";
import { Footer, Tabs as tab } from "../src/components/Footer";
import { useRouter } from "next/router";

const Lottery: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Container p="30px">
        <Box display="flex" flexDir="row" justifyContent="flex-end" mb="20px">
          <Button
            w="20%"
            onClick={() => router.push("/home")}
            style={{
              backgroundColor: "#E85B9E",
              color: "black",
              fontWeight: "200px",
            }}
          >
            กลับ
          </Button>
        </Box>
        <Tabs>
          <TabList>
            <Tab> ทั่วไป </Tab>
            <Tab>สองตัวท้าย</Tab>
            <Tab>สามตัวท้าย</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p="0px">
              <NonFilter />
            </TabPanel>
            <TabPanel p="0px">
              <LastTwo />
            </TabPanel>
            <TabPanel p="0px">
              <LastThree />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Footer activeTab={tab.NONE} />
    </>
  );
};

export default Lottery;
