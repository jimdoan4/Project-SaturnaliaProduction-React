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
			<div style={{background: '#fffdf9', width: '100%', height: '100%'}}>
			<section class="fashion-Trends">
            <div class="container">
                <div class="fashion-box">
                    <div class="section-Title text-center">
                        <h1>About SATURNALIA PRODUCTIONS</h1>
                    </div>
                    <p class="text-center">Aliquam tempus maximus magna, et pellentesque nisi viverra porta. Proin
                        sodales tellus id tincidunt egestas. Nulla laoreet orci non mi maximus, vel tristique nunc
                        efficitur. Phasellus et dolor fringilla, maximus sapien eu, volutpat ante. In ut turpis ut lorem
                        elementum vehicula quis ut dui. Nam porta nulla lacus, scelerisque eleifend mauris elementum et.
                    </p>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="trending-img">
                            <img src="https://costumesupercenter-weblinc.netdna-ssl.com/product_images/mens-greek-warrior-adult-plus-costume/573d4a4c69702d70de001913/large_thumb.jpg?c=1464111909"/>
                            <button type="button" class="btn-buy">Jim Doan</button>
                            <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="trending-img">
                            <img src="https://costumesupercenter-weblinc.netdna-ssl.com/product_images/mens-greek-warrior-adult-plus-costume/573d4a4c69702d70de001913/large_thumb.jpg?c=1464111909"/>
                            <button type="button" class="btn-buy">Jim Doan</button>
                            <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="trending-img">
                            <img src="https://costumesupercenter-weblinc.netdna-ssl.com/product_images/mens-greek-warrior-adult-plus-costume/573d4a4c69702d70de001913/large_thumb.jpg?c=1464111909"/>
                            <button type="button" class="btn-buy">Jim Doan</button>
                            <div class="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

				<div>
					<div id="page">
						<div id="header-bg" />
						<div id="patern" />
						<div id="page-view">
							<div id="main" class="site-main container_12">
								<div id="primary" class="grid-3">
									<article style={{
						 width: '900px',
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: '30px'
					}}class="single-post text-center">
										<header class="entry-header">
											<h1 class="entry-title">Contact us</h1>
											<div class="clear" />
										</header>
										<div class="entry-content">
											{' '}
											<br />
											<div class="entry-content-post">
												<h3>Say Hello!</h3>
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
																type="submit"
																value="Send"
																class="wpcf7-form-control wpcf7-submit"
															/>
														</p>
														<div class="wpcf7-response-output wpcf7-display-none" />
													</form>
												</div>
											</div>
											<div class="clear" />
										</div>
									</article>
								</div>

								
						
				</div>
</div></div>
				</div>
					</div>
				
			
		);
	}
}
