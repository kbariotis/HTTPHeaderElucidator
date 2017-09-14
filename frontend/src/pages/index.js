import React from 'react'
import Link from 'gatsby-link'
import { Card, Row, Col } from 'antd'
import { Spin } from 'antd'

import Form from './../components/form'

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showResponse: false,
      loading: false,
      response: [],
    }

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
      },
    ]
  }

  onSuccess() {
    this.setState({
      loading: true,
      response: [],
    })

    setTimeout(
      () =>
        this.setState({
          loading: false,
          response: this.response,
        }),
      1000
    )
  }

  render() {
    return (
      <div>
        <Form onSuccess={() => this.onSuccess()} />
        {this.state.loading && (
          <div
            style={{
              textAlign: 'center',
              paddingTop: '50px',
              paddingBottom: '50px',
            }}
          >
            <Spin />
          </div>
        )}
        {!!this.state.response.length && (
          <div>
            {this.response.map((item, index) => (
              <Card key={index} title={item.header}>
                {item.message}
              </Card>
            ))}
          </div>
        )}
      </div>
    )
  }
}
