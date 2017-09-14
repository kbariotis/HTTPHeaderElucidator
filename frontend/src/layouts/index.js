import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Layout, Icon, Menu, Card, Row, Col } from 'antd';

import HeaderComp from './../components/header';

const { Header, Footer, Sider, Content } = Layout;
import '../scss/boot.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Layout>
      <Header style={{'background': '#fff'}}><HeaderComp/></Header>
      <Content style={{ 'background': '#fff' }}>
        <Row type="flex" justify="center">
          <Col span={12}>
            {children()}
          </Col>
        </Row>
      </Content>
      <Footer style={{ 'background': '#fff' }}></Footer>
    </Layout>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
