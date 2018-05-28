import { actionTypes } from './types';
import Network from '../network';


export const fetchingMessages = () => async (dispatch) => {
	dispatch({
		type: actionTypes.FETCHING_MESSAGES
    });

    const response = await Network.get();
    
    if (response.error) {
		dispatch({
			type: actionTypes.FETCHING_MESSAGES_FAIL,
			payload: response.error
		});
		return response.error;
	}

	dispatch({
		type: actionTypes.FETCHING_MESSAGES_SUCCESS,
		payload: response
	});

	return response;
};

export const createMessage = (message) => async (dispatch) => {
    dispatch({
		type: actionTypes.CREATE_MESSAGE
    });
    
    const response = await Network.post({
        data: message
    });

    if (response.error) {
		dispatch({
			type: actionTypes.CREATE_MESSAGES_FAIL,
			payload: response.error
		});
		return response.error;
	}

	dispatch({
		type: actionTypes.CREATE_MESSAGES_SUCCESS,
		payload: response
    });
    
    return response;
}