import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';


export default class ReviewPage extends Component {
	state = {
		reviewId: this.props.reviewId,
		reviews: [],
		review: {
			 _id: '',
			reviewTitle: '',
			reviewDescription: '',
			reviewImage: '',
			reviewUser: '',
			
		},
		redirectToReview: false,
		displayReviewForm: false
	};

	getSingleReviewData = () => {
		axios.get(`/api/reviews/${this.state.reviewId}`).then((res) => {
			this.setState({ review: res.data });
		});
	};

	componentDidMount = () => {
		this.getSingleReviewData();
	};

	toggleGReviewForm = () => {
		this.setState((state, props) => {
			return { displayReviewForm: !state.displayReviewForm };
		});
	};

	handleChange = (e) => {
		const updateReview = { ...this.state.review};
		updateReview[e.target.name] = e.target.value;
		this.setState({ review: updateReview });
	};

	handleChange = (e) => {
		const newReview = { ...this.state.review };
		newReview[e.target.name] = e.target.value;
		this.setState({ review: newReview });
	};

	 updateReview = (e) => {
	 	e.preventDefault();
 	axios
		  .put(`/api/reviews/${this.state.reviewId}`, {
				reviewTitle: this.state.review.reviewTitle,
			  reviewDescription: this.state.review.reviewDescription,
			  reviewImage: this.state.review.reviewImage,
			  reviewUser: this.state.review.reviewUser,
 		})
		.then((res) => {
			this.setState({ review: res.data, displayReviewForm: false });
		});
		this.getSingleReviewData();
	 };

	deleteReview = () => {
		axios.delete(`/api/reviews/${this.state.reviewId}`).then((res) => {
			this.setState({ redirectToReview: true });
		});
	};

	render() {
		if (this.state.redirectToReview) {
			return <Redirect to={`/reviews/`} />;
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
										<div id="main" style={{ width: '800px', marginLeft: 'auto', marginRight: 'auto' }} class="site-main container_4"><div id="primary" class="grid_8"><article id="post-121" class="single-post post-121 post type-post status-publish format-status has-post-thumbnail hentry category-club tag-tag3 tag-tag5 post_format-post-format-status"><header class="entry-header"><h1 class="entry-title">{this.state.review.reviewTitle} </h1><div class="more-options share-bt"> <a class='share-click' title="Share"><i class="icon-share"></i></a><ul class="share-buttons"><li><a class="share-icon-fb" id="fbbutton" onclick="fbwindows('http://www.facebook.com/sharer.php?u=https://themes.wplook.com/stereoclub/junk-mtv-quiz-graced-by-fox-whelps/'); return false;"><i class="icon-facebook"></i></a></li><li><a class="share-icon-tw" id="twbutton" onClick="twwindows('http://twitter.com/intent/tweet?text=Junk MTV quiz graced&url=https://themes.wplook.com/stereoclub/junk-mtv-quiz-graced-by-fox-whelps/'); return false;"><i class="icon-twitter"></i></a></li><li><a class="share-icon-pt" id="pinbutton" onClick="pinwindows('http://pinterest.com/pin/create/button/?url=https://themes.wplook.com/stereoclub/junk-mtv-quiz-graced-by-fox-whelps/&media=');"><i class="icon-pinterest"></i></a></li></ul></div><div class="clear"></div></header>
										
										<div class="entry-meta"> <time datetime="2010-03-20" class="fleft" style={{color: 'black'}}>September 6, 2017</time> 
										
										{/* <span class="likes fright"><span class="post-like"><a href="#" data-post_id="121"><span class="like icon-heart2"></span></a> <span class="count">315 Likes</span></span></span> <span class="views fright"><i class="icon-eye"></i> 28618 Views</span> */}

										<div class="clear"></div></div><div class="entry-content-list"><figure> <img width="800" height="500" src={this.state.review.reviewImage} data-lazy-src="https://themes.wplook.com/stereoclub/wp-content/uploads/sites/2/2013/09/5989204425_41490ddd31_o-800x500.jpg" class="attachment-large-thumb size-large-thumb wp-post-image" alt="" /><noscript><img width="800" height="500" src={this.state.review.reviewImage}class="attachment-large-thumb size-large-thumb wp-post-image" alt="" /></noscript></figure><div class="clear"></div><div class="entry-content-post"> <br /><p>{this.state.review.reviewDescription}</p></div><div class="clear"></div><nav class="entry-pagination"><div class="nav-previous"></div><div class="nav-next"><a href="
										" rel="prev"><span class="nav-next-text">Next</span> <span class="nav-next-icon"></span></a></div><div class="clear"></div></nav></div></article><a name="comments"></a><div class="comments"><div id="respond"><header class="page-header"><h1 class="page-_comment-title">Leave a Comment <a rel="nofollow" id="cancel-comment-reply-link" href="/stereoclub/junk-mtv-quiz-graced-by-fox-whelps/#respond" style={{display: "none"}}>or Cancel reply</a></h1></header><form action="https://themes.wplook.com/stereoclub/wp-comments-post.php" method="post" id="commentform"><p class="comment-notes">Your email address will not be published. Required fields are marked <span class="required"><a>*</a></span></p><p class="comment-form-author"><label for="author">Name</label> <span class="required">*</span><input id="author" name="author" type="text" value="" size="30" aria-required='true' /></p><p class="comment-form-email"><label for="email">Email</label> <span class="required">*</span><input id="email" name="email" type="text" value="" size="30" aria-required='true' /></p><p class="comment-form-url"><label for="url">Website</label><input id="url" name="url" type="text" value="" size="30" /></p><p class="comment-form-comment"><label for="comment">Comment</label><textarea id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea></p><p class="form-submit"> <input name="submit" type="submit" id="submit" value="Send Comment" /> <input type='hidden' name='comment_post_ID' value='121' id='comment_post_ID' /> <input type='hidden' name='comment_parent' id='comment_parent' value='0' /></p><p style={{display: "none"}}><input type="hidden" id="akismet_comment_nonce" name="akismet_comment_nonce" value="0402304c30" /></p><p style={{display: "none"}}><input type="hidden" id="ak_js" name="ak_js" value="3"/></p></form></div></div></div>
										
										{/* <div id="secondary" class="grid_4 widget-area" role="complementary"><aside id="archives-1" class="widget widget_archive"><div class="entry-header"><h1 class="entry-title">Archives</h1><div class="clear"></div></div><ul><li><a href='https://themes.wplook.com/stereoclub/2017/09/'>September 2017</a></li><li><a href='https://themes.wplook.com/stereoclub/2017/08/'>August 2017</a></li><li><a href='https://themes.wplook.com/stereoclub/2017/07/'>July 2017</a></li></ul></aside>
										
										<aside id="calendar-1" class="widget widget_calendar"><div class="entry-header"><h1 class="entry-title">Calendar</h1><div class="clear"></div></div><div id="calendar_wrap" class="calendar_wrap"><table id="wp-calendar"><caption>June 2019</caption><thead><tr><th scope="col" title="Monday">M</th><th scope="col" title="Tuesday">T</th><th scope="col" title="Wednesday">W</th><th scope="col" title="Thursday">T</th><th scope="col" title="Friday">F</th><th scope="col" title="Saturday">S</th><th scope="col" title="Sunday">S</th></tr></thead><tfoot><tr><td colspan="3" id="prev"><a href="https://themes.wplook.com/stereoclub/2017/09/">&laquo; Sep</a></td><td class="pad">&nbsp;</td><td colspan="3" id="next" class="pad">&nbsp;</td></tr></tfoot><tbody><tr><td colspan="5" class="pad">&nbsp;</td><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr><tr><td>10</td><td id="today">11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td></tr><tr><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td></tr><tr><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td></tr></tbody></table></div></aside> */}
										
										{/* </div> */}
										<div class="clear"></div></div>
										
										</div>
										</div>
                                        </div>
                                


										{/* <footer id="colophon" class="site-footer container_12">
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
										</footer> */}
                                    
								</div>
							{/* </div> */}
                            {/* </div> */}
                           
                          
                        </body>
                        
			
			 </div>
			
		);
	}
}

