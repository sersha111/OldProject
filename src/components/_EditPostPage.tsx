import React, { Component } from 'react'
import DataFormPost from './_DataFormPost'
import PreviewPost from './PreviewPost'

class EditPostPage extends Component<{}, {}> {
  render() {
    return (
      <div className="editPostPage">
        <DataFormPost />
        <PreviewPost />
      </div>
    )
  }
}
export default EditPostPage
