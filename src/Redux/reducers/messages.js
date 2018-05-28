import { actionTypes } from '../actionCreators/types';

const INITIAL_STATE = {
	messages: [],
	loading: false,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.FETCHING_MESSAGES:
		return {
			...state,
			loading: true,
			error: ''
		};
		case actionTypes.FETCHING_MESSAGES_SUCCESS: {
			return {
				...state,
				loading: false,
				error: '',
				messages: action.payload 
			};
		}
		case actionTypes.FETCHING_POLICIES_DATA_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		case actionTypes.CREATE_MESSAGE:
			return {
				...state,
				loading: true,
				error: ''
			};
		case actionTypes.CREATE_MESSAGES_SUCCESS:
			return {
				...state,
				loading: false,
				error: '',
				messages: {
					...state.messages,
					...action.payload
				}
			};
		case actionTypes.CREATE_MESSAGES_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};