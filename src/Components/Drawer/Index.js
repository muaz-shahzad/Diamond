import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import BasicGrid from "../../TestFile";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import "./Index.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 420,
        backgroundColor: "#d9e4e0",
        height: "100vh",
        paddingLeft: "40px",
      }}
      role="presentation"
      className="mainBox"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          className="drawer_list1"
          disablePadding
          onClick={toggleDrawer(anchor, false)}
        >
          <ClearOutlinedIcon sx={{ cursor: "pointer" }} />
        </ListItem>
      </List>
      <List>
        <div className="drawer_1st">
          <i>
            <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/for-moments-like-no-other//"><h3 style={{ Color: "black" }} >For Moments Like No Other</h3></a>
          </i><br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/for-moments-like-no-other/">Watch the Film</a>
          <br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/for-moments-like-no-other/ana-de-armas-jewelry-pics/">Explore Ana’s Jewelry</a>
          <br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/for-moments-like-no-other/styling-inspiration/">Styling Inspiration</a>
          <br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/for-moments-like-no-other/mens-diamond-jewelry/">Men’s Jewelry</a>
          <br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/for-moments-like-no-other/ana-de-armas-interview/">Meet Ana de Armas</a>
          <br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/for-moments-like-no-other/made-by-malyia-mcnaughton-interview/">Meet the Jewelry Designer</a>
        </div>
        <br />
        <div className="drawer_1st">
          <i>
            <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/for-moments-like-no-other//">
              <h3>Only Natural Diamonds</h3></a><br />
          </i>
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/epic-diamonds/">Epic Diamonds</a>
          <br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/celebrities/">Celebrities</a>
          <br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/engagement-and-weddings/">Engagement &#038; Weddings</a>
          <br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/style/">Style</a>
          <br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/mens-diamond-jewelry/">Men&#8217;s</a>
          <br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/industry-insights/">Industry Insights</a>
          <br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/diamond-guide/">Diamond Guide</a>
        </div>
        <br />{" "}
        <div className="drawer_1st">
        <i>
            <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/for-moments-like-no-other//">
              <h3>Natural Diamond Council </h3></a><br />
          </i>
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/council/">Diamond Professionals</a>
          <br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/sustainable-development/">Sustainable Development</a>
          <br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/industry-news/thank-you-btw/">Thank You, By The Way</a>
          <br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/council/industry-news/eddifund/">Emerging Designers Diamond
                Initiative</a>
          <br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/official-partner-locations/">Shop Official Retail Partners</a>
          <br />
          <a style={{ Color: "black" }} href="https://www.naturaldiamonds.com/about/">About Us</a>
        </div>
        <br />
        <h4 style={{ fontSize: "16px", fontWeight: "200",fontFamily:"IvarText" }}>Follow Us</h4>
        <br />
        <div className="iconsDrawer">
          <a href="https://www.facebook.com/onlynaturaldiamondsIN/">
            <FacebookIcon />
          </a>
          <a href="https://www.youtube.com/channel/UCZzPdS4CoBGICsi2oMG7xnQ">
            <YouTubeIcon />
          </a>
          <a href="https://www.instagram.com/onlynaturaldiamonds_in/">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/company/naturaldiamondcouncil/">
            <LinkedInIcon />
          </a>
          <a href="https://twitter.com/naturaldiamonds">
            <TwitterIcon />
          </a>
          <a href="https://www.pinterest.fr/onlynaturaldiamonds/">
            <PinterestIcon />
          </a>
        </div>
        <br />
        <br />
        <h4 style={{ fontSize: "13px", fontWeight: "200" }}>
          <BasicGrid />
        </h4>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div
            onClick={toggleDrawer(anchor, true)}
            onTouchStart={toggleDrawer(anchor, true)}
            style={{ cursor: "pointer" }}
          >
            <div className="menu_icon">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
          <Drawer
            anchor={anchor}
            elevation={16}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
