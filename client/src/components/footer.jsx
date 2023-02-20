import React from "react";

const Footer = () => {
  return (
    <div className="footerComp" >
    <p className="border-top pt-3 text-center footerComp-txt">
      BizzCard &copy; {new Date().getFullYear()}
    </p>

    </div>
  );
};

export default Footer;
