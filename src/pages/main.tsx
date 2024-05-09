import React from "react";
import { ReactElement, useState } from "react";

import { Avatar, Heading, Button, Card, Center, Image, Flex, Spacer, IconButton, useColorMode } from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

export const MainPage = (): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex mb='20px' alignItems='center' gap={3.5}>
        <Image src='/book-trimmed.png' objectFit='contain' boxSize='50px' />
        <Spacer />
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='sm' />
        <IconButton
          aria-label="theme toggle"
          icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
          onClick={toggleColorMode}
        />
      </Flex>
      <Card minW='100%' padding='1.3rem' mb='1.5rem'>
        <Heading size='lg'>
          꽁꽁 얼어붙은 한강 위로 고양이가 걸어다닙니다
        </Heading>
        <Center py='3rem'>
          <Image src='/sleeping-book.png' boxSize='42%' />
        </Center>
        <Button
          colorScheme='teal'
          fontFamily='LINESeedKR-Bd'
          width='100%'
          size='lg'
        >
          CTA 버튼 텍스트
        </Button>
      </Card>
      <Flex alignItems='center'>
        <Heading as='h2' size='lg'>
          장르별 보기
        </Heading>
        <Spacer />
        <Button
          variant='outline'
          size='sm'
        >
          모두 보기
        </Button>
      </Flex>
    </>
  )
}