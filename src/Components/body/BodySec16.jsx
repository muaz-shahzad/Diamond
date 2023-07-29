import React from 'react'
import { Grid } from '@mui/material'
import pic11 from "../assets/pic11.jpg";
import pic12 from "../assets/pic12.jpg";
import pic13 from "../assets/pic13.jpg";

function BodySec16() {

    return (
        <>
            <Grid item md={12} lg={4} id="animation">
                <img data-aos="fade-up" src={pic11} style={{ height: "530px", width: "100%" }} />
            </Grid>
            <Grid item md={12} lg={4} id="animation">
                <img data-aos="fade-up" src={pic12} style={{ height: "530px", width: "100%" }} />
            </Grid>
            <Grid item md={12} lg={4} id="animation">
                <img data-aos="fade-up" src={pic13} style={{ height: "530px", width: "100%" }} />
            </Grid>
        </>
    )
}
export default BodySec16