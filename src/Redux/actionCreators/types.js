import keyMirror from 'keymirror';

export const actionTypes = keyMirror({
	FETCHING_MESSAGES: null,
	FETCHING_MESSAGES_FAIL: null,
	FETCHING_MESSAGES_SUCCESS: null,
	CREATE_MESSAGE: null,
	CREATE_MESSAGES_FAIL: null,
	CREATE_MESSAGES_SUCCESS: null,
});