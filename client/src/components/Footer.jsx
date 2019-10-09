import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <div>
         <section class="footer">
            <div
              style={{ paddingTop: "80px", paddingBottom: "60px" }}
              class="container tex-center"
            >
              <div class="row">
                <div class="col-md-4 text-center">
                  <h2
                    class="text-center "
                    style={{
                      color: "black",
                      backgroundColor: "",
                      fontSize: "19px"
                    }}
                  >
                    Useful Links
                  </h2>
                  <p>Privacy Policy</p>
                  <p>Terms of Use</p>
                  <p>Return Policy</p>
                </div>

                <div class="col-md-4 text-center">
                  <h2
                    class="text-center "
                    style={{
                      color: "black",
                      backgroundColor: "",
                      fontSize: "19px"
                    }}
                  >
                    Company
                  </h2>
                  <p>About Us</p>
                  <p>Contact Us</p>
                  <p>Affiliate</p>
                </div>
                <div class="col-md-4 text-center">
                  <h2
                    class="text-center "
                    style={{
                      color: "black",
                      backgroundColor: "",
                      fontSize: "19px"
                    }}
                  >
                    Follow Us On
                  </h2>
                  <p>
                    <i class="fa fa-facebook-official" /> Facebook
                  </p>
                  <p>
                    <i class="fa fa-youtube-play" /> YouTube
                  </p>

                  <p>
                    <i class="fa fa-twitter" /> Twitter
                  </p>
                </div>
              </div>
            </div>
            <p className="text-center">© SATURNALIA PRODUCTIONS 2019</p>
          </section>
      </div>
    );
  }
}
