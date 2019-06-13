import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';


export default class GalleryPage extends Component {
	state = {
		galleryId: this.props.galleryId,
		gallerys: [],
		gallery: {
			 _id: '',
			galleryTitle: '',
			galleryDescription: '',
			galleryImage: '',
			galleryImageTwo: '',
			
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
			  galleryImageTwo: this.state.gallery.galleryImageTwo,
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
			return <Redirect to={`/gallerys/`} />;
		}
		return (
			<div style= {{color: 'black'}}>
						<body class="home page-template page-template-template-home-page page-template-template-home-page-php page page-id-10">
							<div>
								<div id="page">
									<div id="header-bg" />
									<div id="patern" />
									<div id="page-view">
								
                                        <div className= ''>
										<div id="main" class="site-main container_12">
										<div id="primary" class="grid_8">
										<article class="single-post">
										<header class="entry-header">
										<h1 class="entry-title">
										{this.state.gallery.galleryTitle} 
										</h1>
										<div class="more-options share-bt"> 
										<a class='share-click' title="Share">
										<i class="icon-share"></i>
										</a>
										<ul class="share-buttons">
										<li><a class="share-icon-fb" id="fbbutton">
										<i class="icon-facebook"></i></a></li>
										
										

										<li><a class="share-icon-tw" id="twbutton"><i class="icon-twitter"></i></a></li>
										

										<li><a class="share-icon-pt" id="pinbutton" onClick="pinwindows('http://pinterest.com/pin/create/button/?url=https://themes.wplook.com/stereoclub/gallery/midnight-passion/&media=');"><i class="icon-pinterest"></i></a></li></ul></div>
										<div class="clear"></div></header>

										<div class="entry-meta"> 
										<time datetime="2013-04-25T19:02:42+00:00" class="fleft">September 5, 2017</time> 
										
										{/* <span class="category-selected fleft">Special invitaion</span> <span class="likes fright"><span class="post-like"><a href="#" data-post_id="65"><span class="like icon-heart2"></span></a> <span class="count">284 Likes</span></span></span> <span class="views fright"><i class="icon-eye"></i> 4392 Views</span>  */}

										<div class="clear"></div></div>
										<div class="entry-content">
										<div id="slider" class="flexslider loading">
										<ul class="slides">
										<li>
											<img width="800" height="500" src={this.state.gallery.galleryImage} class="attachment-large-thumb size-large-thumb"/>
											
											<div class="gallery-caption"><div class="caption-margins">Caption</div></div></li>
										<li> <img width="800" height="500" src={this.state.gallery.galleryImage} class="attachment-large-thumb size-large-thumb" alt=""/></li><li> <img width="800" height="500" src={this.state.gallery.galleryImage} class="attachment-large-thumb size-large-thumb" alt="" /></li><li> <img width="800" height="500" src={this.state.gallery.galleryimage} class="attachment-large-thumb size-large-thumb" alt="" /></li><li> <img width="800" height="500" src={this.state.gallery.galleryimage} class="attachment-large-thumb size-large-thumb" alt="" /></li><li> <img width="800" height="500" src={this.state.gallery.galleryimage} class="attachment-large-thumb size-large-thumb" alt="" /></li><li> <img width="800" height="500" src={this.state.gallery.galleryimage} class="attachment-large-thumb size-large-thumb" alt="" /></li><li> <img width="800" height="500" src={this.state.gallery.galleryimage} class="attachment-large-thumb size-large-thumb" alt="" /></li><li> <img width="800" height="500" src={this.state.gallery.galleryimage} class="attachment-large-thumb size-large-thumb" alt="" /></li><li> <img width="800" height="500" src={this.state.gallery.galleryimage} class="attachment-large-thumb size-large-thumb" alt="" /></li></ul></div><div id="carousel" class="flexslider"><ul class="slides"><li><img width="80" height="80" src={this.state.gallery.galleryimage} class="attachment-small-thumb size-small-thumb" alt="Caption" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.gallery.galleryimage} class="attachment-small-thumb size-small-thumb" alt="" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.gallery.galleryimage} class="attachment-small-thumb size-small-thumb" alt="" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.gallery.galleryimage} alt=""  sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.gallery.galleryimage}class="attachment-small-thumb size-small-thumb" alt="" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.gallery.galleryimage} class="attachment-small-thumb size-small-thumb" alt="" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.gallery.galleryimage} class="attachment-small-thumb size-small-thumb" alt="" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.gallery.galleryimage} class="attachment-small-thumb size-small-thumb" alt="" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.gallery.galleryimage} class="attachment-small-thumb size-small-thumb" alt="" sizes="(max-width: 80px) 100vw, 80px" /></li><li><img width="80" height="80" src={this.state.gallery.galleryimage} class="attachment-small-thumb size-small-thumb" alt="" sizes="(max-width: 80px) 100vw, 80px" /></li></ul></div><div class="clear"></div><div class="entry-content-post"></div><div class="clear"></div><nav class="entry-pagination"><div class="nav-previous"></div><div class="nav-next"><a href="https://themes.wplook.com/stereoclub/gallery/systematic-chaos/" rel="prev"><span class="nav-next-text">Next</span> <span class="nav-next-icon"></span></a></div><div class="clear"></div></nav></div></article></div><div id="secondary" class="grid_4 widget-area" role="complementary"><aside id="WPlookCD-65" class="widget WPlookCD cd-playlist"></aside><aside id="event-small-65" class="WPlookeventssmall widgets"><header class="entry-header"><h1 class="entry-title">Events</h1><div class="more-options"> <a href="" title="View all"><i class="icon-ellipsis-horizontal"></i></a></div><div class="clear"></div></header><div class="toggle-event"><div class="expand-button"> <time datetime="2019-06-16T00:00:00+00:00" class="fleft">June 16, 2019</time> <span class="category-selected fright"><a href="#">Sun</a></span></div><div class="expand"><div class="list-event-widget"><div class="entry-date"><div class="date">16</div><div class="month">Jun</div></div><div class="entry-description"><h1 class="entry-head"><a href="https://themes.wplook.com/stereoclub/events/madame-club/">Madame Club</a></h1><div class="short-description"><p>Quisque pulvinar ut magna id ornare. Nam consequat nunc eu nisl vehicula, eu auctor sapien feugiat. Duis iaculis risus...</p></div></div><div class="clear"></div></div></div></div><div class="toggle-event"><div class="expand-button"> <time datetime="2019-09-27T00:00:00+00:00" class="fleft">September 27, 2019</time> <span class="category-selected fright"><a href="#">Fri</a></span></div><div class="expand"><div class="list-event-widget"><div class="entry-thumb"> <img width="80" height="80" src={this.state.gallery.galleryimage}class="attachment-small-thumb size-small-thumb wp-post-image" alt=""  sizes="(max-width: 80px) 100vw, 80px" /><noscript><img width="80" height="80" src={this.state.gallery.galleryimage} class="attachment-small-thumb size-small-thumb wp-post-image" alt=""  sizes="(max-width: 80px) 100vw, 80px" /></noscript></div><div class="entry-description"><h1 class="entry-head"><a href="https://themes.wplook.com/stereoclub/events/electro-nightclub/">Electro NightClub</a></h1><div class="short-description"><p>Maecenas convallis, purus ac feugiat blandit, tellus nisi suscipit ligula, quis ornare sapien urna non lacus. Phasellus auctor sagittis...</p></div></div><div class="clear"></div></div></div></div><div class="toggle-event"><div class="expand-button"> <time datetime="2019-09-29T00:00:00+00:00" class="fleft">September 29, 2019</time> <span class="category-selected fright"><a href="#">Sun</a></span></div><div class="expand"><div class="list-event-widget"><div class="entry-date"><div class="date">29</div><div class="month">Sep</div></div><div class="entry-description"><h1 class="entry-head"><a href="https://themes.wplook.com/stereoclub/events/friday-night/">Friday Night</a></h1><div class="short-description"><p>Pellentesque placerat luctus lobortis. In rutrum nisl sit amet risus elementum tempor. Suspendisse iaculis, magna nec gravida scelerisque, ligula...</p></div></div><div class="clear"></div></div></div></div><div class="toggle-event"><div class="expand-button"> <time datetime="2020-09-17T00:00:00+00:00" class="fleft">September 17, 2020</time> <span class="category-selected fright"><a href="#">Thu</a></span></div><div class="expand"><div class="list-event-widget"><div class="entry-date"><div class="date">17</div><div class="month">Sep</div></div><div class="entry-description"><h1 class="entry-head"><a href="https://themes.wplook.com/stereoclub/events/fusion-nightclub/">Fusion NightClub</a></h1><div class="short-description"><p>Etiam condimentum viverra placerat. In hac habitasse platea dictumst. Proin non diam dapibus, malesuada odio in, tempus odio. Aenean...</p></div></div>
										<div class="clear"></div>
										</div></div></div></aside></div>
										<div class="clear">
										</div>
										</div>
                                        </div>
                                


										<footer id="colophon" class="site-footer container_12">
											<div class="clear" />
											<div class="clear" />
											<div class="grid_4 alpha no-m-b" class="grid_6">
												<aside class="widget widget_adress" id="widget-address-121">
													<aside
														id="wplook_address_widget-2"
														class="widget widget_wplook_address_widget"
													>
														<div class="entry-header">
															<h1 class="entry-title">Contact Us</h1>
															<div class="clear" />
														</div>
														<address class="vcard">
															<div class="address-margins">
																<h3 class="org vcard">
																	<a class="url fn org">SATURNALIA PRODUCTIONS</a>
																</h3>
																<p class="adr">
																	{' '}
																	<b>Street Name</b> -{' '}
																	<span class="street-address"> 432 Willow Cove Dr, Atlanta</span>
																	<span class="region">GA,</span>
																	<span class="postal-code"> 30324,</span>{' '}
																	<span class="country-name"> United States,</span>
																</p>{' '}
																<b>Phone:</b>
																<span class="tel">404 444 4444</span>
																<br /> <b>E-mail:</b>
																<span class="email">info @ saturnaliaparty.com</span>
																<br />
																<b>Website:</b>
																<span class="url"> http://saturnaliaparty.com</span>
																<br />
															</div>
														</address>
													</aside>
												</aside>
											</div>
											<div class="grid_4 no-m-b" class="grid_6">
												<aside id="text-4" class="widget widget_text">
													<div class="entry-header">
														<h1 class="entry-title">About US</h1>
														<div class="clear" />
													</div>
													<div style={{ height: '183px' }} class="textwidget">
														<p>
															Dominion under fourth for tree waters man There all form sea
															spirit replenish likeness doesn&#8217;t i very give own.
															And. Without shall beast evening moveth. Greater us
															won&#8217;t bring saw abundantly years brought replenish,
															that moving place Creature void under you&#8217;ll upon fowl
															gathered. Without shall beast evening moveth.
														</p>
													</div>
												</aside>
											</div>

											<div id="site-info" class="grid_12 blue">
												<div style={{ color: 'black' }} class="margins text-center">
													{' '}
													Copyright © 2019. All Rights reserved. Designed by Jim Doan
												</div>
											</div>
										</footer>
                                    
								</div>
							</div>
                            </div>
                           
                          
                        </body>
                        
			
			</div>
			
		);
	}
}

