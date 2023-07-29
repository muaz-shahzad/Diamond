import React from 'react'
import { Grid } from '@mui/material'
import pic1 from "../assets/pic1.PNG";
import pic2 from "../assets/pic2.PNG";

function BodySec3() {

    return (
        <>
            <Grid item md={12} lg={6} id="animation">
                <img data-aos="fade-up" src={pic1} style={{ height: "100%", width: "100%" }} />
            </Grid>
            <Grid item md={12} lg={6} id="animation">
                <img data-aos="fade-up" src={pic2} style={{ height: "100%", width: "100%" }} />
            </Grid>
        </>
    )
}
export default BodySec3