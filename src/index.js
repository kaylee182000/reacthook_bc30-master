import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseStateDemo from "./pages/HookDemo/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./pages/HookDemo/UseEffectDemo/UseEffectDemo";
import UseCallBackDemo from "./pages/HookDemo/UseCallBackDemo/UseCallBackDemo";
import UseMemoDemo from "./pages/HookDemo/UseMemoDemo/UseMemoDemo";
import UseRefDemo from "./pages/HookDemo/UseRefDemo/UseRefDemo";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//setup redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import DemoNumber from "./pages/HookDemo/UseReduxDemo/DemoNumber/DemoNumber";
import DemoFaceBookApp from "./pages/HookDemo/UseReduxDemo/DemoFaceBookApp/DemoFaceBookApp";
import LoginDemo from "./pages/HookDemo/UseHookRouter/LoginDemo/LoginDemo";
import Home from "./pages/HookDemo/UseHookRouter/DemoUseParams/Home";
import Detail from "./pages/HookDemo/UseHookRouter/DemoUseParams/Detail";
import DemoUseSearchParam from "./pages/HookDemo/UseHookRouter/DemoUseSearchParam/DemoUseSearchParam";
import DemoUseRoute from "./pages/HookDemo/CustomHook/DemoUseRoute";
import "antd/dist/antd.css";
import "./assets/scss/styles.scss";
import AntdDemo from "./pages/AntdDemo/AntdDemo";
import Login from "./pages/Login/Login";

//Cau hinh history chuyen huong (chuyen huong khong can hook navigate)
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Profile from "./pages/Profile/Profile";
import HocDemo from "./pages/HOCDemo/HocDemo";

export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />}></Route>
          </Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="search" element={<DemoUseSearchParam />}></Route>
          <Route path="usestate" element={<UseStateDemo />}></Route>
          <Route path="customhook" element={<DemoUseRoute />}></Route>
          <Route path="useeffect" element={<UseEffectDemo />}></Route>
          <Route path="usecallback" element={<UseCallBackDemo />}></Route>
          <Route path="usememo" element={<UseMemoDemo />}></Route>
          <Route path="useref" element={<UseRefDemo />}></Route>
          <Route path="useredux" element={<DemoNumber />}></Route>
          <Route path="reduxfbapp" element={<DemoFaceBookApp />}></Route>
          <Route path="logindemo" element={<LoginDemo />}></Route>
          <Route path="antd" element={<AntdDemo />}></Route>
          <Route path="hoc" element={<HocDemo />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
