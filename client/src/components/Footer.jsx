import React, { Component } from "react";


export default class Footer extends Component {
  render() {
    return (
      <div>
         <section class="footer">
            <div
              style={{ paddingTop: "80px", paddingBottom: "60px" }}
              className="container tex-center">
              <div className="row">
                <div className="col-md-4 text-center">
                  <h2
                    className="text-center "
                    style={{
                      color: "black",
                      fontSize: "19px"
                    }}
                  >
                    Useful Links
                  </h2>
                  <p>Privacy Policy</p>
                  <p>Terms of Use</p>
                  <p>Return Policy</p>
                </div>

                <div className="col-md-4 text-center">
                  <h2
                    className="text-center "
                    style={{
                      color: "black",
                      fontSize: "19px"
                    }}
                  >
                    Company
                  </h2>
                  <p>About Us</p>
                  <p>Contact Us</p>
                  <p>Affiliate</p>
                </div>
                <div className="col-md-4 text-center">
                  <h2
                    className="text-center "
                    style={{
                      color: "black",
                      fontSize: "19px"
                    }}
                  >
                    Follow Us On
                  </h2>
                  <p>
                    <i className="fa fa-facebook-official" /> Facebook
                  </p>
                  <p>
                    <i className="fa fa-youtube-play" /> YouTube
                  </p>

                  <p>
                    <i className="fa fa-twitter" /> Twitter
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
