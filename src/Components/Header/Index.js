import React from "react";
import TemporaryDrawer from "../Drawer/Index";
import "./Index.css";
import Drawer from "../Drawer/Index";

import logo from "../assets/logobg.png";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import banner from "../assets/banner.jpg";
import banner1 from "../assets/banner1.PNG";

function Header() {
  return (
    <>
      <div className="header_super">
        <div className="banner_header_div" >
          <img src={banner} className="banner_header" />
        </div>
        <div className="nav2q">
          <div className="menu_icon" >
            <Drawer />
          </div>
          <div className="logo_container_header">
           <a href="https://www.naturaldiamonds.com/for-moments-like-no-other//"><img style={{fontSize: "50px"}} src={logo} className="logo_header" /></a> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
