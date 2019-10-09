import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default class EventPage extends Component {
  state = {
    eventId: this.props.eventId,
    events: [],
    event: {
      _id: "",
      eventTitle: "",
      eventDescription: "",
      eventImage: ""
    },
    redirectToEvent: false,
    displayEventForm: false
  };

  getSingleEventData = () => {
    axios.get(`/api/events/${this.state.eventId}`).then(res => {
      this.setState({ event: res.data });
    });
  };

  componentDidMount = () => {
    this.getSingleEventData();
  };

  toggleEventForm = () => {
    this.setState((state, props) => {
      return { displayEventForm: !state.displayEventForm };
    });
  };

  handleChange = e => {
    const updateEvent = { ...this.state.event };
    updateEvent[e.target.name] = e.target.value;
    this.setState({ event: updateEvent });
  };

  handleChange = e => {
    const newEvent = { ...this.state.event };
    newEvent[e.target.name] = e.target.value;
    this.setState({ event: newEvent });
  };

  updateEvent = e => {
    e.preventDefault();
    axios
      .put(`/api/events/${this.state.eventId}`, {
        eventTitle: this.state.event.eventTitle,
        eventDescription: this.state.event.eventDescription,
        eventImage: this.state.event.eventImage
      })
      .then(res => {
        this.setState({ event: res.data, displayEventForm: false });
      });
    this.getSingleEventData();
  };

  deleteEvent = () => {
    axios.delete(`/api/events/${this.state.eventId}`).then(res => {
      this.setState({ redirectToEvent: true });
    });
  };

  render() {
    if (this.state.redirectToEvent) {
      return <Redirect to={`/events/`} />;
    }
    return (
      <div>
        <section id="team">
          <div class="containers">
            <h1>
              <p class="text-center">{this.state.event.eventTitle} </p>
            </h1>
            <br />
            <Container class="text-center">
              <div class="row">
                <div class="col profile-pic text-center">
                  <div class="img-box">
                    <img
                      src={this.state.event.eventImage}
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
                    {this.state.event.eventTitle}
                  </Card.Title>
                  <Card.Text class="text-center">
                    {this.state.event.eventDescription}
                  </Card.Text>
                </div>
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
              <button className="bus" onClick={this.toggleEventForm}>
                Edit Event
              </button>
            </Col>
            <Col>
              <button className="bus" onClick={this.deleteEvent}>
                Delete Event
              </button>
            </Col>
          </Row>
        </Container>

        {this.state.displayEventForm ? (
			<Form className="jumbotron" onSubmit={this.updateEvent}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Image Name</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  id="eventImage"
                  type="text"
                  name="eventImage"
                  onChange={this.handleChange}
                  value={this.state.event.eventImage}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  id="eventTitle"
                  type="text"
                  name="eventTitle"
                  onChange={this.handleChange}
                  value={this.state.event.eventTitle}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control
				 as="textarea"
                  type="text"
                  className="text-center"
                  id="eventDescription"
                  type="text"
                  name="eventDescription"
                  onChange={this.handleChange}
                  value={this.state.event.eventDescription}
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
