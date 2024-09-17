import React from "react";
import { Card, Select } from "antd";
import { Flex, Heading, HStack, Box, StackDivider, Text } from "@chakra-ui/react";
import PickUpCircle from "../../../assets/icons/pick-up-circle.svg";
import "./style.scss";
export const PickUp = () => {
  return (
    <Card className="w-[100%] lg:w-[49%]">
      <Box className="card-header">
        <Flex className="gap-2" marginBottom={"16px"}>
          <img src={PickUpCircle} alt="blue circle" className="animate-pulse" />
          <Heading fontSize="16px" fontWeight={600} padding={0}>
            Pick - Up
          </Heading>
        </Flex>
      </Box>

      <Box>
        <HStack
          className="flex items-center justify-between"
          divider={<StackDivider />}
          spacing="4"
        >
          <Box>
            <Text className="text-[16px] font-[700] leading-6 text-[#1A202C]" textTransform="uppercase">
              Locations
            </Text>
            <Select
              className="select"
              placeholder="Select city"
              variant="borderless"
              style={{
                flex: 1,
              }}
              options={[
                {
                  value: "Tashkent",
                  label: "Tashkent",
                },
                {
                  value: "Samarkand",
                  label: "Samarkand",
                },
                {
                  value: "Bukhara",
                  label: "Bukhara",
                },
              ]}
            />
          </Box>
          <Box>
            <Text className="text-[16px] font-[700] leading-6 text-[#1A202C]" textTransform="uppercase" marginBottom="8px">
              Date
            </Text>
            <Select
              className="select"
              placeholder="Select date"
              variant="borderless"
              style={{
                flex: 1,
              }}
              options={[
                {
                  value: "10.04.2023",
                  label: "10.04.2023",
                },
                {
                  value: "11.05.2023",
                  label: "11.05.2023",
                },
                {
                  value: "20.06.2023",
                  label: "20.06.2023",
                },
              ]}
            />
          </Box>
          <Box>
            <Text className="text-[16px] font-[700] leading-6 text-[#1A202C]" textTransform="uppercase" marginBottom="8px">
              Time
            </Text>
            <Select
              className="select"
              placeholder="Select time"
              variant="borderless"
              style={{
                flex: 1,
              }}
              options={[
                {
                  value: "10:00",
                  label: "10:00",
                },
                {
                  value: "12:40",
                  label: "12:40",
                },
                {
                  value: "08:15",
                  label: "08:15",
                },
              ]}
            />
          </Box>
        </HStack>
      </Box>
    </Card>
  );
};
