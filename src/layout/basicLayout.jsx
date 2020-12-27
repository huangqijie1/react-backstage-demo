import React, { Component } from 'react'
import './basicLayout.css'
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import RouterViews from '../components/routerViews'
import Header from '../components/Header'
import Sider from '../components/sideBar'
const { Content } = Layout;
export const { Provider, Consumer } = React.createContext()
class BasicLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    console.log('coll===',this.props)
  };
  componentDidMount () {
    console.log('111111111===')
    const { history } = this.props
    const token = sessionStorage.getItem('HQJ_token') // 如果没登录，跳转到登录页面
    if (!token) {
      history.push('/login')
    } 
  }
  render() {
    return (
      <Layout>
        <Provider value={{ collapsed: this.state.collapsed, toggle: this.toggle}}>
          <Sider/>
          <Layout className="site-layout">
            <Header/>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <RouterViews />
            </Content>
          </Layout>
        </Provider>
      </Layout>
    )
  }
}
export default withRouter(BasicLayout)