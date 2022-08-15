import type { NextPage } from "next";
import {
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Container,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { LastTwo } from "../src/components/lastTwo";
import { LastThree } from "../src/components/lastThree";
import { NonFilter } from "../src/components/Nonfilter";
import { Footer, Tabs as tab } from "../src/components/Footer";

const Lottery: NextPage = () => {
  return (
    <>
      <Container p="20px">
        <Tabs>
          <TabList>
            <Tab> หน้าเเรก </Tab>
            <Tab>สองตัวท้าย</Tab>
            <Tab>สามตัวท้าย</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <NonFilter />
            </TabPanel>
            <TabPanel>
              <LastTwo />
            </TabPanel>
            <TabPanel>
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
