
import React, { Component } from 'react'
import { Table } from 'antd'
class JTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    };
}
  render () {
    console.log('props===---', this.props)
    return (
      <Table {...this.props} />
    )
  }
}
export default JTable