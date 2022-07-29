import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CreateProduct = () => {
  const history = useNavigate();

  const [productInput, setProductInput] = useState({
    CateID: "",
    productName: "",
    Price: "",
    detail: "",
    discount: "",
  });
  const [error, setError] = useState(undefined);
  const handleInput = (e) => {
    setProductInput({ ...productInput, [e.target.name]: e.target.value });
  };

  const productSubmit = (e) => {
    e.preventDefault();
    const data = {
      CateID: productInput.CateID,
      productName: productInput.productName,
      Price: productInput.Price,
      detail: productInput.detail,
      discount: productInput.discount,
    };

    if (
      data.CateID &&
      data.productName &&
      data.Price &&
      data.detail &&
      data.discount
    ) {
      setError("");
      axios.post("/admin/addProduct", data).then((res) => console.log(res));
    } else {
      setError("Bạn nhập thiếu thông tin");
    }
  };
  useEffect(() => {}, [error]);

  return (
    <div>
      <button className="btn btn-primary m-lg-1" onClick={() => history(-1)}>
        Go back
      </button>
      <form>
        <div className="form-group">
          <label>CateID</label>
          <input
            className="form-control"
            name="CateID"
            onChange={handleInput}
            value={productInput.CateID}
          />
        </div>
        <div className="form-group">
          <label>productName: </label>
          <input
            className="form-control"
            name="productName"
            onChange={handleInput}
            value={productInput.productName}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            className="form-control"
            name="Price"
            onChange={handleInput}
            value={productInput.Price}
          />
        </div>
        <div className="form-group">
          <label>Detail:</label>
          <input
            className="form-control"
            name="detail"
            onChange={handleInput}
            value={productInput.detail}
          />
        </div>
        <div className="form-group">
          <label>Discount:</label>
          <input
            className="form-control"
            name="discount"
            onChange={handleInput}
            value={productInput.discount}
          />
        </div>
        {error ? (
          <div className="alert alert-danger">
            <strong>{error}</strong>
          </div>
        ) : (
          <p></p>
        )}
        <button
          type="submit"
          className="btn btn-primary m-2"
          onClick={productSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
