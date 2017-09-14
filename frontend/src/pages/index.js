import React from 'react'
import Link from 'gatsby-link'
import { Card, Row, Col } from 'antd';
import { Form, Icon, Input, Button } from 'antd';
import { Spin } from 'antd';

const FormItem = Form.Item;

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.state = {
      showResponse: false,
      loading: false,
      response: [],
    };

    this.response = [
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

  }
  submit(e) {
    e.preventDefault();

    this.setState({
      loading: true,
      response: [],
    });

    setTimeout(() => this.setState({
      loading: false,
      response: this.response,
    }), 1000);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.submit} style={{paddingTop: '20px'}}>
          <FormItem extra="This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.">
            <Input style={{ width: '65%', marginRight: '3%' }} type="url" name="url" id="url" placeholder="Your asset URL" />
            <Button style={{ width: '32%' }} type="primary" htmlType="submit">Enlighten me</Button>
          </FormItem>
        </Form>
        {this.state.loading && (
          <div style={{ 'textAlign': 'center', paddingTop: '50px', paddingBottom: '50px' }}>
            <Spin />
          </div>
        )}
        {!!this.state.response.length && (
          <div>
            {this.response.map((item, index) => (
              <Card key={index} title={item.header}>{item.message}</Card>
            ))}
          </div>
        )}
      </div>
    )
  }
}
