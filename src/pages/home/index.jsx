import React from "react";
import { ALL_POP_CARS, ALL_REC_CARS } from "../../mocks";
import { Container, Flex, Button, Spacer, Box, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { LuArrowUpDown } from "react-icons/lu";
import { HeroOne } from "../../components/ui";
import { HeroTwo } from "../../components/ui";
import { PickUp } from "../../components/ui";
import { DropOff } from "../../components/ui";
import { CarsHeading } from "../../components/typography/index";
import { ViewAll } from "../../components/typography/index";
import { CardLg } from "../../components/layouts/card-lg";
import { CardSm } from "../../components/layouts/card-sm";
import "./style.scss";

const index = () => {
  const btn = {
    bg: "#3563E9",
    bgHover: "#2152e6",
    bgActive: "#3563E9",
    color: "#fff",
  };
  return (
    <Container paddingX={"20px"} maxW={"1320px"} marginX={"auto"}>
      <Flex className="lg:justify-center" gap={"32px"} marginBottom={"32px"}>
        {/* -------------- Hero */}
        <HeroOne />
        <HeroTwo />
      </Flex>
      <Flex
        className="flex-col lg:flex-row gap-0 lg:gap-[44px]"
        alignItems={"center"}
      >
        <PickUp />
        <Button
          className="shadow"
          size="md"
          height="60px"
          width="60px"
          border="none"
          marginY={"-16px"}
          zIndex={999}
          backgroundColor={btn.bg}
          color={btn.color}
          _hover={{ backgroundColor: btn.bgHover }}
          _active={{ backgroundColor: btn.bgActive }}
        >
          <LuArrowUpDown fontSize={24} />
        </Button>
        <DropOff />
      </Flex>
      <Spacer height={"36px"} />
      {/* -----------------------------  Title */}
      <Flex justifyContent={"space-between"} py={"10px"} marginBottom={"20px"}>
        <CarsHeading>Popular Car</CarsHeading>
        <ViewAll>View All</ViewAll>
      </Flex>
      {/* -------------------------- ALL_POP_CARS */}
      <Flex className="">
        <CardLg data={ALL_POP_CARS} />
      </Flex>
    {/* -----------------------------Title */}
      <Flex justifyContent={"space-between"} py={"10px"} marginBottom={"20px"}>
        <CarsHeading>Recomendation Car</CarsHeading>
        <ViewAll></ViewAll>
      </Flex>
      {/*------------------------- ALL_REC_CARS */}
      <Flex className="">
        <CardSm data={ALL_REC_CARS} />
      </Flex>

      <Flex className="flex justify-between items-center gap-4 mt-10 my-[64px]">
        <Box />
        <Button
          to="/payment"
          as={NavLink}
          h={"44px"}
          w={"156px"}
          bgColor={"#3563E9"}
          color={"#fff"}
          _hover={{ background: "#1141f1" }}
          _active={{ bgColor: "#3563E9" }}
        >
          Show more car
        </Button>
        <Text className="font-[500] text-[14px] text-[#90A3BF] leading-[21px]">
          120 Car
        </Text>
      </Flex>
    </Container>
  );
};

export default index;
