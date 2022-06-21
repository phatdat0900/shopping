import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const User = () => {
  const [userList, setUserList] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    const getData = async () => {
      axios.get("/admin/user").then((response) => {
        setUserList(response.data);
      });
    };
    getData();
  }, []);

  const DeleteHandle = (id) => {
    axios.delete(`/admin/user/${id}`);
    history(0);
  };

  return (
    <div>
      <h1>User managerment</h1>
      <Link className="btn btn-primary m-lg-3" to="create_user">
        Create
      </Link>
      <div>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">username</th>
              <th scope="col">mail</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((val, key) => {
              return (
                <tr scope="row" key={key}>
                  <td>{val.id}</td>
                  <td>{val.userName}</td>
                  <td>{val.mail}</td>
                  <td>
                    <Link
                      className="btn btn-primary m-lg-1"
                      to={`view/${val.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-success m-lg-1"
                      to={`edit/${val.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger m-lg-1"
                      onClick={() => {
                        DeleteHandle(val.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
