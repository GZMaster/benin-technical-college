import React from "react";

export default function SingleBlog() {
  return (
    <section className="blog-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="blog-img_block">
              <img
                src="images/blog/blog-img_01.jpg"
                className="img-fluid"
                alt="blog-img"
              />
              <div className="blog-date">
                <span>5-08-16</span>
              </div>
            </div>
            <div className="blog-tiltle_block">
              <h4>Blog Heading here One line</h4>
              <h6>
                <a href="#">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>admin</span>
                </a>
                |
                <a href="#">
                  <i className="fa fa-tags" aria-hidden="true"></i>
                  <span>Education</span>
                </a>
              </h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type
              </p>
            </div>
            <blockquote className="blogpost-quotes">
              <span>
                <i className="fa fa-quote-left" aria-hidden="true"></i>
              </span>
              <p>
                Many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on
                purpose.
              </p>
              <span className="quote-right">
                <i className="fa fa-quote-right" aria-hidden="true"></i>
              </span>
            </blockquote>
            <div className="blog-tiltle_block">
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions.
              </p>
              <span className="blogpost_list">
                Cras sed ante sagittis, imperdiet purus non, molestie nisi.
              </span>
              <br />
              <span className="blogpost_list">
                Quisque pellentesque ligula sed augue euismod, sit amet accumsa
              </span>
              <br />
              <span className="blogpost_list">
                Sed varius velit sit amet tortor interdum tincidunt.
              </span>
              <div className="blog-icons">
                <div className="blog-share_block">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>Share :</li>
                  </ul>
                </div>
              </div>

              <ul className="nav nav-tabs blogpost-tab-wrap" role="tablist">
                <li className="nav-item blogpost-nav-tab">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#comments"
                    role="tab"
                  >
                    Comments
                  </a>
                </li>
                <li className="nav-item blogpost-nav-tab">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#write-comment"
                    role="tab"
                  >
                    Write a Comment
                  </a>
                </li>
              </ul>
              <div className="clearfix"></div>
              <div className="blogpost-tabs">
                <div className="tab-content">
                  <div
                    className="tab-pane active"
                    id="comments"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="blodpost-tab-img">
                              <img
                                src="images/admission-detail/admission_testi-img.jpg"
                                alt="#"
                              />
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="blogpost-tab-description">
                              <h6>Hanna Gover</h6>
                              <p>
                                Hey, Great Article, i have read it so many times
                                and felt in love with it Sunt in culpa qui
                                officia deserunt mollit anim id est laborum
                              </p>
                              <p className="blogpost-rply">
                                <a href="#">Reply</a> <span>few hours ago</span>
                              </p>
                            </div>
                            <hr />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="blodpost-tab-img">
                              <img
                                src="images/admission-detail/admission_testi-img.jpg"
                                alt="#"
                              />
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="blogpost-tab-description">
                              <h6>Hanna Gover</h6>
                              <p>
                                Hey, Great Article, i have read it so many times
                                and felt in love with it Sunt in culpa qui
                                officia deserunt mollit anim id est laborum
                              </p>
                              <p className="blogpost-rply">
                                <a href="#">Reply</a> <span>March 28</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="write-comment" role="tabpanel">
                    <form action="#">
                      <div className="row">
                        <div className="col-6">
                          <div className="form-group">
                            <label>Full Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Full Name"
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            <label>Email ID</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email ID"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label>Your Comments</label>
                            <textarea className="form-control" rows={6}>
                              {" "}
                            </textarea>
                          </div>
                        </div>
                        <div className="col-12">
                          <input
                            type="submit"
                            value="Submit Comment"
                            className="btn btn-warning"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <form>
              <input type="text" placeholder="Search" className="blog-search" />
              <a href="#" className="btn btn-warning btn-blogsearch">
                SEARCH
              </a>
            </form>
            <div className="blog-category_block">
              <h3>Category</h3>
              <ul>
                <li>
                  <a href="#">
                    Vivamus elementum elit
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Maecenas ut dui at lorem
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Quisque quis libero quis augue
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Curabitur consequat odio
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Aliquam tristique turpis
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="blog-featured_post">
              <h3>Featured Post</h3>
              <div className="blog-featured-img_block">
                <img
                  src="images/blog/blogpost-img_01.jpg"
                  className="img-fluid"
                  alt="blog-featured-img"
                />
                <h5>Heading</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typeset
                </p>
              </div>
              <hr />
            </div>
            <div className="blog-featured_post">
              <div className="blog-featured-img_block">
                <img
                  src="images/blog/blogpost-img_02.jpg"
                  className="img-fluid"
                  alt="blog-featured-img"
                />
                <h5>Heading</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typeset
                </p>
              </div>
              <hr />
            </div>
            <div className="blog-featured_post">
              <div className="blog-featured-img_block">
                <img
                  src="images/blog/blogpost-img_03.jpg"
                  className="img-fluid"
                  alt="blog-featured-img"
                />
                <h5>Heading</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typeset
                </p>
              </div>
            </div>
            <div className="blog-tags_wrap">
              <div className="row">
                <div className="col-md-12">
                  <h3>Tags</h3>
                </div>
                <a href="#" className="blog-tags">
                  <span>Education</span>
                </a>
                <a href="#" className="blog-tags">
                  <span>Calass</span>
                </a>
                <a href="#" className="blog-tags">
                  <span>Seat</span>
                </a>
                <a href="#" className="blog-tags">
                  <span>Teachers</span>
                </a>
                <a href="#" className="blog-tags">
                  <span>Library</span>
                </a>
                <a href="#" className="blog-tags">
                  <span>Food</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
