import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import { CardGroup } from 'react-bootstrap';

export default class EventPage extends Component {
	state = {
		eventId: this.props.eventId,
		events: [],
		event: {
			_id: '',
			eventTitle: '',
			eventDescription: '',
			eventImage: ''
		},
		redirectToEvent: false,
		displayEventForm: false
	};

	getSingleEventData = () => {
		axios.get(`/api/events/${this.state.eventId}`).then((res) => {
			this.setState({ event: res.data });
		});
	};

	componentDidMount = () => {
		this.getSingleEventData();
	};

	toggleEventForm = () => {
		this.setState((state, props) => {
			return { displayEventForm: !state.displayEventForm };
		});
	};

	handleChange = (e) => {
		const updateEvent = { ...this.state.event };
		updateEvent[e.target.name] = e.target.value;
		this.setState({ event: updateEvent });
	};

	handleChange = (e) => {
		const newEvent = { ...this.state.event };
		newEvent[e.target.name] = e.target.value;
		this.setState({ event: newEvent });
	};

	updateEvent = (e) => {
		e.preventDefault();
		axios
			.put(`/api/events/${this.state.eventId}`, {
				eventTitle: this.state.event.eventTitle,
				eventDescription: this.state.event.eventDescription,
				eventImage: this.state.event.eventImage
			})
			.then((res) => {
				this.setState({ event: res.data, displayEventForm: false });
			});
		this.getSingleEventData();
	};

	deleteEvent = () => {
		axios.delete(`/api/events/${this.state.eventId}`).then((res) => {
			this.setState({ redirectToEvent: true });
		});
	};

	render() {
		if (this.state.redirectToEvent) {
			return <Redirect to={`/events/`} />;
		}
		return (
			<div style={{ background: '#fffdf9', width: '100%', height: '100%' }}>
				<section id="team">
					<div class="containers">
						<h1>
							<p class="text-center">{this.state.event.eventTitle} </p>
						</h1>
						<br />
						<Container
							class="text-center"
							fluid
							style={{
								background: '#fffdf9',
								width: '100%',
								height: '100%',
								display: 'block',
								margin: 'auto 0'
							}}
						>
							<div class="row">
								<div class="col profile-pic text-center">
									<div class="img-box">
										<img
											src={this.state.event.eventImage}
											style={{ width: '50rem', marginBottom: '30px' }}
											class="img-responsive"
										/>
									</div>
									<Card.Title
										class="text-center"
										style={{
											color: 'black',
											fontWeight: 'bold',
											marginBottom: '10px',
											fontSize: '20px'
										}}
									>
										{this.state.event.eventTitle}
									</Card.Title>
									<Card.Text class="text-center">{this.state.event.eventDescription}</Card.Text>
								</div>
							</div>
						</Container>
					</div>
				</section>
				<Container style={{ textAlign: 'center', marginBottom: '30px', marginTop: '8px' }}>
					<Row>
						<Col>
							<button className="bus" onClick={this.toggleEventForm}>
								Edit Event
							</button>
						</Col>
						<Col>
							<button className="bus" onClick={this.deleteEvent}>
								Delete Event
							</button>
						</Col>
					</Row>
				</Container>

				{this.state.displayEventForm ? (
					<form
						style={{ marginTop: '10px', marginBottom: '60px' }}
						onSubmit={this.updateEvent}
						className="col text-center"
					>
						<div className="col text-center">
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '10px' }} htmlFor="name">
									Image Name{' '}
								</label>

								<input
									style={{ height: '50px', width: '320px', marginRight: '99px' }}
									className=""
									id="eventImage"
									type="text"
									name="eventImage"
									onChange={this.handleChange}
									value={this.state.event.eventImage}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '20px' }} htmlFor="size">
									Title{' '}
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className=""
									id="eventTitle"
									type="text"
									name="eventTitle"
									onChange={this.handleChange}
									value={this.state.event.eventTitle}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '20px' }} htmlFor="image">
									Description{' '}
								</label>
								<textarea
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className=""
									id="eventDescription"
									type="text"
									name="eventDescription"
									onChange={this.handleChange}
									value={this.state.event.eventDescription}
								/>
							</div>
						</div>
						<div className="text-center" style={{ marginTop: '20px' }}>
							<button className="text-center bus">Submit</button>
						</div>
					</form>
				) : null}
			</div>
		);
	}
}
