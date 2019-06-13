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

export default class Blogs extends Component {
	state = {
		users: [],
		newUsers: {
			title: '',
			description: '',
			image: '',
		},
		displayUserForm: false,
	};

	componentDidMount = () => {
		this.getAllUsers();
	};

	getAllUsers = () => {
		axios.get('/api/users/').then((res) => {
			this.setState({ users: res.data });
		});
	};

	createUser = (e) => {
		axios
			.post('/api/users/', {
				title: this.state.newUser.title,
				description: this.state.newUser.description,
				image: this.state.newUser.image,
			})
			.then((res) => {
				const usersList = [ this.state.users ];
				usersList.unshift(res.data);
				this.setState({
					newUser: {
						title: '',
						description: '',
						image: ''
					},
					displayUserForm: false,
					users: usersList
				});
			});
		this.getAllUsers();
	};

	handleChange = (e) => {
		const changeNewUser = { ...this.state.newUser };
		changeNewUser[e.target.name] = e.target.value;
		this.setState({ newUser: changeNewUser });
	};

	handleSignUp = (e) => {
		e.preventDefault();
		this.createUser();
	};
	render() {
		return (
			// 	 <div>
			// 			<body class="home page-template page-template-template-home-page page-template-template-home-page-php page page-id-10">
			// 				<div>
			// 					<div id="page">
			// 						<div id="header-bg" />
			// 						<div id="patern" />
			// 						<div id="page-view">
			// 							<header
			// 								style={{ width: '1100px', marginLeft: 'auto', marginRight: 'auto' }}
			// 								class="entry-header"
			// 							>
			// 								<h1 class="entry-title">Blogs</h1>

			// 								<div class="clear" />
			// 							</header>
            //                     <div>
            //                         {this.state.users.map((user) => {
            //                             return (
            //                                 <div className= 'row'>
			// 							<aside
			// 								style={{ width: '1100px', marginLeft: 'auto', marginRight: 'auto' }}
			// 								id="upcomming-events-10"
			// 								class="WPlookevents WPlookeventshome widget upcomming-events"
			// 							>
			// 								<div
			// 									class="entry-content"
			// 									style={{ width: '2200px', marginLeft: 'auto', marginRight: 'auto' }}
			// 								>
			// 									<article
			// 										key={user._id}
			// 										style={{ height: '300px' }}
			// 										class="list-block-item"
			// 									>
			// 										<div class="margins">
			// 											<div class="entry-date">
			// 												<img
			// 													style={{ height: '255px', width: '310px' }}
			// 													src={user.image}
			// 												/>
			// 											</div>
			// 											<div class="entry-description">
			// 												<h1 class="entry-head">
			// 													<a href="">{user.title}</a>
			// 												</h1>
			// 												<div class="short-description">
			// 													<p>{user.description}</p>
			// 												</div>
			// 											</div>
			// 											<div class="clear" />
			// 										</div>
			// 									</article>
			// 								</div>
			// 							</aside>  
            //                             </div>
            //                             	);
			// 		                })}


										
                                    
			// 					</div>
			// 				</div>
            //                 </div>
            //                 </div>
            //             </body>
                        
				
			// </div>
				<div style={{ background: '#fffdf9', width: '100%', height: '100%' }}>
						<section id="team">
						
              
             
            <div class="containers">
                <h1>Blogs</h1>
				<br/>
				<br/>


                	<Container class='text-center' fluid style={{ background: '#fffdf9', width: '100%', height: '100%', display: 'block', margin: 'auto 0' }}>
                <div class="col">
			  <div class="col profile-pic text-center">
                        <div class="img-box">
						 <Link style={{color: 'black', textDecoration: 'none'}}to='/blogspage/'>
  <Card className='red' style={{color: 'black'}}>
 
    <Card.Body>
		<Card.Title>
        SOCIAL GATHERINGS WEDDINGS
      </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
	
    <Card.Img variant="bottom" src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/900px180" class="img-responsive" />
  </Card>
  </Link>
                   </div>
				     </div>
 <br />
  <div class="col profile-pic text-center">
                        <div class="img-box">
  <Card className='red' style={{color: 'black'}}>
    <Card.Body>
		<Card.Title>
        WEDDINGS
      </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/900px180" class="img-responsive" />
  </Card>
                   </div>
				     </div>

 <br />
<div class="col profile-pic text-center">
                        <div class="img-box">
  <Card className='red' style={{color: 'black'}}>
    <Card.Body>
		<Card.Title>
        PRIVATE DINING
      </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/900px180"  class="img-responsive" />
  </Card>
                   </div>
				     </div>
 
                  
                    
                   
                </div>
                 </Container>
            </div>
        </section>
					
					</div>
				
           
		);
	}
}
