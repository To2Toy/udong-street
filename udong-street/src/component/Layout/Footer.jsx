import React from "react";
import "./Layout.css";
import Badge from "./atom/Badge";
const Footer = () => {
  return (
    <div className="footer">
      <p className="test" >© 튀김우동과 유부우동</p>
      <p >
        <Badge className="test" where="github" />
        <Badge className="test" where="instagram" />
        <Badge className="test" where="email" />
      </p>
    </div>
  );
};
export default Footer;
