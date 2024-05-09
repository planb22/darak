import React from "react";
import { ReactElement, useState } from "react";

import { Avatar, Heading, Button, Box, Card, Center, 
  Image, Text, Flex, Spacer, Wrap, WrapItem, Grid, GridItem,
  IconButton, useColorMode } from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";

export const MainPage = (): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

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
          동네 친구와 숨은 책을 공유하고<br/>5,000원 지원금 받으세요
        </Heading>
        <Center py='2.5rem'>
          <Image src='/sleeping-book.png' boxSize='36%' />
        </Center>
        <Button
          colorScheme='teal'
          fontFamily='LINESeedKR-Bd'
          width='100%'
          size='lg'
        >
          보러 가기
        </Button>
      </Card>
      <Flex alignItems='center' mb='1rem' >
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
      <Grid templateColumns='repeat(3, 1fr)' gap={3} mb='2rem'>
        <GridItem>
          <Card alignItems='center' py='1.5rem' onClick={()=>{navigate(-1)}}>
            <Image src='/flask.png' boxSize='60%' mb='1rem' />
            <Text fontFamily='LINESeedKR-Bd' fontSize='lg'>과학</Text>
          </Card>
        </GridItem>
        <GridItem>
          <Card alignItems='center' py='1.5rem'>
            <Image src='/mask.png' boxSize='60%' mb='1rem' />
            <Text fontFamily='LINESeedKR-Bd' fontSize='lg'>장편소설</Text>
          </Card>
        </GridItem>
        <GridItem>
          <Card alignItems='center' py='1.5rem'>
            <Image src='/comic.png' boxSize='60%' mb='1rem' />
            <Text fontFamily='LINESeedKR-Bd' fontSize='lg'>만화·라노벨</Text>
          </Card>
        </GridItem>
      </Grid>
      <Flex alignItems='center' mb='1rem'>
        <Heading as='h2' size='lg'>
          이야기 속 그 장면
        </Heading>
        <Spacer />
      </Flex>
      <Text fontFamily='RIDIBatang'>
      겨우 수하물 검사를 받는 데까지 왔는데 아저씨의 배낭이 걸렸다. 여성 검사관이 엄격한 눈빛으로 열어보라고 명령한다. 아저씨는 혀를 찼다.
      <br/>“대단한 게 들어 있을 리 없어요. 이런 관계없는 것까지 일일이 검사하니까 입구가 혼잡하지.”
      </Text>
      <Text fontFamily='RIDIBatang' textShadow='0px 0px 10px white' color='transparent' mb='2rem'>
      <br/>중얼중얼 불평을 늘어놓는 아저씨에게 여성 검사관은 엄격한 얼굴 그대로 말했다. “칼입니다.”
      </Text>
      <Box width='100%' position='relative' top='-3rem'>
        <Box margin='0 0' filter='auto' blur='4px'>
          <Center>
            <Image src='/sample-book-cover.jpg' objectFit='contain' boxSize='25%' />
          </Center>
        </Box>
      </Box>
      <Center>
        <Text fontFamily='LINESeedKR-Bd' align='center' >
          지금 나머지 내용을 만나보고 싶다면?<br/>근처에서 이 책을 교환할 수 있어요!
        </Text>
      </Center>
      
    </>
  )
}