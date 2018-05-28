import React, { PureComponent } from 'react';
import './Message.css'

class Message extends PureComponent {

	renderOther = () => {
		return (
			<div className="Message">
				<div className="Message__sender">{this.props.author}</div>
				<div className="Message__body">{this.props.message}</div>
				<div className="Message__timestamp">{this.props.timestamp}</div>
			</div>
		);
	}

	renderMine = () => {
		return (
			<div className="Message Message--personal">
				<div className="Message__body">{this.props.message}</div>
				<div className="Message__timestamp">{this.props.timestamp}</div>
			</div>
		);
	}

	render() {
		return this.props.author === 'Veljko' ? this.renderMine() : this.renderOther();
	}
};

export default Message;
