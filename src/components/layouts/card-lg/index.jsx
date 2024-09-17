import { Flex, Button } from "@chakra-ui/react";
import { Checkbox } from "../../ui";
import { NavLink } from "react-router-dom";
import Like from "../../../assets/icons/Like.svg";
import Petrol from "../../../assets/icons/gas-station.svg";
import Users from "../../../assets/icons/profile-2user.svg";
import Manual from "../../../assets/icons/manual.svg";
import Shadow from "../../../assets/icons/shadow.svg";

export const CardLg = ({ data }) => {
  return (
    <Flex className="gap-[19px] py-8  w-full flex-nowrap overflow-x-scroll overflow-y-hidden lg:overflow-x-hidden xl:flex-nowrap justify-start lg:justify-between">
      {data.map((car) => {
        return (
          <div
            key={Math.floor(Math.random() * 1000)}
            className="p-6 min-w-[304px] max-h-[388px] bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
          >
            <Flex className="justify-between place-items-start ">
              <div>
                <NavLink to="/detail">
                  <h5 className="text-[20px] font-[700] mb-1 tracking-tight text-[#1A202C] dark:text-white">
                    {car.name}
                  </h5>
                </NavLink>
                <p className="font-[700] text-[14px] text-[#90A3BF]">
                  {car.category}
                </p>
              </div>
              <Checkbox/>
            </Flex>
            <NavLink to="/detail" className={"relative"}>
              <img
                className="max-w-[258px] mx-auto mb-[60px] mt-[60px]"
                src={car.img}
                alt={car.name}
              />
              <img
                className="absolute top-[20px] left-0"
                src={Shadow}
                alt="shadow"
              />
            </NavLink>
            <div className="pb-0">
              <Flex className="flex items-center mt-2.5 mb-4">
                <ul className="flex flex-wrap gap-[16px] items-center text-[#90A3BF]">
                  <li className="flex gap-[6px] items-center ">
                    <img className="w-6 h-6" src={Petrol} alt="gas-station" />
                    <p className="font-[500] text-[14px] leading-[21px]">
                      {car.tankCapacity}
                    </p>
                  </li>
                  <li className="flex gap-[6px] items-center">
                    <img className="w-6 h-6" src={Manual} alt="manual" />
                    <p className="font-[500] text-[14px] leading-[21px]">
                      {car.type}
                    </p>
                  </li>

                  <li className="flex gap-[6px] items-center">
                    <img className="w-6 h-6" src={Users} alt="manual" />
                    <p className="font-[500] text-[14px] leading-[21px]">
                      {car.passangerCapacity} People
                    </p>
                  </li>
                </ul>
              </Flex>

              <div className="flex items-center justify-between">
                <Flex className="flex-col">
                  <p className="text-[20px] font-[700] text-[#1A202C] dark:text-white">
                    ${car.price}/
                    <span className="text-[14px] font-[700] text-[#90A3BF] dark:text-white">
                      day
                    </span>
                  </p>
                  <p className="text-[14px] font-[700] text-[#90A3BF] dark:text-white line-through">
                    {car.realPrice ? "$" + car.realPrice : ""}
                  </p>
                </Flex>

                <NavLink>
                  <Button
                    to="/payment"
                    as={NavLink}
                    h={"44px"}
                    w={"116px"}
                    bgColor={"#3563E9"}
                    color={"#fff"}
                    _hover={{ background: "#1141f1" }}
                    _active={{ bgColor: "#3563E9" }}
                  >
                    Rent Now
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </Flex>
  );
};
