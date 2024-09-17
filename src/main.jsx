import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/index";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={AppRouter} />
    </ChakraProvider>
  </StrictMode>
);
