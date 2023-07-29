import React from 'react'
import { Grid } from '@mui/material'
import vid2 from "../assets/vid2.mp4";
import pic20 from "../assets/pic20.PNG";



function BodySec5() {

    return (
        <>
            <Grid item md={12} lg={6} id="animation">
                <video src={vid2} data-aos="fade-up" autoPlay loop muted style={{ height: "100%", width: "100%" }} />
            </Grid>
            <Grid item md={12} lg={6} id="animation">
                <img data-aos="fade-up" src={pic20} style={{ height: "100%", width: "100%" }} />
            </Grid>
        </>
    )
}
export default BodySec5