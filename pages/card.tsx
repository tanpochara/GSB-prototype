import {
  Container,
  Box,
  Text,
  Image,
  HStack,
  VStack,
  Center,
  Button,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { Footer, Tabs } from "../src/components/Footer";

export const Card: NextPage = () => {
  return (
    <>
      <Container>
        <Box bgColor="#E85B9E" borderRadius="14px" mt="20px">
          <Text textAlign="center" fontSize="32px">
            {" "}
            บัญชีธนาคาร{" "}
          </Text>
        </Box>

        <Center mt="40px">
          <Box
            borderRadius="14px"
            border="1px solid grey"
            p="30px 50px"
            bgColor="white"
            w="full"
          >
            <HStack justifyContent="flex-start" spacing={5}>
              <Image src="/aomsinlogo.jpeg" alt="aomsin logo" height="50px" />
              <VStack justifyContent="flex-start" alignItems="flex-start">
                <Text fontSize="20px"> ธนาคารออมสิน </Text>
                <Text fontSize="20px" color="#787575">
                  {" "}
                  xxxxxx4123{" "}
                </Text>
              </VStack>
            </HStack>
          </Box>
        </Center>
        <Center pt="20px">
          {" "}
          <Button colorScheme="gray" variant="outline" w="full">
            {" "}
            + เพิ่มบัญชี{" "}
          </Button>
        </Center>
      </Container>
      <Footer activeTab={Tabs.CARD} />
    </>
  );
};

export default Card;
