import axios from "axios";
import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
export default function DemoUseSearchParam(props) {
  let keywordRef = React.useRef("");

  let [searchParams, setSearchParams] = useSearchParams();

  let [arrProduct, setArrProduct] = React.useState([]);

  let timeOutRef = React.useRef({});
  const getProductByKeyword = async () => {
    try {
      //lay keyword tu tren url
      let keyword = searchParams.get("keyword");
      if (keyword.trim() !== "" && keyword != null) {
        let result = await axios({
          url: "https://shop.cyberlearn.vn/api/Product?keyword=" + keyword,
          mehtod: "GET",
        });
        console.log(result.data.content);
        setArrProduct(result.data.content);
        clearTimeout(timeOutRef.current);
      } else {
        setArrProduct([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductByKeyword();
  }, [keywordRef.current]);

  const handleChange = (e) => {
    //moi lan ng dung go phim luu vao keywordRef
    keywordRef.current = e.target.value;
    timeOutRef.current = setTimeout(() => {
      setSearchParams({ keyword: keywordRef.current });
    }, 1000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //dua du lieu keyword ng dung nhap len url
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Search</h3>
      <div className="form-group">
        <p>Nhập từ khoá</p>
        <div className="input-group-prepend">
          <input
            className="form-control"
            id="keywordRef"
            onChange={handleChange}
          />
          <button className="btn bg-dark text-white">Search</button>
        </div>
      </div>
      <div className="mt-2">
        <h3>Kết quả tìm kiếm</h3>
        <div className="row">
          {arrProduct.map((item, index) => {
            return (
              <div className="col-3 mb-4" key={index}>
                <div className="card">
                  <img src={item.image} alt={"..."} />
                </div>
                <div className="card-body">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <NavLink
                    className="btn btn-success"
                    to={`/detail/${item.id}`}
                  >
                    View Detail
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
}
