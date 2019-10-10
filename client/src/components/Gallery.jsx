import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form } from 'react-bootstrap';

export default class Gallery extends Component {
  // We'll set up the  array as an empty array to begin with
  state = {
    gallerys: [],
    newGallery: {
      galleryTitle: "",
      galleryDescription: "",
      galleryImage: ""
    },
    displayGalleryForm: false
  };

  componentDidMount = () => {
    this.getAllGallerys();
  };

  getAllGallerys = () => {
    axios.get("/api/gallerys/").then(res => { // When the page loads, grab all gallerys from the database
      this.setState({ gallerys: res.data });  // Put these gallerys on the state, so they will render
    });
  };

  createGallery = e => {
    axios
      .post("/api/gallerys/", {   // Ask the server to create a new gallery in the database
        galleryTitle: this.state.newGallery.galleryTitle,
        galleryDescription: this.state.newGallery.galleryDescription,
        galleryImage: this.state.newGallery.galleryImage
      })
      .then(res => {
        const gallerysList = [this.state.gallerys]; // Copy the old gallerys list into a new one
        gallerysList.unshift(res.data);
        this.setState({
          newGallery: {
            galleryTitle: "",
            galleryDescription: "",
            galleryImage: ""
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

     //We need to pass in multiple arguments here.  The first is the object of the specific idea that is being changed.
  //And the event object is the special event listener object that has information about the value and name
  handleChange = e => {
    const changeNewGallery = { ...this.state.newGallery };
        // Here we are using bracket syntax instead of dot-notation to transform a specific property
    changeNewGallery[e.target.name] = e.target.value;
           // update the state with our updated gallery
    this.setState({ newGallery: changeNewGallery });
  };

  handleSignUp = e => {
    e.preventDefault();
    this.createGallery();
  };
  render() {
    return (
      <div>
        <section id="team">
          <div className="container">
            <h1>Gallery</h1>
            <br />
            <br />

            <Container
              className="text-center"
            >
              <div className="row">
                {this.state.gallerys.map(gallery => {
                  return (
                    <div className="col profile-pic text-center">
                      <div className="img-box">
                        <Link to={`/gallerys/${gallery._id}`} key={gallery._id}>
                          <img
                            src={gallery.galleryImage}
                            style={{
                              width: "39rem",
                              height: "335px",
                              marginBottom: "10px"
                            }}
                            className="img-responsive"
                          />
                        </Link>
                      </div>
                      <Card.Title
                        className="text-center"
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          marginBottom: "40px",
                          fontSize: "20px"
                        }}
                      >
                        {gallery.galleryTitle}
                      </Card.Title>
                    </div>
                  );
                })}
              </div>
            </Container>
            <div style={{ marginTop: "80px" }}>
              <button onClick={this.toggleGalleryForm} className="bus">
                Add Gallery Pictures
              </button>
            </div>
          </div>
        </section>
        <div className="container">
          {this.state.displayGalleryForm ? (
            <div className="container">

			<Form className="jumbotron" onSubmit={this.createGallery}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Gallery Name</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  id="galleryImage"
                  type="text"
                  name="galleryImage"
                  onChange={this.handleChange}
                  value={this.state.newGallery.galleryImage}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  id="galleryTitle"
                  type="text"
                  name="galleryTitle"
                  onChange={this.handleChange}
                  value={this.state.newGallery.galleryTitle}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control
				 as="textarea"
                  type="text"
                  className="text-center"
                  id="galleryDescription"
                  type="text"
                  name="galleryDescription"
                  onChange={this.handleChange}
                  value={this.state.newGallery.galleryDescription}
                />
              </Form.Group>

              <div
                className="text-center"
                style={{ marginTop: "20px", marginLeft: "140px" }}
              >
                <button className="text-center submit-button">Submit</button>
              </div>
            </Form>
 
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
