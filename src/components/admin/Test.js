import React from "react";
import Dashboard from "./Dashboard";

const Test = ({ option }) => {
  return <div>{option == "test" ? <div>test</div> : <Dashboard />}</div>;
};

export default Test;
