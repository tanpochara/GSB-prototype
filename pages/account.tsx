import { Box, Center, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Footer, Tabs } from "../src/components/Footer";
import { FaRegEdit, FaRegUserCircle } from "react-icons/fa";

const Account: NextPage = () => {
  return (
    <>
      <Box w="full" bgColor="#E85B9E" p="10px">
        <Text fontSize="36px" textAlign="center">
          {" "}
          โปรไฟล์{" "}
        </Text>
      </Box>
      <Box
        h="full"
        p="30px 10px"
        w="full"
        bgColor="#E85B9E"
        border="1px solid gray"
        borderRadius="0px 0px 14px 14px"
      >
        <Box w="full" justifyContent="flex-end" display="flex">
          <FaRegEdit color="white" />
        </Box>
        <Center>
          <FaRegUserCircle color="white" size="80px" />
        </Center>
        <Text color="#F6F6F6" fontSize="24px" textAlign="center">
          {" "}
          สุชาดา ศรีเพ็ญ{" "}
        </Text>
      </Box>

      <Box border="1px solid grey" p="20px 10px" bgColor="white">
        <Box
          w="full"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
        >
          <Text fontSize="24px"> ข้อมูลทั่วไป</Text>
          <FaRegEdit color="black" />
        </Box>

        <Box
          p="0px 10px"
          w="full"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
        >
          <Text fontSize="20px" color="#7C7C7C">
            {" "}
            เบอร์โทรศัพท์{" "}
          </Text>
          <Text fontSize="20px" color="#7C7C7C">
            {" "}
            081-xxx-x999{" "}
          </Text>
        </Box>

        <Box
          p="0px 10px"
          w="full"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
        >
          <Text fontSize="20px" color="#7C7C7C">
            {" "}
            UID{" "}
          </Text>
          <Text fontSize="20px" color="#7C7C7C">
            {" "}
            0000000001{" "}
          </Text>
        </Box>

        <Box
          p="0px 10px"
          w="full"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
        >
          <Text fontSize="20px" color="#7C7C7C">
            {" "}
            e-mail{" "}
          </Text>
          <Text fontSize="20px" color="#7C7C7C">
            {" "}
            suchada.s@gmail.com{" "}
          </Text>
        </Box>
      </Box>

      <Box
        border="1px solid grey"
        p="20px 10px"
        mt="20px"
        mb="80px"
        bgColor="white"
      >
        <Box
          w="full"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
        >
          <Text fontSize="24px"> ข้อมูลส่วนตัว</Text>
          <FaRegEdit color="black" />
        </Box>

        <Box
          p="0px 10px"
          w="full"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
        >
          <Text fontSize="20px" color="#7C7C7C">
            {" "}
            ชื่อจริง
          </Text>
          <Text fontSize="20px" color="#7C7C7C">
            {" "}
            สุชาดา
          </Text>
        </Box>

        <Box
          p="0px 10px"
          w="full"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
        >
          <Text fontSize="20px" color="#7C7C7C">
            {" "}
            นามสกุล
          </Text>
          <Text fontSize="20px" color="#7C7C7C">
            {" "}
            ศรีเพ็ญ
          </Text>
        </Box>

        <Box
          p="0px 10px"
          w="full"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
        >
          <Text fontSize="20px" color="#7C7C7C">
            {" "}
            อายุ
          </Text>
          <Text fontSize="20px" color="#7C7C7C">
            {" "}
            65 ปี
          </Text>
        </Box>

        <Box
          p="0px 10px"
          w="full"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
        >
          <Text fontSize="20px" color="#7C7C7C">
            {" "}
            เลขที่บัตรประชาชน
          </Text>
          <Text fontSize="20px" color="#7C7C7C">
            {" "}
            1-1100-xxxxx-xx-x
          </Text>
        </Box>

        <Box
          p="0px 10px"
          w="full"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
        >
          <Text fontSize="20px" color="#7C7C7C">
            {" "}
            วันเดือนปีเกิด
          </Text>
          <Text fontSize="20px" color="#7C7C7C">
            {" "}
            11 มกราคม xxxx
          </Text>
        </Box>
      </Box>

      <Footer activeTab={Tabs.ACCOUNT} />
    </>
  );
};

export default Account;
