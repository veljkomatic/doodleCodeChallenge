import axios from 'axios';

const requestHeaders = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	token: 'NqebNLtXsswN',
};

const baseURL = 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/'

const fetch = async function (request) {

	const error = 'Something went wrong';

	try {
		const response = await axios(request);

		if (response && response.status >= 200 && response.status <= 299) {
			return response;
		} else if (response && response.status >= 400 && response.status <= 499) {
			return { error };
		}
		return { error };
	} catch (e) {
		return { error };
	}
};

class Network {

	static get() {
		const request = {
			url: baseURL,
			method: 'GET',
			params: {
				token: 'NqebNLtXsswN'
			}
		};
		return fetch(request);
	}

	static post({ data, params = {} }) {
		const request = {
			url: baseURL,
			method: 'POST',
			headers: requestHeaders,
			params: params,
			data
		};
	}
}

export default Network;