import React from "react";
import { Outlet } from "react-router";
import { Header, Footer, Section } from "../../components/layouts";

export const Public = () => {
  return (
    <div>
      <Header />
      <Section className={'py-[32px]'}>
        <Outlet />
      </Section>
      <Footer />
    </div>
  );
};