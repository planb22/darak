import React from "react";
import { ReactElement, useState } from "react";

import axios from 'axios';

import { useNavigate } from "react-router-dom";

import { Avatar, Heading, Button, Box, Card, Center, 
  Image, Text, Flex, Spacer, Wrap, WrapItem, Grid, GridItem, Icon,
  IconButton, useColorMode } from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { FaShuffle } from "react-icons/fa6";

export const MainPage = (): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const getTextShadowColor = (): string => {
    return '0px 0px 10px ' + (colorMode==='light'?'black':'white');
  };

  function logOut(){

    navigate("/login");
  }

  async function testFunc(){
    await axios.get("http://" + import.meta.env.VITE_BASE_URL + "/giveme", {
      headers: {
        "Content-Type": "application/json"
      }, withCredentials: true
    }).then((result) => { 
      console.log(result);
    }).catch((error) => {
      console.error(error);
    });
  }

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
          onClick={()=>{navigate("/post")}}
        >
          지금 시작하기
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
      <Grid templateColumns='repeat(3, 1fr)' gap={3} mb='0.8rem'>
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
      <Card
        alignItems='center'
        direction='row'
        width='100%'
        py='0.8rem'
        mb='1.7rem'
      >
        <Spacer />
        <Icon as={FaShuffle} mr='0.5rem' />
        <Text fontFamily='LINESeedKR-Bd'>어떤 주제든 괜찮아요</Text>
        <Spacer />
      </Card>
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
      <Text fontFamily='RIDIBatang' textShadow={getTextShadowColor()} color='transparent' mb='2rem'>
      <br/>중얼중얼 불평을 늘어놓는 아저씨에게 여성 검사관은 엄격한 얼굴 그대로 말했다. “칼입니다.”
      </Text>
      <Box width='100%' position='relative' top='-3rem'>
        <Box filter='auto' blur='5px'>
          <Center>
          <Image src='/sample-book-cover.jpg' objectFit='contain' width='25%' />
          </Center>
        </Box>
      </Box>
      <Center>
        <Text fontFamily='LINESeedKR-Bd' align='center' >
          지금 나머지 내용을 만나보고 싶다면?<br/>근처에서 이 책을 교환할 수 있어요!
        </Text>
      </Center>
      
      <Flex mt='4rem' mb='0.5rem'>
        <Spacer />
        <Button colorScheme="gray" variant='link' onClick={logOut}>
          로그아웃
        </Button>
        <Text mx='10px'>·</Text>
        <Button colorScheme="gray" variant='link' onClick={testFunc}>
          GIVE ME
        </Button>
        <Spacer />
      </Flex>

      <Center mb='30px'>
        <Text>powered by Plan Bee</Text>
      </Center>
    </>
  )
}