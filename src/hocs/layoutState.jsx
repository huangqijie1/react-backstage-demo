import React, { Component } from 'react'
const layoutState = (HocComponent) => {
  class newComponent extends Component {
    state = {
      collapsed: false
    }
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
      console.log('coll===',this.state.collapsed)
    };
    componentDidMount () {
      console.log('hoc---',this)
    }
    render () {
      return <HocComponent ref={instanceComponent => this.instanceComponent = instanceComponent} collapsed={this.state.collapsed} toggle={this.toggle} {...this.props}/>
    }
  }
  return newComponent
}
export default layoutState