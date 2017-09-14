import React from 'react'
import { Icon, Menu, Card, Row, Col } from 'antd'
import Link from 'gatsby-link'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const Header = () => (
  <Menu mode="horizontal" style={{ textAlign: 'center' }}>
    <Menu.Item key="mail">
      <Link to="/">Elucidator</Link>
    </Menu.Item>
    <Menu.Item key="app">
      <Link to="/about">About</Link>
    </Menu.Item>
    <Menu.Item key="github">
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        <Icon type="github" />
      </a>
    </Menu.Item>
  </Menu>
)

export default Header
