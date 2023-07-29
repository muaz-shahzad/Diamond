import React, { useEffect, useState } from "react";
import "./Index.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Section2 from "../Main/Section2";
import Aos from "aos";
import "aos/dist/aos.css";
import BodySec1 from "./BodySec1";
import BodySec2 from "./BodySec2";
import BodySec3 from "./BodySec3";
import BodySec4 from "./BodySec4";
import BodySec5 from "./BodySec5";
import BodySec6 from "./BodySec6";
import BodySec7 from "./BodySec7";
import BodySec8 from "./BodySec8";
import BodySec9 from "./BodySec9";
import BodySec10 from "./BodySec10";
import BodySec11 from "./BodySec11";
import BodySec12 from "./BodySec12";
import BodySec13 from "./BodySec13";
import BodySec14 from "./BodySec14";
import BodySec15 from "./BodySec15";
import BodySec16 from "./BodySec16";
import BodySec17 from "./BodySec17";
import BodySec18 from "./BodySec18";
import BodySec19 from "./BodySec19";
import BodySec20 from "./BodySec20";
import BodySec21 from "./BodySec21";
import BodySec22 from "./BodySec22";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Body() {
  useEffect(() => {
    Aos.init({
      offest: 300,
      duration: 1500
     });
  }, []);
  const [on, setOn] = useState(false);
  return (
    <>
      <div className="body_super">
        {/* first part */}
        <div className="first_section">
          <div className="part1">
            <Box sx={{ width: "100%" }}>
              <Grid container className="mainBodyGrid">
                <Grid item md={12} lg={12}>
                  <BodySec1 />
                </Grid>
                <Grid container md={12} lg={12}>
                  <BodySec2 />
                </Grid>
                <Grid container spacing={3} className="firstRow">
                  <BodySec3 />
                  <BodySec4 />
                </Grid>
                <Grid container spacing={4} className="firstRow">
                  <BodySec5 />
                  <BodySec6 />
                </Grid>
                <Grid container spacing={4} className="firstRow">
                  <BodySec7 />
                  <BodySec8 />
                </Grid>
                <Grid container spacing={4} className="firstRow">
                  <BodySec9 />
                  <BodySec10 />
                </Grid>
                <Grid container spacing={2} className="firstRow">
                  <BodySec11 />
                </Grid>
                <Grid container spacing={2} className="firstRow">
                  <BodySec12 />
                </Grid>
                <Box sx={{ width: "85%" }}>
                  <Grid container md={12} lg={12} id="animation">
                    <BodySec13 />
                    <BodySec14 />
                  </Grid>
                </Box>
                <Box sx={{ width: "90%" }}>
                  <Grid container md={12} lg={12} id="animation">
                    <BodySec15 />
                  </Grid>
                </Box>
                <Box sx={{ width: "90%" }}>
                  <Grid container spacing={3} style={{ padding: "30px  " }} className="firstRow">
                    <BodySec16 />
                    <BodySec17 />
                  </Grid>
                </Box>
                <Grid container spacing={4} className="firstRowBSHK">
                  <BodySec18 />
                </Grid>
                <Grid container spacing={4} style={{}} className="piccontainersmall mt-3">
                    <BodySec19/>
                    <BodySec20/>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
        <div className="secound_section">
          <BodySec21 />
        </div>
        <div className="third_section">
          <BodySec22/>
        </div>
      </div>
    </>
  );
}

export default Body;
