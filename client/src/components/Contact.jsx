import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";


export default class Contact extends Component {
  render() {
    return (
      <div style={{ background: "#fffdf9", width: "100%", height: "100%" }}>
        <section id="team">
          <div class="containers">
            <h1>About SATURNALIA PRODUCTIONS</h1>
            <br />
            <p class="text-center">
              Aliquam tempus maximus magna, et pellentesque nisi viverra porta.
              Proin sodales tellus id tincidunt egestas. Nulla laoreet orci non
              mi maximus, vel tristique nunc efficitur. Phasellus et dolor
              fringilla, maximus sapien eu, volutpat ante. In ut turpis ut lorem
              elementum vehicula quis ut dui. Nam porta nulla lacus, scelerisque
              eleifend mauris elementum et.
            </p>
            <br />
            <div class="container">
              <div class="row">
                <div class="col text-center">
                  <Jumbotron>
                    <Card.Header style={{ color: "black" }}>
                      General Enquiries
                    </Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="red">
                        Phone: (229) 443-5522
                      </ListGroup.Item>
                      <ListGroup.Item className="red">
                        Email: info@saturnaliaparty.com
                      </ListGroup.Item>
                      <ListGroup.Item className="red">
                        Address: 703 Briarhill Ln, Atlanta, GA 30332
                      </ListGroup.Item>
                    </ListGroup>
                  </Jumbotron>
                </div>
                <div class="col text-center">
                  <Jumbotron>
                    <Card.Header style={{ color: "black" }}>
                      Social Media
                    </Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="red">
                        Facebook: www.facebook.com/saturnaliaparty
                      </ListGroup.Item>
                      <ListGroup.Item className="red">
                        Instagram: saturnaliaparty
                      </ListGroup.Item>
                      <ListGroup.Item className="red">
                        Twitter: saturnaliaparty
                      </ListGroup.Item>
                    </ListGroup>
                  </Jumbotron>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
