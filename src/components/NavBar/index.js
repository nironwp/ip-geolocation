import React from 'react';
import { useForm, useController } from "react-hook-form";
import { Container, Title, InputContainer, Form, InputText, InputSubmit } from './styles';

function NavBar({setIp}) {
  const { register, handleSubmit, watch, formState: { errors }, reset } =  useForm();
  const  enviarDados  =  data  =>  {
    console.log(data);
    setIp(data._ip)
  }
  return (
    <Container>
        <Title>IP Address Tracker</Title>
        <InputContainer>
          <Form onSubmit={handleSubmit(enviarDados)}>
            <InputText 
              {...register("_ip", {required:  true})}
              type="text"
              placeholder = "Search for any Ip Address or Domain"
            />
            <InputSubmit
              type="submit"
            />
          </Form>
        </InputContainer>
    </Container>
  );
}

export default NavBar;