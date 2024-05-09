import React from "react";
import { ReactElement, useState } from "react";

import axios from 'axios';

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { Heading, Text, 
  Button, IconButton, Image,
  Box, Divider, AbsoluteCenter,
  Input, InputGroup, InputRightElement,
  useColorMode, useToast, useTheme,
  Flex, Spacer, Center
} from "@chakra-ui/react";

import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { BiSolidShow, BiSolidHide } from 'react-icons/bi';
import { FcGoogle } from "react-icons/fc";

import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  username: string,
  password: string
};

export const LoginPage = (): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const theme = useTheme();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { handleSubmit, register, formState: { isValid } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const navigate = useNavigate();

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
  };
  
  const loginRequestGoogle = () => {
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

  const loginRequest = () => {
    axios.post("http://" + import.meta.env.VITE_BASE_URL + "/login", {
        username: "test",
        password: "1234"
      }, {
        headers: {
            
        }
    }).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.error(error);
    });
  }

  const goToSignUp = () => {
    navigate("/signup");
  };
  
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          size='lg'
          type='email'
          placeholder='이메일'
          variant='filled'
          mb='10px'
          {...register("username", {required: true, minLength: 6})}
        />
        <InputGroup size='lg' mb='30px'>
          <Input
            pr='4.5rem'
            size='lg'
            type={show ? 'text' : 'password'}
            variant='filled'
            placeholder='비밀번호'
            {...register("password", {required: true, minLength: 6})}
          />
          <InputRightElement width='4.5rem'>
            <IconButton
              aria-label="show or hide password"
              variant='outline'
              icon={show ? <BiSolidHide /> : <BiSolidShow />}
              onClick={handleClick}
            />
          </InputRightElement>
        </InputGroup>
        <Center>
          <Button
            fontFamily='LINESeedKR-Bd'
            width='100%'
            mb='20px'
            onClick={loginRequest}
            type='submit'
            isDisabled={!isValid}
          >
            로그인
          </Button>
        </Center>
      </form>
      <Flex mb='30px'>
        <Spacer />
        <Button colorScheme="blue" variant='link' onClick={goToSignUp}>
          회원가입
        </Button>
        <Text mx='10px'>·</Text>
        <Button colorScheme="gray" variant='link'>
          비밀번호를 잊으셨나요?
        </Button>
        <Spacer />
      </Flex>
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
          onClick={loginRequestGoogle}
        />
      </Center>
    </>
  );
};