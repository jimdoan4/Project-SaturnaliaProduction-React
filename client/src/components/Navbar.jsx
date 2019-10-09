import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <section className="headers text-center">
          <nav className="navbar navbar-expand-lg navbar-light text-center">
            <h5 className="main-title text-center">
              <Link className="main-title text-center" to="/">
                SATURNALIA PRODUCTIONS
              </Link>
            </h5>
          </nav>
        </section>

        <section className="header text-center">
          <nav className="navbar navbar-expand-lg navbar-light text-center">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav text=-center">
                <li className="nav-item">
                  <a
                    style={{ color: "white", backgroundColor: "#ba0e0e" }}
                    className="nav-link"
                    href="/"
                  >
                    HOME
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    style={{ color: "black" }}
                    className="nav-link"
                    href="/events/"
                  >
                    EVENTS
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    style={{ color: "black" }}
                    className="nav-link"
                    href="/reviews/"
                  >
                    REVIEWS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ color: "black" }}
                    className="nav-link"
                    href="/gallery/"
                  >
                    GALLERY
                  </a>
                </li>
                <li className="nav-item">
                  <a style={{ color: "black" }} className="nav-link" href="/news/">
                    NEWS
                  </a>
                </li>

                <li className="nav-item">
                  <Nav.Link href="/contact/" style={{ color: "black" }}>
                    CONTACT
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </div>
    );
  }
}
