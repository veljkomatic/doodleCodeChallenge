import { actionTypes } from './types';
import Network from '../network';

const Author = 'Veljko';

export const fetchingMessages = (timpestamp) => async (dispatch) => {
	dispatch({
		type: actionTypes.FETCHING_MESSAGES
	});

    const response = await Network.get(timpestamp && {
        since: timpestamp,
        limit: 10
    } || {});
    
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

    console.log("Message redux", message);
    
    const response = await Network.post({
        data: {
            message,
            author: Author
        }
    });

    console.log(response);

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