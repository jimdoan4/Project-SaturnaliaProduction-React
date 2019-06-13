import React, { Component } from 'react';
import ReviewPage from './ReviewPage';




export default class ReviewShowPage extends Component {
	state = {
		reviewId: this.props.match.params.reviewId
	};

	render() {
		return (
		<div>
	<ReviewPage reviewId={this.state.reviewId}/>
</div>
			
		);
	}
}

