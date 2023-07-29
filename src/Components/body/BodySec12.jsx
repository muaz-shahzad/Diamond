import React from 'react'
import { Grid } from '@mui/material'
import vid1 from "../assets/vid1.mp4";
import pic21 from "../assets/pic21.PNG";


function BodySec12() {

    return (
        <>
            <Grid item md={12} lg={6} id="animation">
                <video data-aos="fade-up" src={vid1} autoPlay loop muted style={{ height: "100%", width: "100%" }} />
            </Grid>
            <Grid item md={12} lg={6} id="animation">
                <img data-aos="fade-up" src={pic21} style={{ height: "100%", width: "100%" }} />
            </Grid>
        </>
    )
}
export default BodySec12