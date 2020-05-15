import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

// import userReducer from './user/user.reducer';
import alertsReducer from './alert/alert.reducer'
import authReducer from '../redux/auth/auth.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
    alerts: alertsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: authReducer,

});

export default persistReducer(persistConfig, rootReducer);
