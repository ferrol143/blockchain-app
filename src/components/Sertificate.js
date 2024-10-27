import React, {useState} from "react";
import { Col, Container, Row, Form, Spinner, Label, Input, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FaCheck } from "react-icons/fa";

const Sertificate = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const certificateData = [
    { status: "completed", text: "Diterbitkan pada 15 Oktober 2020" },
    { status: "completed", text: "Diterbitkan oleh IPB Univeristy" },
    { status: "completed", text: "Diterbitkan menggunakan Alphachain" },
    { status: "completed", text: "Diterbitkan untuk Ferrol Azki Mashudi" },
    { status: "loading", text: "Diterima pada 20 Oktober 2020" },
    { status: "loading", text: "Terakhir di update pada 20 Oktober 2020" },
    { status: "loading", text: "Terverivikasi" },
  ];

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
                                <Button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={toggle}
                                    >
                                    Verifikasi
                                </Button>
                            </div>
                            <div id="simple-msg"></div>
                        </FormGroup>
                        </Col>
                    </Row>
                </Form>
              </div>
              <Modal isOpen={modal} toggle={toggle} centered={true} size="md">
                <ModalHeader toggle={toggle}>
                  <p className="fs-4 fw-bold mb-0 text-center">Verifikasi</p>
                </ModalHeader>
                <ModalBody className="mx-3 mb-3">
                  {certificateData.map((detail, index) => (
                    <React.Fragment key={index}>
                      <Row>
                        <Col xs={1}>
                          {detail.status === "completed" ? (
                            <FaCheck className="text-success" />
                          ) : (
                            <Spinner size="sm" color="secondary" />
                          )}
                        </Col>
                        <Col className={index === certificateData.length - 1 ? "fw-bold text-uppercase" : ""}>
                          {detail.text}
                        </Col>
                      </Row>
                      {index < certificateData.length - 1 && <hr />}
                    </React.Fragment>
                  ))}
                </ModalBody>
              </Modal>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Sertificate;
