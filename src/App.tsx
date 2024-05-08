import React from "react";
import { ReactElement } from "react";
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

export const App = (): ReactElement => {
  return (
    <RouterProvider router={router} />
  );
};