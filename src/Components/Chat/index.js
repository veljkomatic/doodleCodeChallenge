import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchingMessages, createMessage  } from '../../Redux/actionCreators';
import Message from '../Message';
import Form from '../Form';
import './Chat.css';

class Chat extends PureComponent {

	constructor(props) {
		super(props);

		this.sendMessage = this.sendMessage.bind(this);
	}

	componentDidMount() {
		setInterval(async () => {
			const numberOfMessages = this.props.messagesData.length;
			const last = this.props.messagesData[numberOfMessages - 1];
			await this.props.fetchingMessages(last.timestamp);
			if(this.props.messagesData.length > numberOfMessages) {
				window.scrollTo(0,document.body.scrollHeight);
			}
		}, 2000);
	}

	componentWillMount() {
		this.props.fetchingMessages();
	}

	async sendMessage(message) {
		await this.props.createMessage(message);
		window.scrollTo(0,document.body.scrollHeight);
	} 

	render() {
		return ([
			<div key="chat" className="ChatSection">
				{this.props.messagesData.length > 0 && this.props.messagesData.map(message => <Message {...message} key={message._id} />)}
			</div>,
			<div key="form" className="FormSection">
				<Form 
					send={this.sendMessage}
				/>
			</div>
		]);
	}
};

const mapStateToProps = ({ messages }) => ({
	messagesData: messages.messagesData,
	loading: messages.loading
});

export default connect(mapStateToProps, { fetchingMessages, createMessage })(Chat);