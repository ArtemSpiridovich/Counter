import {createStore} from "redux";

const INC_BUTTON = 'INC_BUTTON';
const RESET_BUTTON = 'RESET_BUTTON';
const CHANGEMAX_BUTTON = 'CHANGEMAX_BUTTON';
const CHANGEMIN_BUTTON = 'CHANGEMIN_BUTTON';
const SET_BUTTON = 'SET_BUTTON';
const ERROR_VALUE = 'ERROR_VALUE';

let initialstate = {
        correctValue: true,
        numberCurrent: 0,
        maxnumber: 5,
        minnumber: 0,
        settingmode: true
};

const reducer = (state = initialstate, action) => {
    debugger
    switch (action.type){
        case INC_BUTTON:
            return {
                ...state,
                numberCurrent: action.value + 1
            };
        case RESET_BUTTON:
            return {
                ...state,
                numberCurrent: action.valuer=state.minnumber
            };
        case CHANGEMAX_BUTTON:
            return {
                ...state,
                maxnumber: action.maxval,
                settingmode: false,
                correctValue: true
            };
        case CHANGEMIN_BUTTON:
            return {
                ...state,
                minnumber: action.minval,
                settingmode: false,
                correctValue: true
            };
        case SET_BUTTON:
            return {
                ...state,
                numberCurrent: state.minnumber,
                settingmode: true,
                settingview: false
            };
        case ERROR_VALUE:
            return {
                ...state,
                correctValue: false,
                minnumber: action.min,
                maxnumber: action.max
            };
        default:
            return state
    }
};

export const incButtonAC = (value) => {
    return {
        type: INC_BUTTON,
        value
    }
};

export const resetButtonAC = (valuer) => {
    return {
        type: RESET_BUTTON,
        valuer
    }
};

export const changeStatusMaxAC = (maxval) => {
    return {
        type: CHANGEMAX_BUTTON,
        maxval
    }
};

export const changeStatusMinAC = (minval) => {
    return {
        type: CHANGEMIN_BUTTON,
        minval
    }
};

export const setButtonAC = (minval) => {
    return {
        type: SET_BUTTON,
        minval
    }
};

export const errorvalueAC = (max, min) => {
    return {
        type: ERROR_VALUE,
        max,
        min
    }
};

const store = createStore(reducer);

export default store