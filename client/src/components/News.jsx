import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default class News extends Component {
  render() {
    return (
      <div style={{ background: "#fffdf9", width: "100%", height: "100%" }}>
        <div id="team">
          <div className="containers">
            <h1>News</h1>
            <br />
            <br />
            <Container className="text-center">
              <Row>
                <Col className="profile-pic text-center img-box trending-img">
                  <img
                    src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918"
                    style={{ width: "27rem", height: "300px" }}
                    className="img-responsive"
                  />
                  <Link to="/newspage/">
                    <button type="button" class="btn-buy">
                      Retrospective: Lucrecia Martel
                    </button>
                  </Link>
                  <div className="overlay" />
                </Col>

                <Col className="profile-pic text-center img-box trending-img">
                  <img
                    src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
                    style={{ width: "27rem", height: "300px" }}
                    className="img-responsive"
                  />
                  <button type="button" className="btn-buy">
                    Retrospective: Lucrecia Martel
                  </button>
                  <div className="overlay" />
                </Col>

                <Col className="profile-pic text-center img-box trending-img">
                  <img
                    src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
                    style={{ width: "27rem", height: "300px" }}
                    className="img-responsive"
                  />
                  <button type="button" className="btn-buy">
                    Retrospective: Lucrecia Martel
                  </button>
                  <div className="overlay" />
                </Col>

                <Col className="profile-pic text-center img-box trending-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
                    style={{ width: "27rem", height: "300px" }}
                    className="img-responsive"
                  />
                  <button type="button" className="btn-buy">
                    Retrospective: Lucrecia Martel
                  </button>
                  <div className="overlay" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
