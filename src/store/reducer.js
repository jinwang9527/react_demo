import {CHANGE_INPUT_VALUE,CHANGE_LIST,DELECT} from './activeTypes'
const defultState = {
    inputValue: '',
    list: []
};

export default (state = defultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if (action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.value;
    }
    if (action.type === CHANGE_LIST) {
        newState.list.push(newState.inputValue);
        newState.inputValue = ''
    }
    if (action.type === DELECT) {
        newState.list.splice(action.value, 1);
        newState.inputValue = ''
    }
    return newState;
}
