import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";


export default class NewsPage extends Component {

  render() {
    return (
      <div>
        <section id="team">
          <div className="containers">
            <h1>
              <p className="text-center">
                Queer volleyball jocks throw beer bust at Woofs
              </p>
            </h1>
            <br />
            <Container
              className="text-center">
              <div className="row">
                <div className="col profile-pic text-center">
                  <div className="img-box">
                    <img
                      src="https://www.projectq.us/images/uploads/6_9_19_Possums_Summer_Camp-24.jpg"
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
                    Retrospective: Lucrecia Martel
                  </Card.Title>
                  <Card.Text className="text-center">
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
          </div>
        </section>
      </div>
    );
  }
}
