import React from "react";
import { createBrowserRouter } from "react-router-dom";
import {
    LOGIN_PATH,
    SIGNUP_PATH,
    BASE_PATH,
    EVENT_CREATE_PATH,
    EVENT_DETAIL_PATH,
    CHAT_PATH,
    PREF_PATH
} from "./domain/constants/paths";

import { Heading } from "@chakra-ui/react";

export const router = createBrowserRouter([
    {
        path: BASE_PATH,
        element: (
            <div>
                <Heading>
                    Chakra UI Test!
                </Heading>
                Hello World! This is Vite + React!
            </div>
        ),
    },
]);