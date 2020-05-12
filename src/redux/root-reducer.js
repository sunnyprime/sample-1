import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import userReducer from './user/user.reducer';
import alertsReducer from './alert/alert.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
    alerts: alertsReducer,

});

export default persistReducer(persistConfig, rootReducer);
