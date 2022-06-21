import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const View = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getData = async () => {
      axios.get(`/admin/user/view/${id}`).then((res) => {
        setUser(res.data);
      });
    };
    getData();
  }, []);
  return (
    <div>
      <button className="btn btn-primary m-lg-1" onClick={() => history(-1)}>
        Go back
      </button>
      <div className="card mt-5">
        <div className="card-body">
          <label>ID: </label>
          <p className="card-text">{user.id}</p>
          <label>Full name: </label>
          <p className="card-text">{user.fullName}</p>
          <label>User name: </label>
          <p className="card-text">{user.userName}</p>
          <label>Password: </label>
          <p className="card-text">{user.password}</p>
        </div>
      </div>
    </div>
  );
};

export default View;
