import React from "react";
import { ReactElement, useState } from "react";

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { Heading, Text, 
  Button, ButtonGroup, IconButton, Image,
  Box, Divider, AbsoluteCenter,
  Input, InputGroup, InputRightElement,
  useColorMode, useToast, useTheme,
  Flex, Spacer, HStack, VStack, Center
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

    const firebaseConfig = {
      apiKey: import.meta.env.VITE_API_KEY,
      authDomain: import.meta.env.VITE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_APP_ID
    };
    
    const loginRequest = () => {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(credential);
        console.log(token);
        console.log(user);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
    
    return (
      <>
        <Flex>
          <Image src='/book.png' boxSize='100px' mb='1.5rem' />
          <Spacer />
          <IconButton
            aria-label="theme toggle"
            icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
            onClick={toggleColorMode}
          />
        </Flex>
        <Heading>인생 책을 찾을 준비 되셨나요?</Heading>
        <Text fontSize='lg' mb='3rem'>지금 로그인하고 5분 안에 동네 친구에게 당신의 책을 소개하세요.</Text>
        <Input
          size='lg'
          type='email'
          placeholder='이메일'
          mb='10px'
        />
        <InputGroup size='lg' mb='30px'>
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
        <Center>
          <Button
            fontFamily='LINESeedKR-Bd'
            width='100%'
            mb='30px'
          >
            로그인
          </Button>
        </Center>
        <Box position='relative' mb='30px'>
          <Divider />
          <AbsoluteCenter
            bg={theme.__cssMap['colors.chakra-body-bg'].value}
            px='4'
          >
            또는
          </AbsoluteCenter>
        </Box>
        <Center>
          <IconButton
            aria-label="social login"
            icon={<FcGoogle />}
            onClick={loginRequest}
          />
        </Center>
      </>
    );
};