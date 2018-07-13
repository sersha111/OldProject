import React, { Component } from 'react'

class DataFormPost extends Component<{}, {}> {
  render() {
    return (
      <form className="dataFormPost">
        Title:<br />
        <input type="text" name="title" value="" />
        <br />> Body:<br />
        <input type="text" name="body" value="" />
        <br />><br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default DataFormPost
