import React from "react";
import { Row, Col } from "antd";
import "./FooterRights.css";

const FooterRights = () => {
  return (
    <Row className="footer-rights" align="middle" justify="center">
      <Col span={24}>
          <Row justify="center">
            <span>© 2022 CRYPTO-INFO.NET</span>
          </Row>
      </Col>
      <Col span={24}>
          <Row justify="center">
            <span>All Rights Reserved © 2022 CRYPTO-INFO.NET</span>
          </Row>
      </Col>
    </Row>
  );
}

export default FooterRights;
