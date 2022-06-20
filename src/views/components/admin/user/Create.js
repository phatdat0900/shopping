import React from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const history = useNavigate();
  return (
    <div>
      <button className="btn btn-primary m-lg-1" onClick={() => history(-1)}>
        Go back
      </button>
      <form action="create_user" method="POST">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullName" className="form-control" />
        </div>
        <div className="form-group">
          <label>Email </label>
          <input type="email" name="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="userName" className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
