import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJson,
  setCookie,
  setStore,
  setStoreJson,
  USER_LOGIN,
} from "../../util/tool";
import { history } from "../../index";

const initialState = {
  userLogin: getStoreJson(USER_LOGIN), //co the null hoac object
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getProfileAction: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { getProfileAction } = userReducer.actions;

export default userReducer.reducer;

export const loginApi = (userLogin) => {
  //{email,password}
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "POST",
        data: userLogin,
      });

      //sau khi dang nhap thanh cong => luu du lieu vao localStorage hoac cookie
      console.log(result);
      setCookie(ACCESS_TOKEN, result.data.content.accessToken, 30);
      setStore(ACCESS_TOKEN, result.data.content.accessToken);

      //chuyen huong ve profile trang quen mat khau
      history.push("/profile");
      //sau khi dang nhap thanh cong thi dispatch action profile
      dispatch(getProfileApi());
    } catch (err) {
      history.push("/home");
      console.log(err);
    }
  };
};

export const getProfileApi = (accessToken = getStore(ACCESS_TOKEN)) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/getProfile",
        method: "POST",
        headers: {
          //headers la cac phan du lieu mac dinh gui di
          Authorization: "Bearer " + accessToken,
        },
      });
      //lay duoc thong tin profile => dua len redux
      const action = getProfileAction(result.data.content);
      dispatch(action);

      //luu vao storage
      setStoreJson(USER_LOGIN, result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};
