import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import RecordButtons from "./RecordButtons";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '80%'
    },
    micStatusContainer: {
        marginTop: '100px'
    },
    transcriptContainer: {
        border: '2px solid #AEAEAE',
        borderRadius: '8px',
        width: '80%',
        height: '400px',
        marginTop: '40px',
        padding: '7px',
        overflow: 'scroll'
    }
});

const TextRecognition = () => {
    const {
        transcript,
        listening,
        resetTranscript,
    } = useSpeechRecognition();
    const classes = useStyles();
    const { fontSize } = useSelector((state) => state.fontSize);
    const { boldLettering } = useSelector((state) => state.boldLettering);
    const { dyslexicFont } = useSelector((state) => state.dyslexicFont);
    const { darkLightMode } = useSelector((state) => state.darkLightMode);


    const handleVoiceRecordingStart = () => {
        resetTranscript();
        SpeechRecognition.startListening({ continuous: true });
    };

    const handleVoiceRecordingEnd = () => {
        SpeechRecognition.stopListening();
    };

    const transcriptText = () => {
        let output = ``;
        transcript.split(' ').map(word => (
            output+= `<span style="font-weight:bold;font-size:${fontSize}px">${word.substring(0,1)}</span><span>${word.substring(1)}</span> `
        ));
        return boldLettering ? output : transcript;
    };

    return (
        <div className={classes.root}>
            <div className={classes.micStatusContainer}>
                <Typography 
                    style={{fontSize: '50px', color: '#F89D2A'}}
                >
                    Microphone: {listening ? 'On' : 'Off'}
                </Typography>
            </div>
                <RecordButtons 
                    recordingStart={handleVoiceRecordingStart}
                    recordingEnd={handleVoiceRecordingEnd}
                />
                <div className={classes.transcriptContainer} style={{backgroundColor: darkLightMode.background}}>
                    <Typography 
                        dangerouslySetInnerHTML={{__html: transcriptText()}}
                        style={{
                            fontSize: `${fontSize}px`,
                            fontFamily: dyslexicFont,
                            color: darkLightMode.text
                        }}
                    ></Typography>
                </div>
        </div>
    );
};

export default TextRecognition;