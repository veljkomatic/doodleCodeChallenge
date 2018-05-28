import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchingMessages, createMessage  } from '../../Redux/actionCreators';
import Message from '../Message';
import Form from '../Form';
import './Chat.css';

class Chat extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			numberOfNewMessages: 0
		}
		this.sendMessage = this.sendMessage.bind(this);
	}

	componentDidMount() {
		setInterval(async () => {
			const numberOfMessages = this.props.messagesData.length;
			const last = this.props.messagesData[numberOfMessages - 1];
			await this.props.fetchingMessages(last.timestamp);
			if (this.props.messagesData.length > numberOfMessages) {
				const difference = this.props.messagesData.length - numberOfMessages;
				this.setState({ numberOfNewMessages: this.state.numberOfNewMessages +  difference})
			}
		}, 2000);
	}

	checkNewMessages = () => {
		this.setState({ numberOfNewMessages: 0 });
		window.scrollTo(0, document.body.scrollHeight);
	}

	componentWillMount() {
		this.props.fetchingMessages();
	}

	async sendMessage(message) {
		await this.props.createMessage(message);
		window.scrollTo(0, document.body.scrollHeight);
	} 

	render() {
		return (
			<div>
				{this.state.numberOfNewMessages > 0 && (
					<div key="info" className="Info">
						<p className="Info__message">{this.state.numberOfNewMessages} new messages available</p>
						<button className="Info__button" onClick={this.checkNewMessages}>Jump</button>
					</div>
				)}
				<div key="chat" className="ChatSection">
					{this.props.messagesData.length > 0 && this.props.messagesData.map(message => <Message {...message} key={message._id} />)}
				</div>
				<div key="form" className="FormSection">
					<Form
						send={this.sendMessage}
					/>
				</div>
			</div>
		);
	}
};

const mapStateToProps = ({ messages }) => ({
	messagesData: messages.messagesData,
	loading: messages.loading
});

export default connect(mapStateToProps, { fetchingMessages, createMessage })(Chat);