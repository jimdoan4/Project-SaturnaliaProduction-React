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

export default class NewsPage extends Component {
	// state = {
	// 	events: [],
	// 	newEvent: {
	// 		_id: '',
	// 		eventTitle: '',
	// 		eventDescription: '',
	// 		eventImage: ''
	// 	},
	// 	displayEventForm: false
	// };

	// componentDidMount = () => {
	// 	this.getAllEvents();
	// };

	// getAllEvents = () => {
	// 	axios.get('/api/events/').then((res) => {
	// 		this.setState({ events: res.data });
	// 	});
	// };

	// createEvent = (e) => {
	// 	axios
	// 		.post('/api/events/', {
	// 			eventTitle: this.state.newEvent.eventTitle,
	// 			eventDescription: this.state.newEvent.eventDescription,
	// 			eventImage: this.state.newEvent.eventImage
	// 		})
	// 		.then((res) => {
	// 			const eventsList = [ this.state.events ];
	// 			eventsList.unshift(res.data);
	// 			this.setState({
	// 				newEvent: {
	// 					eventTitle: '',
	// 					eventDescription: '',
	// 					eventImage: ''
	// 				},
	// 				displayEventForm: false,
	// 				events: eventsList
	// 			});
	// 		});
	// 	this.getAllEvents();
	// };

	// handleChange = (e) => {
	// 	const changeNewEvent = { ...this.state.newEvent };
	// 	changeNewEvent[e.target.name] = e.target.value;
	// 	this.setState({ newEvent: changeNewEvent });
	// };

	// handleSignUp = (e) => {
	// 	e.preventDefault();
	// 	this.createEvent();
	// };

	render() {
		return (
			
				<div style={{ background: '#fffdf9', width: '100%', height: '100%' }}>
						<section id="team">
						
              
             
            <div class="containers">
                <h1><p class='text-center'>Queer volleyball jocks throw beer bust at Woofs</p></h1>
               <br/>
                	<Container class='text-center' fluid style={{ background: '#fffdf9', width: '100%', height: '100%', display: 'block', margin: 'auto 0' }}>
                <div class="row">
                    <div class="col profile-pic text-center">
                        <div class="img-box">
                            <img src="https://www.projectq.us/images/uploads/6_9_19_Possums_Summer_Camp-24.jpg" style={{width: '50rem',  marginBottom: '30px'}}class="img-responsive"/>
                    
                        </div>
                      <Card.Title
														class="text-center"
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px' }}
													>
														Retrospective: Lucrecia Martel
													</Card.Title>
													<Card.Text class="text-center">
<p>													

That’s what the Hotlanta Volleyball Association did on Sunday by throwing a beer bust at Woofs to raise money for the Hotlanta Classic coming up Aug. 3-4. If it’s anything like last year’s tournament, expect a ton of cute guys in town from around the country.
 </p>

 <p>
And if you’re wanting to pop by Woofs before it moves from its longtime location on Piedmont Road, better get there soon. They’re moving in July.
</p>
<p>
ADE Sound Lab also features the annual Demolition panel with moderator and DJ Dave Clarke alongside a panel of top DJ talent, demo pitches and audiovisual installations, plus a broad range of hardware and software brands to try out. 

Tickets & more info
Tickets for the four day ADE Sound Lab program (€25,-) are available here. The program is also accessible with the ADE card, available here and for ADE Pass and ADE Conference Pass holders, available here.</p>
													</Card.Text>
                    </div>
                    
                   
                </div>
                 </Container>
            </div>
        </section>
					
					</div>
			
		);
	}
}
