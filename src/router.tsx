import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import {
    LOGIN_PATH,
    SIGNUP_PATH,
    BASE_PATH,
    EVENT_CREATE_PATH,
    EVENT_DETAIL_PATH,
    CHAT_PATH,
    PREF_PATH
} from "./domain/constants/paths";
import { LoginPage } from "./pages/login";
import { SignUpPage } from "./pages/signup";
import { MainPage } from "./pages/main";

export const router = createBrowserRouter([
    {
        path: LOGIN_PATH,
        element: <LoginPage />,
    },
    {
        path: SIGNUP_PATH,
        element: <SignUpPage />,
    },
    {
        path: "/main",
        element: <MainPage />,
    },
    {
        path: "*",
        element: <Navigate replace to="/login" />,
    },
]);