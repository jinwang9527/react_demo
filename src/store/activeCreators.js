import {CHANGE_INPUT_VALUE, CHANGE_LIST, DELECT} from './activeTypes'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const add = () =>({
    type: CHANGE_LIST,
});
export const del = (value) =>({
    type: DELECT,
    value
});
