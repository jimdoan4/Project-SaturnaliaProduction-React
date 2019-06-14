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

export default class BlogsPage extends Component {
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
			// <div style={{ background: '#fffdf9', width: '100%', height: '100%', marginTop: '40px' }}>
			// 	<section class="fashion-Trends">
			// 		<div class="container">
			// 	{/* <aside
			// 		style={{
			// 			width: '1150px',
			// 			marginLeft: 'auto',
			// 			marginRight: 'auto'
			// 		}}
			// 		id="upcomming-events-10"
			// 		class="WPlookevents WPlookeventshome widget upcomming-events"
			// 	> */}
			// 		<header class="entry-header">
			// 			<h1 class="entry-title">Events</h1>
						
					
			// 		</header>

			// 	{/* </aside>  */}

			// 	<div style={{
			// 			marginBottom: '30px'
				
			// 		}} className="row">

			// 			{this.state.events.map((event) => {
			// 				return (
			// 					<div
			// 					className="row"
			// 					style={{
			// 						marginLeft: 'auto',
			// 						marginRight: 'auto',
			// 						marginBottom: '30px',
			// 						display: 'block'
			// 					}}
			// 				>
			// 					<CardGroup>
			// 						<Card
			// 							key={event._id}
			// 							className="text-center"
			// 							style={{
			// 								width: '19rem',
			// 								marginLeft: '30px',
			// 								marginRight: '30px'
			// 							}}
			// 						>
			// 							<Link to={`/events/${event._id}`} key={event._id}>
			// 								<Card.Img style={{ height: '210px', width: '300px' }}variant="top" src={event.eventImage} />
			// 							</Link>
			// 							<Card.Body>
			// 								<Card.Title style={{ color: 'black' }}>{event.eventTitle}</Card.Title>
			// 								<Card.Text style={{ color: 'black' }}>{event.eventDescription}</Card.Text>
			// 							</Card.Body>
			// 						</Card>
			// 					</CardGroup>
			// 				</div>
			// 										);
			// 		})}
						

			
				
			// </div> 
			// </div>
		
			// 	</section>
			// 	</div>
				<div style={{ background: '#fffdf9', width: '100%', height: '100%' }}>
						<section id="team">
						
              
             
            <div class="containers">
                <h1><p class='text-center'>Queer volleyball jocks throw beer bust at Woofs</p></h1>
               <br/>
                	<Container class='text-center' fluid style={{ background: '#fffdf9', width: '100%', height: '100%', display: 'block', margin: 'auto 0' }}>
                <div class="row">
                    <div class="col profile-pic text-center">
                     
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

													</Card.Text>
                  
                    <br/>
                      <br/>
                      <div class="img-box">
                            <img src="https://www.projectq.us/images/uploads/6_9_19_Possums_Summer_Camp-24.jpg" style={{width: '50rem',  marginBottom: '30px'}} class="img-responsive"/>
                    
                        </div>
                      <br/>  <br/>
                          </div>
                           
                          <p>													
In addition to their own booth, Ableton will host three main live sessions led by artists like Berlin duo Skinnerbox, among others.

After recent announcements about ADE University launching young professional program What's Next? and Celebrating 100 years of electronic music instruments we're pleased to share that music software and hardware company Ableton continues its ADE Sound Lab partnership for the fifth consecutive year, since the beginning of the program in 2015. Over the years the manufacturer has become a vital part of Sound Lab and we're looking forward to their contributions in 2019.

As well as their own booth, which will showcase both the latest kit and all the classic Ableton range, Sound Lab visitors can attend three main live sessions with some amazing names demonstrating their working processes, performing, and getting into Q&As with the audience.  </p>
 <p>
The first to be announced is a welcome appearance from floor-filling Berlin duo Skinnerbox. In this workshop, they will discuss the principles and benefits of improvising electronic music in a live performance. The two will share how to gather and convert studio ideas and take them to stage and how to prepare and tune your setup. In addidtion, they explain how to take advantage of 'mistakes' and dealing with the club environment in contrast to the comfort and safety of a studio. 

ADE Sound Lab
ADE Sound Lab features intimate and revealing talks with major figures from the electronic scene, with formats such as ADE MusicTalks, The Record Bag Of... and Studio XL. In previous years the program welcomed the likes of Antal, Colin Benders, Jameszoo, Jayda G, KSHMR, Lena Willikens, Marco Faraone, Nina Kraviz, Nile Rodgers, Orbital, Philip Glass, Richie Hawtin, Rebekah and Xosar among many others. 
</p>
  <br/>
    <br/>
    <Container
								class="text-center"
								fluid
								style={{
									background: '#fffdf9',
									width: '100%',
									height: '100%',
									display: 'block',
									margin: 'auto 0',
									marginTop: '40px'
								}}
							>
								<div class="row">
									
										<div class=" col profile-pic text-center img-box trending-img">
									
												<img
													src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918"
													style={{ width: '27rem', height: '300px' }}
													class="img-responsive"
												/>
												<Link to='/newspage/'>
												<button type="button" class="btn-buy">
													GOTCHA!
									</button></Link>
												{/* <div class="overlay" /> */}
											</div>
										
									
									
										<div class="col profile-pic text-center img-box trending-img">
										
												<img
													src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
													style={{ width: '27rem', height: '300px' }}
													class="img-responsive"
												/>
												<button type="button" class="btn-buy">
													GOTCHA!
									</button>
												{/* <div class="overlay" /> */}
											</div>
		
								</div>
							</Container>
                </div>
                 </Container>
            </div>
        </section>
					
					</div>
			
		);
	}
}
