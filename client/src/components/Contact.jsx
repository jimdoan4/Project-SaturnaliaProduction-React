import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
	render() {
		return (
			<div style={{ background: '#fffdf9', width: '100%', height: '100%' }}>
				<section id="team">
					<div class="containers">
						<h1>About SATURNALIA PRODUCTIONS</h1>
						<br />
						<p class="text-center">
							Aliquam tempus maximus magna, et pellentesque nisi viverra porta. Proin sodales tellus id
							tincidunt egestas. Nulla laoreet orci non mi maximus, vel tristique nunc efficitur.
							Phasellus et dolor fringilla, maximus sapien eu, volutpat ante. In ut turpis ut lorem
							elementum vehicula quis ut dui. Nam porta nulla lacus, scelerisque eleifend mauris elementum
							et.
						</p>
						<div class="row">
							<div class="col-md-4">
								<div class="trending-img">
									<img src="https://costumesupercenter-weblinc.netdna-ssl.com/product_images/mens-greek-warrior-adult-plus-costume/573d4a4c69702d70de001913/large_thumb.jpg?c=1464111909" />
									<button type="button" class="btn-buy">
										Jim Doan
									</button>
									<div class="overlay" />
								</div>
							</div>
							<div class="col-md-4">
								<div class="trending-img">
									<img src="https://costumesupercenter-weblinc.netdna-ssl.com/product_images/mens-greek-warrior-adult-plus-costume/573d4a4c69702d70de001913/large_thumb.jpg?c=1464111909" />
									<button type="button" class="btn-buy">
										Jim Doan
									</button>
									<div class="overlay" />
								</div>
							</div>
							<div class="col-md-4">
								<div class="trending-img">
									<img src="https://costumesupercenter-weblinc.netdna-ssl.com/product_images/mens-greek-warrior-adult-plus-costume/573d4a4c69702d70de001913/large_thumb.jpg?c=1464111909" />
									<button type="button" class="btn-buy">
										Jim Doan
									</button>
									<div class="overlay" />
								</div>
									</div>
										</div>
						
					<br/>
					<br/>
					<br/>
					<br/>

						<h1>Contact Us</h1>
					

						<div class="entry-content">
							{' '}
							<br />
							<div class="entry-content-post">
								<h3 class='text-center'>Say Hello!</h3>
									<br />
								<p class="text-center">
								<div
									role="form"
									class="wpcf7"
									id="wpcf7-f225-p15-o1"
									lang="en-US"
									dir="ltr"
								>
									<div class="screen-reader-response" />
									<form
										action=""
										method="post"
										class="wpcf7-form"
										novalidate="novalidate"
									>
										<div style={{ display: 'none' }}>
											{' '}
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
											/>
										</div>
										<p>
											Your Name (required)<br />{' '}
											<span class="wpcf7-form-control-wrap your-name">
												<input
												style= {{width: '700px'}}
													type="text"
													name="your-name"
													value=""
													size="40"
													class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
													aria-required="true"
													aria-invalid="false"
												/>
											</span>
										</p>
										<p>
											Your Email (required)<br />{' '}
											<span class="wpcf7-form-control-wrap your-email">
												<input
												style= {{width: '700px'}}
													type="email"
													name="your-email"
													value=""
													size="40"
													class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
													aria-required="true"
													aria-invalid="false"
												/>
											</span>
										</p>
										<p>
											Subject<br />{' '}
											<span class="wpcf7-form-control-wrap your-subject">
												<input
												style= {{width: '700px'}}
													type="text"
													name="your-subject"
													value=""
													size="40"
													class="wpcf7-form-control wpcf7-text"
													aria-invalid="false"
												/>
											</span>
										</p>
										<p>
											Your Message<br />{' '}
											<span class="wpcf7-form-control-wrap your-message">
												<textarea
												style= {{width: '700px'}}
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
										{/* <div class="wpcf7-response-output wpcf7-display-none" /> */}
									</form>
								</div>
								</p>
							</div>
							</div>

						
				</div>
				</section>
			</div>
		);
	}
}
