import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Blogs extends Component {
	state = {
		users: [],
		newUsers: {
			title: '',
			description: '',
			image: '',
		},
		displayUserForm: false,
	};

	componentDidMount = () => {
		this.getAllUsers();
	};

	getAllUsers = () => {
		axios.get('/api/users/').then((res) => {
			this.setState({ users: res.data });
		});
	};

	createUser = (e) => {
		axios
			.post('/api/users/', {
				title: this.state.newUser.title,
				description: this.state.newUser.description,
				image: this.state.newUser.image,
			})
			.then((res) => {
				const usersList = [ this.state.users ];
				usersList.unshift(res.data);
				this.setState({
					newUser: {
						title: '',
						description: '',
						image: ''
					},
					displayUserForm: false,
					users: usersList
				});
			});
		this.getAllUsers();
	};

	handleChange = (e) => {
		const changeNewUser = { ...this.state.newUser };
		changeNewUser[e.target.name] = e.target.value;
		this.setState({ newUser: changeNewUser });
	};

	handleSignUp = (e) => {
		e.preventDefault();
		this.createUser();
	};
	render() {
		return (
			// 	 <div>
			// 			<body class="home page-template page-template-template-home-page page-template-template-home-page-php page page-id-10">
			// 				<div>
			// 					<div id="page">
			// 						<div id="header-bg" />
			// 						<div id="patern" />
			// 						<div id="page-view">
			// 							<header
			// 								style={{ width: '1100px', marginLeft: 'auto', marginRight: 'auto' }}
			// 								class="entry-header"
			// 							>
			// 								<h1 class="entry-title">Blogs</h1>

			// 								<div class="clear" />
			// 							</header>
            //                     <div>
            //                         {this.state.users.map((user) => {
            //                             return (
            //                                 <div className= 'row'>
			// 							<aside
			// 								style={{ width: '1100px', marginLeft: 'auto', marginRight: 'auto' }}
			// 								id="upcomming-events-10"
			// 								class="WPlookevents WPlookeventshome widget upcomming-events"
			// 							>
			// 								<div
			// 									class="entry-content"
			// 									style={{ width: '2200px', marginLeft: 'auto', marginRight: 'auto' }}
			// 								>
			// 									<article
			// 										key={user._id}
			// 										style={{ height: '300px' }}
			// 										class="list-block-item"
			// 									>
			// 										<div class="margins">
			// 											<div class="entry-date">
			// 												<img
			// 													style={{ height: '255px', width: '310px' }}
			// 													src={user.image}
			// 												/>
			// 											</div>
			// 											<div class="entry-description">
			// 												<h1 class="entry-head">
			// 													<a href="">{user.title}</a>
			// 												</h1>
			// 												<div class="short-description">
			// 													<p>{user.description}</p>
			// 												</div>
			// 											</div>
			// 											<div class="clear" />
			// 										</div>
			// 									</article>
			// 								</div>
			// 							</aside>  
            //                             </div>
            //                             	);
			// 		                })}


										
                                    
			// 					</div>
			// 				</div>
            //                 </div>
            //                 </div>
            //             </body>
                        
				
			// </div>
				<div style={{ background: '#fffdf9', width: '100%', height: '100%' }}>
						<section id="team">
						
              
             
            <div class="containers">
                <h1>Blogs</h1>
                	<Container class='text-center' fluid style={{ background: '#fffdf9', width: '100%', height: '100%', display: 'block', margin: 'auto 0' }}>
                <div class="row">
                    <div class="col profile-pic text-center">
                        <div class="img-box">
                            <img src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918" style={{width: '18rem', height: '200px', marginBottom: '30px'}}class="img-responsive"/>
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
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px' }}
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
                        <div class="img-box">
                       
                            <img src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh" style={{width: '18rem', height: '200px', marginBottom: '30px'}}class="img-responsive"/>
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
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px' }}
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
                        <div class="img-box">
                            <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10" style={{width: '18rem', height: '200px', marginBottom: '30px'}}class="img-responsive"/>
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
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px' }}
													>
														Retrospective: Lucrecia Martel
													</Card.Title>
													<Card.Text class="text-center">
														Some quick example text to build on the card title and make up
														the bulk of the card's content.
													</Card.Text>
                    </div>
                    <div class="col profile-pic text-center">
                        <div class="img-box">
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
                        <div class="img-box">
                            <img src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918" style={{width: '18rem', height: '200px', marginBottom: '30px'}}class="img-responsive"/>
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
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px' }}
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
                        <div class="img-box">
                       
                            <img src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh" style={{width: '18rem', height: '200px', marginBottom: '30px'}}class="img-responsive"/>
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
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px' }}
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
                        <div class="img-box">
                            <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10" style={{width: '18rem', height: '200px', marginBottom: '30px'}}class="img-responsive"/>
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
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px' }}
													>
														Retrospective: Lucrecia Martel
													</Card.Title>
													<Card.Text class="text-center">
														Some quick example text to build on the card title and make up
														the bulk of the card's content.
													</Card.Text>
                    </div>
                    <div class="col profile-pic text-center">
                        <div class="img-box">
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
                 </Container>
            </div>
        </section>
					
					</div>
				
           
		);
	}
}
