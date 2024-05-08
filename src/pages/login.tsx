import React from "react";
import { ReactElement, useState } from "react";

import { Heading, Text, 
  Button, ButtonGroup, IconButton, 
  Box, Divider, AbsoluteCenter,
  Input, InputGroup, InputRightElement,
  useColorMode, useToast, useTheme,
  HStack, VStack
} from "@chakra-ui/react";

import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { BiSolidShow, BiSolidHide } from 'react-icons/bi';
import { FcGoogle } from "react-icons/fc";

export const LoginPage = (): ReactElement => {
    const { colorMode, toggleColorMode } = useColorMode();
    const toast = useToast();
    const theme = useTheme();

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    
    return (
      <>
        <Heading>LINE Seed Sans가 적용되었어요!</Heading>
        <Text fontSize='lg'>LINE Seed Sans가 적용되었어요. 여기에 텍스트를 입력하세요.</Text>
        <IconButton
          aria-label="theme toggle"
          icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
          onClick={toggleColorMode}
        />
        <br/>
        <Button
          onClick={() =>
            toast({
              title: 'Account created.',
              description: "계정 생성이 완료되었습니다.",
              status: 'success',
              duration: 1500,
              isClosable: true,
            })
          }
        >
          토스트 보기
        </Button>

        <br/>
        <Input
          pr='4.5rem'
          size='lg'
          type='email'
          placeholder='이메일'
        />

        <InputGroup size='lg'>
          <Input
            pr='4.5rem'
            size='lg'
            type={show ? 'text' : 'password'}
            placeholder='비밀번호'
          />
          <InputRightElement width='4.5rem'>
            <IconButton
              aria-label="show or hide password"
              icon={show ? <BiSolidHide /> : <BiSolidShow />}
              onClick={handleClick}
            />
          </InputRightElement>
        </InputGroup>
        <br/>

        <Button
          fontFamily='LINESeedKR-Bd'
          width='50%'
        >
          로그인
        </Button>
        <br/>

        <Box position='relative' padding='3'>
          <Divider />
          <AbsoluteCenter
            bg={theme.__cssMap['colors.chakra-body-bg'].value}
            px='4'
          >
            또는
          </AbsoluteCenter>
        </Box>

        <IconButton
          aria-label="social login"
          icon={<FcGoogle />}
        />


      </>
    );
};