import React from "react";
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-evenly',
        marginTop: '50px'
    }
});

const RecordButtons = (props) => {
    const { recordingStart, recordingEnd } = props;
    const classes = useStyles();

    const getButton = (recordStart) => {
        return (
            <Button 
                onClick={recordStart ? recordingStart : recordingEnd} 
                endIcon={recordStart ? <MicIcon /> : <MicOffIcon />}
                variant="contained"
                style={{
                    borderRadius: 35,
                    backgroundColor: "#21b6ae",
                    padding: "18px 36px",
                    fontSize: "18px",
                }}
            >
                {recordStart ? 'Start' : 'Stop'}
            </Button>
        );
    };

    return (
        <div className={classes.buttonContainer}>
            {getButton(true)}
            {getButton()}
        </div>
    );
};

export default RecordButtons;