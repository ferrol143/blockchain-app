import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const PricingData = [
  {
    title: "CLASSIC",
    price: "$34.99",
    isChildItem: [
      { id: 1, subItem: "Customizad Plans" },
      { id: 2, subItem: "Billing Report" },
      { id: 3, subItem: "Access to Asana" },
    ],
  },
  {
    title: "Popular",
    price: "$49.99",
    isSale: true,
    isChildItem: [
      { id: 1, subItem: "Customizad Plans" },
      { id: 2, subItem: "Billing Report" },
      { id: 3, subItem: "Access to Asana" },
      { id: 3, subItem: "Unlimited themes" },
    ],
  },
  {
    title: "Ultimate",
    price: "$89.99",
    isChildItem: [
      { id: 1, subItem: "Customizad Plans" },
      { id: 2, subItem: "Billing Report" },
      { id: 3, subItem: "Access to Asana" },
    ],
  },
];

const Pricing = () => {
  return (
    <React.Fragment>
      <section className="section bg-light" id="pricing">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="header-title text-center mb-4">
                <p className="text-uppercase text-muted mb-2">Offers</p>
                <h3>Choose Your Best Plan</h3>
                <div className="title-border mt-3"></div>
                <p className="title-desc text-muted mt-3">
                  We craft digital, graphic and dimensional thinking, to create
                  category leading brand experiences that have meaning and add a
                  value.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center">
            {/* Pricing Component Start */}

            {PricingData.map((items, key) => (
              <Col key={key} lg={4} md={6}>
                <div className="pricing-box bg-white box-shadow text-center p-5 mt-5 rounded">
                  {items.isSale && (
                    <div className="pricing-label">
                      <h5 className="text-white fs-16">Sale</h5>
                    </div>
                  )}

                  <p className="price-title mb-4 pb-3">{items.title}</p>
                  <h1 className="mb-0 price">{items.price}</h1>
                  <div className="pricing-features mt-4 pt-4">
                    {items.isChildItem.map((item, key) => (
                      <p key={key}>{item.subItem}</p>
                    ))}
                  </div>
                  <div className="mt-5">
                    <Link to="/#" className="btn btn-primary w-100">
                      Purchase Now
                    </Link>
                  </div>
                </div>
                {/* <!--end pricing-box--> */}
              </Col>
            ))}
            {/* Pricing Component End */}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Pricing;
