import React from 'react'
import { Grid } from '@mui/material'
import pic16 from "../assets/pic16.jpg";
import pic17 from "../assets/pic17.jpg";

function BodySec19() {

    return (
        <>
            <Grid item md={12} lg={4} id="animation">
                <img data-aos="fade-up" src={pic16} style={{ height: "550px", width: "100%" }} id="pictureSetting" />
            </Grid>
            <Grid item md={12} lg={4} id="animation">
                <img data-aos="fade-up" src={pic17} style={{ height: "550px", width: "100%" }} id="pictureSetting" />
            </Grid>
        </>
    )
}
export default BodySec19