import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
const UpdateProduct = () => {
  const { id } = useParams();
  const [ID, setID] = useState([]);
  const [cateID, setCateID] = useState([]);
  const [productName, setProductName] = useState([]);
  const [price, setPrice] = useState([]);
  const [detail, setDetail] = useState([]);
  const [details, setDetails] = useState([]);
  const [discount, setDiscount] = useState([]);
  const [colors, setColors] = useState([]);
  const [colorData, setColorData] = useState([]);
  const size = [
    { size: "L", quantity: 0 },
    { size: "S", quantity: 0 },
    { size: "M", quantity: 0 },
    { size: "XL", quantity: 0 },
    { size: "XXL", quantity: 0 },
  ];
  const history = useNavigate();
  useEffect(() => {
    axios.get(`/admin/product/edit/${id}`).then((res) => {
      setID(res.data.ProductID);
      setCateID(res.data.CateID);
      setProductName(res.data.productName);
      setPrice(res.data.Price);
      setDetail(res.data.detail);
      setDiscount(res.data.discount);
    });

    axios.get(`/admin/color`).then((res) => {
      const color = res.data.map((item) => {
        return {
          color_id: item.colorID,
          value: item.Name,
          label: item.Name,
        };
      });
      setColorData(color);
    });
    const getData = async () => {
      const data = await axios.get(`/admin/detail/${id}`);

      const detail = data.data.map((item) => {
        return {
          DetailID: item.DetailID,
          ColorID: item.ColorID,
          ProductID: item.ProductID,
          color: item.Name,
          code: item.code,
        };
      });
      setDetails(detail);
      console.log(detail);
    };
    getData();
  }, [id]);
  useEffect(() => {}, [colors]);
  useEffect(() => {}, [details]);

  const updateHandler = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const data = {
      CateID: cateID,
      productName: productName,
      Price: price,
      detail: detail,
      discount: discount,
    };
    axios
      .post(`/admin/product/edit/${id}`, data)
      .then(window.location.reload());
  };
  const handleChange = (e) => {
    setColors(e);
  };

  const addColor = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const data = colors.map((item) => {
      return {
        ColorID: item.color_id,
        ProductID: ID,
      };
    });
    axios.post(`/admin/addDetail`, data).then((res) => {
      const sizes = size.map((item) => {
        return {
          size: item.size,
          DetailID: res.data[0].DetailID,
          quantity: item.quantity,
        };
      });
      axios.post(`/admin/addSize`, sizes).then((res) => {});
    });
  };

  const DeleteHandle = (id) => {
    axios.delete(`/admin/deleteDetails/${id}`);
    window.location.reload();
  };
  return (
    <div>
      <button className="btn btn-primary m-lg-1" onClick={() => history(-1)}>
        Go back
      </button>
      <form onSubmit={updateHandler} method="POST">
        <div className="form-group">
          <label>CateID:</label>
          <input
            type="text"
            value={cateID}
            name="fullName"
            className="form-control m-2"
            onChange={(e) => setCateID(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Product Name: </label>
          <input
            type="text"
            value={productName}
            name="productName"
            className="form-control m-2"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Price: </label>
          <input
            type="text"
            value={price}
            name="price"
            className="form-control m-2"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label>Detail: </label>
          <input
            type="text"
            value={detail}
            name="detail"
            className="form-control m-2"
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>
        <div className="form-group m-2">
          <label>Discount:</label>
          <input
            type="text"
            value={discount}
            name="discount"
            className="form-control m-2"
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>

        <div className="card-body border border-primary mt-4 w-50 ">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">màu</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {details.map((item, index) => {
                return (
                  <tr scope="row" key={index}>
                    <td>{item.color}</td>

                    <th>
                      <Link
                        className="btn btn-primary m-lg-1"
                        to={`/admin/product/edit_img/${item.DetailID}`}
                      >
                        EDIT
                      </Link>
                      <button
                        className="btn btn-danger m-lg-1"
                        onClick={() => {
                          DeleteHandle(item.DetailID);
                        }}
                      >
                        Hủy
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <button type="submit" className="btn btn-primary m-2">
          Submit
        </button>
      </form>
      <h4>Thêm màu</h4>
      <Select
        isMulti
        name="colors"
        options={colorData}
        className="basic-multi-select w-25"
        classNamePrefix="select"
        onChange={handleChange}
      />
      <button type="submit" onClick={addColor} className="btn btn-primary m-2">
        ADD Color
      </button>
    </div>
  );
};

export default UpdateProduct;
