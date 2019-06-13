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

export default class GalleryPictures extends Component {
	state = {
		gallerys: [],
		newGallery: {
			galleryTitle: '',
			galleryDescription: '',
			galleryImage: ''
		},
		displayGalleryForm: false
	};

	componentDidMount = () => {
		this.getAllGallerys();
	};

	getAllGallerys = () => {
		axios.get('/api/gallerys/').then((res) => {
			this.setState({ gallerys: res.data });
		});
	};

	createGallery = (e) => {
		axios
			.post('/api/gallerys/', {
				galleryTitle: this.state.newGallery.galleryTitle,
				galleryDescription: this.state.newGallery.galleryDescription,
				galleryImage: this.state.newGallery.galleryImage
			})
			.then((res) => {
				const gallerysList = [ this.state.gallerys ];
				gallerysList.unshift(res.data);
				this.setState({
					newGallery: {
						galleryTitle: '',
						galleryDescription: '',
						galleryImage: ''
					},
					displayGalleryForm: false,
					gallerys: gallerysList
				});
			});
		this.getAllGallerys();
	};

	handleChange = (e) => {
		const changeNewGallery = { ...this.state.newGallery };
		changeNewGallery[e.target.name] = e.target.value;
		this.setState({ newGallery: changeNewGallery });
	};

	handleSignUp = (e) => {
		e.preventDefault();
		this.createGallery();
	};
	render() {
		return (
			// <div>
			// 	<body class="home page-template page-template-template-home-page page-template-template-home-page-php page page-id-10">
			// 		<div>
			// 			<div id="page">
			// 				<div id="header-bg" />
			// 				<div id="patern" />
			// 				<div id="page-view">
			// 					<header
			// 						style={{ width: '1000px', marginLeft: 'auto', marginRight: 'auto' }}
			// 						class="entry-header"
			// 					>
			// 						<h1 class="entry-title">Gallery</h1>

			// 						<div class="clear" />
			// 					</header>
			// 					<div>
			// 						{this.state.gallerys.map((gallery) => {
			// 							return (
			// 								<div className="row">
			// 									<aside
			// 										style={{ width: '1000px', marginLeft: 'auto', marginRight: 'auto' }}
			// 										id="upcomming-events-10"
			// 										class="WPlookevents WPlookeventshome widget upcomming-events"
			// 									>
			// 										<div
			// 											class="entry-content"
			// 											style={{
			// 												width: '2000px',
			// 												marginLeft: 'auto',
			// 												marginRight: 'auto'
			// 											}}
			// 										>
			// 											<article
			// 												key={gallery._id}
			// 												style={{ height: '300px' }}
			// 												class="list-block-item"
			// 											>
			// 												<div class="margins">
			// 													<div class="entry-date">
			// 														<Link
			// 															to={`/gallerys/${gallery._id}`}
			// 															key={gallery._id}
			// 														>
			// 															<img
			// 																style={{ height: '255px', width: '310px' }}
			// 																src={gallery.galleryImage}
			// 															/>
			// 														</Link>
			// 													</div>
			// 													{/* <div class="entry-description">
			// 												<h1 class="entry-head">
			// 													<a href="">{user.title}</a>
			// 												</h1>
			// 												<div class="short-description">
			// 													<p>{user.description}</p>
			// 												</div> */}
			// 													{/* </div> */}
			// 													<div class="clear" />
			// 												</div>
			// 											</article>
			// 										</div>
			// 									</aside>
			// 								</div>
			// 							);
			// 						})}

			// 					</div>
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</body>
			// </div>
			<div style={{ background: '#fffdf9', width: '100%', height: '100%' }}>
				<section id="team">
					<div class="containers">
						<h1>
							<p class="text-center">Atlanta Best Night Life</p>
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
											src="https://i2.wp.com/www.gayvienna4u.com/wp-content/uploads/2018/01/circuis-party-vienna-1.jpg?fit=800%2C370&ssl=1"
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
										Retrospective: Lucrecia Martel
									</Card.Title>
									<Card.Text class="text-center">
										<p>
											In addition to their own booth, Ableton will host three main live sessions
											led by artists like Berlin duo Skinnerbox, among others. After recent
											announcements about ADE University launching young professional program
											What's Next? and Celebrating 100 years of electronic music instruments we're
											pleased to share that music software and hardware company Ableton continues
											its ADE Sound Lab partnership for the fifth consecutive year, since the
											beginning of the program in 2015. Over the years the manufacturer has become
											a vital part of Sound Lab and we're looking forward to their contributions
											in 2019.
										</p>
										As well as their own booth, which will showcase both the latest kit and all the
										classic Ableton range, Sound Lab visitors can attend three main live sessions
										with some amazing names demonstrating their working processes, performing, and
										getting into Q&As with the audience.
									</Card.Text>
								</div>
							</div>
							<br />
							<br />
							<br />
							<ul class="slides">
								<input type="radio" name="radio-btn" id="img-1" checked />
								<li class="slide-container">
									<div class="slide">
										<img src="https://partyinljubljana.com/images/clubs/top/disco-party-slovenia.jpg" />
									</div>
									<div class="nav">
										<label for="img-6" class="prev">
											&#x2039;
										</label>
										<label for="img-2" class="next">
											&#x203a;
										</label>
									</div>
								</li>

								<input type="radio" name="radio-btn" id="img-2" />
								<li class="slide-container">
									<div class="slide">
										<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMDvYa-r8HLdVux8kLi2J5MvDFCoP-l71AEItqsiPo_t5SrxRh" />
									</div>
									<div class="nav">
										<label for="img-1" class="prev">
											&#x2039;
										</label>
										<label for="img-3" class="next">
											&#x203a;
										</label>
									</div>
								</li>

								<input type="radio" name="radio-btn" id="img-3" />
								<li class="slide-container">
									<div class="slide">
										<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAifhV3Do01PEUDw5XhoQQjc8NoZPMWYbzqhEplFv4oKaBOUp_" />
									</div>
									<div class="nav">
										<label for="img-2" class="prev">
											&#x2039;
										</label>
										<label for="img-4" class="next">
											&#x203a;
										</label>
									</div>
								</li>

								<input type="radio" name="radio-btn" id="img-4" />
								<li class="slide-container">
									<div class="slide">
										<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUWXWj1w0IJCy_iEDpB9OR52-OjgAVYgmlfirQpkTo2YfSxHC" />
									</div>
									<div class="nav">
										<label for="img-3" class="prev">
											&#x2039;
										</label>
										<label for="img-5" class="next">
											&#x203a;
										</label>
									</div>
								</li>

								<input type="radio" name="radio-btn" id="img-5" />
								<li class="slide-container">
									<div class="slide">
										<img src="https://img1.wsimg.com/isteam/ip/b42774cc-c7c1-4981-8b31-f95f95b3378b/f24a77de-a16b-48ee-8cbc-acc4d9bc8ca5.jpg/:/rs=w:200,h:140,cg:true,m/cr=w:200,h:140,a:cc" />
									</div>
									<div class="nav">
										<label for="img-4" class="prev">
											&#x2039;
										</label>
										<label for="img-6" class="next">
											&#x203a;
										</label>
									</div>
								</li>

								<input type="radio" name="radio-btn" id="img-6" />
								<li class="slide-container">
									<div class="slide">
										<img src="https://img1.wsimg.com/isteam/ip/b42774cc-c7c1-4981-8b31-f95f95b3378b/ccbe3b1b-3c45-4441-b530-ee43dc687ad9.jpg/:/rs=w:200,h:140,cg:true,m/cr=w:200,h:140,a:cc" />
									</div>
									<div class="nav">
										<label for="img-5" class="prev">
											&#x2039;
										</label>
										<label for="img-1" class="next">
											&#x203a;
										</label>
									</div>
								</li>

								<li class="nav-dots">
									<label for="img-1" class="nav-dot" id="img-dot-1" />
									<label for="img-2" class="nav-dot" id="img-dot-2" />
									<label for="img-3" class="nav-dot" id="img-dot-3" />
									<label for="img-4" class="nav-dot" id="img-dot-4" />
									<label for="img-5" class="nav-dot" id="img-dot-5" />
									<label for="img-6" class="nav-dot" id="img-dot-6" />
								</li>
							</ul>
						</Container>
					</div>
				</section>
			</div>
		);
	}
}
