import React from "react";
import Drawer from '@mui/material/Drawer';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import { updateFontSize } from "../redux/fontSize";
import { addBoldLettering } from "../redux/boldLettering";
import { addDyslexicFont } from "../redux/dyslexicFont";
import { switchDarkLightMode } from "../redux/darkLightMode";
import { useDispatch, useSelector } from "react-redux";

const ToggleDrawer = () => {
    const { fontSize } = useSelector((state) => state.fontSize);
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
            <p>FONT SIZE</p>
            <Slider aria-label="Volume" value={fontSize} onChange={handleFontSizeUpdate} sx={{mt: 1, color: '#ed6c02'}} min={15}/>
            <p>BOLD LETTERING</p>
            <Switch onChange={handleBoldLettering} sx={{mt: 1}} color="warning" />
            <p>DYSLEXIC FONT</p>
            <Switch onChange={handleDyslexicFont} sx={{mt: 1}} color="warning"/>
            <p>DARK LIGHT MODE</p>
            <Switch onChange={handleDarkLightMode} sx={{mt: 1}} color="warning"/>
        </Drawer>
    );
};

export default ToggleDrawer;