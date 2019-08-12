import {INIT_USER_NAME} from './activeTypes'
import {takeEvery,put} from 'redux-saga/effects'
import {getUser} from '../api'
import {addUserName} from './activeCreators.js'

function* getInitName() {
   try {
       const data =yield getUser();
       const action = addUserName(data.data.name);
       console.log(action);
       yield put(action)
   }catch (e) {
       console.log(e)
   }
};

function* f() {
    yield takeEvery(INIT_USER_NAME,getInitName)
}

export default f
