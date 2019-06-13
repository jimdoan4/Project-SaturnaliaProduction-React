import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
 import { Nav } from 'react-bootstrap';
 import { Navbar } from 'react-bootstrap';
 import { NavDropdown } from 'react-bootstrap';
import Home from './components/Home';
import Contact from './components/Contact';
import News from './components/News';
import Blogs from './components/Blogs';
import Events from './components/Events';
import Reviews from './components/Reviews';
// import About from './components/About';
// import DJ from './components/DJ';
import Gallery from './components/Gallery';
 import GalleryShowPage from './components/GalleryShowPage';
import ReviewShowPage from './components/ReviewShowPage';
 import { Form } from 'react-bootstrap';
 import { Button } from 'react-bootstrap';
 import { Jumbotron } from 'react-bootstrap';
 import { FormControl } from 'react-bootstrap';


class App extends Component {
	render() {
		return (
			<Router>
				    <body
        class="home page-template page-template-template-home-page page-template-template-home-page-php page page-id-10">
				<div>
					  <div id="page">
            <div id="header-bg"></div>
            <div id="patern"></div>
            <div id="page-view">
                <header id="branding" class="site-header" role="banner">
                    <div class="container_12"> 
                        <div class="fleft grid_4 branding">
                            <h1 id="site-title">
                                    <h4 class='main-title'>SATURNALIA PRODUCTIONS</h4>
                              </h1>
                            
                        </div>
                         {/* <div class="grid_8 socialnetworking"> 
                     
                            <ul class="share-items"> 
                                 <li class="share-item-icon-search"> <a target="_blank" title="Search"><i
                                            class="icon-search"></i></a>
                                    <div class="header-search-form">
                                        <form method="get" id="header-searchform"
                                            action="">
                                            <div> <input class="radius" type="text" size="" name="s" id="s"
                                                    value="Type your searching word"
                                                    onfocus="if(this.value==this.defaultValue)this.value='';"
                                                    onblur="if(this.value=='')this.value=this.defaultValue;" /> <input
                                                    type="submit" class="search-button" id="searchsubmit"
                                                    value="Search" /></div>
                                        </form>
                                    </div>
                                </li> 
                                <li class="share-item-icon-facebook"><a target="_blank" title="Facebook"
                                        href="https://www.facebook.com/wplookthemes"><i class="icon-facebook"></i></a>
                                </li>
                                <li class="share-item-icon-twitter"><a target="_blank" title="Twitter"
                                        href="http://twitter.com/#!/wplook"><i class="icon-twitter"></i></a></li>
                                <li class="share-item-icon-google-plus"><a target="_blank" title="Google+"
                                        href="https://plus.google.com/103223108676176192383/posts"><i
                                            class="icon-google-plus"></i></a></li>
                                <li class="share-item-icon-pinterest"><a target="_blank" title="Pinterest" href="#"><i
                                            class="icon-pinterest"></i></a></li>
                                <li class="share-item-icon-youtube"><a target="_blank" title="youtube"
                                        href="http://youtube.com"><i class="icon-youtube"></i></a></li>
                                <li class="share-item-icon-vimeo"><a target="_blank" title="Vimeo" href="#"><i
                                            class="icon-vimeo"></i></a></li>
                                <li class="share-item-icon-lastfm"><a target="_blank" title="LastFM" href="#"><i
                                            class="icon-lastfm"></i></a></li>
                                <li class="share-item-icon-soundcloud"><a target="_blank" title="Soundcloud" href="#"><i
                                            class="icon-soundcloud"></i></a></li>
                                <li class="share-item-icon-feed"><a target="_blank" title="RSS"
                                        href="http://themes.wplook.com/stereoclub/feed/"><i class="icon-feed"></i></a>
                                </li> 
                            </ul> 
                        </div>  */}
                          <div class="clear"></div>
                    </div> 
                    {/* </div>
                    </div> */}
                </header> 

          


					 <div class="container_12 main-menu-section">
 					<Navbar inline class="container_12 main-menu-section">
 					
 						<Nav role="navigation" class="site-navigation main-navigation grid_12 blue" id="site-navigation">
                          <div class="menu-main-menu-container">
                        <ul id="menu-main-menu" class="menu">
                           <li id="menu-item-140"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-140">
                                           
 							<Nav.Link style={{ color: 'black', backgroundColor: '#ba0e0e' }} href="/">
 								HOME
 							</Nav.Link></li>
                                <li id="menu-item-140"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-140">
 								<Nav.Link style={{ color: 'black' }} href="/events/">
 								EVENTS
 							</Nav.Link></li>
                                <li id="menu-item-140"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-140">
 								<Nav.Link style={{ color: 'black' }} href="/gallery/">
 								GALLERY
							</Nav.Link></li>
                               <li id="menu-item-140"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-140">
 								<Nav.Link style={{ color: 'black' }} href="/blogs/">
 								BLOG
 							</Nav.Link></li>
{/*                                
                                <li id="menu-item-140"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-140">
                             <Nav.Link style={{ color: 'black' }} href="/dj/">
 								LOCAL DJ
 							</Nav.Link></li> */}
                                <li id="menu-item-140"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-140">
 							<Nav.Link style={{ color: 'black' }} href="/reviews/">
 								REVIEWS
 							</Nav.Link></li>
                                <li id="menu-item-140"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-140">
                             	<Nav.Link style={{ color: 'black' }} href="/news/">
 								NEWS
 							</Nav.Link></li>
                              {/* <li id="menu-item-140"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-140">
 							<Nav.Link style={{ color: 'black' }} className="navlink" href="/about/">
 								ABOUT US
 							</Nav.Link></li> */}
                              <li id="menu-item-140"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-140">
 							<Nav.Link style={{ color: 'black' }} className="navlink" href="/contact/">
 								CONTACT
 							</Nav.Link></li>
                             </ul>
                              </div>
 						</Nav>
                        
 					</Navbar> 
                     </div>
                </div>

 

					<Switch>
						<Route exact path="/" component={Home} />
                   
                        <Route exact path="/gallerys/:galleryId/" component={GalleryShowPage} /> 
                        <Route exact path="/reviews/:reviewId/" component={ReviewShowPage} /> 
						<Route exact path="/contact/" component={Contact} />
						<Route exact path="/gallery/" component={Gallery} /> 
						<Route exact path="/news/" component={News} />
						<Route exact path="/events/" component={Events} />
						<Route exact path="/blogs/" component={Blogs} />
						<Route exact path="/reviews/" component={Reviews} />
						{/* <Route exact path="/about/" component={About} /> */}
                        {/* <Route exact path="/dj/" component={DJ} /> */}
                    
                       
					</Switch>
				</div>
				</div>
				{/* </div>
                </div> */}
				</body>
			</Router>
		);
	}
}

export default App;
