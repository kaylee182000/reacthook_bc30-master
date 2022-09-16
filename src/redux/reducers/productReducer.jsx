import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";
import { http } from "../../util/tool";

const initialState = {
  arrProduct: [],
  productDetail: {},
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      //lay du lieu tu payload
      const arrProduct = action.payload;
      // cap nhat lai state
      state.arrProduct = arrProduct;
    },
    getDetail: (state, action) => {
      //buoc 4: Sau khi nhan duoc du lieu tu dispatch 2
      const productDetail = action.payload;
      state.productDetail = productDetail;
    },
  },
});

//-------------------------action:{type,payload}---------
export const { getProduct, getDetail } = productReducer.actions;

export default productReducer.reducer;

//--------------------------action api-------------------
//goi api cho reducer
export const getProductApi = () => {
  return async (dispatch) => {
    try {
      const result = await http.get("/product");
      //sau khi lay du lieu tu api ve thi set State
      //setArrProduct(result.data.content);
      const action = getProduct(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProductDetail = (id) => {
  return async (dispatch) => {
    //Buoc 2: Thuc thi thunk
    try {
      let result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method: "GET",
      });
      //Buoc 3: Sau khi co du lieu dispatch lan 2
      const action = getDetail(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
