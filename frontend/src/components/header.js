import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Nav className="ml-auto" className="main-nav">
        <NavItem right>
          <NavLink href="/">Elucidator</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/About">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/kbariotis/HTTPHeaderElucidator">Github</NavLink>
        </NavItem>
      </Nav>
    );
  }
}
