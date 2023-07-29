import React from "react";
import "./Index.css";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

function Footer() {
  return (
    <>
      <Grid container spacing={0} className="footer_supper">
        <Grid item md={12} sm={12} lg={3.5} className="">
          <div className="">
            <h4 style={{ color: "000000a1", fontSize: "12px", fontWeight: "400" }}>
              EXPLORE MORE
            </h4>
            <h2 className="footerA">
            <a href="https://www.naturaldiamonds.com/for-moments-like-no-other/">Watch the Film</a>
              <br />
              <a href="https://www.naturaldiamonds.com/for-moments-like-no-other/ana-de-armas-jewelry-pics/">Explore Ana’s Jewelry</a>
              <br />
              <a href="https://www.naturaldiamonds.com/for-moments-like-no-other/styling-inspiration/">Styling Inspiration</a>
              <br />
              <a href="https://www.naturaldiamonds.com/for-moments-like-no-other/mens-diamond-jewelry/">Men’s Jewelry</a>
              <br />
              <a href="https://www.naturaldiamonds.com/for-moments-like-no-other/ana-de-armas-interview/">Meet Ana de Armas</a>
              <br />
              <a href="https://www.naturaldiamonds.com/for-moments-like-no-other/made-by-malyia-mcnaughton-interview/">Meet the Jewelry Designer</a>
            </h2>
          </div>
          <br />
          <span className="lastName">
          <a href="https://www.naturaldiamonds.com/terms-of-service/">Terms of Service</a>|<a href="https://www.naturaldiamonds.com/legal-notices/">Legal Notices</a>|
          <a  href="https://www.naturaldiamonds.com/privacy-policy/">Privacy Policy</a>
          </span>
        </Grid>

        <Grid item md={12} sm={12} lg={3.5} className="grid2">
          <h4
            style={{ color: "000000a1", fontSize: "12px", fontWeight: "400" }}
          >
            FOLLOW US
          </h4>
          <div className="sociallinksMain">
            <div className="sociallinks">
              <button class="button-48" role="button">
                <span class="text">
                <a style={{color: "#000000"}} href="https://www.facebook.com/onlynaturaldiamondsIN/"><FacebookIcon/></a>
                </span>
              </button>
              <button class="button-48" role="button">
                <span class="text">
                <a style={{color: "#000000"}} href="https://www.youtube.com/channel/UCZzPdS4CoBGICsi2oMG7xnQ">
                <YouTubeIcon /></a>
                </span>
              </button>
              <button class="button-48" role="button">
                <span class="text">
                <a style={{color: "#000000"}} href="https://www.instagram.com/onlynaturaldiamonds_in/">  
                <InstagramIcon /></a>
                </span>
              </button>
            </div>
            <div className="sociallinks2">
              <button class="button-48" role="button">
                <span class="text">
                <a style={{color: "#000000"}} href="https://www.linkedin.com/company/naturaldiamondcouncil/">   
                <LinkedInIcon /></a>
                </span>
              </button>
              <button class="button-48" role="button">
                <span class="text">
                <a style={{color: "#000000"}} href="https://twitter.com/naturaldiamonds">     
                <TwitterIcon /></a>
                </span>
              </button>
              <button class="button-48" role="button">
                <span class="text">
                <a style={{color: "#000000"}} href="https://www.pinterest.fr/onlynaturaldiamonds/">    
                <PinterestIcon /></a>
                </span>
              </button>
            </div>
          </div>
        </Grid>

        <Grid item md={12} sm={12} lg={3.5} className="grid3">
          <h4
            style={{ color: "000000a1", fontSize: "12px", fontWeight: "400" }}
          >
            ONLY NATURAL DIAMONDS
          </h4>
          <p
            style={{ color: "#000000a1", fontSize: "13px", fontWeight: "500" }}
          >
            Only Natural Diamonds, brought to you by the Natural Diamond
            Council, is the definitive destination for inspiration, insights and
            information on natural diamonds.
          </p>
          <br />
          <h4
            style={{ color: "000000a1", fontSize: "12px", fontWeight: "400" }}
          >
           ABOUT NATURAL DIAMOND COUNCIL
          </h4>
          <p
            style={{ color: "#000000a1", fontSize: "13px", fontWeight: "500" }}
          >
            The mission of Natural Diamond Council is to advance the integrity of the modern diamond jewelry industry & inspire, educate and protect the consumer.
          </p>
        </Grid>
        <span className="lastNameEnd">
          <a href="#">Terms of Service</a>|<a href="#">Legal Notices</a>|
          <a href="#">Privacy Policy</a>
        </span>
      </Grid>
    </>
  );
}

export default Footer;
