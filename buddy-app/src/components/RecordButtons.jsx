import React from "react";
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSpeechSynthesis } from 'react-speech-kit';

const useStyles = makeStyles({
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-evenly',
        marginTop: '50px'
    }
});

const RecordButtons = (props) => {
    const { recordingStart, recordingEnd, transcript } = props;
    const { speak } = useSpeechSynthesis();
    const classes = useStyles();

    const getRecordButton = (recordStart) => {
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

    const handleSpeakOutLoud = () => {
        speak({ text: transcript });
    };

    const getSpeakButton = () => {
        return (
            <Button 
                onClick={handleSpeakOutLoud} 
                endIcon={<VolumeUpIcon/>}
                variant="contained"
                style={{
                    borderRadius: 35,
                    backgroundColor: "#FD88AB",
                    padding: "18px 36px",
                    fontSize: "18px",
                }}
            >
                {'Read out loud'}
            </Button>
        );
    };

    return (
        <div className={classes.buttonContainer}>
            {getRecordButton(true)}
            {getRecordButton()}
            {getSpeakButton()}
        </div>
    );
};

export default RecordButtons;