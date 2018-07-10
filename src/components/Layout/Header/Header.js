import React from "react";
import { Grid, Col, Row } from "react-bootstrap";
import moment from "moment";
import "./Header.css";

const Header = ({ companyInfo }) => {
  const companyEst = moment(companyInfo.companyEst).format("YYYY");

  return (
    <div className={"header-area"}>
      <div className={"header-content"}>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <div className={"logo-container"}>
                <h1>{companyInfo.companyName}</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <div className={"tag-line"}>
                <h3>{companyInfo.companyMotto}</h3>
              </div>
            </Col>
            <Col xs={6}>
              <div className={"banner-container"}>
                <h3>Since {companyEst}</h3>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
};

export default Header;
