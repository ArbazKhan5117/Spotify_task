import { LOGIN, USERS } from '../types/types';

export const handleLogin = (data) => ({
    type: LOGIN,
    payload: data
});
export const addUser = (data) => ({
    type: USERS,
    payload: data
});