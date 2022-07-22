import axios from "axios";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Size = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState();
  useEffect(() => {
    const getDataById = () => {
      axios.get(`/admin/getOneSize/${id}`).then((res) => {
        setQuantity(res.data[0].quantity);
      });
    };
    getDataById();
  }, [id]);

  const updateHandler = (e) => {
    e.preventDefault();
    const data = {
      sizeID: parseInt(id),
      quantity: quantity,
    };
    axios.post(`/admin/updateQuantity`, data);
  };

  const history = useNavigate();
  return (
    <div>
      <button className="btn btn-primary m-lg-1" onClick={() => history(-1)}>
        Go back
      </button>
      <form onSubmit={updateHandler} method="POST">
        <div className="form-group">
          <label>quantity</label>
          <input
            type="text"
            value={quantity}
            name="quantity"
            className="form-control"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Size;
