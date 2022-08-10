import { LOGIN } from '../types/types';

import { initialState } from './state';

export const reducer = (state = initialState, action) => {

    const { type, payload } = action;

	switch (type) {

        case LOGIN: {
			const { auth } = payload; 

			return {
				...state,
				auth
			};
		}

		default:
			return state;

    }

};
