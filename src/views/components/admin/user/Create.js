import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Create = () => {
  const history = useNavigate();
  const [registerInput, setRegister] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
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
    };

    axios.post("/admin/user/create_user", data).then((res) => console.log(res));
  };

  return (
    <div>
      <button className="btn btn-primary m-lg-1" onClick={() => history(-1)}>
        Go back
      </button>
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input
            className="form-control"
            name="fullname"
            placeholder="fullname"
            onChange={handleInput}
            value={registerInput.fullname}
          />
        </div>
        <div className="form-group">
          <label>Email </label>
          <input
            className="form-control"
            name="email"
            placeholder="email"
            onChange={handleInput}
            value={registerInput.email}
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            name="username"
            placeholder="username"
            onChange={handleInput}
            value={registerInput.username}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            name="password"
            placeholder="password"
            onChange={handleInput}
            value={registerInput.password}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary m-2"
          onClick={registerSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
