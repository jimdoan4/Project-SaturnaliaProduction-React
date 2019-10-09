import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Reviews extends Component {
  state = {
    reviews: [],
    newReviews: {
      reviewTitle: "",
      reviewDescription: "",
      reviewImage: "",
      reviewUser: ""
    },
    displayReviewForm: false
  };

  componentDidMount = () => {
    this.getAllReviews();
  };

  getAllReviews = () => {
    axios.get("/api/reviews/").then(res => {
      this.setState({ reviews: res.data });
    });
  };

  createReview = e => {
    axios
      .post("/api/reviews/", {
        reviewTitle: this.state.newReview.reviewTitle,
        reviewDescription: this.state.newReview.reviewDescription,
        reviewImage: this.state.newReview.reviewImage,
        reviewUser: this.state.newReview.reviewUser
      })
      .then(res => {
        const reviewsList = [this.state.reviews];
        reviewsList.unshift(res.data);
        this.setState({
          newReview: {
            reviewTitle: "",
            reviewDescription: "",
            reviewImage: "",
            reviewUser: ""
          },
          displayReviewForm: false,
          reviews: reviewsList
        });
      });
    this.getAlReviews();
  };

  handleChange = e => {
    const changeNewReview = { ...this.state.newReview };
    changeNewReview[e.target.name] = e.target.value;
    this.setState({ newReview: changeNewReview });
  };

  handleSignUp = e => {
    e.preventDefault();
    this.createReview();
  };
  render() {
    return (
      <div>
        <section id="team">
          <div className="containers">
            <h1>Reviews</h1>
            <br />
            <br />
            <Container
              className="text-center">
              <div className="row">
                <div className="row profile-pic text-center">
                  <div className="img-box">
                    <Link to="/reviewspage/">
                      <img
                        src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918"
                        style={{
                          width: "23rem",
                          height: "240px",
                          marginBottom: "30px"
                        }}
                        className="img-responsive"
                      />
                    </Link>
                  </div>

                  <br />
                  <div className="col">
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
                    <Card.Text className="text-center ">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="row profile-pic text-center">
                  <div className="img-box">
                    <img
                      src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
                      style={{
                        width: "23rem",
                        height: "240px",
                        marginBottom: "30px"
                      }}
                      className="img-responsive"
                    />
                  </div>
                  <br />
                  <div className="col">
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
                    <Card.Text className="text-center ">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="row profile-pic text-center">
                  <div className="img-box">
                    <img
                      src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
                      style={{
                        width: "23rem",
                        height: "240px",
                        marginBottom: "30px"
                      }}
                      className="img-responsive"
                    />
                  </div>
                  <br />
                  <div className="col gal">
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
                    <Card.Text className="text-center ">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="row profile-pic text-center">
                  <div className="img-box">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
                      style={{
                        width: "23rem",
                        height: "240px",
                        marginBottom: "30px"
                      }}
                      className="img-responsive"
                    />
                  </div>
                  <br />
                  <div className="col">
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
                    <Card.Text className="text-center ">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
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
