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
                <h1>Events</h1>
				<br/>
				<br/>
			
                	<Container class='text-center' fluid style={{ background: '#fffdf9', width: '100%', height: '100%', display: 'block', margin: 'auto 0' }}>
                <div class="row">
                    <div class="col profile-pic text-center">
                        <div class="img-box red">
						<Link to='/eventpage/'>
                            <img src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918" style={{width: '18rem', height: '200px', marginBottom: '30px'}} className="img-responsive"/></Link>
                         
                        </div>
                      <Card.Title
														class="text-center"
													style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px', marginTop: '22px' }}
													>
														Retrospective: Lucrecia Martel
													</Card.Title>
													<Card.Text class="text-center">
														Some quick example text to build on the card title and make up
														the bulk of the card's content.
													</Card.Text>
                    </div>
                    <div class="col profile-pic text-center">
                     {/* <Card > */}
                        <div class="img-box red">
                       
                            <img src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh" style={{width: '18rem', height: '200px', marginBottom: '30px'}} class="img-responsive"/>
                         
                        </div>
                     <Card.Title
														class="text-center"
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px', marginTop: '22px' }}
													>
														Retrospective: Lucrecia Martel
													</Card.Title>
													<Card.Text class="text-center" 	style={{ marginBottom: '50px' }}>
														Some quick example text to build on the card title and make up
														the bulk of the card's content.
													</Card.Text>
                        
                        {/* </Card> */}
                    </div>
                    <div class="col profile-pic text-center">
                        <div class="img-box red">
                            <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10" style={{width: '18rem', height: '200px', marginBottom: '30px'}}class="img-responsive"/>
                         
                        </div>
                        <Card.Title
														class="text-center"
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px', marginTop: '22px' }}
													>
														Retrospective: Lucrecia Martel
													</Card.Title>
													<Card.Text class="text-center">
														Some quick example text to build on the card title and make up
														the bulk of the card's content.
													</Card.Text>
                    </div>
                    <div class="col profile-pic text-center">
                        <div class="img-box red">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA" style={{width: '18rem', height: '200px', marginBottom: '30px'}}class="img-responsive"/>
                      
                        </div>
                        <Card.Title
														class="text-center"
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px' }}
													>
														Retrospective: Lucrecia Martel
													</Card.Title>
													<Card.Text class="text-center">
														Some quick example text to build on the card title and make up
														the bulk of the card's content.
													</Card.Text>
                    </div>
                    
                   
                </div>

                 <div class="row">
                    <div class="col profile-pic text-center">
                        <div class="img-box red">
                            <img src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918" style={{width: '18rem', height: '200px', marginBottom: '30px'}}class="img-responsive"/>
                          
                        </div>
                      <Card.Title
														class="text-center"
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px', marginTop: '22px' }}
													>
														Retrospective: Lucrecia Martel
													</Card.Title>
													<Card.Text class="text-center">
														Some quick example text to build on the card title and make up
														the bulk of the card's content.
													</Card.Text>
                    </div>
                    <div class="col profile-pic text-center">
                     {/* <Card > */}
                        <div class="img-box red">
                       
                            <img src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh" style={{width: '18rem', height: '200px', marginBottom: '30px'}}class="img-responsive"/>
                        
                        </div>
                     <Card.Title
														class="text-center"
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px', marginTop: '22px' }}
													>
														Retrospective: Lucrecia Martel
													</Card.Title>
													<Card.Text class="text-center">
														Some quick example text to build on the card title and make up
														the bulk of the card's content.
													</Card.Text>
                        
                        {/* </Card> */}
                    </div>
                    <div class="col profile-pic text-center">
                        <div class="img-box red">
                            <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10" style={{width: '18rem', height: '200px', marginBottom: '30px'}}class="img-responsive"/>
                       
                        </div>
                        <Card.Title
														class="text-center"
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px', marginTop: '22px' }}
													>
														Retrospective: Lucrecia Martel
													</Card.Title>
													<Card.Text class="text-center">
														Some quick example text to build on the card title and make up
														the bulk of the card's content.
													</Card.Text>
                    </div>
                    <div class="col profile-pic text-center">
                        <div class="img-box red">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA" style={{width: '18rem', height: '200px', marginBottom: '30px'}}class="img-responsive"/>
                            {/* <ul>
                                <a href="#">
                                    <li><i class="fa fa-facebook"></i></li>
                                </a>
                                <a href="#">
                                    <li><i class="fa fa-twitter"></i></li>
                                </a>
                                <a href="#">
                                    <li><i class="fa fa-linkedin"></i></li>
                                </a>
                            </ul> */}
                        </div>
                        <Card.Title
														class="text-center"
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px', marginTop: '22px' }}
													>
														Retrospective: Lucrecia Martel
													</Card.Title>
													<Card.Text class="text-center">
														Some quick example text to build on the card title and make up
														the bulk of the card's content.
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
