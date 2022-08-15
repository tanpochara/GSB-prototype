import type { NextPage } from "next";
import {
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Container,
  Box,
  Text,
  HStack,
  VStack,
  Avatar,
  Divider,
  Center,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { LastTwo } from "../src/components/lastTwo";
import { LastThree } from "../src/components/lastThree";
import { NonFilter } from "../src/components/Nonfilter";
import { AccountHeader } from "../src/components/AccountHeader";
import { useRouter } from "next/router";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { FaRegUserCircle, FaTicketAlt } from "react-icons/fa";
import { RiBankCard2Fill } from "react-icons/ri";
import { Footer, Tabs } from "../src/components/Footer";

const App: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <AccountHeader />
      <Container pt="150px">
        <Box
          p="20px"
          border="1px solid grey"
          borderRadius="14px"
          bgColor="white"
        >
          <VStack>
            <Text color="#E85B9E" fontSize="20px" fontWeight="400">
              {" "}
              รับสลากเพิ่ม{" "}
            </Text>
            <Box
              borderRadius="11px"
              bgColor="#E85B9E"
              p="4px 10px"
              onClick={() => router.push("/lottery")}
            >
              <Text color="white"> รับสลาก </Text>
            </Box>
          </VStack>
        </Box>

        <Box p="20px" borderRadius="14px" bgColor="#E85B9E" mt="20px">
          <Text color="white" textAlign="center" className="text-title">
            {" "}
            ภาพรวมบัญชี{" "}
          </Text>
          <Box>
            <Text> รางวัลเงินฝาก </Text>
            <Text color="white"> 0.00 THB </Text>
          </Box>
          <Box>
            <Text> รางวัล </Text>
            <Text color="white"> 0.00 THB </Text>
          </Box>
        </Box>

        <Box
          p="20px"
          borderRadius="14px"
          mt="20px"
          border="1px solid grey"
          bgColor="white"
        >
          <Text className="text-title"> ประวัติ งบดุล</Text>
          <Text> 0.00 THB </Text>
        </Box>
      </Container>
      <Footer activeTab={Tabs.TICKET} />
    </>
  );
};

export default App;
