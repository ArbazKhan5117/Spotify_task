import { LOGIN, USERS } from '../types/types';

import { initialState } from './state';

export const reducer = (state = initialState, action) => {

    const { type, payload } = action;

	switch (type) {

        case LOGIN: {
			const auth = payload; 

			return {
				...state,
				auth
			};
		}
		case USERS: {
			const users = payload; 

			return {
				...state,
				users
			};
		}

		default:
			return state;

    }

};
