/**
 * Created by Lance on 11/14/2016.
 */
import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		
		this.state = { term: ''};
		
		this.onInputChange = this.onInputChange.bind(this);
	}
	
	/**
	 *
	 * @param event
	 */
	onInputChange(event) {
		console.log(event.target.value);
		this.setState({ term: event.target.value});
	}
	
	onFormSubmit(event) {
		event.preventDefault();
		
		// Check if there is data
	}
	
	render() {
			return (
				<form onSubmit={this.onFormSubmit} className="input-group">
					<input
						placeholder="Get forecasts for your favorite cities"
						className="form-control"
						value={this.state.term}
						onChange={this.onInputChange}/>
					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary">Submit</button>
					</span>
				</form>
			);
	}
}