import {ADD, SUBTRACT, UPDATE, ADD_TODO, COMPLETE, UNDO} from './action';

// Initial states
const initialCounter = 0;
const initialTextInput = '';
const initTodo = [];
// reducers
export const counter = (state = initialCounter, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case SUBTRACT:
      return state - 1;
    default:
      return state;
  }
};
export const textInput = (state = initialTextInput, action) => {
  switch (action.type) {
    case UPDATE:
      return action.payload;
    default:
      return state;
  }
};
export const toDo = (state = initTodo, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
      case COMPLETE: return state.map((val, key) => key == action.payload ? { ...val, completed: true } : val);
      case UNDO: return state.map((val, key) => key == action.payload ? { ...val, completed: false } : val);
    default:
      return state;
  }
};
