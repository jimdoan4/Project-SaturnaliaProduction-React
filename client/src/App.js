import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Home from './components/Home';
import Contact from './components/Contact';
import News from './components/News';
import NewsPage from './components/NewsPage';
import Blogs from './components/Blogs';
import BlogsPage from './components/BlogsPage';
import Events from './components/Events';
import EventPage from './components/EventPage';
import Reviews from './components/Reviews';
// import About from './components/About';
// import DJ from './components/DJ';
import Gallery from './components/Gallery';
import GalleryPictures from './components/GalleryPictures';
import GalleryShowPage from './components/GalleryShowPage';
import ReviewShowPage from './components/ReviewShowPage';
import ReviewsPage from './components/ReviewsPage';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<section class="headers text-center">
						<nav class="navbar navbar-expand-lg navbar-light text-center">
							<h5 class="main-title text-center"><Link class="main-title text-center" to='/'>SATURNALIA PRODUCTIONS</Link></h5>
						</nav>
					</section>

					<section class="header text-center">
						<nav class="navbar navbar-expand-lg navbar-light text-center">
							{/* <a class="navbar-brand" href="#">
                <img src="images/fashion-logo.jpg"/></a> */}
							<button
								class="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarNav"
								aria-controls="navbarNav"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<i class="fa fa-bars" />
							</button>
							<div class="collapse navbar-collapse" id="navbarNav">
								<ul class="navbar-nav text=-center">
									<li class="nav-item">
										<a
											style={{ color: 'white', backgroundColor: '#ba0e0e' }}
											class="nav-link"
											href="/"
										>
											HOME
										</a>
									</li>

									<li class="nav-item">
										<a style={{ color: 'black' }} class="nav-link" href="/events/">
											EVENTS
										</a>
									</li>
									<li class="nav-item">
										<a style={{ color: 'black' }} class="nav-link" href="/blogs/">
											BLOGS
										</a>
									</li>
									<li class="nav-item">
										<a style={{ color: 'black' }} class="nav-link" href="/reviews/">
											REVIEWS
										</a>
									</li>
									<li class="nav-item">
										<a style={{ color: 'black' }} class="nav-link" href="/gallery/">
											GALLERY
										</a>
									</li>
									<li class="nav-item">
										<a style={{ color: 'black' }} class="nav-link" href="/news/">
											NEWS
										</a>
									</li>

									<li class="nav-item">
										<Nav.Link href="/contact/" style={{ color: 'black' }}>
											CONTACT
										</Nav.Link>
									</li>
								</ul>
							</div>
							{/* <h4 class="main-title">SATURNALIA PRODUCTIONS</h4> */}
						</nav>
					</section>

					<Switch>
						<Route exact path="/" component={Home} />

						<Route exact path="/gallerys/:galleryId/" component={GalleryShowPage} />
						<Route exact path="/reviews/:reviewId/" component={ReviewShowPage} />
						<Route exact path="/reviewspage/" component={ReviewsPage} />
						<Route exact path="/contact/" component={Contact} />
						<Route exact path="/gallery/" component={Gallery} />
            	<Route exact path="/gallerypictures/" component={GalleryPictures} />
						<Route exact path="/news/" component={News} />
						<Route exact path="/newspage/" component={NewsPage} />
						<Route exact path="/events/" component={Events} />
            <Route exact path="/eventpage/" component={EventPage} />
						<Route exact path="/blogs/" component={Blogs} />
							<Route exact path="/blogspage/" component={BlogsPage} />
						<Route exact path="/reviews/" component={Reviews} />
						{/* <Route exact path="/about/" component={About} /> */}
						{/* <Route exact path="/dj/" component={DJ} /> */}
					</Switch>
					<section class="footer">
						{/* <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="payment">
                            <h5>PAYMENT GATEWAYS</h5>
                            <img src="images/payment.png"/>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="footer-img">
                            <h5>INSTAGRAM PICS</h5>
                            <img src="images/insta1.jpg"/>
                            <img src="images/insta2.jpg"/>
                            <img src="images/insta3.jpg"/>
                            
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="app-download">
                            <h5>DOWNLOAD MOBILE APP</h5>
                            <img src="images/play-store.png"/>
                            <img src="images/app-store.png"/>
                        </div>
                    </div>
                </div>

                <hr/>
                <div class="row">
                    <div class="col-md-8">
                        <p class="copyright">Designed with <i class="fa fa-heart"></i> by <a
                                href="https://www.youtube.com/c/EasyTutorialsVideo?sub_confirmation=1">Easy
                                Tutorials</a></p>
                    </div>
                    <div class="col-md-4">
                        <div class="footer-icons">
                            <i class="fa fa-facebook"></i>
                            <i class="fa fa-twitter"></i>
                            <i class="fa fa-instagram"></i>
                            <i class="fa fa-youtube-play"></i>
                            <i class="fa fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div> */}
						<div style={{ paddingTop: '20px' }} class="container tex-center">
							<div class="row">
								<div class="col-md-4 text-center">
									<h2
										class="foot text-center red"
										style={{ color: 'black', backgroundColor: '#ba0e0e', fontSize: '19px' }}
									>
										Useful Links
									</h2>
									<p>Privacy Policy</p>
									<p>Terms of Use</p>
									<p>Return Policy</p>
								
								</div>

								<div class="col-md-4 text-center">
									<h2
										class="foot text-center red"
										style={{ color: 'black', backgroundColor: '#ba0e0e', fontSize: '19px' }}
									>
										Company
									</h2>
									<p>About Us</p>
									<p>Contact Us</p>
									
									<p>Affiliate</p>
								</div>
								<div class="col-md-4 text-center">
									<h2
										class="foot text-center red"
										style={{ color: 'white', backgroundColor: '#ba0e0e', fontSize: '19px' }}
									>
										Follow Us On
									</h2>
									<p>
										<i class="fa fa-facebook-official" /> Facebook
									</p>
									<p>
										<i class="fa fa-youtube-play" /> YouTube
									</p>
								
									<p>
										<i class="fa fa-twitter" /> Twitter
									</p>
								</div>
								{/* <div class="col-md-3 footer-image">
                        <h1>Download App</h1>
                        <img src="images/app-logo.png"/>
                    </div> */}
							</div>
						</div>
					</section>
				</div>
			</Router>
		);
	}
}

export default App;
