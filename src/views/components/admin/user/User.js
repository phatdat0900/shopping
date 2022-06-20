import React from "react";
import { Link } from "react-router-dom";
const User = () => {
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <Link className="btn btn-primary m-lg-1" to="#">
                  {" "}
                  View
                </Link>
                <Link className="btn btn-success m-lg-1" to="edit_user">
                  Edit
                </Link>
                <Link className="btn btn-danger m-lg-1" to="#">
                  {" "}
                  Delete
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
