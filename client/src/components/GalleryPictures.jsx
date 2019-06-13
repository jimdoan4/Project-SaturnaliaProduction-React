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
                <h1>Gallery</h1>
				<br/>
				<br/>
                	<Container class='text-center' fluid style={{ background: '#fffdf9', width: '100%', height: '100%', display: 'block', margin: 'auto 0' }}>
                    
        <div class="gallery">
            <a href="" data-lightbox="mygallery" data-title="High resolution cat image"><img
                    src="https://img1.wsimg.com/isteam/ip/b42774cc-c7c1-4981-8b31-f95f95b3378b/1f1c0f61-e333-4196-aaff-0e5e926a6aef.JPG/:/rs=w:800,h:1000,cg:true,m/cr=w:1600,h:1000,a:cc"/></a>
            <a href="images/pic2.jpg" data-lightbox="mygallery" data-title="High resolution sparrow image"><img
                    src="https://img1.wsimg.com/isteam/ip/b42774cc-c7c1-4981-8b31-f95f95b3378b/24ebc716-8405-4308-b80f-1815324949ec.jpg/:/rs=w:200,h:140,cg:true,m/cr=w:200,h:140,a:cc"/></a>
            <a href="images/pic3.jpg" data-lightbox="mygallery" data-title="High resolution squirrel image"><img
                    src="https://img1.wsimg.com/isteam/ip/b42774cc-c7c1-4981-8b31-f95f95b3378b/a56f9057-f9dd-4ad1-8436-326220385857.jpg/:/rs=w:200,h:140,cg:true,m/cr=w:200,h:140,a:cc"/></a>
            <a href="https://img1.wsimg.com/isteam/ip/b42774cc-c7c1-4981-8b31-f95f95b3378b/190fc1d0-303c-45a6-8822-9823aacddc30.jpg/:/rs=w:200,h:140,cg:true,m/cr=w:200,h:140,a:cc" data-lightbox="mygallery" data-title="High resolution deer image"><img
                    src="https://img1.wsimg.com/isteam/ip/b42774cc-c7c1-4981-8b31-f95f95b3378b/f24a77de-a16b-48ee-8cbc-acc4d9bc8ca5.jpg/:/rs=w:200,h:140,cg:true,m/cr=w:200,h:140,a:cc"/></a>
            <a href="images/pic5.jpg" data-lightbox="mygallery" data-title="High resolution common chaffinch image"><img
                    src="https://img1.wsimg.com/isteam/ip/b42774cc-c7c1-4981-8b31-f95f95b3378b/ccbe3b1b-3c45-4441-b530-ee43dc687ad9.jpg/:/rs=w:200,h:140,cg:true,m/cr=w:200,h:140,a:cc"/></a>
            <a href="images/pic6.jpg" data-lightbox="mygallery"><img src="https://img1.wsimg.com/isteam/ip/b42774cc-c7c1-4981-8b31-f95f95b3378b/4eb1d5c5-c033-4fca-b1ba-12f665e96ab9.png/:/rs=w:200,h:140,cg:true,m/cr=w:200,h:140,a:cc"/></a>
            {/* <a href="images/pic7.jpg" data-lightbox="mygallery"><img src="images/pic7-small.jpg"></a>
            <a href="images/pic8.jpg" data-lightbox="mygallery"><img src="images/pic8-small.jpg"></a>
            <a href="images/pic9.jpg" data-lightbox="mygallery"><img src="images/pic9-small.jpg"></a>
            <a href="images/pic10.jpg" data-lightbox="mygallery"><img src="images/pic10-small.jpg"></a> */}
        </div>
                
                 </Container>
            </div>
        </section>
					
					</div>
				
		);
	}
}
