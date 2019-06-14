import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class GalleryPage extends Component {
	state = {
		galleryId: this.props.galleryId,
		gallerys: [],
		gallery: {
			_id: '',
			galleryTitle: '',
			galleryDescription: '',
			galleryImage: '',
			galleryImageTwo: ''
		},
		redirectToGallery: false,
		displayGalleryForm: false
	};

	getSingleGalleryData = () => {
		axios.get(`/api/gallerys/${this.state.galleryId}`).then((res) => {
			this.setState({ gallery: res.data });
		});
	};

	componentDidMount = () => {
		this.getSingleGalleryData();
	};

	toggleGalleryForm = () => {
		this.setState((state, props) => {
			return { displayGalleryForm: !state.displayGalleryForm };
		});
	};

	handleChange = (e) => {
		const updateGallery = { ...this.state.gallery };
		updateGallery[e.target.name] = e.target.value;
		this.setState({ gallery: updateGallery });
	};

	handleChange = (e) => {
		const newGallery = { ...this.state.gallery };
		newGallery[e.target.name] = e.target.value;
		this.setState({ gallery: newGallery });
	};

	updateGallery = (e) => {
		e.preventDefault();
		axios
			.put(`/api/gallerys/${this.state.galleryId}`, {
				galleryTitle: this.state.gallery.galleryTitle,
				galleryDescription: this.state.gallery.galleryDescription,
				galleryImage: this.state.gallery.galleryImage,
				galleryImageTwo: this.state.gallery.galleryImageTwo
			})
			.then((res) => {
				this.setState({ gallery: res.data, displayGalleryForm: false });
			});
		this.getSingleGalleryData();
	};

	deleteGallery = () => {
		axios.delete(`/api/gallerys/${this.state.galleryId}`).then((res) => {
			this.setState({ redirectToGallery: true });
		});
	};

	render() {
		if (this.state.redirectToGallery) {
			return <Redirect to={`/gallery/`} />;
		}
		return (
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
											src={this.state.gallery.galleryImage}
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
										{this.state.gallery.galleryTitle}
									</Card.Title>
									<Card.Text class="text-center">
										{this.state.gallery.galleryDescription}
										{/* <p>
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
										getting into Q&As with the audience. */}
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
										<img src={this.state.gallery.galleryImage} />
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
										<img src={this.state.gallery.galleryImage} />
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
				<Container style={{ textAlign: 'center', marginBottom: '30px', marginTop: '8px' }}>
					<Row>
						<Col>
							<button className="bus" onClick={this.toggleGalleryForm}>
								Edit Gallery
							</button>
						</Col>
						<Col>
							<button className="bus" onClick={this.deleteGallery}>
								Delete Gallery
							</button>
						</Col>
					</Row>
				</Container>

				{this.state.displayGalleryForm ? (
					<form
						style={{ marginTop: '10px', marginBottom: '60px' }}
						onSubmit={this.updateGallery}
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
									id="galleryImage"
									type="text"
									name="galleryImage"
									onChange={this.handleChange}
									value={this.state.gallery.galleryImage}
								/>
							</div>

							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '10px' }} htmlFor="name">
									Image Two Name{' '}
								</label>

								<input
									style={{ height: '50px', width: '320px', marginRight: '99px' }}
									className=""
									id="galleryImageTwo"
									type="text"
									name="galleryImageTwo"
									onChange={this.handleChange}
									value={this.state.gallery.galleryImageTwo}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '20px' }} htmlFor="size">
									Title{' '}
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className=""
									id="galleryTitle"
									type="text"
									name="galleryTitle"
									onChange={this.handleChange}
									value={this.state.gallery.galleryTitle}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '20px' }} htmlFor="image">
									Description{' '}
								</label>
								<textarea
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className=""
									id="galleryDescription"
									type="text"
									name="galleryDescription"
									onChange={this.handleChange}
									value={this.state.gallery.galleryDescription}
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
