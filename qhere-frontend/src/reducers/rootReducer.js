import {combineReducers} from 'redux';
import users from './users';
import manager from './manager';
import student from './student';

export default combineReducers({
    users,
    manager,
    student
})