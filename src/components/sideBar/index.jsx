import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import './sideBar.less'
import {
  HomeOutlined,
  UserOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Consumer } from '../../layout/basicLayout'
// import layoutState from '../../hocs/layoutState'
const { Sider } = Layout;
const menu = [
  { key: '1', id: '1', title: '首页', path: '/sys/home', icon: HomeOutlined },
  { key: '2', id: '2', title: '角色管理', path: '/sys/user', icon: UserOutlined },
  { key: '3', id: '3', title: '菜单管理', path: '/sys/menu', icon: MenuOutlined },
]
class SideBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menus: [],
      isok: false
    }
  }
  static getDerivedStateFromProps (props,state) {
    console.log('static---', props, state)
    if (state.menus) return { menus: menu }
    return null
    // return { menus: menu }
  }
  componentDidMount () {
    // console.log('sider---',this)
  }
  skip (e) {
    const { history } = this.props
    // console.log('666---',this.props,e)
    history.push(e.item.props.path)
  }
  render () {
    return (
      <Consumer>
        {
          ({collapsed}) => 
            <Sider className="ant-fixed-sidemenu" trigger={null} collapsible collapsed={collapsed}>
              <div className="logo" />
              {/* <GeminiScrollbar> */}
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                  {/* <Menu.Item key="1" path="" icon={<UserOutlined />}>
                    首页
                  </Menu.Item>
                  <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    角色管理
                  </Menu.Item>
                  <Menu.Item key="3" icon={<UploadOutlined />}>
                    菜单管理
                  </Menu.Item> */}
                  {
                    this.state.menus.map(item => {
                      return <Menu.Item key={item.key} path={item.path} onClick={this.skip.bind(this)} icon={<item.icon />}><span>{item.title}</span></Menu.Item>
                    })
                  }
                </Menu>
              {/* </GeminiScrollbar> */}
            </Sider>
        }
      </Consumer>
    )
  }
}
SideBar = withRouter(SideBar)
export default SideBar