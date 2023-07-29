import React from 'react'
import { Grid } from '@mui/material'
import pic14 from "../assets/pic14.jpg";
import pic1_5 from "../assets/pic1_5.jpg";

function BodySec18() {

    return (
        <>
            <Grid item md={12} lg={6} id="animation">
                <img data-aos="fade-up" className='img-fluid' src={pic14} style={{ height: "550px", width: "100%" }} />
            </Grid>
            <Grid item md={12} lg={6} id="animation">
                <img data-aos="fade-up" className='img-fluid' src={pic1_5} style={{ height: "550px", width: "100%" }} />
            </Grid>
        </>
    )
}
export default BodySec18