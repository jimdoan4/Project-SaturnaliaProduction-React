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

export default class Gallery extends Component {
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

	toggleGalleryForm = () => {
		this.setState((state, props) => {
			return { displayGalleryForm: !state.displayGalleryForm };
		});
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
			<div style={{ background: '#fffdf9', width: '100%', height: '100%' }}>
				<section id="team">
					<div class="containers">
						<h1>Gallery</h1>
						<br />
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
								{this.state.gallerys.map((gallery) => {
									return (
										<div class="col profile-pic text-center red seperate">
											<div class="img-box">
												<Link to={`/gallerys/${gallery._id}`} key={gallery._id}>
													<img
														src={gallery.galleryImage}
														style={{
															width: '18.5rem',
															height: '335px',
															marginBottom: '10px'
														}}
														class="img-responsive"
													/>
												</Link>
											</div>
											<Card.Title
												class="text-center"
												style={{
													color: 'black',
													fontWeight: 'bold',
													marginBottom: '40px',
													fontSize: '20px'
												}}
											>
												{gallery.galleryTitle}
											</Card.Title>
										</div>
									);
								})}
							</div>
						</Container>
						<div style={{ marginTop: '80px' }}>
							<button onClick={this.toggleGalleryForm} class="bus">
								Add Gallery Pictures
							</button>
						</div>
					</div>
				</section>
				<div class="container">
					{this.state.displayGalleryForm ? (
						<div class="container">
							<form
								style={{
									marginTop: '10px',
									marginBottom: '60px',
									display: 'block',
									justifyContent: 'center'
								}}
								onSubmit={this.createGallery}
								className="col text-center"
							>
								<div className="col ">
									<div className="col ">
										<label htmlFor="name" style={{ paddingRight: '30px' }}>
											Gallery Name{' '}
										</label>

										<input
											style={{ height: '50px', width: '18rem', marginBottom: '10px' }}
											className=""
											id="galleryImage"
											type="text"
											name="galleryImage"
											onChange={this.handleChange}
											value={this.state.newGallery.galleryImage}
										/>
									</div>
									<div className="col text-center">
										<label htmlFor="size" style={{ paddingRight: '30px' }}>
											Title{' '}
										</label>
										<input
											style={{ height: '50px', width: '18rem', marginBottom: '10px' }}
											className=""
											id="galleryTitle"
											type="text"
											name="galleryTitle"
											onChange={this.handleChange}
											value={this.state.newGallery.galleryTitle}
										/>
									</div>
									<div className="col ">
										<label htmlFor="image" style={{ paddingRight: '30px' }}>
											Description{' '}
										</label>
										<input
											style={{ height: '50px', width: '18rem' }}
											className=""
											id="galleryDescription"
											type="text"
											name="galleryDescription"
											onChange={this.handleChange}
											value={this.state.newGallery.galleryDescription}
										/>
									</div>
								</div>
								<div className="text-center" style={{ marginTop: '40px' }}>
									<button className="text-center bus">Submit</button>
								</div>
							</form>
						</div>
					) : null}
				</div>
			</div>
		);
	}
}
