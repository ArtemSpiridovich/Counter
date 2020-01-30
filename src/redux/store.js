import {createStore} from "redux";

const INC_BUTTON = 'INC_BUTTON';
const RESET_BUTTON = 'RESET_BUTTON';

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
            debugger
            return {
                ...state,
                numberCurrent: action.valuer=state.minnumber
            }
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

const store = createStore(reducer);

export default store