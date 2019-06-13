import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class News extends Component {
	render() {
		return (
			<div>
			 <div id="slider">
            <div id="headerSlider" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#headerSlider" data-slide-to="0" class="active"></li>
                    <li data-target="#headerSlider" data-slide-to="1"></li>
                    <li data-target="#headerSlider" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style= {{width: '100%', height: '550px'}} class="d-block img-fluid" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                        <div class="carousel-caption">
                            <h5>How To Make A Website</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img style= {{width: '100%', height: '550px'}} class="d-block img-fluid" src="https://images.unsplash.com/photo-1486556396467-d83d2b23514b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                        <div class="carousel-caption">
                            <h5>Create Responsive Website</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img style= {{width: '100%', height: '550px'}} class="d-block img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Wikipedia_space_ibiza%2803%29.jpg/220px-Wikipedia_space_ibiza%2803%29.jpg"/>
                        <div class="carousel-caption">
                            <h5>Business Website Design</h5>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#headerSlider" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#headerSlider" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>




	<div style={{ background: '#fffdf9', width: '100%', height: '100%' }}>
						<section id="team">
						
              
             
            <div class="containers">
                <h1>News</h1>
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
			
		
			</div>
			
		);
	}
}
