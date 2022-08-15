import { Box, Center, Container, Divider, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Footer, Tabs } from "../src/components/Footer";
import LotteryContext from "../src/context/lotteryContext";

const Home: NextPage = () => {
  const router = useRouter();
  const { selectedLottery } = useContext(LotteryContext);
  return (
    <>
      <Container>
        <Box
          p="20px"
          borderRadius="14px"
          mt="20px"
          border="1px solid grey"
          bgColor="white"
        >
          <Box>
            <Text fontSize="20px" color="#B0AEAE">
              {" "}
              สลากที่คุณมี{" "}
            </Text>
            <Text fontSize="20px" color="#E85B9E">
              {" "}
              2 ใบ{" "}
            </Text>
          </Box>
          <Divider m="10px 0px" />

          <Text fontSize="24px" color="#E85B9E" textAlign="center">
            {" "}
            รับสลากเพิ่ม{" "}
          </Text>
          <Box w="full">
            <Center>
              <Box
                borderRadius="11px"
                bgColor="#E85B9E"
                p="4px 10px"
                mt="10px"
                onClick={() => router.push("/lottery")}
              >
                <Text color="white"> รับสลาก </Text>
              </Box>
            </Center>
          </Box>
          <Text pt="20px" color="#E85B9E">
            {" "}
            รายะเอียดของรางวัล{" "}
          </Text>
        </Box>

        <Box p="20px" borderRadius="14px" bgColor="#E85B9E" mt="20px">
          <Stack alignItems="center" justifyContent="center">
            <Text className="text-title"> ตัวเลือกสำหรับเดือนนี้ </Text>
            {selectedLottery.length != 0 ? (
              selectedLottery.map((item) => {
                return (
                  <Box
                    key={item}
                    borderRadius="11px"
                    bgColor="#F41163"
                    color="white"
                    p="5px 10px"
                  >
                    {" "}
                    {item}
                  </Box>
                );
              })
            ) : (
              <Text> ยังไม่มีตัวเลือกในเดือนนี้ </Text>
            )}
          </Stack>
          <Divider color="white" m="10px 0px" size="2px" />
          <Text fontSize="24px"> รางวัลสูงสุด</Text>
          <Text> THB 2 ล้าน!</Text>
        </Box>
      </Container>
      <Footer activeTab={Tabs.HOME} />
    </>
  );
};

export default Home;
