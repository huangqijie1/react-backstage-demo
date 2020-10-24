import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { connect } from 'react-redux'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import Background from '../../../assets/login.jpg'
import { save_user, save_token } from '../../../reducer/user/action'
// import axios from '../../../utils/request'
import { encryption, decryption } from '../../../utils'
import './login.less'
import Axios from 'axios'
const bannerStyle = {
  width: '100%',
  height: '100%',
  background: `url(${Background}) no-repeat center center fixed`,
  backgroundSize: 'cover',
}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
}
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  onFinish = values => {
    console.log('Success:', values);
    const { history, saveUser, saveToken } = this.props
    const obj = encryption({
      data:{ username: values.username, password: values.password },
      key: 'hqj',
      param: ['password']
    })
    console.log('HQJ_token---', obj)
    const dec = decryption({
      data:{ username: values.username, password: obj.password },
      key: 'hqj',
      param: ['password']
    })
    // saveUser(values)
    // saveToken(values)
    Axios.get('/api/sys/users', {params: obj}).then(res => {
      console.log('res===', res)
      // history.push('/')
    })
  }
  componentDidMount () {
    const user = localStorage.getItem('persist:root')
    if (user) {
      const { username, password } = JSON.parse(JSON.parse(user).user).user
      const infoData = {
        username,
        password
      }
      this.$refs.setFieldsValue(infoData)
      console.log('user---', infoData, this.$refs)
    }
  }
  render() {
    const { onFinish } = this
    return (
      <div style={bannerStyle} className="banner">
        <div className="login_content">
          <Form
            {...layout}
            name="basic"
            ref={(ref) => this.$refs = ref}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入账号' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入账号" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="请输入密码"
              />
            </Form.Item>
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>记住账号密码</Checkbox>
            </Form.Item>
            <Form.Item shouldUpdate={true}>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                >
                  登录
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = dispatch => {
  return {
    saveUser (val) {
      dispatch(save_user(val))
    },
    saveToken (val) {
      dispatch(save_token(val))
    }
  }
}
Login = connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login