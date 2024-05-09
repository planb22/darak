import React, { useEffect, useState } from "react";
import { ReactElement } from "react";

import { Field, Form, Formik } from "formik";

import { Heading, Image, Input, Center, FormControl, FormLabel, FormErrorMessage, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const SignUpPage = (): ReactElement => {
  type Inputs = {
    name: string,
    username: string,
    password: string
  };

  const [tname, setTname] = useState("");

  function validateName(value) {
    let error
    if (!value) {
      error = 'Name is required'
    } else {
      setTname(value.length > 2 ? value.slice(1) : value);
    }
    return error
  }

  const navigate = useNavigate();
  const goPrevPage = () => {
    navigate(-1);
  }

  return (
    <>
      <Image src={tname != "" ? "/happy-face.png" : "/smiling-face.png"} boxSize='80px' mb='1.5rem' />
      <Heading mb='1.5rem'>{
        tname.length >= 2 ? "조금만 더 입력하면 끝나요!"
        : "다락에 오신 것을 환영해요!"
      }</Heading>

      <Formik
          initialValues={{}}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000);
          }}
      >
        {(props) => (
          <Form>
            <Field name='name' validate={validateName}>
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.name && form.touched.name} mb='1rem' >
                  <FormLabel>이름</FormLabel>
                  <Input {...field} placeholder='' />
                  <FormErrorMessage >{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='username' validate={true}>
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.name && form.touched.name} mb='1rem' >
                  <FormLabel>이메일</FormLabel>
                  <Input {...field} placeholder='' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Center>
              <Button
                mt={4}                
                fontFamily='LINESeedKR-Bd'
                colorScheme='teal'
                width='100%'
                isLoading={props.isSubmitting}
                type='submit'
                mb='0.8rem'
              >
                완료
              </Button>
            </Center>
            
          </Form>
        )}
      </Formik>
      <Button
      fontFamily='LINESeedKR-Bd'
        colorScheme='gray'
        width='100%'
        onClick={goPrevPage}
      >
        뒤로
      </Button>
    </>
  )
}