import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Register = () => {
  const [registerInput, setRegister] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirm_pass: "",
  });

  const handleInput = (e) => {
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    const data = {
      fullname: registerInput.fullname,
      email: registerInput.email,
      username: registerInput.username,
      password: registerInput.password,
      confirm_pass: registerInput.confirm_pass,
    };
    console.log(data);
    axios.post("http://localhost:3001/Register", data).then((res) => {});
  };

  return (
    <Container>
      <Wrapper>
        <Title>TẠO TÀI KHOẢN</Title>
        <Form onSubmit={registerSubmit}>
          <Input
            name="fullname"
            placeholder="fullname"
            onChange={handleInput}
            value={registerInput.fullname}
          />
          <Input
            name="email"
            placeholder="email"
            onChange={handleInput}
            value={registerInput.email}
          />
          <Input
            name="username"
            placeholder="username"
            onChange={handleInput}
            value={registerInput.username}
          />
          <Input
            name="password"
            placeholder="password"
            onChange={handleInput}
            value={registerInput.password}
          />
          <Input
            name="confirm_pass"
            placeholder="confirm password"
            onChange={handleInput}
            value={registerInput.confirm_pass}
          />
          <Agreement>
            Tôi đồng ý với ĐIỀU KHOẢN SỬ DỤNG và CHÍNH SÁCH BẢO MẬT CỦA WEAR.
            <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit" onClick={registerSubmit}>
            ĐĂNG KÝ
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
