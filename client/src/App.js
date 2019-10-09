import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import News from "./components/News";
import NewsPage from "./components/NewsPage";
import Events from "./components/Events";
import EventShowPage from "./components/EventShowPage";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import GalleryShowPage from "./components/GalleryShowPage";
import ReviewsPage from "./components/ReviewsPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/events/" component={Events} />
            <Route exact path="/events/:eventId/" component={EventShowPage} />
            <Route exact path="/gallery/" component={Gallery} />
            <Route
              exact
              path="/gallerys/:galleryId/"
              component={GalleryShowPage}
            />
            <Route exact path="/reviews/" component={Reviews} />
            <Route exact path="/reviewspage/" component={ReviewsPage} />
            <Route exact path="/contact/" component={Contact} />
            <Route exact path="/news/" component={News} />
            <Route exact path="/newspage/" component={NewsPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
