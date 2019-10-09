import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default class ReviewsPage extends Component {
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
      <div style={{ background: "#fffdf9", width: "100%", height: "100%" }}>
        <section id="team">
          <div class="containers">
            <h1>
              <p class="text-center">
                Queer volleyball jocks throw beer bust at Woofs
              </p>
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
                      src="https://www.projectq.us/images/uploads/6_9_19_Possums_Summer_Camp-24.jpg"
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
                    Retrospective: Lucrecia Martel
                  </Card.Title>
                  <Card.Text class="text-center">
                    <p>
                      That’s what the Hotlanta Volleyball Association did on
                      Sunday by throwing a beer bust at Woofs to raise money for
                      the Hotlanta Classic coming up Aug. 3-4. If it’s anything
                      like last year’s tournament, expect a ton of cute guys in
                      town from around the country.
                    </p>

                    <p>
                      And if you’re wanting to pop by Woofs before it moves from
                      its longtime location on Piedmont Road, better get there
                      soon. They’re moving in July.
                    </p>
                    <p>
                      ADE Sound Lab also features the annual Demolition panel
                      with moderator and DJ Dave Clarke alongside a panel of top
                      DJ talent, demo pitches and audiovisual installations,
                      plus a broad range of hardware and software brands to try
                      out. Tickets & more info Tickets for the four day ADE
                      Sound Lab program (€25,-) are available here. The program
                      is also accessible with the ADE card, available here and
                      for ADE Pass and ADE Conference Pass holders, available
                      here.
                    </p>
                  </Card.Text>
                </div>
              </div>
            </Container>

            <Container
              class="text-center"
              fluid
              style={{
                background: "#fffdf9",
                width: "100%",
                height: "100%",
                display: "block",
                margin: "auto 0",
                marginTop: "50px"
              }}
            >
              <div class="row">
                <div class="col profile-pic text-center">
                  <div class="card img-box">
                    <Card.Title
                      class="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        fontSize: "20px",
                        marginTop: "19px"
                      }}
                    >
                      Ratings and reviews
                    </Card.Title>
                    <Card.Text>
                      Certificate of Excellence2015 - 2019
                      <br />
                      Conference Pass holders, available here.
                      <br />
                      features the annual Demolition{" "}
                    </Card.Text>
                  </div>
                </div>
                <div class="col profile-pic text-center">
                  <div class="card img-box sexy">
                    <Card.Title
                      class="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        fontSize: "20px",
                        marginTop: "19px"
                      }}
                    >
                      Location and contact
                    </Card.Title>
                    <Card.Text>
                      1509 Pike Pl Ste 3, Seattle, WA 98101-1526 <br />
                      Website: www.google.com
                      <br />
                      Call: 404-333-5454
                    </Card.Text>
                  </div>
                </div>
                <div class="col profile-pic text-center">
                  <div class="card img-box sexy">
                    <Card.Title
                      class="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        fontSize: "20px",
                        marginTop: "19px"
                      }}
                    >
                      Food and ambience
                    </Card.Title>
                    <Card.Text>
                      INCREDIBLY FRESH SEAFOOD <br />
                      Conference Pass holders, available here.
                      <br />
                      features the annual Demolition{" "}
                    </Card.Text>
                  </div>
                </div>
              </div>
            </Container>

            <Container
              class="text-center"
              fluid
              style={{
                background: "#fffdf9",
                width: "100%",
                height: "100%",
                display: "block",
                margin: "auto 0",
                marginTop: "50px"
              }}
            >
              <div class="row" style={{ marginBottom: "30px" }}>
                <div class="row profile-pic text-center">
                  {/* <div class="img-box">
                    <img
                      src="https://scontent.fatl1-1.fna.fbcdn.net/v/t1.0-9/31224442_10216201289563031_5475239727873392640_o.jpg?_nc_cat=105&_nc_oc=AQnPsR2ELeNr7Q0ejvJfpXQ90Ji_iImZlW-1oghJaUf2WakO3MBuET6rKXoTLraYuBA&_nc_ht=scontent.fatl1-1.fna&oh=1b533fa3d28179434c68baff3089c2f0&oe=5D92F7C9"
                      style={{ width: "20rem", height: "240px" }}
                      class="img-responsive"
                    />
                  </div> */}

                  <br />
                  <div class=" col card">
                    <p style={{ marginTop: "19px" }}>Reviewed 1 week ago</p>
                    <Card.Title
                      class="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Some Spots are Just Special
                    </Card.Title>
                    <Card.Text class="text-center">
                      We travel a lot, and either go to over-priced tourist
                      places, or simple restaurants with outstanding food. We
                      discovered Market Grill on our first trip to Seattle. It
                      is one of my favorites in the world. There are just a few
                      stools and you eat...More <br />
                      Date of visit: May 2019
                    </Card.Text>
                  </div>
                </div>
              </div>
            </Container>

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
                <div class="row profile-pic text-center">
                  {/* <div class="img-box">
                    <img
                      src="https://scontent.fatl1-1.fna.fbcdn.net/v/t1.0-9/46686054_10217876520602760_1458512799993954304_n.jpg?_nc_cat=102&_nc_oc=AQnodcUhByJGP_8bmqDCTIa1ekQLFbCgg0KfxEfdHRzcOgI8tWb3z7SB8Q-dEJKZ0YU&_nc_ht=scontent.fatl1-1.fna&oh=f99f04875a066c5a12d07ce8abdb28c5&oe=5D91C5FB"
                      style={{ width: "20rem", height: "240px" }}
                      class="img-responsive"
                    />
                  </div> */}

                  <br />
                  <div class=" col card">
                    <p style={{ marginTop: "19px" }}>Reviewed 3 weeks ago</p>
                    <Card.Title
                      class="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Nice staff, pretty good sandwich
                    </Card.Title>
                    <Card.Text class="text-center">
                      Great chunky chowder with lots of ingredients and friendly
                      staff. The server offered me water, crackers and a seat
                      with the chowder. Wanted to order more food because
                      everything looked good! But the chowder was so filling I
                      didn’t order anything else.
                      <br />
                      Date of visit: May 2019
                    </Card.Text>
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
