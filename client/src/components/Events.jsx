import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default class Events extends Component {
  state = {
    events: [],
    newEvent: {
      _id: "",
      eventTitle: "",
      eventDescription: "",
      eventImage: ""
    },
    displayEventForm: false
  };

  componentDidMount = () => {
    this.getAllEvents();
  };

  getAllEvents = () => {
    axios.get("/api/events/").then(res => {
      this.setState({ events: res.data });
    });
  };

  createEvent = e => {
    axios
      .post("/api/events/", {
        eventTitle: this.state.newEvent.eventTitle,
        eventDescription: this.state.newEvent.eventDescription,
        eventImage: this.state.newEvent.eventImage
      })
      .then(res => {
        const eventsList = [this.state.events];
        eventsList.unshift(res.data);
        this.setState({
          newEvent: {
            eventTitle: "",
            eventDescription: "",
            eventImage: ""
          },
          displayEventForm: false,
          events: eventsList
        });
      });
    this.getAllEvents();
  };

  toggleEventForm = () => {
    this.setState((state, props) => {
      return { displayEventForm: !state.displayEventForm };
    });
  };

  handleChange = e => {
    const changeNewEvent = { ...this.state.newEvent };
    changeNewEvent[e.target.name] = e.target.value;
    this.setState({ newEvent: changeNewEvent });
  };

  handleSignUp = e => {
    e.preventDefault();
    this.createEvent();
  };

  render() {
    return (
      <div>
        <div id="team">
          <div className="containers">
            <h1>Events</h1>
            <br />
            <br />

            <Container
              className="text-center"
            >
              <Row>
                {this.state.events.map(event => {
                  return (
                    <Col className="jumbotron profile-pic text-center">
                      <div className="img-box">
                        <Link to={`/events/${event._id}`} key={event._id}>
                          <img
                            src={event.eventImage}
                            style={{
                              width: "24rem",
                              height: "250px",
                              marginBottom: "30px"
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
                          marginBottom: "10px",
                          fontSize: "20px",
                          marginTop: "22px"
                        }}
                      >
                        {event.eventTitle}
                      </Card.Title>
                      <Card.Text className="text-center">
                        {event.eventDescription}
                      </Card.Text>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
          <div style={{ marginTop: "80px" }}>
            <button onClick={this.toggleEventForm} className="bus">
              Add Event
            </button>
          </div>
        </div>

        <div className="container">
          {this.state.displayEventForm ? (
            <div className="container">
			<Form className="jumbotron" onSubmit={this.createEvent}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Image Name</Form.Label>
                <Form.Control
                  type="text"
                  className="text-center"
                  id="eventImage"
                  type="text"
                  name="eventImage"
                  onChange={this.handleChange}
                  value={this.state.newEvent.eventImage}
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
                  value={this.state.newEvent.eventTitle}
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
                  value={this.state.newEvent.eventDescription}
                />
              </Form.Group>

              <div
                className="text-center"
                style={{ marginTop: "20px", marginLeft: "140px" }}>
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
