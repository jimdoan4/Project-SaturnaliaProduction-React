import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <section class="headers text-center">
          <nav class="navbar navbar-expand-lg navbar-light text-center">
            <h5 class="main-title text-center">
              <Link class="main-title text-center" to="/">
                SATURNALIA PRODUCTIONS
              </Link>
            </h5>
          </nav>
        </section>

        <section class="header text-center">
          <nav class="navbar navbar-expand-lg navbar-light text-center">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fa fa-bars" />
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav text=-center">
                <li class="nav-item">
                  <a
                    style={{ color: "white", backgroundColor: "#ba0e0e" }}
                    class="nav-link"
                    href="/"
                  >
                    HOME
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    style={{ color: "black" }}
                    class="nav-link"
                    href="/events/"
                  >
                    EVENTS
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    style={{ color: "black" }}
                    class="nav-link"
                    href="/reviews/"
                  >
                    REVIEWS
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{ color: "black" }}
                    class="nav-link"
                    href="/gallery/"
                  >
                    GALLERY
                  </a>
                </li>
                <li class="nav-item">
                  <a style={{ color: "black" }} class="nav-link" href="/news/">
                    NEWS
                  </a>
                </li>

                <li class="nav-item">
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
