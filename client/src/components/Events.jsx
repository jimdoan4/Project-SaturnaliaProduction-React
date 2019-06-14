import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardGroup } from 'react-bootstrap';

export default class Events extends Component {
	state = {
		events: [],
		newEvent: {
			_id: '',
			eventTitle: '',
			eventDescription: '',
			eventImage: ''
		},
		displayEventForm: false
	};

	componentDidMount = () => {
		this.getAllEvents();
	};

	getAllEvents = () => {
		axios.get('/api/events/').then((res) => {
			this.setState({ events: res.data });
		});
	};

	createEvent = (e) => {
		axios
			.post('/api/events/', {
				eventTitle: this.state.newEvent.eventTitle,
				eventDescription: this.state.newEvent.eventDescription,
				eventImage: this.state.newEvent.eventImage
			})
			.then((res) => {
				const eventsList = [ this.state.events ];
				eventsList.unshift(res.data);
				this.setState({
					newEvent: {
						eventTitle: '',
						eventDescription: '',
						eventImage: ''
					},
					displayEventForm: false,
					events: eventsList
				});
			});
		this.getAllEvents();
	};

	toggleEventForm = () => {
		this.setState((state, props) => {
			return { displayEventForm: !state.displayEventForm };
		});
	};

	handleChange = (e) => {
		const changeNewEvent = { ...this.state.newEvent };
		changeNewEvent[e.target.name] = e.target.value;
		this.setState({ newEvent: changeNewEvent });
	};

	handleSignUp = (e) => {
		e.preventDefault();
		this.createEvent();
	};

	render() {
		return (
			
				<div style={{ background: '#fffdf9', width: '100%', height: '100%' }}>
						<section id="team">
						             
            <div class="containers">
                <h1>Events</h1>
				<br/>
				<br/>
			
                	<Container class='text-center' fluid style={{ background: '#fffdf9', width: '100%', height: '100%', display: 'block', margin: 'auto 0' }}>
					 <div class="row">
		 {this.state.events.map((event) => {
			 				return (
               
				
                    <div class="col profile-pic text-center">
                        <div class="img-box red">
						<Link to={`/events/${event._id}`} key={event._id}>
                            <img src={event.eventImage} style={{width: '18rem', height: '200px', marginBottom: '30px'}} className="img-responsive"/></Link>
                         
                        </div>
                      <Card.Title
														class="text-center"
													style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px', marginTop: '22px' }}
													>
														{event.eventTitle}
													</Card.Title>
													<Card.Text class="text-center">
														{event.eventDescription}
													</Card.Text>
                    </div>
                 
															);
					})}
					 </div>
                 </Container>
            </div>
			<div style= {{marginTop: '80px'}}>
				
				<button
					onClick={this.toggleEventForm}
					class='bus'
				
				>
					Add Event
				</button>
				</div>
        </section>

		
					<div class='container'>
				{this.state.displayEventForm ? (
					<div class='container'>
					<form
						style={{ marginTop: '10px', marginBottom: '60px', display: 'block', justifyContent: 'center' }}
						onSubmit={this.createEvent}
						className="col text-center"
					>
						<div className="col ">
							<div className="col " >
								<label htmlFor="name" style={{ paddingRight: '30px'}}>
									Image Name{' '}
								</label>

								<input
									style={{ height: '50px', width: '18rem', marginBottom: '10px'}}
									className=""
									id="eventImage"
									type="text"
									name="eventImage"
									onChange={this.handleChange}
									value={this.state.newEvent.eventImage}
								/>
							</div>
							<div className="col text-center">
								<label htmlFor="size" style={{ paddingRight: '30px'}}>
									Title{' '}
								</label>
								<input
									style={{ height: '50px', width: '18rem', marginBottom: '10px'}}
									className=""
									id="eventTitle"
									type="text"
									name="eventTitle"
									onChange={this.handleChange}
									value={this.state.newEvent.eventTitle}
								/>
							</div>
							<div className="col ">
								<label htmlFor="image" style={{ paddingRight: '30px'}}>
									Description{' '}
								</label>
								<input
									style={{ height: '50px', width: '18rem'}}
									className=""
									id="eventDescription"
									type="text"
									name="eventDescription"
									onChange={this.handleChange}
									value={this.state.newEvent.eventDescription}
								/>
							</div>
							
						</div>
						<div className="text-center" style={{ marginTop: '40px' }}>
							<button
							
								className="text-center bus"
							>
								Submit
							</button>
						</div>
						
					</form>
					</div>
				) : null}
				</div>

				
					</div>
			
		);
	}
}
