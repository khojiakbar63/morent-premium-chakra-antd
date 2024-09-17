import React from "react";
import { Input } from "antd";
import { Icon, Button, Container, Img, IconButton } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import UserImg from "../../../assets/images/my-img.png";
import Heart from "../../../assets/icons/header-heart.svg";
import Bell from "../../../assets/icons/header-bell.svg";
import Settings from "../../../assets/icons/header-setting.svg";
import Notif from "../../../assets/icons/header-notif.svg";
import Search from "../../../assets/icons/search-icon.svg";
import Filter from "../../../assets/icons/filter.svg";
import "flowbite";

import { ImEqualizer } from "react-icons/im";
import "./style.scss";

export const Header = () => {
  return (
    <header className="h-[124px] shadow-sm">
      <nav className="h-[124px] bg-white border-gray-200 dark:bg-gray-900">
        <Container paddingX={"20px"} maxW={"1320px"} marginX={"auto"}>
          <div className=" flex flex-wrap items-center justify-between py-10">
            <NavLink
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-[32px] text-[#3563E9] font-bold whitespace-nowrap dark:text-white">
                MORENT
              </span>
            </NavLink>
            <div className="flex gap-5 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <div className="hidden items-center  lg:flex gap-[20px]">
                <IconButton
                  isRound={true}
                  aria-label="Done"
                  width="44px"
                  bgColor={"#fff"}
                  height="44px"
                  icon={<Img src={Heart} alt="heart" />}
                  className="active:scale-95 hover:bg-[#C3D4E966] border-[1px] border-[#C3D4E966] rounded-full "
                />

                <div className="relative w-[44px] h-[44px]">
                  <IconButton
                    isRound={true}
                    aria-label="Done"
                    width="44px"
                    height="44px"
                    bgColor={"#fff"}
                    icon={<Img src={Bell} alt="bell" />}
                    className="active:scale-95 hover:bg-[#C3D4E966] border-[1px] border-[#C3D4E966] rounded-full"
                  />
                  <Img
                    src={Notif} alt="notification"
                    className="absolute -top-[0px] -right-[0px] w-[11px] h-[11px] "
                  />
                </div>

                <IconButton
                  isRound={true}
                  aria-label="Done"
                  width="44px"
                  height="44px"
                  bgColor={"#fff"}
                  icon={<Img src={Settings} />}
                  className="active:scale-95 hover:bg-[#C3D4E966] border-[1px] border-[#C3D4E966] rounded-full"
                />
              </div>

              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-[44px] h-[44px] rounded-full"
                  src={UserImg}
                  alt="user photo"
                />
              </button>

              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    Khojiakbar Abdulakhatov
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    hojiakbar7796@mail.ru
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <NavLink
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>

              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-user"
            >
              <div className="relative hidden lg:block w-[492px] xl:-ml-[306px] ">
                <Input
                  className="custom-input rounded-full ml-[20px] ps-[20px] pe-[20px]"
                  size="large"
                  placeholder="Search something here"
                  prefix={<Img className="mr-[20px]" src={Search} />}
                  suffix={
                    <NavLink to={"/category"}>
                      <Img src={Filter} />
                    </NavLink>
                  }
                />
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};
