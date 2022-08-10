import { LOGIN } from '../types/types';

export const handleLogin = (data) => ({
    type: LOGIN,
    payload: data
});