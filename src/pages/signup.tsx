import React, { useEffect, useState } from "react";
import { ReactElement } from "react";

import axios from 'axios';

import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Heading, Text, Button, Image, Center, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react';

import { BiSolidShow, BiSolidHide } from 'react-icons/bi';

type Inputs = {
  name: string,
  nickname: string,
  username: string,
  password: string
};

export const SignUpPage = (): ReactElement => {
  const [wheel, setWheel] = useState(false);
  const toast = useToast();

  const { handleSubmit, register, formState: { isValid } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setWheel(true);
    await axios.post("http://" + import.meta.env.VITE_BASE_URL + "/signup", data, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((result) => {
      console.log(result);
      setWheel(false);
      toast({
        title: '회원가입에 성공했어요!',
        description: "유후!",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }).catch((error) => {
      console.error(error);
      setWheel(false);
      toast({
        title: '회원가입에 실패했어요',
        description: error.response.data.message,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    });
  }

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const navigate = useNavigate();
  const goPrevPage = () => {
    navigate("/login");
    // navigate(-1);
  }

  return (
    <>
      <Image src="/happy-face.png" boxSize='80px' mb='1.5rem' />
      <Heading mb='1.5rem'>다락에 오신 것을 환영해요!</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          size='lg'
          type='string'
          placeholder='이름'
          variant='filled'
          mb='10px'
          {...register("name", {required: true, minLength: 2})}
        />
        <Input
          size='lg'
          type='string'
          placeholder='닉네임'
          variant='filled'
          mb='10px'
          {...register("nickname", {required: true, minLength: 4, maxLength: 10})}
        />
        <li>닉네임은 중복될 수 없어요. 4자 이상 10자 이하로 지정해 주세요.</li>
        <Input
          mt='1rem'
          size='lg'
          type='email'
          placeholder='이메일'
          variant='filled'
          mb='10px'
          {...register("username", {required: true, minLength: 6})}
        />
        <InputGroup size='lg' mb='0.5rem'>
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
        <li>10자 이상으로 지정해 주세요.</li>
        <Center>
          <Button
            fontFamily='LINESeedKR-Bd'
            width='100%'
            mt='1.5rem'
            mb='1rem'
            colorScheme='teal'
            type='submit'
            isDisabled={!isValid}
            isLoading={wheel}
          >
            가입하기
          </Button>
        </Center>
      </form>
      <Button
        fontFamily='LINESeedKR-Bd'
        colorScheme='gray'
        width='100%'
        onClick={goPrevPage}
      >
        뒤로
      </Button>
    </>
  );
}