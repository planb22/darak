import React from "react";
import { ReactElement } from "react";
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import theme from "./theme";

// import "./index.css";

export const App = (): ReactElement => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};