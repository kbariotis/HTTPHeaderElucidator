import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Header from './../components/header';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

import '../scss/bootstrap.scss';

const response = [
  {
    header: 'Cache-Control',
    code: 'WILL_BE_CACHED_UNTILL',
    metadata: { date: '2017-04-12Z12:12:02+03:00' },
    message: 'Browser will cache this assets until 2017-04-12',
  },
  {
    header: 'Content-Encoding',
    code: 'CONTENT_IS_ENCODED',
    metadata: { method: 'gzip' },
    message: 'The response is gziped',
  }
]

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.state = {
      showResponse: false,
    };
  }
  submit() {
    this.setState({
      showResponse: true,
    });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col><Header/></Col>
        </Row>
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Asset URL</Label>
            <Col sm={8}>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </Col>
            <Col sm={2}>
              <Button onClick={this.submit}>Submit</Button>
            </Col>
          </FormGroup>
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </Form>
        {this.state.showResponse && (
          <ListGroup>
          {response.map(item => (
            <ListGroupItem>
              <ListGroupItemHeading>{item.header}</ListGroupItemHeading>
              <ListGroupItemText>
                  {item.message}
              </ListGroupItemText>
            </ListGroupItem>
          ))}
          </ListGroup>
        )}
      </Container>
    )
  }
}
