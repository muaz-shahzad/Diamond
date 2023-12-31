import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{backgroundColor:"#d9e4e0",height:"30px"}}>
                    <h4 style={{ fontSize: "14px",fontFamily: "IvarText",Color: "black" }}>SELECT REGION</h4>

                </AccordionSummary>
                <AccordionDetails style={{backgroundColor:"#d9e4e0"}}>
                    <div className='REGIONDrawer'>
                        <div className='hall'><a href='https://www.naturaldiamonds.com/for-moments-like-no-other/adventurous-trending-jewelry/'>US</a><br /></div>
                        <div className='hall'><a href='https://www.naturaldiamonds.com/for-moments-like-no-other/fr/un-sens-de-laventure/'>France</a><br /></div>
                        <div className='hall'><a href='http://moments.onlynaturaldiamonds.com.cn/'>China</a><br /></div>
                        <div className='hall'><a href='https://www.naturaldiamonds.com/for-moments-like-no-other/in/adventurous-trending-jewellery/'>India</a><br /></div>
                        <div className='hall'><a href='https://www.naturaldiamonds.com/for-moments-like-no-other/ae/adventurous-trending-jewelry/'>UAE</a><br /></div>
                    </div>
                </AccordionDetails>
            </Accordion>
        
        </div>
    );
}
