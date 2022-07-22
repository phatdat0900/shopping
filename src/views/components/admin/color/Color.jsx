import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Color = () => {
  const [colorList, setColorList] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    const getData = async () => {
      axios.get("/admin/color").then((response) => {
        setColorList(response.data);
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
      <h1>Color managerment</h1>
      <div>
        <Link className="btn btn-primary m-lg-3" to="create_user">
          Create
        </Link>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">ColorID</th>
              <th scope="col">Name</th>
              <th scope="col">code</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {colorList.map((val, key) => {
              return (
                <tr scope="row" key={key}>
                  <td>{val.colorID}</td>
                  <td>{val.Name}</td>
                  <td>{val.code}</td>

                  <td>
                    <button className="btn btn-success m-lg-1">Edit</button>
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

export default Color;
