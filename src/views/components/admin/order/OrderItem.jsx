import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const OrderItem = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`/admin/order/view/${id}`);
      setOrderItems(data.data);
    };
    getData();
  }, []);

  return (
    <div>
      <button className="btn btn-primary m-lg-1" onClick={() => history(-1)}>
        Go back
      </button>
      <div className="card mt-5">
        {orderItems.map((item, index) => {
          return (
            <div className="card-body border border-primary mt-4" key={index}>
              <label>ProductName: </label>
              <p className="card-text">{item.productName}</p>
              <label>Color: </label>
              <p className="card-text">{item.color}</p>
              <label>Size: </label>
              <p className="card-text">{item.size}</p>
              <label>Quantity: </label>
              <p className="card-text">{item.quantity}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderItem;
