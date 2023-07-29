import React from 'react'
import { Grid } from '@mui/material'
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";


function BodySec9() {

    return (
        <>
            <Grid item md={12} lg={6} id="animation">
                <img data-aos="fade-up" src={pic6} style={{ height: "730px", width: "100%" }} />
            </Grid>
            <Grid item md={12} lg={6} id="animation">
                <img data-aos="fade-up" src={pic7} style={{ height: "730px", width: "100%" }} />
            </Grid>
        </>
    )
}
export default BodySec9