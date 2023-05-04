import React from "react";

export default function Gallery() {
  return (
    <div className="gallery-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="gallery-style">Style One</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <a href="images/gallery/large_1.jpg" className="grid image-link">
              <figure className="effect-bubba gallery-img-wrap">
                <img
                  src="images/gallery/gallery_1.jpg"
                  className="img-fluid"
                  alt="#"
                />
                <figcaption>
                  <p>
                    <i
                      className="fa fa-search-plus fa-2x"
                      aria-hidden="true"
                    ></i>
                  </p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="col-md-4">
            <a href="images/gallery/large_2.jpg" className="grid image-link">
              <figure className="effect-bubba gallery-img-wrap">
                <img
                  src="images/gallery/gallery_2.jpg"
                  className="img-fluid"
                  alt="#"
                />
                <figcaption>
                  <p>
                    <i
                      className="fa fa-search-plus fa-2x"
                      aria-hidden="true"
                    ></i>
                  </p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="col-md-4">
            <a href="images/gallery/large_3.jpg" className="grid image-link">
              <figure className="effect-bubba gallery-img-wrap">
                <img
                  src="images/gallery/gallery_3.jpg"
                  className="img-fluid"
                  alt="#"
                />
                <figcaption>
                  <p>
                    <i
                      className="fa fa-search-plus fa-2x"
                      aria-hidden="true"
                    ></i>
                  </p>
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <a href="images/gallery/large_4.jpg" className="grid image-link">
              <figure className="effect-bubba gallery-img-wrap">
                <img
                  src="images/gallery/gallery_4.jpg"
                  className="img-fluid"
                  alt="#"
                />
                <figcaption>
                  <p>
                    <i
                      className="fa fa-search-plus fa-2x"
                      aria-hidden="true"
                    ></i>
                  </p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="col-md-4">
            <a href="images/gallery/large_5.jpg" className="grid image-link">
              <figure className="effect-bubba gallery-img-wrap">
                <img
                  src="images/gallery/gallery_5.jpg"
                  className="img-fluid"
                  alt="#"
                />
                <figcaption>
                  <p>
                    <i
                      className="fa fa-search-plus fa-2x"
                      aria-hidden="true"
                    ></i>
                  </p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className="col-md-4">
            <a href="images/gallery/large_6.jpg" className="grid image-link">
              <figure className="effect-bubba gallery-img-wrap">
                <img
                  src="images/gallery/gallery_6.jpg"
                  className="img-fluid"
                  alt="#"
                />
                <figcaption>
                  <p>
                    <i
                      className="fa fa-search-plus fa-2x"
                      aria-hidden="true"
                    ></i>
                  </p>
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
        <br />
        <br />

        <div className="row">
          <div className="col-md-12">
            <h3 className="gallery-style">Style Two</h3>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <div id="gallery">
              <div id="gallery-header">
                <div id="gallery-header-center">
                  <div id="gallery-header-center-right">
                    <div
                      className="gallery-header-center-right-links"
                      id="filter-all"
                    >
                      All
                    </div>
                    <div
                      className="gallery-header-center-right-links"
                      id="filter-studio"
                    >
                      Studio
                    </div>
                    <div
                      className="gallery-header-center-right-links"
                      id="filter-landscape"
                    >
                      Landscapes
                    </div>
                  </div>
                </div>
              </div>
              <div id="gallery-content">
                <div id="gallery-content-center">
                  <a href="images/gallery/large_5.jpg" className="image-link2">
                    <img
                      src="images/gallery/gallery_5.jpg"
                      className="all studio img-fluid"
                      alt="#"
                    />
                  </a>
                  <a href="images/gallery/large_1.jpg" className="image-link2">
                    <img
                      src="images/gallery/gallery_1.jpg"
                      className="all studio img-fluid"
                      alt="#"
                    />
                  </a>
                  <a href="images/gallery/large_3.jpg" className="image-link2">
                    <img
                      src="images/gallery/gallery_3.jpg"
                      className="all landscape img-fluid"
                      alt="#"
                    />
                  </a>
                  <a href="images/gallery/large_2.jpg" className="image-link2">
                    <img
                      src="images/gallery/gallery_2.jpg"
                      className="all studio img-fluid"
                      alt="#"
                    />
                  </a>
                  <a href="images/gallery/large_6.jpg" className="image-link2">
                    <img
                      src="images/gallery/gallery_6.jpg"
                      className="all studio img-fluid"
                      alt="#"
                    />
                  </a>
                  <a href="images/gallery/large_4.jpg" className="image-link2">
                    <img
                      src="images/gallery/gallery_4.jpg"
                      className="all studio img-fluid"
                      alt="#"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
