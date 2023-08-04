import React from "react";

export default function Events() {
  return (
    <section className="events">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="event-title">Events</h2>
          </div>
          <div className="col-md-8">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item nav-tab1">
                <a
                  className="nav-link tab-list active"
                  data-toggle="tab"
                  href="#upcoming-events"
                  role="tab"
                >
                  Upcoming events
                </a>
              </li>
              <li className="nav-item nav-special-br">
                <a
                  className="nav-link tab-list"
                  data-toggle="tab"
                  href="#completed-events"
                  role="tab"
                >
                  Completed events
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link tab-list"
                  data-toggle="tab"
                  href="#calander-view"
                  role="tab"
                >
                  Calander view
                </a>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="tab-content">
            <div
              className="tab-pane active"
              id="upcoming-events"
              role="tabpanel"
            >
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-2">
                    <div className="event-date">
                      <h4>12</h4>
                      <span>Jun 2023</span>
                    </div>
                    <span className="event-time">9.00 AM - 4.00 PM</span>
                  </div>
                  <div className="col-md-10">
                    <div className="event-heading">
                      <h3>Cultural Day</h3>
                      <p>
                        {`Cultural Day at Benin Technical College is a vibrant and cherished celebration that showcases the diverse cultural heritage of Nigeria. It serves as a platform for students and staff to embrace and exhibit the rich traditions, languages, music, dance, attire, and cuisine that make up Nigeria's cultural tapestry. The event fosters cultural pride and encourages students to appreciate the beauty of their Nigerian heritage.`}
                      </p>
                    </div>
                    <div
                      id="collapse1"
                      className="panel-collapse collapse in show"
                    >
                      <div className="panel-body">
                        <div className="event-hilights">
                          <h5>Event Highlights Photos</h5>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_1.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_2.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_3.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="event-highlight-discription">
                              <p>
                                {`It highlights the diversity within Nigeria by providing a stage for students to showcase the customs and traditions of their respective ethnic groups. Through displays of traditional attire, artifacts, artwork, and performances, students develop a sense of pride in their Nigerian identity and cultivate a deep appreciation for the various cultural practices that shape Nigerian society.`}
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="event-highlight-discription">
                              <p>
                                {`Interactive activities, such as storytelling, arts and crafts, and culinary experiences, allow students to engage with and learn about traditional Nigerian customs. By participating in these activities, students contribute to the preservation and passing down of cultural knowledge, ensuring that Nigerian traditions continue to thrive.The event reinforces the idea that, despite diverse backgrounds, Nigerians share a common thread of unity and can celebrate their unique identities as a cohesive community.`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          className="event-toggle"
                          data-parent="#accordion"
                          href="#collapse1"
                        >
                          Hide Details
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <hr className="event-underline" />
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-2">
                    <div className="event-date">
                      <h4>13</h4>
                      <span>Jun 2023</span>
                    </div>
                    <span className="event-time">9.00 AM - 4.00 PM</span>
                  </div>
                  <div className="col-md-10">
                    <div className="event-heading">
                      <h3>Social Impact Day</h3>
                      <p>
                        {` Social Impact Day is an annual event that brings together students, staff, and the wider community to make a positive difference. This transformative day serves as a catalyst for social change, promoting awareness and inspiring action on various social issues. It creates an environment where participants can learn, engage, and contribute to creating a better world.`}
                      </p>
                    </div>
                    <div id="collapse2" className="panel-collapse collapse in">
                      <div className="panel-body">
                        <div className="event-hilights">
                          <h5>Event Highlights Photos</h5>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_1.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_2.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_3.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="event-highlight-discription">
                              <p>
                                {`During Social Impact Day, participants have the opportunity to raise awareness about pressing social issues through workshops, presentations, and discussions. Through these activities, they gain a deeper understanding of topics such as poverty, inequality, environmental sustainability, and education. By increasing awareness, Social Impact Day fosters empathy and compassion among individuals, encouraging them to take action.`}
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="event-highlight-discription">
                              <p>
                                {`Though Social Impact Day goes beyond raising awareness; it empowers individuals to make a difference. Through hands-on activities, community service projects, and volunteering opportunities, participants actively contribute to addressing social challenges. They develop a sense of responsibility, leadership, and a commitment to creating positive change in their communities.`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          className="event-toggle"
                          data-parent="#accordion"
                          href="#collapse2"
                        >
                          Show Details
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <hr className="event-underline" />
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-2">
                    <div className="event-date">
                      <h4>28</h4>
                      <span>Jun 2023</span>
                    </div>
                    <span className="event-time">9.00 AM - 4.00 PM</span>
                  </div>
                  <div className="col-md-10">
                    <div className="event-heading">
                      <h3>Teacher’s Appreciation Day</h3>
                      <p>
                        {` Teacher's Application Day is a special occasion dedicated to recognizing and appreciating the valuable contributions of teachers to the educational system in the state. It serves as an opportunity for parents, students, and stakeholders to express their gratitude and acknowledge the dedication, hard work, and impact that teachers have on shaping the lives of students. The event aims to celebrate the outstanding achievements and professional development of educators.`}
                      </p>
                    </div>
                    <div id="collapse3" className="panel-collapse collapse in">
                      <div className="panel-body">
                        <div className="event-hilights">
                          <h5>Event Highlights Photos</h5>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_1.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_2.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_3.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="event-highlight-discription">
                              <p>
                                {`One of the significant highlights of Teacher's Application Day is the presentation of awards that recognize excellence in teaching. The "Best Teacher of the Year" award acknowledges educators who have consistently demonstrated exceptional teaching skills, creativity, and a profound commitment to their students' academic and personal growth. This prestigious award celebrates teachers who go above and beyond to inspire, motivate, and empower their students.`}
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="event-highlight-discription">
                              <p>
                                {`Another accolade presented during Teacher's Application Day is the "Innovative Teaching" award. This recognition honors educators who employ innovative and creative teaching methods to enhance the learning experience. These teachers demonstrate a willingness to embrace new technologies, teaching approaches, and strategies that engage students and foster a love for learning. The award highlights the importance of adaptability and forward-thinking in delivering quality education.`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          className="event-toggle"
                          data-parent="#accordion"
                          href="#collapse3"
                        >
                          Show Details
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <hr className="event-underline" />
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-2">
                    <div className="event-date">
                      <h4>23</h4>
                      <span>Jun 2023</span>
                    </div>
                    <span className="event-time">9.00 AM - 4.00 PM</span>
                  </div>
                  <div className="col-md-10">
                    <div className="event-heading">
                      <h3>Professional Development Day</h3>
                      <p>
                        {` Professional Development Day is a designated day within a term where students do not attend school, allowing teachers to focus on their own growth and development as educators. This day serves as an opportunity for teachers to reflect on their contributions to the education system and assess areas for improvement. It is a crucial part of their ongoing professional journey, ensuring that they stay updated with the latest teaching methodologies, educational research, and best practices.`}
                      </p>
                    </div>
                    <div id="collapse4" className="panel-collapse collapse in">
                      <div className="panel-body">
                        <div className="event-hilights">
                          <h5>Event Highlights Photos</h5>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_1.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_2.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_3.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="event-highlight-discription">
                              <p>
                                {`During Professional Development Day, teachers engage in a range of activities that enhance their knowledge and skills. They may participate in workshops, attend conferences, collaborate with colleagues, or engage in self-guided research. The day provides dedicated time for teachers to evaluate their teaching methods, curriculum design, assessment strategies, and classroom management techniques.`}
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="event-highlight-discription">
                              <p>
                                {`By critically examining their practices and investing in professional development, teachers can identify areas that require further development and explore ways to enhance their effectiveness in the classroom; fortify their instructional abilities, stay abreast of educational trends, and implement evidence-based strategies to meet the evolving needs of students. Ultimately, this day contributes to the overall improvement of the education system by ensuring that teachers are equipped with the knowledge and skills needed to create meaningful and engaging learning experiences.`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          className="event-toggle"
                          data-parent="#accordion"
                          href="#collapse4"
                        >
                          Show Details
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 text-center">
                <a href="#" className="btn btn-default btn-courses my-5">
                  Show More
                </a>
              </div>
            </div>
            <div className="tab-pane" id="completed-events" role="tabpanel">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-2">
                    <div className="event-date">
                      <h4>02</h4>
                      <span>May 2023</span>
                    </div>
                    <span className="event-time">9.00 AM - 4.00 PM</span>
                  </div>
                  <div className="col-md-10">
                    <div className="event-heading">
                      <h3>
                        End of year photo/ preparation of end of year yearbook
                      </h3>
                      <p>
                        {`The end-of-year photo and yearbook serve as cherished mementos that capture the essence of our school community. End-of-year photos freeze moments of energy and camaraderie, preserving the memories of academic triumphs and social gatherings. Yearbooks preserve these memories, showcasing the diverse individuals and accomplishments that define our educational experience. They foster a sense of belonging, celebrate achievements, and leave a lasting legacy for future generations. Together, these keepsakes allow us to reflect on our growth, appreciate our shared experiences, and inspire others to continue building upon our school's foundation.s`}
                      </p>
                    </div>
                    <div
                      id="collapse5"
                      className="panel-collapse collapse in show"
                    >
                      <div className="panel-body">
                        <div className="event-hilights">
                          <h5>Event Highlights Photos</h5>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_1.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_2.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_3.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="event-highlight-discription">
                              <p>
                                {`The end-of-year photo and yearbook hold a special significance in fostering a sense of unity and pride within the school community. As students flip through the yearbook's pages, they are reminded of the friendships forged, the challenges overcome, and the collective achievements of their peers. These visual representations of shared experiences strengthen the bonds between students, creating a lasting connection and a shared identity within the school community. The end-of-year photo and yearbook become cherished artifacts that students can revisit in years to come, evoking nostalgia and a sense of belonging.`}
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="event-highlight-discription">
                              <p>
                                {`Furthermore, the end-of-year photo and yearbook provide a platform for individual recognition and celebration. Through class photos, senior portraits, and personalized messages, students have the opportunity to reflect on their personal growth and accomplishments. The yearbook becomes a testament to their unique journey, highlighting their achievements in academics, sports, arts, and other areas of involvement. This recognition not only instills a sense of pride in individual achievements but also creates a supportive and encouraging environment within the school community, motivating students to continue reaching for their goals and aspirations. The end-of-year photo and yearbook serve as a tribute to the collective achievements and individual successes that make each school year memorable and extraordinary.`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          className="event-toggle"
                          data-parent="#accordion"
                          href="#collapse5"
                        >
                          Hide Details
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <hr className="event-underline" />
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-2">
                    <div className="event-date">
                      <h4>27</h4>
                      <span>feb 2022</span>
                    </div>
                    <span className="event-time">9.00 AM - 4.00 PM</span>
                  </div>
                  <div className="col-md-10">
                    <div className="event-heading">
                      <h3>Inter House sports day</h3>
                      <p>
                        {`Our highly anticipated event, the Inter-house Sports day, is an exhilarating occasion filled with camaraderie and intense competition as our six houses vie for glory. Here's a breakdown of the event's activities and highlights:`}
                      </p>
                    </div>
                    <div id="collapse6" className="panel-collapse collapse in">
                      <div className="panel-body">
                        <div className="event-hilights">
                          <h5>Event Highlights Photos</h5>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_1.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_2.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                          <div className="col-md-4">
                            <img
                              src="images/events/event-img_3.jpg"
                              className="img-fluid"
                              alt="event-img"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="event-highlight-discription">
                              <p>
                                {`Opening Ceremony: We kick off the event with a spectacular opening ceremony featuring a lively marching band and a parade of all the house teams. The school principal, teachers, and special guests deliver welcoming speeches. 
                                Sports Competitions: A diverse range of sports competitions awaits students of different age groups. Alongside traditional sports like soccer, basketball, volleyball, and athletics, we've incorporated non-traditional sports such as tug-of-war, sack race, egg race, and obstacle course challenges to heighten the excitement.`}
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="event-highlight-discription">
                              <p>
                                {`Inter-house Relay Race: This thrilling event involves each house forming a team comprising students from various age groups. The teams pass a baton from one member to another, with the first house to cross the finish line emerging victorious.`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          className="event-toggle"
                          data-parent="#accordion"
                          href="#collapse6"
                        >
                          Show Details
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="calander-view" role="tabpanel">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div id="calendar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
