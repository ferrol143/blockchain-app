import React, {useState} from "react";
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

const Sertificate = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = () => {
        setIsLoading(true); 

        setTimeout(() => {
        setIsLoading(false); 
        }, 2000);
    };

  return (
    <React.Fragment>
      <section className="section" id="sertificate">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center mb-4">
                <p className="text-uppercase text-muted mb-2">Cek Sertifikat</p>
                <h3 className="text-uppercase">Verifikasi Keaslian Sertifikat Digital</h3>
                <div className="title-border mt-3"></div>
                <p className="title-desc text-muted mt-3">
                  Cukup masukkan kode sertifikat di bawah ini, dan sistem kami akan langsung memvalidasi informasi Anda.
                </p>
              </div>
            </Col>
          </Row>

          {/*  */}

          <Row className="mt-5 pt-2 justify-content-center">
            <Col lg={9}>
              <div className="custom-form">
                <Form action="#" name="myForm">
                    <Row>
                        <Col lg={12}>
                        <FormGroup>
                            <div className="input-group">
                                <Input
                                    name="name"
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="URL Sertifikat"
                                />
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={handleButtonClick}
                                    disabled={isLoading}
                                    >
                                    {isLoading ? (
                                        <>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        </>
                                    ) : (
                                        'Verifikasi'
                                    )}
                                </button>
                            </div>
                            <div id="simple-msg"></div>
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

export default Sertificate;
