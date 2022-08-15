import { HStack, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaTicketAlt, FaRegUserCircle } from "react-icons/fa";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { RiBankCard2Fill } from "react-icons/ri";

export enum Tabs {
  HOME = "home",
  TICKET = "ticket",
  CARD = "card",
  ACCOUNT = "account",
  SETTING = "setting",
  NONE = "none",
}

interface Props {
  activeTab: Tabs;
}

export const Footer: React.FC<Props> = ({ activeTab }) => {
  const router = useRouter();
  return (
    <Box w="full" bgColor="black" position="fixed" bottom="0">
      <HStack justifyContent="space-around" p="10px 0px">
        <Box onClick={() => router.push("/ticket")}>
          <FaTicketAlt
            color={activeTab == Tabs.TICKET ? "#E85B9E" : "white"}
            size="40px"
          />
        </Box>
        <Box onClick={() => router.push("/home")}>
          <IoMdHome
            color={activeTab == Tabs.HOME ? "#E85B9E" : "white"}
            size="40px"
          />
        </Box>
        <Box onClick={() => router.push("/card")}>
          <RiBankCard2Fill
            color={activeTab == Tabs.CARD ? "#E85B9E" : "white"}
            size="40px"
          />
        </Box>
        <Box onClick={() => router.push("/account")}>
          <FaRegUserCircle
            color={activeTab == Tabs.ACCOUNT ? "#E85B9E" : "white"}
            size="40px"
          />
        </Box>
        <Box onClick={() => router.push("/setting")}>
          <IoMdSettings
            color={activeTab == Tabs.SETTING ? "#E85B9E" : "white"}
            size="40px"
          />
        </Box>
      </HStack>
    </Box>
  );
};
