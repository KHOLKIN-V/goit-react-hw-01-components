import React from "react";
import cs from "./Container.module.css";

const Container = ({ children }) => (
  <div className={cs.Container}>{children}</div>
);

export default Container;
