import React from "react";
import { ReactElement } from "react";

import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export const LoginPage = (): ReactElement => {
    function Example() {
        const { colorMode, toggleColorMode } = useColorMode()
        return (
          <header>
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
          </header>
        )
      }

    return (
        <div>
            {Example()}
        </div>
    )
}