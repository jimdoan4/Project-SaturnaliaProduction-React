// import React, { Component } from 'react';
// import { Container } from 'react-bootstrap';
// import { Jumbotron } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// export default class Home extends Component {
// 	render() {
// 		return (
// 			<div style={{ display: 'block' }}>
// 				<div>
// 					<Container fluid className="home-image" style={{ marginTop: '55px' }}>
// 						<div className="home-main" style={{ marginTop: '60px' }}>
// 							<p style={{ color: 'white' }}>SATURNALIA PARTY</p>
// 							<p style={{ color: 'white', fontSize: '27px' }}>
// 								From the moment you walk into SATURNALIA PARTY Events until you leave, we want your
// 								night to be the best of your life.
// 							</p>
// 							<p>
// 								<Button
// 									className="section-1-button"
// 									style={{
// 										backgroundColor: '#e8002f',
// 										borderColor: '#e8002f',
// 										textAlign: 'center',
// 										padding: '15px 63px 15px 63px',
// 										marginTop: '40px',
// 										fontSize: '23px'
// 									}}
// 								>
// 									LEARN MORE
// 								</Button>
// 							</p>
// 						</div>
// 					</Container>
// 				</div>
// 				<div style= {{marginTop: '60px'}}>
// 					<Container fluid className="section-1 text-center">
// 						<div className="main">
// 							<p style={{ fontSize: '30px', backgroundColor: '#e8002f', color: 'white' }}>
// 								EVENTS & TICKETS
// 							</p>
// 							<Container fluid>
// 								<Row>
// 									<Col>
// 									<Card style={{ width: '18rem', height: '420px' }}>
// 										<Card.Img style={{ height: '417.4px' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8mlYKHhDqeI01-tR0BwM1Nv4JdnBkWq0RZkk9pQKbt2pz8oD" />
// 										</Card>
// 										</Col>
// 									<Col>
// 									<Card style={{ width: '18rem', height: '420px' }}>
// 										<Card.Img style={{ height: '417.4px' }}variant="top" src="https://www.gaysitgespride.com/wp-content/uploads/Hola-Gay-Beach-Party-2019.jpg" />
// 										</Card>
// 										</Col><Col>
// 									<Card style={{ width: '18rem', height: '420px' }}>
// 										<Card.Img style={{ height: '417.4px' }}variant="top" src="https://i.pinimg.com/736x/76/60/69/7660697b614fe1218c021b4757f75263.jpg" />
// 										</Card>
// 										</Col><Col>
// 									 {/* <Card style={{ width: '18rem' }}>
// 										<Card.Img variant="top" src="http://www.voicesofnote.org/wp-content/uploads/2018/12/agmc-holiday2018-gallerythumbnail.png" />
// 										</Card>  */}
// 										</Col>
										
// 								</Row>
// 							</Container>
						
// 						</div>
// 					</Container>
// 				</div>
// 				<div style= {{marginTop: '60px'}}>
// 					<Container fluid className="section-ticket text-center" style= {{paddingTop: '30px'}}>
// 						<div className="section-ticket-main">
// 							<Container fluid>
// 								<Row>
// 									<Col>
// 							<p style={{ fontSize: '30px' }}>SATURNALIA 4TH OF JULY FESTIVAL BEGINS</p>
							
// 								</Col>
// 								<Col>
// 								<Button
// 									className="section-1-button"
// 									style={{
// 										backgroundColor: '#e8002f',
// 										borderColor: '#e8002f',
// 										textAlign: 'center',
// 										padding: '15px 63px 15px 63px',
									
// 										fontSize: '23px'
// 									}}
// 								>
// 									BUY TICKETS
// 								</Button>
// 							</Col>
// 							</Row>
// 							</Container>
// 						</div>
// 					</Container>
// 				</div>
// 				<div style= {{marginTop: '60px'}}>
// 					<Container fluid className="section-tickets text-center" style= {{paddingTop: '30px'}}>
// 						<div className="section-tickets-main">
// 							<Container fluid>
// 								<Row>
// 									<Col>
// 							<p style={{ fontSize: '30px' }}>ABOUT EVENT</p>
							
								
// 									<Card style={{ width: '18rem', height: '420px' }}>
// 										<Card.Img style={{ height: '417.4px' }}variant="top" src="https://www.gaysitgespride.com/wp-content/uploads/Hola-Gay-Beach-Party-2019.jpg" />
// 										</Card>
// 										</Col><Col>
// 							<h4>Vocal Summer Festival Begins</h4>
// 							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur.</p>
// 							<p>Adipisicing elitsed do eiusmod tempor consectetur adipisicing elit, sed do eiusmod tempor</p>
// 							</Col>
// 							</Row>
// 							</Container>
// 						</div>
// 					</Container>
// 				</div>
// 				<div style= {{marginTop: '60px'}}>
// 					<Container fluid className="section-2 text-center">
// 						<div className="section-2-main">
// 							<p style={{ fontSize: '30px', backgroundColor: '#e8002f', color: 'white' }}>ROMAN FESTIVAL</p>
// 							<Container fluid>
// 								<Row>
// 									<Col>
// 									<Card style={{ width: '22rem' }}>
// 										<Card.Img variant="top" src="https://img1.wsimg.com/isteam/ip/b42774cc-c7c1-4981-8b31-f95f95b3378b/3ea4d34e-df69-4654-9d59-b92f92638f72.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:538,h:269,cg:true" />
// 										</Card>
// 										</Col>
// 									<Col>
// 									<Card style={{ width: '30rem', height: '545px' }}>
// 										<Card.Title>In ancient Roman times, there existed a festival that celebrated life in
// 											honor of the Roman god Saturn. All types of people came together to partake
// 											in this revelry and enjoy all of life’s indulgence. 
// 										</Card.Title>
// 										<Card.Title>Come experience a Roman festival like never before, where we will unite to
// 											savor amazing sounds, incredible visuals and a carnival of fun that will
// 											have you yearning for more and ready to party and dance the night away.
// 										</Card.Title>
// 										</Card>
// 										</Col>			
// 								</Row>
// 							</Container>
						
						
						
// 						</div>
// 					</Container>
// 				</div>
// 				<div style= {{marginTop: '60px'}}>
// 					<Jumbotron className="section-3 text-center">
// 						<div className="main">
// 							<p style={{ fontSize: '37px' }}>UPCOMING EVENTS</p>
// 							<p>
// 								<Button style={{ backgroundColor: 'black', borderColor: 'black', textAlign: 'center' }}>
// 									Learn more
// 								</Button>
// 							</p>
// 						</div>
// 					</Jumbotron>
// 				</div>
// 				<div style= {{marginTop: '60px'}}>
// 					<Container fluid className="section-3 text-center">
// 						<div className="main">
// 							<p style={{ fontSize: '37px' }}>RECENT GALLERY</p>
// 							<p style={{ fontSize: '26px' }}>SATURNALIA 4TH OF JULY MEGA BUST</p>
// 								<Container fluid>
// 								<Row>
// 									<Col>
// 									<Card style={{ width: '10rem', height: '177px' }}>
// 										<Card.Img style={{ height: '177.4px' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8mlYKHhDqeI01-tR0BwM1Nv4JdnBkWq0RZkk9pQKbt2pz8oD" />
// 										</Card>
// 										</Col>
// 										<Col>
// 									<Card style={{ width: '10rem', height: '177px' }}>
// 										<Card.Img style={{ height: '177.4px' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8mlYKHhDqeI01-tR0BwM1Nv4JdnBkWq0RZkk9pQKbt2pz8oD" />
// 										</Card>
// 										</Col>	<Col>
// 									<Card style={{ width: '10rem', height: '177px' }}>
// 										<Card.Img style={{ height: '177.4px' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8mlYKHhDqeI01-tR0BwM1Nv4JdnBkWq0RZkk9pQKbt2pz8oD" />
// 										</Card>
// 										</Col>	<Col>
// 									<Card style={{ width: '10rem', height: '177px' }}>
// 										<Card.Img style={{ height: '177.4px' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8mlYKHhDqeI01-tR0BwM1Nv4JdnBkWq0RZkk9pQKbt2pz8oD" />
// 										</Card>
// 										</Col>	<Col>
// 									<Card style={{ width: '10rem', height: '177px' }}>
// 										<Card.Img style={{ height: '177.4px' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8mlYKHhDqeI01-tR0BwM1Nv4JdnBkWq0RZkk9pQKbt2pz8oD" />
// 										</Card>
// 										</Col>	<Col>
// 									<Card style={{ width: '10rem', height: '177px' }}>
// 										<Card.Img style={{ height: '177.4px' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8mlYKHhDqeI01-tR0BwM1Nv4JdnBkWq0RZkk9pQKbt2pz8oD" />
// 										</Card>
// 										</Col>	<Col>
// 									<Card style={{ width: '10rem', height: '177px' }}>
// 										<Card.Img style={{ height: '177.4px' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8mlYKHhDqeI01-tR0BwM1Nv4JdnBkWq0RZkk9pQKbt2pz8oD" />
// 										</Card>
// 										</Col>	<Col>
// 									<Card style={{ width: '10rem', height: '177px' }}>
// 										<Card.Img style={{ height: '177.4px' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8mlYKHhDqeI01-tR0BwM1Nv4JdnBkWq0RZkk9pQKbt2pz8oD" />
// 										</Card>
// 										</Col>	<Col>
// 									<Card style={{ width: '10rem', height: '177px' }}>
// 										<Card.Img style={{ height: '177.4px' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8mlYKHhDqeI01-tR0BwM1Nv4JdnBkWq0RZkk9pQKbt2pz8oD" />
// 										</Card>
// 										</Col>	<Col>
// 									<Card style={{ width: '10rem', height: '177px' }}>
// 										<Card.Img style={{ height: '177.4px' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8mlYKHhDqeI01-tR0BwM1Nv4JdnBkWq0RZkk9pQKbt2pz8oD" />
// 										</Card>
// 										</Col>	<Col>
// 									<Card style={{ width: '10rem', height: '177px' }}>
// 										<Card.Img style={{ height: '177.4px' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8mlYKHhDqeI01-tR0BwM1Nv4JdnBkWq0RZkk9pQKbt2pz8oD" />
// 										</Card>
// 										</Col>
// 											<Col>
// 									<Card style={{ width: '10rem', height: '177px' }}>
// 										<Card.Img style={{ height: '177.4px' }}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8mlYKHhDqeI01-tR0BwM1Nv4JdnBkWq0RZkk9pQKbt2pz8oD" />
// 										</Card>
// 										</Col>
										
// 								</Row>
// 							</Container>
// 						</div>
// 					</Container>
// 				</div>
// 				<div style= {{marginTop: '60px'}}>
// 					<Jumbotron className="section-4 text-center">
// 						<div className="mains">
// 							<p style={{ fontSize: '37px' }}>AUDIO</p>
// 							<p>
// 								<Button style={{ backgroundColor: 'black', borderColor: 'black', textAlign: 'center' }}>
// 									Learn more
// 								</Button>
// 							</p>
// 						</div>
// 					</Jumbotron>
// 				</div>
// 				<div style= {{marginTop: '60px'}}>
// 					<Jumbotron className="section-5 text-center">
// 						<div className="main">
// 							<p style={{ fontSize: '37px' }}>SUBSCRIBE</p>
// 							<p>
// 								<Button style={{ backgroundColor: 'black', borderColor: 'black', textAlign: 'center' }}>
// 									Learn more
// 								</Button>
// 							</p>
// 						</div>
// 					</Jumbotron>
// 				</div>
// 				<div style= {{marginTop: '60px'}}>
// 					<Jumbotron className="section-6 text-center">
// 						<div className="mainss">
// 							<p style={{ fontSize: '37px', color: '#e8002f' }}>QUESTIONS?</p>
// 							<p>
// 								<Container>
// 									<Form>
// 										<Form.Group controlId="formBasicEmail">
// 											{/* <Form.Label>Contact Us</Form.Label> */}
// 											<Form.Control type="email" placeholder="Name" />
// 										</Form.Group>

// 										<Form.Group controlId="formBasicPassword">
// 											<Form.Control type="password" placeholder="Password" placeholder="Email" />
// 										</Form.Group>
// 										<Form.Group controlId="formBasicPassword">
// 											<Form.Control
// 												style={{ width: '670px', height: '200px' }}
// 												type="password"
// 												placeholder="Password"
// 												placeholder="Message"
// 											/>
// 										</Form.Group>

// 										<div className="but">
// 											<Button
// 												className="section-1-button"
// 												style={{
// 													backgroundColor: '#e8002f',
// 													borderColor: '#e8002f',
// 													textAlign: 'center',
// 													padding: '11px 290px 11px 290px',
// 													marginTop: '20px',
// 													fontSize: '23px'
// 												}}
// 											>
// 												TICKETS
// 											</Button>
// 										</div>
// 									</Form>
// 								</Container>
// 							</p>
// 						</div>
// 					</Jumbotron>
// 				</div>
// 				<div style= {{marginTop: '60px'}} className="footer-last">
// 					<Jumbotron className="footer">
// 						<div className="footer-main">
// 							<p>Copyright © 2018 Saturnalia - All Rights Reserved.</p>
// 						</div>
// 					</Jumbotron>
// 				</div>
// 			</div>
// 		);
// 	}
// }


// 					{/* <Navbar inline className="navbar" fixed="top">
// 						<Navbar.Brand style={{ color: 'white', fontWeight: 'bold' }} href="#home">
// 							SATURNALIA PRODUCTIONS
// 						</Navbar.Brand>
// 						<Nav className="mr-auto">
// 							<Nav.Link style={{ color: 'white', backgroundColor: 'black' }} href="#home">
// 								HOME
// 							</Nav.Link>
// 								<Nav.Link style={{ color: 'white' }} href="#home">
// 								EVENTS
// 							</Nav.Link>
// 								<Nav.Link style={{ color: 'white' }} href="#home">
// 								GALLERY
// 							</Nav.Link>
// 								<Nav.Link style={{ color: 'white' }} href="#home">
// 								BLOG
// 							</Nav.Link>
// 							<Nav.Link style={{ color: 'white' }} className="navlink" href="#features">
// 								CONTACT
// 							</Nav.Link>
// 							<Nav.Link style={{ color: 'white' }} href="#pricing">
// 								ABOUT
// 							</Nav.Link>
// 						</Nav>
// 					</Navbar> */}


// <body class="home page-template page-template-template-home-page page-template-template-home-page-php page page-id-10">
// 				<div>
// 					<div id="page">
// 						<div id="header-bg" />
// 						<div id="patern" />
// 						<div id="page-view">
                
// <div id="main" class="site-main container_12"><div id="primary" class="grid_8"><section id="galleries" class="WPlooklatestposts">

// <header class="entry-header"><h1 class="entry-title">Gallery</h1><div class="clear"></div></header>

//      <div>
//                                      {this.state.users.map((user) => {
//                                          return (
// <div class="entry-content-list"><ul class="grid cs-style-gallery"><li class='first-cs-style-item'> <a href=""><figure> <img width="440" height="340" src={user.galleryimage1}/><noscript><img width="440" height="340" src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5989765826_1c3e08f570_o-440x340.jpg" class="attachment-medium-large-thumb size-medium-large-thumb wp-post-image" alt="" /></noscript><figcaption><h3>September 5, 2017</h3><div>Midnight Passion</div></figcaption><div class="clear"></div></figure> </a></li>

//  <li class='rest-cs-style-item'> <a href=""><figure> <img width="440" height="340" src="https://vetstreet.brightspotcdn.com/dims4/default/65bbc05/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fc1%2Ff9%2F13fe778446f1b8a4fcbe7146e4a4%2FAP-TVQEZK-ph645080113.jpg" /><noscript><img width="440" height="340" src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/7408836996_977c684ff3_o-440x340.jpg" class="attachment-medium-large-thumb size-medium-large-thumb wp-post-image" alt="" /></noscript>

// <figcaption><h3>August 30, 2017</h3><div>Systematic Chaos</div></figcaption></figure> </a></li> 

//  <li class='rest-cs-style-item'> <a href="https://themes.wplook.com/stereoclub/gallery/elegante-friday/"><figure> <img width="440" height="340" src="https://vetstreet.brightspotcdn.com/dims4/default/65bbc05/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fc1%2Ff9%2F13fe778446f1b8a4fcbe7146e4a4%2FAP-TVQEZK-ph645080113.jpg" class="attachment-medium-large-thumb size-medium-large-thumb wp-post-image" alt="" /><noscript><img width="440" height="340" src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/6240943766_95d9679d8f_o-440x340.jpg" class="attachment-medium-large-thumb size-medium-large-thumb wp-post-image" alt="" /></noscript>

// <figcaption><h3>July 12, 2017</h3><div>Elegante Friday</div></figcaption></figure> </a></li> 

// </ul><div class="clear"></div><div id="secondary" class="grid_4 widget-area" role="complementary">
// <aside id="WPlookCD-65" class="widget WPlookCD cd-playlist"></aside>
//  </div>
 
//                                          	);
//                                     })} 
                                 

//  <aside id="event-small-65" class="WPlookeventssmall widgets"><header class="entry-header"><h1 class="entry-title">Events</h1><div class="more-options"> <a href="http://themes.wplook.com/stereoclub/gallery/" title="View all"><i class="icon-ellipsis-horizontal"></i></a></div><div class="clear"></div></header><div class="toggle-event"><div class="expand-button"> <time datetime="2019-06-16T00:00:00+00:00" class="fleft">June 16, 2019</time> <span class="category-selected fright"><a href="#">Sun</a></span></div><div class="expand"><div class="list-event-widget"><div class="entry-date"><div class="date">16</div><div class="month">Jun</div></div><div class="entry-description"><h1 class="entry-head"><a href="https://themes.wplook.com/stereoclub/events/madame-club/">Madame Club</a></h1><div class="short-description"><p>Quisque pulvinar ut magna id ornare. Nam consequat nunc eu nisl vehicula, eu auctor sapien feugiat. Duis iaculis risus...</p></div></div><div class="clear"></div></div></div></div><div class="toggle-event"><div class="expand-button"> <time datetime="2019-09-27T00:00:00+00:00" class="fleft">September 27, 2019</time> <span class="category-selected fright"><a href="#">Fri</a></span></div><div class="expand"><div class="list-event-widget"><div class="entry-thumb"> <img width="80" height="80" src="data:image/gif;base64,R0lGODdhAQABAPAAAP///wAAACwAAAAAAQABAEACAkQBADs=" data-lazy-src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Mini-Preview-80x80.jpg" class="attachment-small-thumb size-small-thumb wp-post-image" alt="" data-lazy-srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Mini-Preview-80x80.jpg 80w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Mini-Preview-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Mini-Preview-300x300.jpg 300w" sizes="(max-width: 80px) 100vw, 80px" /><noscript><img width="80" height="80" src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Mini-Preview-80x80.jpg" class="attachment-small-thumb size-small-thumb wp-post-image" alt="" srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Mini-Preview-80x80.jpg 80w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Mini-Preview-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Mini-Preview-300x300.jpg 300w" sizes="(max-width: 80px) 100vw, 80px" /></noscript></div><div class="entry-description"><h1 class="entry-head"><a href="https://themes.wplook.com/stereoclub/events/electro-nightclub/">Electro NightClub</a></h1><div class="short-description"><p>Maecenas convallis, purus ac feugiat blandit, tellus nisi suscipit ligula, quis ornare sapien urna non lacus. Phasellus auctor sagittis...</p></div></div><div class="clear"></div></div></div></div><div class="toggle-event"><div class="expand-button"> <time datetime="2019-09-29T00:00:00+00:00" class="fleft">September 29, 2019</time> <span class="category-selected fright"><a href="#">Sun</a></span></div><div class="expand"><div class="list-event-widget"><div class="entry-date"><div class="date">29</div><div class="month">Sep</div></div><div class="entry-description"><h1 class="entry-head"><a href="https://themes.wplook.com/stereoclub/events/friday-night/">Friday Night</a></h1><div class="short-description"><p>Pellentesque placerat luctus lobortis. In rutrum nisl sit amet risus elementum tempor. Suspendisse iaculis, magna nec gravida scelerisque, ligula...</p></div></div><div class="clear"></div></div></div></div><div class="toggle-event"><div class="expand-button"> <time datetime="2020-09-17T00:00:00+00:00" class="fleft">September 17, 2020</time> <span class="category-selected fright"><a href="#">Thu</a></span></div><div class="expand"><div class="list-event-widget"><div class="entry-date"><div class="date">17</div><div class="month">Sep</div></div><div class="entry-description"><h1 class="entry-head"><a href="https://themes.wplook.com/stereoclub/events/fusion-nightclub/">Fusion NightClub</a></h1><div class="short-description"><p>Etiam condimentum viverra placerat. In hac habitasse platea dictumst. Proin non diam dapibus, malesuada odio in, tempus odio. Aenean...</p></div></div><div class="clear"></div></div></div></div></aside></div><div class="clear"></div></div>

// 										<footer id="colophon" class="site-footer container_12">
// 											<div class="clear" />
// 											<div class="clear" />
// 											<div class="grid_4 alpha no-m-b" class="grid_6">
// 												<aside class="widget widget_adress" id="widget-address-121">
// 													<aside
// 														id="wplook_address_widget-2"
// 														class="widget widget_wplook_address_widget"
// 													>
// 														<div class="entry-header">
// 															<h1 class="entry-title">Contact Us</h1>
// 															<div class="clear" />
// 														</div>
// 														<address class="vcard">
// 															<div class="address-margins">
// 																<h3 class="org vcard">
// 																	<a class="url fn org">SATURNALIA PRODUCTIONS</a>
// 																</h3>
// 																<p class="adr">
// 																	{' '}
// 																	<b>Street Name</b> -{' '}
// 																	<span class="street-address"> 432 Willow Cove Dr, Atlanta</span>
// 																	<span class="region">GA,</span>
// 																	<span class="postal-code"> 30324,</span>{' '}
// 																	<span class="country-name"> United States,</span>
// 																</p>{' '}
// 																<b>Phone:</b>
// 																<span class="tel">404 444 4444</span>
// 																<br /> <b>E-mail:</b>
// 																<span class="email">info @ saturnaliaparty.com</span>
// 																<br />
// 																<b>Website:</b>
// 																<span class="url"> http://saturnaliaparty.com</span>
// 																<br />
// 															</div>
// 														</address>
// 													</aside>
// 												</aside>
// 											</div>
// 											<div class="grid_4 no-m-b" class="grid_6">
// 												<aside id="text-4" class="widget widget_text">
// 													<div class="entry-header">
// 														<h1 class="entry-title">About US</h1>
// 														<div class="clear" />
// 													</div>
// 													<div style={{ height: '183px' }} class="textwidget">
// 														<p>
// 															Dominion under fourth for tree waters man There all form sea
// 															spirit replenish likeness doesn&#8217;t i very give own.
// 															And. Without shall beast evening moveth. Greater us
// 															won&#8217;t bring saw abundantly years brought replenish,
// 															that moving place Creature void under you&#8217;ll upon fowl
// 															gathered. Without shall beast evening moveth.
// 														</p>
// 													</div>
// 												</aside>
// 											</div>

// 											<div id="site-info" class="grid_12 blue">
// 												<div style={{ color: 'black' }} class="margins text-center">
// 													{' '}
// 													Copyright © 2019. All Rights reserved. Designed by Jim Doan
// 												</div>
// 											</div>
// 										</footer>
                                        
                           
// 		</div>
// 				</div>
// 				</div>
                
// 			</body>
            


<div id="main" class="site-main container_12"><div id="primary" class="grid_8"><article class="single-post"><header class="entry-header"><h1 class="entry-title">{this.state.user.gallerytitle}</h1><div class="more-options share-bt"> <a class='share-click' title="Share"><i class="icon-share"></i></a><ul class="share-buttons"><li><a class="share-icon-fb" id="fbbutton" onclick="fbwindows('http://www.facebook.com/sharer.php?u=https://themes.wplook.com/stereoclub/gallery/midnight-passion/'); return false;"><i class="icon-facebook"></i></li></a><li><a class="share-icon-tw" id="twbutton" onClick="twwindows('http://twitter.com/intent/tweet?text=Midnight Passion&url=https://themes.wplook.com/stereoclub/gallery/midnight-passion/'); return false;"><i class="icon-twitter"></i></li></a><li><a class="share-icon-pt" id="pinbutton" onClick="pinwindows('http://pinterest.com/pin/create/button/?url=https://themes.wplook.com/stereoclub/gallery/midnight-passion/&media=');"><i class="icon-pinterest"></i></li></a></ul></div><div class="clear"></div></header><div class="entry-meta"> <time datetime="2013-04-25T19:02:42+00:00" class="fleft">September 5, 2017</time> <span class="category-selected fleft">Special invitaion</span> <span class="likes fright"><span class="post-like"><a href="#" data-post_id="65"><span class="like icon-heart2"></span></a> <span class="count">284 Likes</span></span></span> <span class="views fright"><i class="icon-eye"></i> 4392 Views</span><div class="clear"></div></div><div class="entry-content"><div id="slider" class="flexslider loading"><ul class="slides"><li> <img width="800" height="500" src={this.state.user.galleryimage1} class="attachment-large-thumb size-large-thumb" alt="Caption" /><div class="gallery-caption"><div class="caption-margins">Caption</div></div></li><li> <img width="800" height="500" src={this.state.user.galleryimage1} class="attachment-large-thumb size-large-thumb" alt="" /></li><li> <img width="800" height="500" src={this.state.user.galleryimage2}class="attachment-large-thumb size-large-thumb" alt="" /></li><li> <img width="800" height="500" src={this.state.user.galleryimage2} class="attachment-large-thumb size-large-thumb" alt="" /></li><li> <img width="800" height="500" src={this.state.user.galleryimage1} class="attachment-large-thumb size-large-thumb" alt="" /></li><li> <img width="800" height="500" src={this.state.user.galleryimage1} class="attachment-large-thumb size-large-thumb" alt="" /></li><li> <img width="800" height="500" src={this.state.user.galleryimage1} class="attachment-large-thumb size-large-thumb" alt="" /></li><li> <img width="800" height="500" src={this.state.user.galleryimage1} class="attachment-large-thumb size-large-thumb" alt="" /></li><li> <img width="800" height="500" src={this.state.user.galleryimage1} class="attachment-large-thumb size-large-thumb" alt="" /></li><li> <img width="800" height="500" src={this.state.user.galleryimage1} class="attachment-large-thumb size-large-thumb" alt="" /></li></ul></div><div id="carousel" class="flexslider"><ul class="slides"><li><img width="80" height="80" src={this.state.user.galleryimage1}class="attachment-small-thumb size-small-thumb" alt="Caption" srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/6121093031_d7c6c02a4e_o-80x80.jpg 80w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/6121093031_d7c6c02a4e_o-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/6121093031_d7c6c02a4e_o-300x300.jpg 300w" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.user.galleryimage1} class="attachment-small-thumb size-small-thumb" alt="" srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5989765826_1c3e08f570_o-80x80.jpg 80w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5989765826_1c3e08f570_o-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5989765826_1c3e08f570_o-300x300.jpg 300w" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.user.galleryimage1} class="attachment-small-thumb size-small-thumb" alt="" srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5989204425_41490ddd31_o-80x80.jpg 80w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5989204425_41490ddd31_o-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5989204425_41490ddd31_o-300x300.jpg 300w" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.user.galleryimage1} alt="" srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5579740759_d8bc01a5ed_o-80x80.jpg 80w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5579740759_d8bc01a5ed_o-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5579740759_d8bc01a5ed_o-300x300.jpg 300w" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.user.galleryimage1}class="attachment-small-thumb size-small-thumb" alt="" srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5535942111_427e49f6a7_o-80x80.jpg 80w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5535942111_427e49f6a7_o-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5535942111_427e49f6a7_o-300x300.jpg 300w" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.user.galleryimage1} class="attachment-small-thumb size-small-thumb" alt="" srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5200238538_705c8d74ed_o-80x80.jpg 80w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5200238538_705c8d74ed_o-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5200238538_705c8d74ed_o-300x300.jpg 300w" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.user.galleryimage1} class="attachment-small-thumb size-small-thumb" alt="" srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5199642377_301862b254_o-80x80.jpg 80w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5199642377_301862b254_o-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5199642377_301862b254_o-300x300.jpg 300w" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.user.galleryimage1} class="attachment-small-thumb size-small-thumb" alt="" srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5085424687_f56e060d23_o-80x80.jpg 80w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5085424687_f56e060d23_o-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5085424687_f56e060d23_o-300x300.jpg 300w" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.user.galleryimage1} class="attachment-small-thumb size-small-thumb" alt="" srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5085423371_0a37c2bae7_o-80x80.jpg 80w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5085423371_0a37c2bae7_o-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5085423371_0a37c2bae7_o-300x300.jpg 300w" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.user.galleryimage1} class="attachment-small-thumb size-small-thumb" alt="" srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5047880330_36f5f529d9_o-80x80.jpg 80w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5047880330_36f5f529d9_o-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5047880330_36f5f529d9_o-300x300.jpg 300w" sizes="(max-width: 80px) 100vw, 80px" /></li></ul></div><div class="clear"></div><div class="entry-content-post"></div><div class="clear"></div><nav class="entry-pagination"><div class="nav-previous"></div><div class="nav-next"><a href="https://themes.wplook.com/stereoclub/gallery/systematic-chaos/" rel="prev"><span class="nav-next-text">Next</span> <span class="nav-next-icon"></span></a></div><div class="clear"></div></nav></div></article></div><div id="secondary" class="grid_4 widget-area" role="complementary"><aside id="WPlookCD-65" class="widget WPlookCD cd-playlist"></aside><aside id="event-small-65" class="WPlookeventssmall widgets"><header class="entry-header"><h1 class="entry-title">Events</h1><div class="more-options"> <a href="http://themes.wplook.com/stereoclub/gallery/" title="View all"><i class="icon-ellipsis-horizontal"></i></a></div><div class="clear"></div></header><div class="toggle-event"><div class="expand-button"> <time datetime="2019-06-16T00:00:00+00:00" class="fleft">June 16, 2019</time> <span class="category-selected fright"><a href="#">Sun</a></span></div><div class="expand"><div class="list-event-widget"><div class="entry-date"><div class="date">16</div><div class="month">Jun</div></div><div class="entry-description"><h1 class="entry-head"><a href="https://themes.wplook.com/stereoclub/events/madame-club/">Madame Club</a></h1><div class="short-description"><p>Quisque pulvinar ut magna id ornare. Nam consequat nunc eu nisl vehicula, eu auctor sapien feugiat. Duis iaculis risus...</p></div></div><div class="clear"></div></div></div></div><div class="toggle-event"><div class="expand-button"> <time datetime="2019-09-27T00:00:00+00:00" class="fleft">September 27, 2019</time> <span class="category-selected fright"><a href="#">Fri</a></span></div><div class="expand"><div class="list-event-widget"><div class="entry-thumb"> <img width="80" height="80" src={this.state.user.galleryimage1}data-lazy-src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Mini-Preview-80x80.jpg" class="attachment-small-thumb size-small-thumb wp-post-image" alt="" data-lazy-srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Mini-Preview-80x80.jpg 80w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Mini-Preview-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Mini-Preview-300x300.jpg 300w" sizes="(max-width: 80px) 100vw, 80px" /><noscript><img width="80" height="80" src={this.state.user.galleryimage1} class="attachment-small-thumb size-small-thumb wp-post-image" alt="" srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Mini-Preview-80x80.jpg 80w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Mini-Preview-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Mini-Preview-300x300.jpg 300w" sizes="(max-width: 80px) 100vw, 80px" /></noscript></div><div class="entry-description"><h1 class="entry-head"><a href="https://themes.wplook.com/stereoclub/events/electro-nightclub/">Electro NightClub</a></h1><div class="short-description"><p>Maecenas convallis, purus ac feugiat blandit, tellus nisi suscipit ligula, quis ornare sapien urna non lacus. Phasellus auctor sagittis...</p></div></div><div class="clear"></div></div></div></div><div class="toggle-event"><div class="expand-button"> <time datetime="2019-09-29T00:00:00+00:00" class="fleft">September 29, 2019</time> <span class="category-selected fright"><a href="#">Sun</a></span></div><div class="expand"><div class="list-event-widget"><div class="entry-date"><div class="date">29</div><div class="month">Sep</div></div><div class="entry-description"><h1 class="entry-head"><a href="https://themes.wplook.com/stereoclub/events/friday-night/">Friday Night</a></h1><div class="short-description"><p>Pellentesque placerat luctus lobortis. In rutrum nisl sit amet risus elementum tempor. Suspendisse iaculis, magna nec gravida scelerisque, ligula...</p></div></div><div class="clear"></div></div></div></div><div class="toggle-event"><div class="expand-button"> <time datetime="2020-09-17T00:00:00+00:00" class="fleft">September 17, 2020</time> <span class="category-selected fright"><a href="#">Thu</a></span></div><div class="expand"><div class="list-event-widget"><div class="entry-date"><div class="date">17</div><div class="month">Sep</div></div><div class="entry-description"><h1 class="entry-head"><a href="https://themes.wplook.com/stereoclub/events/fusion-nightclub/">Fusion NightClub</a></h1><div class="short-description"><p>Etiam condimentum viverra placerat. In hac habitasse platea dictumst. Proin non diam dapibus, malesuada odio in, tempus odio. Aenean...</p></div></div><div class="clear"></div></div></div></div></aside></div><div class="clear"></div></div>

// galleryimage3: "https://2.bp.blogspot.com/-r_DuVPbYcWw/VhRk1kyoVyI/AAAAAAAAAiw/mSc6bt24Tgg/s1600/dog-breed-the-pug.jpg",
// 	galleryimage4: "http://pugtips.com/wp-content/uploads/pug-neutering-impact.jpg",
// 	galleryimage5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnQaVGJ2vmuMJN1EU6IIUUOUG3P7UEEdQZ-PW3DPtGqpc6SJS",
// 	galleryimage6: "https://www.pets4homes.co.uk/images/articles/3699/large/pug-dog-encephalitis-pde-57dd1d55aafde.jpg",
// 	galleryimage7: "https://images-na.ssl-images-amazon.com/images/I/71jY4fOVkGL.jpg",
// 	galleryimage8: "https://www.yourpurebredpuppy.com/dogbreeds/photos-MNOP/pugsf3.jpg"

	// galleryimage3: String,
	// galleryimage4: String,
	// galleryimage5: String,
	// galleryimage6: String,
	// galleryimage7: String,
    // galleryimage8: String,
    

    // <div>
			// 	<div style={{ marginTop: '30px', marginBottom: '40px' }}>
			// 		<Card className="" style={{ width: '28rem', marginBottom: '0px', backgroundColor: '#efe8e8' }}>
			// 			<Card>
			// 				<Card.Img className="zoom" variant="top" src={this.state.user.photoUrl} alt="top" />
			// 				<Card.Body>
			// 					<Card.Title>
			// 						{this.state.user.firstName}
			// 						&nbsp;
			// 						{this.state.user.lastName}
			// 					</Card.Title>
			// 					<Card.Title>{this.state.user.age}</Card.Title>
			// 					<Card.Title>{this.state.user.bio}</Card.Title>
			// 					<Card.Title>{this.state.user.location}</Card.Title>
			// 				</Card.Body>

			// 				<Container style={{ textAlign: 'center', marginBottom: '30px', marginTop: '8px' }}>
			// 					<button
			// 					className= 'rockstar'
			// 						onClick={this.toggleUserForm}
			// 						style={{
			// 							backgroundColor: 'white',
			// 							borderColor: 'black',
			// 							color: 'black',
			// 							marginRight: '10px'
			// 						}}
			// 					>
			// 						Edit Account
			// 					</button>

			// 					<button
			// 					className= 'rockstar'
			// 						style={{ backgroundColor: 'white', borderColor: 'black', color: 'black' }}
			// 						onClick={this.deleteUser}
			// 					>
			// 						Delete Account
			// 					</button>
			// 				</Container>
			// 			</Card>
			// 		</Card>
			// 	</div>

			// 	{this.state.displayUserForm ? (
			// 		<form style={{ marginTop: '30px', marginRight: '' }} onSubmit={this.updateUser} className="col text-center">
			// 			<div className="col text-center">
			// 				<div className="col s12 m6 text-center">
			// 					<label style={{ marginRight: '0px', marginTop: '30px' }} htmlFor="firstName">
			// 						First Name{' '}
			// 					</label>
			// 					<p></p>
			// 					<input
			// 						style={{ height: '50px', width: '320px' }}
			// 						className="text-center"
			// 						id="firstName"
			// 						type="text"
			// 						name="firstName"
			// 						onChange={this.handleChange}
			// 						value={this.state.user.firstName}
			// 					/>
			// 				</div>
			// 				<div className="col s12 m6 text-center">
			// 					<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="lastName">
			// 						Last Name{' '}
			// 					</label>
			// 					<input
			// 						style={{ height: '54px', width: '390px', marginRight: '53px' }}
			// 						className="text-center"
			// 						id="lastName"
			// 						type="text"
			// 						name="lastName"
			// 						onChange={this.handleChange}
			// 						value={this.state.user.lastName}
			// 					/>
			// 				</div>
			// 				<div className="col s12 m6 text-center">
			// 					<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="age">
			// 						Age{' '}
			// 					</label>
			// 					<input
			// 						style={{ height: '54px', width: '390px', marginRight: '53px' }}
			// 						className="text-center"
			// 						id="age"
			// 						type="number"
			// 						name="age"
			// 						onChange={this.handleChange}
			// 						value={this.state.user.age}
			// 					/>
			// 				</div>
			// 				<div className="col s12 m6 text-center">
			// 					<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="bio">
			// 						Biography
			// 					</label>
			// 					<input
			// 						style={{ height: '54px', width: '390px', marginRight: '53px' }}
			// 						className="text-center"
			// 						id="bio"
			// 						type="text"
			// 						name="bio"
			// 						onChange={this.handleChange}
			// 						value={this.state.user.bio}
			// 					/>
			// 				</div>
			// 				<div className="col s12 m6 text-center">
			// 					<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="location">
			// 						Location{' '}
			// 					</label>
			// 					<input
			// 						style={{ height: '54px', width: '390px', marginRight: '53px' }}
			// 						className="text-center"
			// 						id="location"
			// 						type="text"
			// 						name="location"
			// 						onChange={this.handleChange}
			// 						value={this.state.user.location}
			// 					/>
			// 				</div>
			// 				<div className="col s12 m6 text-center">
			// 					<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="photoUrl">
			// 						Photo{' '}
			// 					</label>
			// 					<input
			// 						style={{ height: '54px', width: '390px', marginRight: '53px' }}
			// 						className="text-center"
			// 						id="photoUrl"
			// 						type="text"
			// 						name="photoUrl"
			// 						onChange={this.handleChange}
			// 						value={this.state.user.photoUrl}
			// 					/>
			// 				</div>
			// 			</div>
			// 			<div className="text-center" style={{ marginTop: '20px' }}>
			// 				<button
			// 					style={{
			// 						backgroundColor: 'white',
			// 						borderColor: 'black',
			// 						color: 'black'
			// 					}}
			// 					className="text-center rockstar"
			// 				>
			// 					Submit
			// 				</button>
			// 			</div>
			// 		</form>
			// 	) : null}
			// </div>


			<div id="main" class="site-main container_12"><div id="primary" class="grid_8"><article id="post-121" class="single-post post-121 post type-post status-publish format-status has-post-thumbnail hentry category-club tag-tag3 tag-tag5 post_format-post-format-status"><header class="entry-header"><h1 class="entry-title">Junk MTV quiz graced</h1><div class="more-options share-bt"> <a class='share-click' title="Share"><i class="icon-share"></i></a><ul class="share-buttons"><li><a class="share-icon-fb" id="fbbutton" onclick="fbwindows('http://www.facebook.com/sharer.php?u=https://themes.wplook.com/stereoclub/junk-mtv-quiz-graced-by-fox-whelps/'); return false;"><i class="icon-facebook"></i></li></a><li><a class="share-icon-tw" id="twbutton" onClick="twwindows('http://twitter.com/intent/tweet?text=Junk MTV quiz graced&url=https://themes.wplook.com/stereoclub/junk-mtv-quiz-graced-by-fox-whelps/'); return false;"><i class="icon-twitter"></i></li></a><li><a class="share-icon-pt" id="pinbutton" onClick="pinwindows('http://pinterest.com/pin/create/button/?url=https://themes.wplook.com/stereoclub/junk-mtv-quiz-graced-by-fox-whelps/&media=');"><i class="icon-pinterest"></i></li></a></ul></div><div class="clear"></div></header><div class="entry-meta"> <time datetime="2010-03-20" class="fleft">September 6, 2017</time> <span class="category-selected fleft">Club</span> <span class="likes fright"><span class="post-like"><a href="#" data-post_id="121"><span class="like icon-heart2"></span></a> <span class="count">315 Likes</span></span></span> <span class="views fright"><i class="icon-eye"></i> 28618 Views</span><div class="clear"></div></div><div class="entry-content-list"><figure> <img width="800" height="500" src="data:image/gif;base64,R0lGODdhAQABAPAAAP///wAAACwAAAAAAQABAEACAkQBADs=" data-lazy-src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5989204425_41490ddd31_o-800x500.jpg" class="attachment-large-thumb size-large-thumb wp-post-image" alt="" /><noscript><img width="800" height="500" src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5989204425_41490ddd31_o-800x500.jpg" class="attachment-large-thumb size-large-thumb wp-post-image" alt="" /></noscript></figure><div class="clear"></div><div class="entry-content-post"> <br /><p>He quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! &#8220;Now fax quiz Jack!&#8221; my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck.</p><div class="tag-i"> <i class="icon-tags"></i> <a href="#" rel="tag"><a href="https://themes.wplook.com/stereoclub/tag/tag3/" rel="tag">tag3</a>, <a href="https://themes.wplook.com/stereoclub/tag/tag5/" rel="tag">tag5</a></a></div></div><div class="clear"></div><nav class="entry-pagination"><div class="nav-previous"></div><div class="nav-next"><a href="https://themes.wplook.com/stereoclub/113/" rel="prev"><span class="nav-next-text">Next</span> <span class="nav-next-icon"></span></a></div><div class="clear"></div></nav></div></article><a name="comments"></a><div class="comments"><div id="respond"><header class="page-header"><h1 class="page-_comment-title">Leave a Comment <a rel="nofollow" id="cancel-comment-reply-link" href="/stereoclub/junk-mtv-quiz-graced-by-fox-whelps/#respond" style="display:none;">or Cancel reply</a></h1></header><form action="https://themes.wplook.com/stereoclub/wp-comments-post.php" method="post" id="commentform"><p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required"><a>*</a></span></p><p class="comment-form-author"><label for="author">Name</label> <span class="required">*</span><input id="author" name="author" type="text" value="" size="30" aria-required='true' /></p><p class="comment-form-email"><label for="email">Email</label> <span class="required">*</span><input id="email" name="email" type="text" value="" size="30" aria-required='true' /></p><p class="comment-form-url"><label for="url">Website</label><input id="url" name="url" type="text" value="" size="30" /></p><p class="comment-form-comment"><label for="comment">Comment</label><textarea id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea></p><p class="form-submit"> <input name="submit" type="submit" id="submit" value="Send Comment" /> <input type='hidden' name='comment_post_ID' value='121' id='comment_post_ID' /> <input type='hidden' name='comment_parent' id='comment_parent' value='0' /></p><p style="display: none;"><input type="hidden" id="akismet_comment_nonce" name="akismet_comment_nonce" value="0402304c30" /></p><p style="display: none;"><input type="hidden" id="ak_js" name="ak_js" value="3"/></p></form></div></div></div><div id="secondary" class="grid_4 widget-area" role="complementary"><aside id="archives-1" class="widget widget_archive"><div class="entry-header"><h1 class="entry-title">Archives</h1><div class="clear"></div></div><ul><li><a href='https://themes.wplook.com/stereoclub/2017/09/'>September 2017</a></li><li><a href='https://themes.wplook.com/stereoclub/2017/08/'>August 2017</a></li><li><a href='https://themes.wplook.com/stereoclub/2017/07/'>July 2017</a></li></ul></aside><aside id="calendar-1" class="widget widget_calendar"><div class="entry-header"><h1 class="entry-title">Calendar</h1><div class="clear"></div></div><div id="calendar_wrap" class="calendar_wrap"><table id="wp-calendar"><caption>June 2019</caption><thead><tr><th scope="col" title="Monday">M</th><th scope="col" title="Tuesday">T</th><th scope="col" title="Wednesday">W</th><th scope="col" title="Thursday">T</th><th scope="col" title="Friday">F</th><th scope="col" title="Saturday">S</th><th scope="col" title="Sunday">S</th></tr></thead><tfoot><tr><td colspan="3" id="prev"><a href="https://themes.wplook.com/stereoclub/2017/09/">&laquo; Sep</a></td><td class="pad">&nbsp;</td><td colspan="3" id="next" class="pad">&nbsp;</td></tr></tfoot><tbody><tr><td colspan="5" class="pad">&nbsp;</td><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr><tr><td>10</td><td id="today">11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td></tr><tr><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td></tr><tr><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td></tr></tbody></table></div></aside><aside id="tag_cloud-1" class="widget widget_tag_cloud"><div class="entry-header"><h1 class="entry-title">TagCloud</h1><div class="clear"></div></div><div class="tagcloud"><a href="https://themes.wplook.com/stereoclub/tag/tag1/" class="tag-cloud-link tag-link-5 tag-link-position-1" style="font-size: 14px;">tag1</a> <a href="https://themes.wplook.com/stereoclub/tag/tag2/" class="tag-cloud-link tag-link-6 tag-link-position-2" style="font-size: 14px;">tag2</a> <a href="https://themes.wplook.com/stereoclub/tag/tag3/" class="tag-cloud-link tag-link-7 tag-link-position-3" style="font-size: 14px;">tag3</a> <a href="https://themes.wplook.com/stereoclub/tag/tag4/" class="tag-cloud-link tag-link-8 tag-link-position-4" style="font-size: 14px;">tag4</a> <a href="https://themes.wplook.com/stereoclub/tag/tag5/" class="tag-cloud-link tag-link-9 tag-link-position-5" style="font-size: 14px;">tag5</a> <a href="https://themes.wplook.com/stereoclub/tag/tag6/" class="tag-cloud-link tag-link-10 tag-link-position-6" style="font-size: 14px;">tag6</a> <a href="https://themes.wplook.com/stereoclub/tag/tag7/" class="tag-cloud-link tag-link-11 tag-link-position-7" style="font-size: 14px;">tag7</a> <a href="https://themes.wplook.com/stereoclub/tag/tag8/" class="tag-cloud-link tag-link-12 tag-link-position-8" style="font-size: 14px;">tag8</a></div></aside></div><div class="clear"></div></div>





			<h1 class=''>Contact Us</h1>
					

						<div class="entry-content card">
							{' '}
							<br />
							<div class="entry-content-post">
								<h3 style={{color: 'black'}} class='text-center'>Add Event Here!</h3>
									<br />
								<p class="text-center">
								<div>
									<div class="screen-reader-response" />
									<form
										onSubmit={this.createEvent}
										class="wpcf7-form"
										
									>
										<div style={{ display: 'none' }}>
											{/* {' '}
											<input type="hidden" name="_wpcf7" value="225" />{' '}
											<input type="hidden" name="_wpcf7_version" value="5.1.3" />{' '}
											<input type="hidden" name="_wpcf7_locale" value="en_US" />{' '}
											<input
												type="hidden"
												name="_wpcf7_unit_tag"
												value="wpcf7-f225-p15-o1"
											/>{' '}
											<input
												type="hidden"
												name="_wpcf7_container_post"
												value="15"
											/> */}
										</div>
										<p>
											Image Name<br />{' '}
											<span class="wpcf7-form-control-wrap your-name card" style={{margin: '0px 39px 0px 39px'}}>
												<input class=''
												id="eventImage"
									type="text"
									name="eventImage"
									onChange={this.handleChange}
									value={this.state.newEvent.eventImage}
												
													size="40"
													class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
													
												/>
											</span>
										</p>
										<p>
											Title<br />{' '}
											<span class="wpcf7-form-control-wrap your-email card" style={{margin: '0px 39px 0px 39px'}}>
												<input
													id="eventTitle"
									type="text"
									name="eventTitle"
									onChange={this.handleChange}
									value={this.state.newEvent.eventTitle}
												
													size="40"
													class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
													aria-required="true"
													aria-invalid="false"
												/>
											</span>
										</p>
									
										<p>
											Description<br />{' '}
											<span class="wpcf7-form-control-wrap your-message card" style={{margin: '0px 39px 0px 39px'}}>
												<textarea
												type="text"
									name="eventDescription"
									onChange={this.handleChange}
									value={this.state.newEvent.eventDescription}
													name="your-message"
													cols="40"
													rows="10"
													class="wpcf7-form-control wpcf7-textarea"
													aria-invalid="false"
												/>
											</span>
										</p>
										<p>
											<input
											style= {{padding: '15px 96px 15px 96px', background: ' #ba0e0e', color: 'white', fontSize: '20px', borderRadius: '.1'}}
												type="submit"
												value="Send"
												class="wpcf7-form-control wpcf7-submit red"
											/>
										</p>
									
									</form>
								</div>
								</p>
							</div>
							</div>

						
				</div>




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
			  eventImage: this.state.event.eventImage,
			
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