import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [fullName, setFullName] = useState([]);
  const [userName, setUserName] = useState([]);
  const [mail, setMail] = useState([]);
  const [password, setPassWord] = useState([]);

  useEffect(() => {
    const getDataById = () => {
      axios.get(`/admin/user/edit/${id}`).then((res) => {
        setFullName(res.data.fullName);
        setUserName(res.data.userName);
        setMail(res.data.mail);
        setPassWord(res.data.password);
      });
    };
    getDataById();
  }, [id]);

  const updateHandler = (e) => {
    e.preventDefault();
    const data = {
      fullName: fullName,
      mail: mail,
      userName: userName,
      password: password,
    };

    axios.put(`/admin/user/edit/${id}`, data);
  };

  const history = useNavigate();
  return (
    <div>
      <button className="btn btn-primary m-lg-1" onClick={() => history(-1)}>
        Go back
      </button>
      <form onSubmit={updateHandler} method="POST">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            name="fullName"
            className="form-control"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email </label>
          <input
            type="email"
            value={mail}
            name="mail"
            className="form-control"
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={userName}
            name="userName"
            className="form-control"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            value={password}
            name="password"
            className="form-control"
            onChange={(e) => setPassWord(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
