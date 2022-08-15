import { Input, Text, Button, Container, Box } from "@chakra-ui/react";
import React, { useState } from "react";

export const LastThree = () => {
  const [selected, setSelected] = useState<number>(0);
  const val = [
    123123111, 11020311, 1239012322, 12312312333, 123123344, 1231231255,
    12312311, 12312311,
  ];
  const [data, setData] = useState<number[]>([
    123123111, 11020311, 1239012322, 12312312333, 123123344, 1231231255,
    12312311, 12312311,
  ]);
  const handlechangInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = parseInt(e.target.value);
    const display = val.filter((num) => {
      const lastTwo = num % 1000;
      return lastTwo == temp;
    });

    setData(display);
    if (e.target.value.length == 0) {
      setData(val);
    }
  };

  return (
    <>
      <Container m="20px">
        <Input
          placeholder="Basic usage"
          pt={5}
          size="lg"
          onChange={handlechangInput}
        />
        <Text>สามตัวท้าย</Text>

        {data.map((number) => {
          return (
            <Box key={number}>
              <Text> {number} </Text>
            </Box>
          );
        })}
      </Container>
    </>
  );
};
