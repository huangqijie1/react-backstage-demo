import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import './sideBar.less'
import {
  HomeOutlined,
  UserOutlined,
  MenuOutlined,
  MailOutlined
} from '@ant-design/icons';
import { Consumer } from '../../layout/basicLayout'
// import layoutState from '../../hocs/layoutState'
const { Sider } = Layout;
const menu = [
  { subMenu: '系统管理', menuKey: 1, menu: [
    { key: '1', id: '1', title: '首页', path: '/views/sys/home', icon: HomeOutlined },
    { key: '2', id: '2', title: '角色管理', path: '/views/sys/user', icon: UserOutlined },
    { key: '3', id: '3', title: '菜单管理', path: '/views/sys/menu', icon: MenuOutlined }
  ]}
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
    console.log('this.state========', this.state);
    return (
      <Consumer>
        {
          ({collapsed}) =>
            <Sider className="ant-fixed-sidemenu" trigger={null} collapsible collapsed={collapsed}>
              <div className="logo" />
              {/* <GeminiScrollbar> */}
              <Menu theme="dark" mode="inline" defaultOpenKeys={['1']} defaultSelectedKeys={['1']}>
                {
                  this.state.menus.map(menus => {
                    let {menuKey, subMenu, menu} = menus;
                    if (menus.subMenu) {
                      return (
                      <Menu.SubMenu key={menuKey} icon={<MailOutlined />} title={subMenu}>
                          {
                            menu.map(item => {
                              return <Menu.Item key={item.key} path={item.path} onClick={this.skip.bind(this)} ><span>{item.title}</span></Menu.Item>
                            })
                          }
                      </Menu.SubMenu>)
                    } else {
                      return (
                        menu.map(item => {
                          return <Menu.Item key={item.key} path={item.path} onClick={this.skip.bind(this)} ><span>{item.title}</span></Menu.Item>
                        }))
                    }
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