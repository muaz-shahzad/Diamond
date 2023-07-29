import React from 'react'
import { Grid } from '@mui/material'
import pic19 from "../assets/pic19.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


function BodySec22() {

    return (
        <>
            <Grid container className="third_section">
                <Grid item md={12} lg={4} className="third_3Start" id="animation">
                    <img src={pic19} style={{ height: "100%", width: "100%", objectFit: "cover" }}     />
                </Grid>
                <div className="onwardDiv"></div>
                <Grid item md={12} lg={4} className="third_1">
                    <h2 id="animation" style={{fontFamily: "serif",fontWeight: "400",}} className="Mailing">
                        <i>Join our Mailing List</i>
                    </h2>
                    <p id="animation" className="MailingPara" style={{fontFamily: "monospace",fontWeight: "500", fontSize: "14px",color: "rgba(0, 0, 0, 0.877)", }}>
                        Sign up for diamond news, inspiration, and specials.
                    </p>
                </Grid>
                <Grid item md={12} lg={4} className="third_2" sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",}}>
                    <div data-aos="fade-up" className="inputstyle">
                        <input type="text" className="inputfield_third" placeholder="Email Address "/>
                        <p>
                            <ArrowForwardIcon className="p" />
                        </p>
                    </div>
                    <span data-aos="fade-up" id="animation" style={{
                            width: "350px",
                            marginTop: "30px",
                            display: "flex",
                            justifyContent: "space-between", }}>
                        <input type="radio" className="xyz" />
                        <span style={{ fontSize: "12px" }}>
                            By submittingthis from, I give consent to Only Natural Diamond
                            to use mu email address to send me perioducal newsletters
                        </span>
                    </span>
                </Grid>
                <Grid item md={12} lg={4} className="third_3" id="animation">
                    <img src={pic19} style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                </Grid>
            </Grid>
        </>
    )
}
export default BodySec22