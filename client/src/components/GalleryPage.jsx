import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from 'react-bootstrap';

export default class GalleryPage extends Component {
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
    axios.get(`/api/gallerys/${this.state.galleryId}`).then(res => {
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
      .put(`/api/gallerys/${this.state.galleryId}`, {
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
    axios.delete(`/api/gallerys/${this.state.galleryId}`).then(res => {
      this.setState({ redirectToGallery: true });
    });
  };

  render() {
    if (this.state.redirectToGallery) {
      return <Redirect to={`/gallery/`} />;
    }
    return (
      <div style={{ background: "#fffdf9", width: "100%", height: "100%" }}>
        <section id="team">
          <div class="containers">
            <h1>
              <p class="text-center">Atlanta Best Night Life</p>
            </h1>
            <br />
            <Container
              class="text-center"
              fluid
              style={{
                background: "#fffdf9",
                width: "100%",
                height: "100%",
                display: "block",
                margin: "auto 0"
              }}
            >
              <div class="row">
                <div class="col profile-pic text-center">
                  <div class="img-box">
                    <img
                      src={this.state.gallery.galleryImage}
                      style={{ width: "50rem", marginBottom: "30px" }}
                      class="img-responsive"
                    />
                  </div>
                  <Card.Title
                    class="text-center"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      marginBottom: "10px",
                      fontSize: "20px"
                    }}
                  >
                    {this.state.gallery.galleryTitle}
                  </Card.Title>
                  <Card.Text class="text-center">
                    {this.state.gallery.galleryDescription}
                  </Card.Text>
                </div>
              </div>

              <div
                id="carousel-example-2"
                class="carousel slide carousel-fade z-depth-1-half"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carousel-example-2"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#carousel-example-2" data-slide-to="1"></li>
                  <li data-target="#carousel-example-2" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <div class="view">
                      <img
                        class="d-block w-100"
                        src={this.state.gallery.galleryImageTwo}
                        height="500px"
                        alt="First slide"
                      />
                      <div class="mask rgba-black-light"></div>
                    </div>
                    <div class="carousel-caption">
                      <h3 class="h3-responsive">New Year Celebration 2019</h3>
                      <p>01/01/2018</p>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <div class="view">
                      <img
                        class="d-block w-100"
                        src={this.state.gallery.galleryImage}
                        height="500px"
                        alt="Second slide"
                      />
                      <div class="mask rgba-black-light"></div>
                    </div>
                    <div class="carousel-caption">
                      <h3 class="h3-responsive">Channeling Inner Energy</h3>
                      <p>05/01/2018</p>
                    </div>
                  </div>
                </div>

                <a
                  class="carousel-control-prev"
                  href="#carousel-example-2"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carousel-example-2"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
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
