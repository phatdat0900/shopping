import React from "react";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const history = useNavigate();
  return (
    <div>
      <button className="btn btn-primary m-lg-1" onClick={() => history(-1)}>
        Go back
      </button>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Full Name</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email </label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Password</label>
          <input type="email" className="form-control" />
        </div>
        <button type="submit" class="btn btn-primary m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
