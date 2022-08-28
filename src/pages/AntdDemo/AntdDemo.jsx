import React from "react";
import { DatePicker, Button } from "antd";
export default function AntdDemo() {
  return (
    <div className="container">
      AntdDemo
      <div>
        <DatePicker />
        <Button size="large" block="true">Click</Button>
      </div>
    </div>
  );
}
