import React from 'react'
import Link from 'gatsby-link'
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.validUrlRegex = '^(\/[\w,\.]+)+\.\w+(\?(\w+=[\w\d]+(&\w+=[\w\d]+)+)+)*$';
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  submit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.onSuccess();
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    const urlError = isFieldTouched('url') && getFieldError('url');

    return (
      <Form onSubmit={this.submit} style={{ paddingTop: '20px' }}>
        <FormItem
          extra="This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line."
          validateStatus={urlError ? 'error' : ''}
          help={urlError || ''}
        >
          {getFieldDecorator('url', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input style={{ width: '65%', marginRight: '3%' }} type="url" name="url" id="url" placeholder="Your asset URL" />
            )}
          <Button
            disabled={hasErrors(getFieldsError())}
            style={{ width: '32%' }}
            type="primary"
            htmlType="submit">Enlighten me</Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(FormComponent);
