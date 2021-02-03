import React from "react";
import { Row, Col } from "antd";
import logo from "../../assets/logo/logo.png";
import Search from "../Search/Search";
import Notifications from "../Notifications/Notifications";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Row gutter={16} align="middle">
          <Col md={6}>
              <a className="logo" href="#">
                <img src={logo} alt="" className="logo__img"/>
              </a>
          </Col>
          <Col md={12}>
            <Search />
          </Col>
          <Col md={6}>
            <Notifications />
          </Col>
        </Row>
      </div>
    </header>
  )
}

export default Header;