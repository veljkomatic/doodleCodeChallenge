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
		const last = this.props.messagesData[this.props.messagesData.length - 1];
		setInterval(() => {
			this.props.fetchingMessages(last.timestamp);
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
			<section key="chat" className="ChatSection">
				{this.props.messagesData.length > 0 && this.props.messagesData.map(message => <Message {...message} key={message._id} />)}
			</section>,
			<section key="form" className="FormSection">
				<Form 
					send={this.sendMessage}
				/>
			</section>
		]);
	}
};

const mapStateToProps = ({ messages }) => ({
	messagesData: messages.messagesData,
	loading: messages.loading
});

export default connect(mapStateToProps, { fetchingMessages, createMessage })(Chat);