import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getProductDetail } from "../../../../redux/reducers/productReducer";

export default function Detail() {
  const { productDetail } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  //const [productDetail, setProductDetail] = useState({});
  const params = useParams();

  //console.log('productDetail', productDetail);

  const getProductDetailApi = async () => {
    let { id } = params;

    //Buoc 1: dispatch action thunk
    const action = getProductDetail(id);
    dispatch(action);
  };

  useEffect(() => {
    //callapi
    getProductDetailApi();
  }, [params.id]);

  return (
    <div className="container">
      <h3>Params: Product - {params.id}</h3>
      <div className="row">
        <div className="col-4">
          <img
            className="w-100"
            src={productDetail.image}
            alt={productDetail.name}
          />
        </div>
        <div className="col-8">
          <h1>{productDetail.name}</h1>
        </div>
      </div>
      <h3>Related Product</h3>
      <div className="row mt-2">
        {/*toán tử ?: optional chaining */}
        {productDetail.relatedProducts?.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card">
                <img src={item.image} alt={item.name} />
                <div className="card-body bg-dark text-white">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <NavLink
                    className="btn btn-secondary"
                    to={`/detail/${item.id}`}
                  >
                    View detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
