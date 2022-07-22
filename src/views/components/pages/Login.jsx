import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/AuthSlice";
import Button from "../Button";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  height: 100vh;
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
// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 10px;
// `;

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

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const data = {
      username: loginInput.username,
      password: loginInput.password,
    };

    axios
      .post("/login", data)
      .then((res) => {
        setLoginStatus(res.data);
        if (res.data.id !== "WRONG_INFOR") {
          const user = {
            ...res.data,
          };

          dispatch(logIn(user));
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
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
          {loginStatus.id === "WRONG_INFOR" ? (
            <div className="alert alert-danger">
              <strong>{loginStatus.message}</strong>
            </div>
          ) : (
            <p></p>
          )}

          <Button type="submit" onClick={loginSubmit}>
            ĐĂNG NHẬP
          </Button>

          <Link>QUÊN MẬT KHẨU CỦA BẠN?</Link>

          <Link href="/register">TẠO TÀI KHOẢN </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
