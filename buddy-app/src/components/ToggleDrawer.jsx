import React from "react";
import Drawer from '@mui/material/Drawer';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import { makeStyles } from "@mui/styles";
import { updateFontSize } from "../redux/fontSize";
import { addBoldLettering } from "../redux/boldLettering";
import { addDyslexicFont } from "../redux/dyslexicFont";
import { updateLineHeight } from "../redux/lineHeight";
import { switchDarkLightMode } from "../redux/darkLightMode";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
    toggleLabel: {
        fontFamily: 'Oswald, sans-serif',
        fontSize: '20px',
        marginTop: '40px'
    }
});

const ToggleDrawer = () => {
    const classes = useStyles();
    const { fontSize } = useSelector((state) => state.fontSize);
    const { lineHeight } = useSelector((state) => state.lineHeight);
    const dispatch = useDispatch();

    const handleFontSizeUpdate = (event, newValue) => {
        dispatch(updateFontSize(newValue));
    };

    const handleBoldLettering = (event, newValue) => {
        dispatch(addBoldLettering(newValue));
    };

    const handleDyslexicFont = (event, newValue) => {
        newValue 
            ? dispatch(addDyslexicFont('Open-Dyslexic, sans-serif'))
            : dispatch(addDyslexicFont('unset'))
    };

    const handleDarkLightMode = (event, newValue) => {
        newValue 
            ? dispatch(switchDarkLightMode({background: 'black', text: 'white'}))
            : dispatch(switchDarkLightMode({background: 'white', text: 'black'}))
    };

    const handleLineHeightUpdate = (event, newValue) => {
        dispatch(updateLineHeight(newValue));
    };

    return (
        <Drawer
            sx={{
                width: '20%',
                '& .MuiDrawer-paper': {
                    width: '20%',
                    boxSizing: 'border-box',
                    padding: '0px 17px'
                },
            }}
            variant="permanent"
            anchor="right"
        >
            <p className={classes.toggleLabel}>FONT SIZE</p>
            <Slider value={fontSize} onChange={handleFontSizeUpdate} sx={{mt: 1, color: '#ed6c02'}} min={15}/>
            <p className={classes.toggleLabel}>LINE HEIGHT</p>
            <Slider value={lineHeight} onChange={handleLineHeightUpdate} sx={{mt: 1, color: '#ed6c02'}} min={37}/>
            <p className={classes.toggleLabel}>BOLD LETTERING</p>
            <Switch onChange={handleBoldLettering} sx={{mt: 1}} color="warning" />
            <p className={classes.toggleLabel}>DYSLEXIC FONT</p>
            <Switch onChange={handleDyslexicFont} sx={{mt: 1}} color="warning"/>
            <p className={classes.toggleLabel}>DARK LIGHT MODE</p>
            <Switch onChange={handleDarkLightMode} sx={{mt: 1}} color="warning"/>
        </Drawer>
    );
};

export default ToggleDrawer;