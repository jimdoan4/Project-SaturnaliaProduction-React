import React, { Component } from 'react';
import EventPage from './EventPage';

export default class EventShowPage extends Component {
	state = {
		eventId: this.props.match.params.eventId
	};

	render() {
		return (
			<div>
				<EventPage eventId={this.state.eventId} />
			</div>
		);
	}
}
