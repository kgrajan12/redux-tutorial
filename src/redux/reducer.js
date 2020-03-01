import { ADD, SUBTRACT, UPDATE } from "./action";

// Initial states
const initialCounter = 0;
const initialTextInput = '';

// reducers
export const counter = (state = initialCounter, action) => {
    switch(action.type) {
        case ADD: return state + 1;
        case SUBTRACT: return state - 1;
        default: return state;
    }
}
export const textInput = (state = initialTextInput, action) => {
    switch(action.type) {
        case UPDATE: return action.payload;
        default: return state;
    }
}