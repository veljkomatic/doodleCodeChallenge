import React, { PureComponent } from 'react';
import './Form.css'

class Form extends PureComponent {

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.send(this.text.value)
	}

	render() {
		return (
			<form className="Form" onSubmit={this.handleSubmit}>
				<input className="Form__input" type="text" placeholder="message" ref={(text) => this.text = text } />
				<button className="Form__button" type="submit">Send</button>
			</form>);
	}
};

export default Form;
