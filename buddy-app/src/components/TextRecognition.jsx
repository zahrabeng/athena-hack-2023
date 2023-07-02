import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import RecordButtons from "./RecordButtons";
import communityLogo from '../images/Community_Logo.png';

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
        border: '0.5px solid #AEAEAE',
        borderRadius: '8px',
        width: '80%',
        height: '400px',
        marginTop: '40px',
        padding: '7px',
        overflow: 'scroll',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
    const { lineHeight } = useSelector((state) => state.lineHeight);

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
                    style={{fontSize: '50px', color: '#F89D2A', fontFamily: 'Montserrat, sans-serif'}}
                >
                    Microphone: {listening ? 'On' : 'Off'}
                </Typography>
            </div>
                <RecordButtons 
                    recordingStart={handleVoiceRecordingStart}
                    recordingEnd={handleVoiceRecordingEnd}
                    transcript={transcript}
                />
                <div className={classes.transcriptContainer} style={{backgroundColor: darkLightMode.background}}>
                    {
                        !transcript && darkLightMode.background !== 'black' ? 
                        <div className={classes.logoContainer}>
                            <img src={communityLogo} width={'400'} height={'400'} alt={'class companion logo'}/>
                        </div>
                        : <Typography 
                                dangerouslySetInnerHTML={{__html: transcriptText()}}
                                style={{
                                    fontSize: `${fontSize}px`,
                                    fontFamily: dyslexicFont,
                                    color: darkLightMode.text,
                                    lineHeight: `${lineHeight}px`
                                }}
                        ></Typography>
                    }
                </div>
        </div>
    );
};

export default TextRecognition;