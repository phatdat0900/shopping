import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Order = () => {
  const [orderList, setOrderList] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    const getData = async () => {
      axios.get("/admin/order").then((response) => {
        setOrderList(response.data);
      });
    };
    getData();
  }, []);

  const updateHandle = (ID) => {
    const data = {
      id: ID,
    };
    axios.post(`/admin/orderUpdate`, data);
    history(0);
  };

  const DeleteHandle = (ID) => {
    const data = {
      id: ID,
    };
    console.log(data);
    axios
      .post(`/admin/deleteOrderItem`, data)
      .then(axios.post(`/admin/deleteOrder`, data));
    history(0);
  };

  return (
    <div>
      <h1>Order managerment</h1>
      <div>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">userID</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((val, key) => {
              return (
                <tr scope="row" key={key}>
                  <td>{val.orderID}</td>
                  <td>{val.userID}</td>
                  <td>{val.totalPrice}</td>
                  {val.status === 0 ? (
                    <td>chưa thanh toán</td>
                  ) : (
                    <td>đã thanh toán</td>
                  )}
                  <td>
                    <Link
                      className="btn btn-primary m-lg-1"
                      to={`view/${val.orderID}`}
                    >
                      View
                    </Link>
                    <button
                      className="btn btn-success m-lg-1"
                      onClick={() => {
                        updateHandle(val.orderID);
                      }}
                    >
                      Thanh toán
                    </button>
                    <button
                      className="btn btn-danger m-lg-1"
                      onClick={() => {
                        DeleteHandle(val.orderID);
                      }}
                    >
                      Hủy
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

export default Order;
