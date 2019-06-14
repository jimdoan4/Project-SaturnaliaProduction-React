import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<div>
				<section class="">
					<div class="home-header">
						<div class="banner-text">
							<p>
								World's Favourite<br />Club Promotion Event<br />Come let us be your guide
							</p>
						</div>
					</div>

					<section class="fashion-Trends">
						<div class="container">
							<div class="fashion-box">
								<div class="section-Title text-center">
									<h5 style={{ fontWeight: 'bold' }}>WHAT WE DO</h5>
									<h4 class="sec2 " style={{ margin: 'auto 0', fontWeight: 'bold' }}>
										<div class='' style={{ color: '#ba0e0e' }}>SATURNALIA PRODUCTIONS</div> IS A ONE-STOP
										SOLUTION FOR ALL YOUR EVENT NEEDS.
									</h4>
								</div>
								<p style={{ margin: 'auto 100px' }} class="text-center">
									In ancient Roman times, there existed a festival that celebrated life in honor of
									the Roman god Saturn. All types of people came together to partake in this revelry
									and enjoy all of life’s indulgence. Come experience a Roman festival like never
									before, where we will unite to savor amazing sounds, incredible visuals and a
									carnival of fun that will have you yearning for more and ready to party and dance
									the night away.
								</p>
							</div>

							<button class="bus">START BROWSING EVENTS</button>
						</div>
					</section>

					<div style={{ background: '#fffdf9', width: '100%', height: '100%' }}>
						<section id="team">
							<div class="containers">
								<h1> Latest Events</h1>
								<br />
								<Container
									class='text-center' style={{ background: '#fffdf9', width: '100%', height: '100%', margin: '0 auto', display: 'block', justifyContent: 'center' }}
								>
									<div class="row">
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<Card.Img
													src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/150px180"
													class="img-responsive"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											{/* <Card > */}
											<div class="img-box">
												<img
													src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>

											{/* </Card> */}
										</div>
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
									</div>

									<div class="row">
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											{/* <Card > */}
											<div class="img-box">
												<img
													src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
									</div>
								</Container>
							</div>
						</section>
					</div>



					{/* NEWS */}
					<div style={{ background: '#fffdf9', width: '100%', height: '100%' }}>
						<section id="team">
							<div class="containers">
								<h1> Latest News</h1>
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
									<Row>
                                        
    <div lg={true} class="col profile-pic text-center red seperate"
><div class="img-box card">
    <img src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/100px180"
class="img-responsive"
style= {
        {
        color: 'black',
            fontWeight: 'bold',
            fontSize: '20px',
             height: '450px'
           
    }
}

/></div><Card.Title class="text-center"
style= {
        {
        color: 'black',
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '20px',
             marginTop: '40px',
    }
}

>Retrospective: Lucrecia Martel </Card.Title><Card.Text class="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.
</Card.Text></div> 
   <div lg={true} class='col'>
        <Row>
   <div class=" col profile-pic text-center red seperate"><div class="img-box"><img src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"

style= {
        {
        width: '18rem', height: '200px', marginBottom: '30px'
    }
}

class="img-responsive"

/></div><Card.Title class="text-center"
style= {
        {
        color: 'black',
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '20px'
    }
}

>Retrospective: Lucrecia Martel </Card.Title><Card.Text class="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.
</Card.Text></div>
  <div class="col profile-pic text-center red seperate"><div class="img-box"><Card.Img src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"

style= {
        {
        width: '18rem', height: '200px', marginBottom: '30px'
    }
}

class="img-responsive"

/></div><Card.Title class="text-center"
style= {
        {
        color: 'black',
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '20px'
    }
}

>Retrospective: Lucrecia Martel </Card.Title><Card.Text class="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.
</Card.Text></div>
    </Row>
    <Row>
   <div class="col profile-pic text-center red seperate"><div class="img-box"><img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"

style= {
        {
        width: '18rem', height: '200px', marginBottom: '30px'
    }
}

class="img-responsive"

/></div><Card.Title class="text-center"
style= {
        {
        color: 'black',
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '20px'
    }
}

>Retrospective: Lucrecia Martel </Card.Title><Card.Text class="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.
</Card.Text></div>
     <div class="col profile-pic text-center red seperate"><div class="img-box"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"

style= {
        {
        width: '18rem', height: '200px', marginBottom: '30px'
    }
}

class="img-responsive"

/></div><Card.Title class="text-center"
style= {
        {
        color: 'black',
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '20px'
    }
}

>Retrospective: Lucrecia Martel </Card.Title><Card.Text class="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.
</Card.Text></div>
  </Row>
    </div>
  </Row>

								</Container>
							</div>
						</section>
					</div>

					{/*                     
                    BLOGS */}
					<div style={{ background: '#fffdf9', width: '100%', height: '100%' }}>
						<section id="team">
							<div class="containers">
								<h1> Latest Blogs</h1>
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
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<Card.Img
													src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/150px180"
													class="img-responsive"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											{/* <Card > */}
											<div class="img-box">
												<img
													src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>

											{/* </Card> */}
										</div>
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
									</div>

									<div class="row">
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											{/* <Card > */}
											<div class="img-box">
												<img
													src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
									</div>
								</Container>
							</div>
						</section>
					</div>


					{/* REVIEWS */}
					<div style={{ background: '#fffdf9', width: '100%', height: '100%' }}>
						<section id="team">
							<div class="containers">
								<h1> Latest Reviews</h1>
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
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<Card.Img
													src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/150px180"
													class="img-responsive"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											{/* <Card > */}
											<div class="img-box">
												<img
													src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>

											{/* </Card> */}
										</div>
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
									</div>

									<div class="row">
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											{/* <Card > */}
											<div class="img-box">
												<img
													src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
									</div>
								</Container>
							</div>
						</section>
					</div>

                    
					{/* GALLERY */}
					<div style={{ background: '#fffdf9', width: '100%', height: '100%' }}>
						<section id="team">
							<div class="containers">
								<h1> Latest Gallery</h1>
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
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<Card.Img
													src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/150px180"
													class="img-responsive"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											{/* <Card > */}
											<div class="img-box">
												<img
													src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>

											{/* </Card> */}
										</div>
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
									</div>

									<div class="row">
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											{/* <Card > */}
											<div class="img-box">
												<img
													src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<img
													src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
													style={{ width: '18rem', height: '200px', marginBottom: '30px' }}
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
												Retrospective: Lucrecia Martel
											</Card.Title>
											<Card.Text class="text-center">
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
										</div>
									</div>
								</Container>
							</div>
						</section>
					</div>
				</section>
                
			</div>
		);
	}
}
