import React, { Component } from 'react'
import { Form, Input, Select, Button } from 'antd'
import { EnumColor } from '../index'

const { Option } = Select

const { TextArea } = Input

const FormItem = Form.Item

interface Props {
  title: string
  description: any
  photographer: string
  color: EnumColor
  onChangePhotographer: any
  onChangeDescription: any
  onChangeColor: any
  onChangeTitle: any
  onSubmit: any
  form: any
}

class PostEditFormToWrap extends Component<Props, {}> {
  handleSubmit = (event: any) => {
    event.preventDefault()
    this.props.form.validateFieldsAndScroll((error: any, values: any) => {
      if (!error) {
        console.log('Received values of form: ', values)
        this.props.onSubmit()
      }
    })
  }

  handleClickNew = (event: any) => {
    console.log('new')
    // this.props.onClickNew()
  }

  render() {
    const {
      form: { getFieldDecorator },
      title,
      description,
      photographer,
      color,
      onChangePhotographer,
      onChangeDescription,
      onChangeColor,
      onChangeTitle,
    } = this.props
    console.log('this.props', this.props)

    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem label={'Title'} colon={false}>
            {getFieldDecorator('title', {
              initialValue: title,
              rules: [{ required: true, message: 'Please input the title!' }],
            })(<Input placeholder="Please input the title" onInput={onChangeTitle} />)}
          </FormItem>
          <FormItem label={'Description'} colon={false}>
            {getFieldDecorator('description', {
              initialValue: description,
              rules: [{ required: true, message: 'Please input the description!' }],
            })(
              <TextArea
                autosize={{ minRows: 3, maxRows: 8 }}
                onInput={onChangeDescription}
                placeholder="Please input the main text here"
              />,
            )}
          </FormItem>
          <FormItem label={'Photographer'} colon={false}>
            {getFieldDecorator('photographer', {
              initialValue: photographer,
              rules: [{ required: false, message: 'Please input the photographer name!' }],
            })(<Input placeholder="Please type the photographer name" onInput={onChangePhotographer} />)}
          </FormItem>
          <FormItem label={'Color'} colon={false}>
            {getFieldDecorator('color', {
              initialValue: color,
              rules: [{ required: true, message: 'Please select the color' }],
            })(
              <Select
                // style={{ width: 200 }}
                placeholder="Select the color"
                onChange={onChangeColor}
                // onFocus={handleFocus}
                // onBlur={handleBlur}
              >
                <Option value="red">red</Option>
                <Option value="blue">blue</Option>
                <Option value="yellow">yellow</Option>
              </Select>,
            )}
          </FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

const PostEditFrom = Form.create()(PostEditFormToWrap)
export default PostEditFrom
