import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ImgSize = () => {
  const { id } = useParams();

  const [images, setImages] = useState([]);
  const [sizes, setSizes] = useState([]);

  const [url, setUrl] = useState({
    detailID: parseInt(id),
    url: "",
  });

  useEffect(() => {
    axios.get(`/admin/getImage/${id}`).then((res) => {
      setImages(res.data);
    });

    axios.get(`/admin/getSize/${id}`).then((res) => {
      setSizes(res.data);
    });
  }, [id]);

  const DeleteHandle = (id) => {
    axios.delete(`/admin/deleteImg/${id}`);
  };
  const addImage = () => {
    const data = {
      detailID: url.detailID,
      url: url.url,
    };

    axios.post(`/admin/addImage`, data);
  };

  const handleInput = (e) => {
    setUrl({ ...url, [e.target.name]: e.target.value });
  };

  const history = useNavigate();
  return (
    <div>
      <button className="btn btn-primary m-lg-1" onClick={() => history(-1)}>
        Go back
      </button>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">SIZE</th>
            <th scope="col">quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((val, key) => {
            return (
              <tr scope="row" key={key}>
                <td>{val.size}</td>
                <td>{val.quantity}</td>
                <td>
                  <Link
                    className="btn btn-primary m-lg-1"
                    to={`/admin/product/edit_size/${val.sizeID}`}
                  >
                    EDIT
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <input
        className="form-control mt-3"
        name="url"
        placeholder="url"
        onChange={handleInput}
        value={url.url}
      />
      <button type="submit" onClick={addImage} className="btn btn-primary m-2">
        ADD IMAGE
      </button>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">ID</th>

            <th scope="col">Img</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {images.map((val, key) => {
            return (
              <tr scope="row" key={key}>
                <td>{val.imgID}</td>
                <td>
                  <img
                    src={val.url}
                    style={{ width: `20em`, height: `30em` }}
                    alt=""
                  />
                </td>

                <td>
                  <button
                    className="btn btn-danger m-lg-1"
                    onClick={() => {
                      DeleteHandle(val.imgID);
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
  );
};

export default ImgSize;
