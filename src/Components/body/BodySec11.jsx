import React from 'react'
import { Grid } from '@mui/material'
import pic8 from "../assets/pic8.jpg";
import pic9 from "../assets/pic9.jpg";


function BodySec11() {

    return (
        <>
            <Grid item md={12} lg={6} id="animation">
                <img data-aos="fade-up" src={pic8} style={{ height: "770px", width: "100%" }} />
            </Grid>
            <Grid item md={12} lg={6} id="animation">
                <img data-aos="fade-up" src={pic9} style={{ height: "770px", width: "100%" }} />
            </Grid>
        </>
    )
}
export default BodySec11