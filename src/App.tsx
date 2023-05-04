import React from "react";
import "./assets/css/animated-masonry-gallery.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/fullcalendar.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/normalize.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/set2.css";
import "./assets/css/simple-line-icons.css";
import "./assets/css/slick-theme.css";
import "./assets/css/slick.css";
import "./assets/css/style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import ContactPage from "./pages/contactPage";
import CampusLife from "./pages/campusLife";
import Faq from "./pages/faq";
import Gallery from "./pages/gallery";
import Login from "./pages/login";
import NoticeBoard from "./pages/noticeBoard";
import Main from "./main";
import SignIn from "./pages/signin";
import SingleBlog from "./pages/singleBlog";
import Events from "./pages/events";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-post" element={<SingleBlog />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/notice-board" element={<NoticeBoard />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/events" element={<Events />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
