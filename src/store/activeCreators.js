import {CHANGE_INPUT_VALUE, CHANGE_LIST, DELECT,ADD_USER_NAME,INIT_USER_NAME} from './activeTypes'
//import {getUser} from '../api'

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
export const addUserName = (value)=>({
    type:ADD_USER_NAME,
    value
});

export const getInitUserName = ()=>({
    type:INIT_USER_NAME
})

/*export const getUsers = () =>{
    return (dispatch)=>{
        return  new Promise((resolve,reject)=>{
            getUser().then(response=>{
                console.log(response)
                const action = addUserName(response.data.name)
                dispatch(action)
            }).catch(error=>{

            })
        });
    }
};*/
