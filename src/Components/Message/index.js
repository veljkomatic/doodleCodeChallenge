import React, { PureComponent } from 'react';
import './Message.css'

class Message extends PureComponent {

	formatTimestamp(timestamp) {
		return new Intl.DateTimeFormat('en-GB', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric'
		}).format(new Date(timestamp));
	}

	renderOther = () => {
		return (
			<div className="Message">
				<p className="Message__sender">{this.props.author}</p>
				<p className="Message__body">{this.props.message}</p>
				<p className="Message__timestamp">{this.formatTimestamp(this.props.timestamp)}</p>
			</div>
		);
	}

	renderMine = () => {
		return (
			<div className="Message Message--personal">
				<p className="Message__body">{this.props.message}</p>
				<p className="Message__timestamp">{this.formatTimestamp(this.props.timestamp)}</p>
			</div>
		);
	}

	render() {
		return this.props.author === 'Veljko' ? this.renderMine() : this.renderOther();
	}
};

export default Message;
