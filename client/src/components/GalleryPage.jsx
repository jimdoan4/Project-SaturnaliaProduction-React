import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from 'react-bootstrap';

export default class GalleryPage extends Component {
   // We'll set up the  array as an empty array to begin with
  state = {
    galleryId: this.props.galleryId,
    gallerys: [],
    gallery: {
      _id: "",
      galleryTitle: "",
      galleryDescription: "",
      galleryImage: "",
      galleryImageTwo: ""
    },
    redirectToGallery: false,
    displayGalleryForm: false
  };

  getSingleGalleryData = () => {
    axios.get(`/api/gallerys/${this.state.galleryId}`).then(res => { // When the page loads, grab all gallerys from the database
      this.setState({ gallery: res.data }); // Put these gallerys on the state, so they will render
    });
  };

  componentDidMount = () => {
    this.getSingleGalleryData();
  };

  toggleGalleryForm = () => { // This toggle the gallery button when clicked
    this.setState((state, props) => {
      return { displayGalleryForm: !state.displayGalleryForm };
    });
  };

  handleChange = e => {
    const updateGallery = { ...this.state.gallery };
    updateGallery[e.target.name] = e.target.value;
    this.setState({ gallery: updateGallery });
  };

  handleChange = e => {
    const newGallery = { ...this.state.gallery };
    newGallery[e.target.name] = e.target.value;
    this.setState({ gallery: newGallery });
  };

  updateGallery = e => {
    e.preventDefault();
    axios
      .put(`/api/gallerys/${this.state.galleryId}`, {  // ask the server to update the gallery in the database
        galleryTitle: this.state.gallery.galleryTitle,
        galleryDescription: this.state.gallery.galleryDescription,
        galleryImage: this.state.gallery.galleryImage,
        galleryImageTwo: this.state.gallery.galleryImageTwo
      })
      .then(res => {
        this.setState({ gallery: res.data, displayGalleryForm: false });
      });
    this.getSingleGalleryData();
  };

  deleteGallery = () => {
    axios.delete(`/api/gallerys/${this.state.galleryId}`).then(res => {  // Ask the server to delete this gallery
      this.setState({ redirectToGallery: true });
    });
  };

  render() {
    if (this.state.redirectToGallery) {
      return <Redirect to={`/gallery/`} />;
    }
    return (
      <div>
        <section id="team">
          <div className="containers">
            <h1>
              <p className="text-center">Atlanta Best Night Life</p>
            </h1>
            <br />
            <Container
              className="text-center">
              <div className="row">
                <div className="col profile-pic text-center">
                  <div className="img-box">
                    <img
                      src={this.state.gallery.galleryImage}
                      style={{ width: "50rem", marginBottom: "30px" }}
                      className="img-responsive"
                    />
                  </div>
                  <Card.Title
                    className="text-center"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      marginBottom: "10px",
                      fontSize: "20px"
                    }}
                  >
                    {this.state.gallery.galleryTitle}
                  </Card.Title>
                  <Card.Text className="text-center">
                    {this.state.gallery.galleryDescription}
                  </Card.Text>
                </div>
              </div>

              <div
                id="carousel-example-2"
                className="carousel slide carousel-fade z-depth-1-half"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel-example-2"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#carousel-example-2" data-slide-to="1"></li>
                  <li data-target="#carousel-example-2" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <div className="view">
                      <img
                        className="d-block w-100"
                        src={this.state.gallery.galleryImageTwo}
                        height="500px"
                        alt="First slide"
                      />
                      <div className="mask rgba-black-light"></div>
                    </div>
                    <div className="carousel-caption">
                      <h3 className="h3-responsive">New Year Celebration 2019</h3>
                      <p>01/01/2018</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="view">
                      <img
                        className="d-block w-100"
                        src={this.state.gallery.galleryImage}
                        height="500px"
                        alt="Second slide"
                      />
                      <div className="mask rgba-black-light"></div>
                    </div>
                    <div className="carousel-caption">
                      <h3 className="h3-responsive">Channeling Inner Energy</h3>
                      <p>05/01/2018</p>
                    </div>
                  </div>
                </div>

                <a
                  className="carousel-control-prev"
                  href="#carousel-example-2"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel-example-2"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </Container>
          </div>
        </section>
        <Container
          style={{
            textAlign: "center",
            marginBottom: "30px",
            marginTop: "8px"
          }}
        >
          <Row>
            <Col>
              <button className="bus" onClick={this.toggleGalleryForm}>
                Edit Gallery
              </button>
            </Col>
            <Col>
              <button className="bus" onClick={this.deleteGallery}>
                Delete Gallery
              </button>
            </Col>
          </Row>
        </Container>

        {this.state.displayGalleryForm ? (
			<Form className="jumbotron" onSubmit={this.updateGallery}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Gallery Name</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  id="galleryImage"
                  type="text"
                  name="galleryImage"
                  onChange={this.handleChange}
                  value={this.state.gallery.galleryImage}
                />
				  </Form.Group>
				   <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Gallery Name 2</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  id="galleryImageTwo"
                  type="text"
                  name="galleryImageTwo"
                  onChange={this.handleChange}
                  value={this.state.gallery.galleryImageTwo}
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
                  value={this.state.gallery.galleryTitle}
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
                  value={this.state.gallery.galleryDescription}
                />
              </Form.Group>

              <div
                className="text-center"
                style={{ marginTop: "20px", marginLeft: "140px" }}
              >
                <button className="text-center submit-button">Submit</button>
              </div>
            </Form>

        ) : null}
      </div>
    );
  }
}
