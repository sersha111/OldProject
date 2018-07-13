import React, { Component } from 'react'
import { Form, Input, Select, Button, InputNumber, Row, Col, Slider } from 'antd'
import { EnumColor } from '../index'

const { Option } = Select

const FormItem = Form.Item

interface Props {
  title: string
  keywords: string
  description: any
  priority: number
  slidesPerView: number
  rows: number
  color: EnumColor
  onChangeTitle: any
  onChangeDescription: any
  onChangeKeywords: any
  onChangePriority: any
  onChangeSlidesPerView: any
  onChangeRows: any
  onChangeColor: any
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
      keywords,
      priority,
      slidesPerView,
      rows,
      color,
      onChangeTitle,
      onChangeDescription,
      onChangeKeywords,
      onChangePriority,
      onChangeSlidesPerView,
      onChangeRows,
      onChangeColor,
    } = this.props

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
            })(<Input placeholder="Please input the description" onInput={onChangeDescription} />)}
          </FormItem>
          <FormItem label={'Keywords'} colon={false}>
            {getFieldDecorator('keywords', {
              initialValue: keywords,
              rules: [{ required: true, message: 'Please input keywords!' }],
            })(<Input placeholder="Please input keywords" onInput={onChangeKeywords} />)}
          </FormItem>
          <FormItem label={'Priority'} colon={false}>
            {getFieldDecorator('priority', {
              initialValue: priority,
              rules: [{ required: false, message: 'Please set the priority!' }],
            })(<InputNumber min={1} max={10} onChange={onChangePriority} />)}
          </FormItem>
          {/* <FormItem label={'Slides per view'} colon={false}>
            {getFieldDecorator('slidesPerView', {
              initialValue: slidesPerView,
              rules: [{ required: false, message: 'Please set the number of slides per view!' }],
            })(<Input placeholder="Please set the number of slides per view" onInput={onChangeSlidesPerView} />)}
          </FormItem> */}

          <FormItem label={'Slides per view'} colon={false}>
            {getFieldDecorator('slidesPerView', {
              initialValue: slidesPerView,
              rules: [{ required: false, message: 'Please set the number of slides per view!' }],
            })(
              <Row>
                <Col span={12}>
                  <Slider min={1} max={20} onChange={onChangeSlidesPerView} value={slidesPerView} />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    max={20}
                    style={{ marginLeft: 16 }}
                    value={slidesPerView}
                    onChange={onChangeSlidesPerView}
                  />
                </Col>
              </Row>,
            )}
          </FormItem>

          <FormItem label={'Rows'} colon={false}>
            {getFieldDecorator('rows', {
              initialValue: rows,
              rules: [{ required: false, message: 'Please set the number of rows!' }],
            })(<InputNumber min={1} max={10} onChange={onChangeRows} />)}
          </FormItem>

          <FormItem label={'Color'} colon={false}>
            {getFieldDecorator('color', {
              initialValue: color,
              rules: [{ required: true, message: 'Please select the color' }],
            })(
              <Select placeholder="Select the color" onChange={onChangeColor}>
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

const TagEditForm = Form.create()(PostEditFormToWrap)
export default TagEditForm
