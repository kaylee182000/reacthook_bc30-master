import React from "react";
import ModalHoc from "../../HOC/ModalHoc";
import LoginDemo from "../HookDemo/UseHookRouter/LoginDemo/LoginDemo";

let LoginModalComponent = new ModalHoc(LoginDemo);
export default function HocDemo() {
  return (
    <div>
      <LoginModalComponent />
    </div>
  );
}
