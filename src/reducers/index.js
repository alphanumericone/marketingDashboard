// Set up your root reducer here...
import { combineReducers } from 'redux';
import ping from './pingReducer';
import pingDetails from './pingDetailsReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import {routerReducer} from 'react-router-redux';


const rootReducer =  combineReducers({
  ping: ping,
  pingDetails: pingDetails,
  ajaxCallsInProgress: ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;
