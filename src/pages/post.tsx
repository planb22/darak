import React from "react";
import { ReactElement, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Avatar, Heading, Button, Box, Card, Center, 
  Image, Text, Flex, Spacer, Wrap, WrapItem, Grid, GridItem, Icon,
  IconButton, useColorMode, 
  VStack} from "@chakra-ui/react";

export const PostPage = (): ReactElement => {
  const [level, setLevel] = useState(0);
  function levelUp(){ setLevel(level+1); }

  const navigate = useNavigate();

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
    </>
  )
}