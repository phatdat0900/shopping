import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Product = () => {
  const [productList, setProductList] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    const getData = async () => {
      axios.get("/admin/product").then((response) => {
        setProductList(response.data);
      });
    };
    getData();
  }, []);

  // const DeleteHandle = (ID) => {
  //   const data = {
  //     id: ID,
  //   };
  //   console.log(data);
  //   axios
  //     .post(`/admin/deleteOrderItem`, data)
  //     .then(axios.post(`/admin/deleteOrder`, data));
  //   history(0);
  // };

  return (
    <div>
      <h1>Product managerment</h1>
      <div>
        <Link className="btn btn-primary m-lg-3" to="create">
          Create
        </Link>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">ProductID</th>
              <th scope="col">productName</th>
              <th scope="col">Price</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((val, key) => {
              return (
                <tr scope="row" key={key}>
                  <td>{val.ProductID}</td>
                  <td>{val.productName}</td>
                  <td>{val.Price}</td>

                  <td>
                    <Link
                      className="btn btn-primary m-lg-1"
                      to={`edit/${val.ProductID}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-success m-lg-1"
                      to={`/product/item=${val.ProductID}`}
                    >
                      VIEW
                    </Link>

                    <button
                      className="btn btn-danger m-lg-1"
                      // onClick={() => {
                      //   DeleteHandle(val.orderID);
                      // }}
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

export default Product;
