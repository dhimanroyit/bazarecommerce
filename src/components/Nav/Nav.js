import React from "react";
import { Row, Col, Menu, Dropdown } from "antd";
const {SubMenu} = Menu;

const Nav = () => {
  const menu = (
    <Menu className="categories__nav" mode="vertical">
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
  </Menu>
  );
  return (
    <nav className="nav">
      <div className="container">
        <Row gutter={16} align="middle">
          <Col md={6}>
          
          <Dropdown overlay={menu}>
          <button className="categories">
            <span className="categories__title">All Categories</span>
            <i class="fas fa-bars categories__icon"></i>
          </button>
          </Dropdown>
          </Col>
          <Col md={12}>
            <Menu className="menu" mode="horizontal">
              <Menu.Item key="shop" >
                Shop
              </Menu.Item>
              <SubMenu key="SubMenu" title="Products">
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <Menu.Item key="contact">
                Contact us
              </Menu.Item>
            </Menu>
          </Col>
          <Col md={6}>
            <div className="phone">
              <i class="fas fa-phone-volume phone__icon"></i>
              <span className="phone__number">924654845</span>

            </div>
          </Col>
        </Row>
      </div>
    </nav>
  )
}

export default Nav;