import { Container, HStack, VStack, Avatar, Box, Text } from "@chakra-ui/react";

export const AccountHeader = () => {
  return (
    <Box
      w="full"
      bgColor="#FF86C0"
      borderRadius="0px 0px 6px 6px"
      position="fixed"
      top="0"
    >
      <Container>
        <HStack justifyContent="space-between" p="20px" zIndex="10">
          <VStack>
            <Text> งบดุล </Text>
            <Text> THB 0</Text>
            <Box bgColor="black" borderRadius="11px">
              <Text color="white" p="2px 10px">
                {" "}
                2 ใบ{" "}
              </Text>
            </Box>
          </VStack>
          <VStack>
            <Avatar name="S" />
            <Box p="2px 10px" borderRadius="11px">
              {" "}
              สุชาดา{" "}
            </Box>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};
