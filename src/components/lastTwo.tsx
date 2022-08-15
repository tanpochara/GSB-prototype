import {
  Input,
  Text,
  Button,
  Container,
  Box,
  Divider,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Router from "next/router";
import React, { useContext, useState } from "react";
import LotteryContext from "../context/lotteryContext";

export const LastTwo = () => {
  const [selected, setSelected] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  const { availableNumber, setSelectedLottery, selectedLottery } =
    useContext(LotteryContext);
  const [displayNumber, setDisplayNumber] = useState(availableNumber);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getRandom = () => {
    const temp = Math.floor(Math.random() * 2) == 1;
    setStatus(temp);
  };

  const handlechangInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = e.target.value;
    const display = availableNumber.filter((num: string) => {
      return num.slice(-2) == temp;
    });
    setDisplayNumber(display);
    if (e.target.value.length == 0) {
      setDisplayNumber(availableNumber);
    }
  };

  const handleBuyLottery = (e: any) => {
    const temp = selectedLottery;
    temp.push(selected);
    setSelectedLottery(temp);
    Router.push("/home");
  };

  return (
    <>
      <Container p="0px">
        <Text fontSize="20px" color="rgba(15, 12, 12, 0.7)" mt="10px">
          {" "}
          สถานะ: สองตัวท้าย{" "}
        </Text>
        <Input
          mt="10px"
          placeholder="โปรดเลือกเลขที่คุณต้องการ"
          size="lg"
          onChange={handlechangInput}
        />

        <Box mb="60px" borderRadius="14px" bgColor="white" p="30px" mt="20px">
          {displayNumber.map((number: string) => {
            return (
              <>
                <Box
                  key={number}
                  p="10px"
                  onClick={() => {
                    setSelected(number);
                    getRandom();
                    onOpen();
                  }}
                >
                  <Text textAlign="center"> {number} </Text>
                </Box>
                <Divider />
              </>
            );
          })}
        </Box>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> ยืนยันการซื้อ </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="black" fontSize="20px">
              {" "}
              คุณต้องการซื้อเลข : {selected}{" "}
            </Text>
            <Text color="black" fontSize="20px">
              สถานะ: {status ? "มี" : "หมด"}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              ยกเลิก
            </Button>
            <Button
              colorScheme="whatsapp"
              onClick={handleBuyLottery}
              disabled={!status}
            >
              {" "}
              ดำเนินการซื้อ{" "}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
