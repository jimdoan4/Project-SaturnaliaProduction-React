// import React, { Component } from 'react';
// import { Container } from 'react-bootstrap';
// import { Jumbotron } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// export default class Reviews extends Component {
// 	render() {
// 		return (
// 			<div id="page">
// 				<div id="main" class="site-main container_12">
// 					<div id="primary" class="grid_8">
// 						<section id="galleries" class="WPlooklatestposts">
// 							<header class="entry-header">
// 								<h1 class="entry-title">Resident Djs</h1>
// 								<div class="clear" />
// 							</header>
// 							<div class="entry-content-list">
// 								<ul class="grid cs-style-gallery">
// 									<li class="cd-cs-style-item">
// 										{' '}
// 										<a href="https://themes.wplook.com/stereoclub/dj/paul-van-dyk/">
// 											<figure>
// 												{' '}
// 												<img
// 													width="300"
// 													height="300"
// 													src="data:image/gif;base64,R0lGODdhAQABAPAAAP///wAAACwAAAAAAQABAEACAkQBADs="
// 													data-lazy-src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Paul_van_Dyk_DJing-300x300.jpg"
// 													class="attachment-medium-thumb size-medium-thumb wp-post-image"
// 													alt=""
// 													data-lazy-srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Paul_van_Dyk_DJing-300x300.jpg 300w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Paul_van_Dyk_DJing-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Paul_van_Dyk_DJing-80x80.jpg 80w"
// 													sizes="(max-width: 300px) 100vw, 300px"
// 												/>
// 												<noscript>
// 													<img
// 														width="300"
// 														height="300"
// 														src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Paul_van_Dyk_DJing-300x300.jpg"
// 														class="attachment-medium-thumb size-medium-thumb wp-post-image"
// 														alt=""
// 														srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Paul_van_Dyk_DJing-300x300.jpg 300w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Paul_van_Dyk_DJing-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Paul_van_Dyk_DJing-80x80.jpg 80w"
// 														sizes="(max-width: 300px) 100vw, 300px"
// 													/>
// 												</noscript>
// 												<figcaption>
// 													<h3>Paul van Dyk</h3>
// 													<div>Resident DJ</div>
// 												</figcaption>
// 											</figure>{' '}
// 										</a>
// 									</li>
// 									<li class="cd-cs-style-item">
// 										{' '}
// 										<a href="https://themes.wplook.com/stereoclub/dj/tiesto/">
// 											<figure>
// 												{' '}
// 												<img
// 													width="300"
// 													height="300"
// 													src="data:image/gif;base64,R0lGODdhAQABAPAAAP///wAAACwAAAAAAQABAEACAkQBADs="
// 													data-lazy-src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Tiesto_-_May_1_2009-300x300.jpg"
// 													class="attachment-medium-thumb size-medium-thumb wp-post-image"
// 													alt=""
// 													data-lazy-srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Tiesto_-_May_1_2009-300x300.jpg 300w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Tiesto_-_May_1_2009-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Tiesto_-_May_1_2009-80x80.jpg 80w"
// 													sizes="(max-width: 300px) 100vw, 300px"
// 												/>
// 												<noscript>
// 													<img
// 														width="300"
// 														height="300"
// 														src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Tiesto_-_May_1_2009-300x300.jpg"
// 														class="attachment-medium-thumb size-medium-thumb wp-post-image"
// 														alt=""
// 														srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Tiesto_-_May_1_2009-300x300.jpg 300w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Tiesto_-_May_1_2009-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Tiesto_-_May_1_2009-80x80.jpg 80w"
// 														sizes="(max-width: 300px) 100vw, 300px"
// 													/>
// 												</noscript>
// 												<figcaption>
// 													<h3>Tiësto</h3>
// 													<div>Guest DJs</div>
// 												</figcaption>
// 											</figure>{' '}
// 										</a>
// 									</li>
// 									<li class="cd-cs-style-item">
// 										{' '}
// 										<a href="https://themes.wplook.com/stereoclub/dj/sasha-lopez/">
// 											<figure>
// 												{' '}
// 												<img
// 													width="200"
// 													height="200"
// 													src="data:image/gif;base64,R0lGODdhAQABAPAAAP///wAAACwAAAAAAQABAEACAkQBADs="
// 													data-lazy-src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/avatars-000002476086-l4de0s-t200x200.jpg"
// 													class="attachment-medium-thumb size-medium-thumb wp-post-image"
// 													alt=""
// 													data-lazy-srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/avatars-000002476086-l4de0s-t200x200.jpg 200w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/avatars-000002476086-l4de0s-t200x200-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/avatars-000002476086-l4de0s-t200x200-80x80.jpg 80w"
// 													sizes="(max-width: 200px) 100vw, 200px"
// 												/>
// 												<noscript>
// 													<img
// 														width="200"
// 														height="200"
// 														src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/avatars-000002476086-l4de0s-t200x200.jpg"
// 														class="attachment-medium-thumb size-medium-thumb wp-post-image"
// 														alt=""
// 														srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/avatars-000002476086-l4de0s-t200x200.jpg 200w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/avatars-000002476086-l4de0s-t200x200-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/avatars-000002476086-l4de0s-t200x200-80x80.jpg 80w"
// 														sizes="(max-width: 200px) 100vw, 200px"
// 													/>
// 												</noscript>
// 												<figcaption>
// 													<h3>Sasha Lopez</h3>
// 													<div>Guest DJs</div>
// 												</figcaption>
// 											</figure>{' '}
// 										</a>
// 									</li>
// 								</ul>
// 								<div class="clear" />
// 							</div>
// 						</section>
// 					</div>
// 				</div>
// 				<div id="secondary" class="grid_4 widget-area" role="complementary">
// 					<aside id="resident-dj-158" class="widget residentdj">
// 						<header class="entry-header">
// 							<h1 class="entry-title">DJ</h1>
// 							<div class="more-options">
// 								{' '}
// 								<a href="http://themes.wplook.com/stereoclub/resident-djs/" title="View all">
// 									<i class="icon-ellipsis-horizontal" />
// 								</a>
// 							</div>
// 							<div class="clear" />
// 						</header>
// 						<ul>
// 							<li>
// 								{' '}
// 								<a href="https://themes.wplook.com/stereoclub/dj/sasha-lopez/" title="Sasha Lopez">
// 									{' '}
// 									<img
// 										width="200"
// 										height="200"
// 										src="data:image/gif;base64,R0lGODdhAQABAPAAAP///wAAACwAAAAAAQABAEACAkQBADs="
// 										data-lazy-src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/avatars-000002476086-l4de0s-t200x200.jpg"
// 										class="attachment-medium-thumb size-medium-thumb wp-post-image"
// 										alt=""
// 										data-lazy-srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/avatars-000002476086-l4de0s-t200x200.jpg 200w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/avatars-000002476086-l4de0s-t200x200-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/avatars-000002476086-l4de0s-t200x200-80x80.jpg 80w"
// 										sizes="(max-width: 200px) 100vw, 200px"
// 									/>
// 									<noscript>
// 										<img
// 											width="200"
// 											height="200"
// 											src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/avatars-000002476086-l4de0s-t200x200.jpg"
// 											class="attachment-medium-thumb size-medium-thumb wp-post-image"
// 											alt=""
// 											srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/avatars-000002476086-l4de0s-t200x200.jpg 200w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/avatars-000002476086-l4de0s-t200x200-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/avatars-000002476086-l4de0s-t200x200-80x80.jpg 80w"
// 											sizes="(max-width: 200px) 100vw, 200px"
// 										/>
// 									</noscript>
// 									<h1 class="entry-title">Sasha Lopez</h1>
// 									<h2 class="entry-description">Guest DJs</h2>
// 									<div class="clear" />{' '}
// 								</a>
// 							</li>
// 							<li>
// 								{' '}
// 								<a href="https://themes.wplook.com/stereoclub/dj/paul-van-dyk/" title="Paul van Dyk">
// 									{' '}
// 									<img
// 										width="300"
// 										height="300"
// 										src="data:image/gif;base64,R0lGODdhAQABAPAAAP///wAAACwAAAAAAQABAEACAkQBADs="
// 										data-lazy-src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Paul_van_Dyk_DJing-300x300.jpg"
// 										class="attachment-medium-thumb size-medium-thumb wp-post-image"
// 										alt=""
// 										data-lazy-srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Paul_van_Dyk_DJing-300x300.jpg 300w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Paul_van_Dyk_DJing-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Paul_van_Dyk_DJing-80x80.jpg 80w"
// 										sizes="(max-width: 300px) 100vw, 300px"
// 									/>
// 									<noscript>
// 										<img
// 											width="300"
// 											height="300"
// 											src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Paul_van_Dyk_DJing-300x300.jpg"
// 											class="attachment-medium-thumb size-medium-thumb wp-post-image"
// 											alt=""
// 											srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Paul_van_Dyk_DJing-300x300.jpg 300w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Paul_van_Dyk_DJing-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Paul_van_Dyk_DJing-80x80.jpg 80w"
// 											sizes="(max-width: 300px) 100vw, 300px"
// 										/>
// 									</noscript>
// 									<h1 class="entry-title">Paul van Dyk</h1>
// 									<h2 class="entry-description">Resident DJ</h2>
// 									<div class="clear" />{' '}
// 								</a>
// 							</li>
// 							<li>
// 								{' '}
// 								<a href="https://themes.wplook.com/stereoclub/dj/tiesto/" title="Tiësto">
// 									{' '}
// 									<img
// 										width="300"
// 										height="300"
// 										src="data:image/gif;base64,R0lGODdhAQABAPAAAP///wAAACwAAAAAAQABAEACAkQBADs="
// 										data-lazy-src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Tiesto_-_May_1_2009-300x300.jpg"
// 										class="attachment-medium-thumb size-medium-thumb wp-post-image"
// 										alt=""
// 										data-lazy-srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Tiesto_-_May_1_2009-300x300.jpg 300w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Tiesto_-_May_1_2009-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Tiesto_-_May_1_2009-80x80.jpg 80w"
// 										sizes="(max-width: 300px) 100vw, 300px"
// 									/>
// 									<noscript>
// 										<img
// 											width="300"
// 											height="300"
// 											src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Tiesto_-_May_1_2009-300x300.jpg"
// 											class="attachment-medium-thumb size-medium-thumb wp-post-image"
// 											alt=""
// 											srcset="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Tiesto_-_May_1_2009-300x300.jpg 300w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Tiesto_-_May_1_2009-150x150.jpg 150w, https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/Tiesto_-_May_1_2009-80x80.jpg 80w"
// 											sizes="(max-width: 300px) 100vw, 300px"
// 										/>
// 									</noscript>
// 									<h1 class="entry-title">Tiësto</h1>
// 									<h2 class="entry-description">Guest DJs</h2>
// 									<div class="clear" />{' '}
// 								</a>
// 							</li>
// 						</ul>
// 					</aside>
// 				</div>

// 				<div class="clear" />

// 				<footer id="colophon" class="site-footer container_12">
// 					<div class="clear" />
// 					<div class="clear" />
// 					<div class="grid_4 alpha no-m-b" class="grid_6">
// 						<aside class="widget widget_adress" id="widget-address-121">
// 							<aside id="wplook_address_widget-2" class="widget widget_wplook_address_widget">
// 								<div class="entry-header">
// 									<h1 class="entry-title">Contact Us</h1>
// 									<div class="clear" />
// 								</div>
// 								<address class="vcard">
// 									<div class="address-margins">
// 										<h3 class="org vcard">
// 											<a class="url fn org">SATURNALIA PRODUCTIONS</a>
// 										</h3>
// 										<p class="adr">
// 											{' '}
// 											<b>Street Name</b> -{' '}
// 											<span class="street-address"> 432 Willow Cove Dr, Atlanta</span>
// 											<span class="region">GA,</span>
// 											<span class="postal-code"> 30324,</span>{' '}
// 											<span class="country-name"> United States,</span>
// 										</p>{' '}
// 										<b>Phone:</b>
// 										<span class="tel">404 444 4444</span>
// 										<br /> <b>E-mail:</b>
// 										<span class="email">info @ saturnaliaparty.com</span>
// 										<br />
// 										<b>Website:</b>
// 										<span class="url"> http://saturnaliaparty.com</span>
// 										<br />
// 									</div>
// 								</address>
// 							</aside>
// 						</aside>
// 					</div>
// 					<div class="grid_4 no-m-b" class="grid_6">
// 						<aside id="text-4" class="widget widget_text">
// 							<div class="entry-header">
// 								<h1 class="entry-title">About US</h1>
// 								<div class="clear" />
// 							</div>
// 							<div style={{ height: '183px' }} class="textwidget">
// 								<p>
// 									Dominion under fourth for tree waters man There all form sea spirit replenish
// 									likeness doesn&#8217;t i very give own. And. Without shall beast evening moveth.
// 									Greater us won&#8217;t bring saw abundantly years brought replenish, that moving
// 									place Creature void under you&#8217;ll upon fowl gathered. Without shall beast
// 									evening moveth.
// 								</p>
// 							</div>
// 						</aside>
// 					</div>

// 					<div id="site-info" class="grid_12 blue">
// 						<div style={{ color: 'black' }} class="margins text-center">
// 							{' '}
// 							Copyright © 2019. All Rights reserved. Designed by Jim Doan
// 						</div>
// 					</div>
// 				</footer>
// 			</div>
// 		);
// 	}
// }

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

export default class Reviews extends Component {
	state = {
		reviews: [],
		newReviews: {
			reviewTitle: '',
			reviewDescription: '',
			reviewImage: '',
			reviewUser: ''
		},
		displayReviewForm: false
	};

	componentDidMount = () => {
		this.getAllReviews();
	};

	getAllReviews = () => {
		axios.get('/api/reviews/').then((res) => {
			this.setState({ reviews: res.data });
		});
	};

	createReview = (e) => {
		axios
			.post('/api/reviews/', {
				reviewTitle: this.state.newReview.reviewTitle,
				reviewDescription: this.state.newReview.reviewDescription,
				reviewImage: this.state.newReview.reviewImage,
				reviewUser: this.state.newReview.reviewUser
			})
			.then((res) => {
				const reviewsList = [ this.state.reviews ];
				reviewsList.unshift(res.data);
				this.setState({
					newReview: {
						reviewTitle: '',
						reviewDescription: '',
						reviewImage: '',
						reviewUser: ''
					},
					displayReviewForm: false,
					reviews: reviewsList
				});
			});
		this.getAlReviews();
	};

	handleChange = (e) => {
		const changeNewReview = { ...this.state.newReview };
		changeNewReview[e.target.name] = e.target.value;
		this.setState({ newReview: changeNewReview });
	};

	handleSignUp = (e) => {
		e.preventDefault();
		this.createReview();
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
			// 						style={{ width: '1100px', marginLeft: 'auto', marginRight: 'auto' }}
			// 						class="entry-header"
			// 					>
			// 						<h1 class="entry-title">Reviews</h1>

			// 						<div class="clear" />
			// 					</header>
			// 					<div>
			// 						{this.state.reviews.map((review) => {
			// 							return (
			// 								<div className="row">
			// 									<aside
			// 										style={{ width: '1100px', marginLeft: 'auto', marginRight: 'auto' }}
			// 										id="upcomming-events-10"
			// 										class="WPlookevents WPlookeventshome widget upcomming-events"
			// 									>
			// 										<div
			// 											class="entry-content"
			// 											style={{
			// 												width: '2200px',
			// 												marginLeft: 'auto',
			// 												marginRight: 'auto'
			// 											}}
			// 										>
			// 											<article
			// 												key={review._id}
			// 												style={{ height: '300px' }}
			// 												class="list-block-item"
			// 											>
			// 												<div class="margins">
			// 													<div class="entry-date">
			// 														<Link
			// 															to={`/reviews/${review._id}`}
			// 															key={review._id}
			// 														>
			// 															<img
			// 																style={{ height: '255px', width: '310px' }}
			// 																src={review.reviewImage}
			// 															/>
			// 														</Link>
			// 													</div>
			// 													<div class="entry-description">
			// 														<h1 class="entry-head">
			// 															<a href="">{review.reviewTitle}</a>
			// 														</h1>
			// 														<div class="short-description">
			// 															<p>{review.reviewDescription}</p>
			// 														</div>
			// 													</div>
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
                <h1>Reviews</h1>
				<br/>
				<br/>
                	<Container class='text-center'  style={{ background: '#fffdf9', width: '100%', height: '100%', margin: '0 auto', display: 'block', justifyContent: 'center' }}>
                <div class="row">
                    <div class="row profile-pic text-center">
                        <div class="img-box">
						<Link to='/reviewspage/'>
                            <img src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918" style={{width: '23rem', height: '240px', marginBottom: '30px'}}class="img-responsive"/></Link>
                           
                        </div>
                     
													<br/>
													<div class='col'>
													 <Card.Title
														class="text-center"
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px' }}
													>
														Retrospective: Lucrecia Martel
													</Card.Title>
													<Card.Text class="text-center ">
														Some quick example text to build on the card title and make up
														the bulk of the card's content.
													</Card.Text>
													</div>
                    </div>
					</div>
					 <div class="row">
                    <div class="row profile-pic text-center">
                     {/* <Card > */}
                        <div class="img-box">
                       
                            <img src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh" style={{width: '23rem', height: '240px', marginBottom: '30px'}}class="img-responsive"/>
                      
                        </div>
                    <br/>
													<div class='col'>
													 <Card.Title
														class="text-center"
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px' }}
													>
														Retrospective: Lucrecia Martel
													</Card.Title>
													<Card.Text class="text-center ">
														Some quick example text to build on the card title and make up
														the bulk of the card's content.
													</Card.Text>
													</div>
                      
                    </div>
					</div>
					 <div class="row">
                    <div class="row profile-pic text-center">
                        <div class="img-box">
                            <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10" style={{width: '23rem', height: '240px', marginBottom: '30px'}}class="img-responsive"/>
                        
                        </div>
                       <br/>
													<div class='col gal'>
													 <Card.Title
														class="text-center"
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px' }}
													>
														Retrospective: Lucrecia Martel
													</Card.Title>
													<Card.Text class="text-center ">
														Some quick example text to build on the card title and make up
														the bulk of the card's content.
													</Card.Text>
													</div>
                    </div>
					</div>
					 <div class="row">
                    <div class="row profile-pic text-center">
                        <div class="img-box">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA" style={{width: '23rem', height: '240px', marginBottom: '30px'}}class="img-responsive"/>
                     
                        </div>
                        <br/>
													<div class='col'>
													 <Card.Title
														class="text-center"
														style={{ color: 'black', fontWeight: 'bold', marginBottom: '10px', fontSize: '20px' }}
													>
														Retrospective: Lucrecia Martel
													</Card.Title>
													<Card.Text class="text-center ">
														Some quick example text to build on the card title and make up
														the bulk of the card's content.
													</Card.Text>
													</div>
                    </div>
                    
                   
                </div>
			

                 
                   
               
                 </Container>
            </div>
        </section>
					
					</div>
				// </section>
		);
	}
}
