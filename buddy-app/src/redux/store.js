import { configureStore } from '@reduxjs/toolkit'
import fontSizeReducer from './fontSize';
import boldLetteringReducer from './boldLettering';
import dyslexicFontReducer from './dyslexicFont';
import darkLightModeReducer from './darkLightMode';
import lineHeightReducer from './lineHeight';

export default configureStore({
    reducer: {
        fontSize: fontSizeReducer,
        boldLettering: boldLetteringReducer,
        dyslexicFont: dyslexicFontReducer,
        darkLightMode: darkLightModeReducer,
        lineHeight: lineHeightReducer
    }
});