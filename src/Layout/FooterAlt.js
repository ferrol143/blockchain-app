import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const FooterAlt = () => {
  return (
    <React.Fragment>
      <div className="footer-alt py-3">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <p className="text-white-50 mb-0">
                  {new Date().getFullYear()} © zoric - Landing Page Template by{" "}
                  <Link
                    to="//codebucks.in/"
                    target="_blank"
                    rel="noreferrer"
                    // Add "rel" after react js Warning
                    className="text-reset text-decoration-underline"
                  >
                    Codebucks
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
export default FooterAlt;
