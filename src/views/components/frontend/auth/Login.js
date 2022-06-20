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
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
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
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;

const Login = () => {
  const [loginInput, setLogin] = useState({
    username: "",
    password: "",
  });
  const [loginStatus, setLoginStatus] = useState({});

  const handleInput = (e) => {
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: loginInput.username,
      password: loginInput.password,
    };
    // console.log(data);
    axios.post("http://localhost:3001/Login", data).then((res) => {
      if (res.data.message) {
        console.log("hi");
        // setLoginStatus(res.data.message);
      } else {
        setLoginStatus(res.data[0].username);
      }
      console.log(res);
    });
  };
  return (
    <Container>
      <Wrapper>
        <Title>ĐĂNG NHẬP</Title>
        <Form onSubmit={loginSubmit}>
          <Input
            name="username"
            placeholder="username"
            onChange={handleInput}
            value={loginInput.username}
          />
          <Input
            name="password"
            placeholder="password"
            onChange={handleInput}
            value={loginInput.password}
          />
          <Button type="submit" onClick={loginSubmit}>
            ĐĂNG NHẬP
          </Button>

          <Link>QUÊN MẬT KHẨU CỦA BẠN?</Link>
          <Link href="/Register">TẠO TÀI KHOẢN </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
