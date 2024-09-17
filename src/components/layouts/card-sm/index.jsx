import { Flex, Button } from "@chakra-ui/react";
import { Checkbox } from "../../ui";
import { NavLink } from "react-router-dom";
import Like from "../../../assets/icons/Like.svg";
import Petrol from "../../../assets/icons/gas-station.svg";
import Users from "../../../assets/icons/profile-2user.svg";
import Manual from "../../../assets/icons/manual.svg";
import Shadow from "../../../assets/icons/shadow.svg";

export const CardSm = ({ data }) => {
  return (
    <Flex className="gap-[10px] flex-wrap justify-center lg:justify-between ">
      {data.map((car) => {
        return (
          <div
            key={Math.floor(Math.random() * 1000)}
            className="p-6  md:w-[327px] lg:max-w-[304px] max-h-[388px] bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
          >
            <Flex className="justify-between place-items-start">
              <div>
                <NavLink to="/detail">
                  <h5 className="text-[20px] font-[700] mb-1 tracking-tight text-[#1A202C] dark:text-white">
                    {car.name}
                  </h5>
                </NavLink>
                <p className="font-[700] text-[14px] text-[#90A3BF]">
                  {car.category.toUpperCase()}
                </p>
              </div>
              <Checkbox/>
            </Flex>

            <Flex className="md:flex-col gap-[50px] md:gap-0">
            {/* Car Image */}
            <NavLink to="/detail" className={"relative"}>
              <img
                className="w-[327px] sm:w-[248px]  mx-auto mb-[20px] mt-[30px]"
                src={car.img}
                alt={car.name}
              />
              <img
                className="absolute top-[90px] md:top-[80px] left-0 w-[400px] "
                src={Shadow}
                alt="shadow"
              />
            </NavLink>
            {/* Description */}
              <Flex className="flex items-center mt-2.5 mb-4">
                <ul className=" md:flex flex-wrap gap-[16px] items-center text-[#90A3BF]">
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

        );
      })}
    </Flex>
  );
};
