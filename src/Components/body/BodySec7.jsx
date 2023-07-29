import React from 'react'
import { Grid } from '@mui/material'
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";


function BodySec7() {

    return (
        <>
            <Grid item md={12} lg={6} id="animation">
                <img data-aos="fade-up" src={pic4} style={{ height: "730px", width: "100%" }} />
            </Grid>
            <Grid item md={12} lg={6} id="animation">
                <img data-aos="fade-up" src={pic5} style={{ height: "730px", width: "100%" }} />
            </Grid>
        </>
    )
}
export default BodySec7