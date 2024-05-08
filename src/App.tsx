import React from "react";
import { ReactElement } from "react";
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from "./theme/index";

// import "./index.css";

export const App = (): ReactElement => {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};