
import React from "react";
import { Container } from '@chakra-ui/react'
import './style.scss'
import { NavLink } from "react-router-dom";


export const Footer = () => {
  return (
    <footer className=" dark:bg-gray-900 pt-[80px] bg-white">
      <Container paddingX={'20px'} maxW={"1320px"} marginX={"auto"}>
      <div className="mx-auto w-full py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 w-[292px]">
            <NavLink to="/" className="flex items-center">
              <span className="self-center text-[32px] text-[#3563E9] font-[700] mb-4 whitespace-nowrap dark:text-white">
                MORENT
              </span>
            </NavLink>
            <p className="font-[500] text-[16px] text-[#90A3BF]  ">Our vision is to provide convenience and help increase your sales business.</p>
          </div>
          <div className="links-gap grid grid-cols-2  sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-xl font-[600] text-[#1A202C] uppercase dark:text-white">
                About
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-5">
                  <a href="https://flowbite.com/" className="hover:underline">
                    How it works
                  </a>
                </li>
                <li className="mb-5">
                  <a href="https://tailwindcss.com/" className="hover:underline">
                    Featured
                  </a>
                </li>
                <li className="mb-5">
                  <a href="https://tailwindcss.com/" className="hover:underline">
                    Partnership
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">
                    Business Relation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-xl font-[600] text-[#1A202C] uppercase dark:text-white">
                Community
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-5">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Events
                  </a>
                </li>
                <li className="mb-5">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Blog
                  </a>
                </li>
                <li className="mb-5">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Podcast
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Invite a friend
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-xl font-[600] text-[#1A202C] uppercase dark:text-white">
                Socials
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-5">
                  <a href="#" className="hover:underline">
                    Discord
                  </a>
                </li>
                <li className="mb-5">
                  <a href="#" className="hover:underline text-[#13131399]">
                    Instagram
                  </a>
                </li>
                <li className="mb-5">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-5">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-[#1A202C] sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              MORENT
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-[60px]">
            <a href="#" className="text-[#1A202C] hover:text-gray-900 dark:hover:text-white">Privacy & Policy</a>
            <a href="#" className="text-[#1A202C] hover:text-gray-900 dark:hover:text-white">Terms & Condition</a>
          </div>
        </div>
      </div>
      </Container>
    </footer>
  );
};
