import React from "react";
import {
  Card,
  Heading,
  Text,
  Button,
  Box,
  Image,
} from "@chakra-ui/react";
import HeroWhiteCar from "../../../../assets/icons/hero-white-car.svg";

export const HeroOne = () => {
  return (
    <Box className="w-[100%] lg:w-[49%] pb-[20px] rounded-[10px]" bgGradient="linear(to-r, #54A6FF, #48C6EF)">
      <Box className=" pt-6 px-6 pb-4">
        <Heading
          size="md"
          className="text-white"
          fontSize={32}
          fontWeight={600}
          width={272}
          lineHeight={'48px'}
        letterSpacing={'-3%'}
        >
          {" "}
          The Best Platform for Car Rental
        </Heading>
      </Box>
      <Box className="px-6">
        <Text
          className="text-white"
          fontSize={16}
          fontWeight={500}
          width={284}
          letterSpacing="-0.2"
          marginBottom="20px"
        >
          Ease of doing a car rental safely and reliably. Of course at a low
          price.
        </Text>
        <Button
          backgroundColor={"#3563E9"}
          _hover={{ backgroundColor: "#2152e6" }}
          _active={{ backgroundColor: "#3563E9", color: "#fff" }}
          color={"white"}
        >
          Rental Car
        </Button>
      </Box>
      <Box maxHeight={100}>
        <Box boxSize="sm" className="mx-auto" >
          <Image className="w-full mt-10 md:mt-0" src={HeroWhiteCar} alt="HeroWhiteCar" />
        </Box>
      </Box>
    </Box>
  );
};
