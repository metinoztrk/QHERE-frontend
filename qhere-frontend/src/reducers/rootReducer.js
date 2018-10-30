import {combineReducers} from 'redux';
import users from './users';
import manager from './manager';

export default combineReducers({
    users,
    manager
})