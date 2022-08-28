import React from "react";
import useRoutes from "../../../hooks/useRoutes";

export default function DemoUseRoute() {
  const { navigate, searchParams, params } = useRoutes();
  const [search, setSearch] = searchParams;
  console.log({ navigate, searchParams, params });
  return <div>DemoUseRoute</div>;
}
