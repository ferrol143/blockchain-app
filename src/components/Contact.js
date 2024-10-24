import React from "react";
import { Col, Container, Row, Form, Label, Input, FormGroup } from "reactstrap";

const Card = (props) => {
  return (
    <React.Fragment>
      <Col lg={3} md={6}>
        <div className="contact-info text-center mt-5">
          <div className="icon">
            <i className={props.iconClass}></i>
          </div>
          <div className="mt-4 pt-2">
            <h6 className="fs-17">{props.title}</h6>
            {props.isChildItem.map((item, key) => (
              <p className="text-muted mb-0" key={key}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

// Contact Data

const ContactData = [
  {
    title: "Main Office",
    iconClass: "mdi mdi-map-marker text-primary h4",
    isChildItem: ["2276 Lynn Ogden Lane Beaumont Lodgeville Road TX 77701"],
  },
  {
    title: "Phone & Email",
    iconClass: "mdi mdi-phone text-primary h4",
    isChildItem: ["Phone: +71 612-234-4023", "Fax: +954-627-9727"],
  },
  {
    title: "Contact",
    iconClass: "mdi mdi-email text-primary h4",
    isChildItem: ["www.exampledesign.com", "example@design.com"],
  },
  {
    title: "Working Hours",
    iconClass: "mdi mdi-calendar-clock text-primary h4",
    isChildItem: ["Monday-Friday: 9:00-06:00", "Saturday-Sunday: Holiday"],
  },
];

const Contact = () => {
  return (
    <React.Fragment>
      <section className="section" id="contact">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center mb-4">
                <p className="text-uppercase text-muted mb-2">Contact</p>
                <h3 className="text-uppercase">Get In Touch</h3>
                <div className="title-border mt-3"></div>
                <p className="title-desc text-muted mt-3">
                  We craft digital, graphic and dimensional thinking, to create
                  category leading brand experiences that have meaning and add a
                  value.
                </p>
              </div>
            </Col>
          </Row>

          {/*  */}

          <Row className="justify-content-center">
            {/* Contact Component Start */}

            {ContactData.map((value, idx) => (
              <Card
                key={idx}
                title={value.title}
                iconClass={value.iconClass}
                isChildItem={value.isChildItem}
              />
            ))}
            {/* Contact Component End */}
          </Row>

          <Row className="mt-5 pt-2 justify-content-center">
            <Col lg={9}>
              <div className="custom-form">
                <Form action="#" name="myForm">
                  <p id="error-msg"></p>
                  <Row>
                    <Col lg={12}>
                      <FormGroup>
                        <div className="mb-3">
                          <Label for="name" className="form-label">
                            Name* :
                          </Label>
                          <Input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                          />
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <FormGroup>
                        <div className="mb-3">
                          <Label for="email" className="form-label">
                            Email address* :
                          </Label>
                          <Input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                          />
                        </div>
                      </FormGroup>
                    </Col>

                    <Col lg={6}>
                      <FormGroup>
                        <div className="mb-3">
                          <Label for="number" className="form-label">
                            Phone number* :
                          </Label>
                          <Input
                            type="number"
                            className="form-control"
                            name="number"
                            id="number"
                            placeholder="Enter your number"
                          />
                        </div>
                      </FormGroup>
                    </Col>

                    <Col lg={12}>
                      <FormGroup>
                        <div className="mb-3">
                          <Label for="comments" className="form-label">
                            Comments :
                          </Label>
                          <Input
                            type="textarea"
                            className="form-control"
                            placeholder="Leave a comment here"
                            name="comments"
                            id="comments"
                            style={{ height: "100px" }}
                          />
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12}>
                      <FormGroup>
                        <div className="mt-3 text-end">
                          <input
                            type="submit"
                            id="submit"
                            name="send"
                            className="submitBnt btn btn-primary"
                            value="Send Message"
                          />
                          <div id="simple-msg"></div>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Contact;
