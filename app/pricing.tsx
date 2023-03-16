import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import chackMarkIcon from "./icon/chackMarkicon";

export default function Pricing() {
  return (
    // BOX CONTAINE START
    <Box
    maxW="950px"
    mx={{ base: "20px", lg: "auto" }}
    //   ml={{ base: "20px", lg: "auto" }}
    //   mr={{ base: "20px", lg: "auto" }}
    mt="-150px"
    //   mx="20px"
    bg="white"
    borderRadius={"16px"}
    overflow="hidden"
    boxShadow={
      " 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
    }
    >
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        {/* LEFT BOX */}
        <Box color={"white"} bg={"#000000"} p={"40px"} textAlign={"center"}>
          <Text fontWeight={"bold"} fontSize={"24px"}>
            Premium PRO
          </Text>
          <Heading fontSize={"60px"}>$329</Heading>
          <Text mt={"10px"}>billed just once</Text>
          <Button mt={"20px"} color={"white"} bg={"#2d3748"} width={"100%"}>
            Get Started
          </Button>
        </Box>

        {/* RIGHT BOX */}
        <Box color={"#000000"} pt="48px" pl="25px" pr="10px">
          <Text mb="10px">
            Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack mb={"15px"}>
            <Icon as={chackMarkIcon} />
            <Text>International calling and messaging API</Text>
          </HStack>

          <HStack mb={"15px"}>
            <Icon as={chackMarkIcon} />
            <Text>Additional phone numbers</Text>
          </HStack>

          <HStack mb={"15px"}>
            <Icon as={chackMarkIcon} />
            <Text>Automated messages via Zapier</Text>
          </HStack>

          <HStack mb={"15px"}>
            <Icon as={chackMarkIcon} />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
      {/* BOX CONTAINE START */}
    </Box>
  );
}
