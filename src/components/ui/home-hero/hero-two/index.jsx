import React from "react";
import {
  Card,
  Heading,
  Text,
  Button,
  Box,
  Image,
} from "@chakra-ui/react";
import HeroGreyCar from "../../../../assets/icons/hero-grey-car.svg";

export const HeroTwo = () => {
  return (
    <Box className="hidden lg:block lg:w-[49%] pb-[20px] rounded-[10px]" 
    bgGradient="linear(to-r, #3563E9, #54A6FF )"
    >
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
        backgroundColor={"#54A6FF"}
        _hover={{ backgroundColor: "#2e92fc" }}
        _active={{ backgroundColor: "#54A6FF", color: "#fff" }}
        color={"white"}
      >
        Rental Car
      </Button>
    </Box>
    <Box maxHeight={100}>
      <Box boxSize="sm" className="mx-auto" >
        <Image maxH="116px" src={HeroGreyCar} alt="HeroWhiteCar" />
      </Box>
    </Box>
  </Box>
  )
}
