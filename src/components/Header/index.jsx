import React, { Component } from 'react'
import { Layout, Menu, Dropdown } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './header.less'
// import layoutState from '../../hocs/layoutState'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { Consumer } from '../../layout/basicLayout'
const { Header } = Layout;
class Headers extends Component {
  // state = {

  // }
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    // console.log('---',this)
  }
  logout = () => {
    sessionStorage.clear()
    const { history } = this.props
    history.push('/')
  }
  render() {
    console.log('collapsed---',this.props)
    const { username } = this.props
    const dropdownList = (
      <Menu>
        <Menu.Item>
          <span>修改密码</span>
        </Menu.Item>
        <Menu.Item onClick={this.logout}>
          <span>退出登录</span>
        </Menu.Item>
      </Menu>
    )
    return (
      <Consumer>
        {
          ({ collapsed, toggle }) =>
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
              })}
              <Dropdown overlay={dropdownList}>
                <div className="header_dropdown">
                    <span>{ username }</span>
                </div>
              </Dropdown>
            </Header>
        }
      </Consumer>
    )
  }
}
const mapStateToProps = state => {
  return {
    username: state.user.user.username
  }
}
Headers = connect(mapStateToProps)(Headers)
export default withRouter(Headers)