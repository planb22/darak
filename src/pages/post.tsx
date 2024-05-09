import React from "react";
import { ReactElement, useState } from "react";

import axios from 'axios';

import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react';

import { useForm, SubmitHandler } from "react-hook-form";

import { Avatar, Heading, Button, Box, Card, Center, 
  Image, Text, Flex, Spacer, Wrap, WrapItem, Grid, GridItem, Icon, Input, Link,
  IconButton, useColorMode, 
  VStack} from "@chakra-ui/react";

import { LuExternalLink } from "react-icons/lu";

type confirmInputs = {
  isbn: string
};

export const PostPage = (): ReactElement => {
  const [level, setLevel] = useState(0);
  function levelUp(){ setLevel(level+1); }

  const [wheel, setWheel] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const { handleSubmit, register, formState: { isValid } } = useForm<confirmInputs>();
  const onSubmit: SubmitHandler<confirmInputs> = async (data) => {
    setWheel(true);
    await axios.get("http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=" + import.meta.env.VITE_BOOK_API_KEY + "&Query=" + data.isbn + "&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101", {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((result) => {
      setWheel(false);
      if(result.data["totalResults"] != undefined && result.data["totalResults"] > 0){
        levelUp();
        toast({
          title: '도서 확인에 성공했어요',
          description: "",
          status: 'success',
          duration: 3500,
          isClosable: false,
        });
      } else {
        toast({
          title: '도서 확인에 실패했어요',
          description: "ISBN과 일치하는 도서가 없어요. 정확히 입력했는지 다시 한 번 확인해 주세요.",
          status: 'error',
          duration: 3500,
          isClosable: false,
        });
      }
    }).catch((error) => {
      setWheel(false);
      toast({
        title: '도서 확인에 실패했어요',
        description: "알 수 없는 오류가 발생했어요. 고객센터에 문의해 주세요.",
        status: 'error',
        duration: 3500,
        isClosable: false,
      });
    });
  };

  return (
    <>
      <Center>
        <Image src='/genie.png' boxSize='20vh' mb='1.5rem' />
      </Center>
      {level === 0 ? (
        <>
          <Center>
            <VStack>
              <Heading>안녕하세요! 저는 지니에요.</Heading>
              <Text fontSize='lg' mb='1.5rem'>가지고 있는 책을 제가 마법으로 확인해 드릴게요.</Text>
              <Card width='100%' mb='1.5rem'>
                <Center>
                  <VStack>
                    <Image src='https://image.yes24.com/sysimage/buyBack/isbn.svg' objectFit='contain' maxHeight='8rem' maxWidth='80%' />
                    <Text mb='1rem'>책 뒷면에 표시되어 있는 ISBN을 확인해 주세요!</Text>
                  </VStack>
                </Center>
              </Card>
            </VStack>
          </Center>
          <li>교환하고자 하는 책이 실제로 판매되는지 알아보기 위해 확인 과정을 거쳐요.</li>
          <Button
            width='100%'
            colorScheme="teal"
            fontFamily='LINESeedKR-Bd'
            mt='1rem'
            onClick={levelUp}
          >
            네, 확인했어요
          </Button>
          <Button
            width='100%'
            mt='0.7rem'
            onClick={()=>{navigate("/main")}}
          >
            다음에 작성할래요
          </Button>
        </>
      ) : null}
      {level === 1 ? (
        <>
          <Center>
            <Heading mb='0.5rem'>좋아요! 마법을 준비해 볼게요.</Heading>
          </Center>
          <Center>
            <Text><Link href={import.meta.env.VITE_BOOK_API_URL} textDecoration='underline' isExternal>알라딘</Link><Icon as={LuExternalLink} />에서 도서 정보를 제공해요. 일부 절판된 서적 등은 인식하지 못할 수도 있어요.</Text>
          </Center>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              size='lg'
              type='tel'
              isDisabled={wheel}
              placeholder='ISBN 입력'
              variant='filled'
              mt='2rem'
              {...register("isbn", {required: true, minLength: 13, maxLength: 13})}
            />
            <Button
              fontFamily='LINESeedKR-Bd'
              width='100%'
              mt='1.5rem'
              colorScheme='teal'
              type='submit'
              isDisabled={!isValid}
              isLoading={wheel}
            >
              아브라카다브라!
            </Button>
          </form>
          <Button
            width='100%'
            mt='0.7rem'
            onClick={()=>{setLevel(level-1)}}
          >
            무엇을 입력하는지 모르겠어요
          </Button>
        </>
      ) : null}
    </>
  )
}