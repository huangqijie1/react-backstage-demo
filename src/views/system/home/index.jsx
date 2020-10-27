// import React, { useState, useEffect } from 'react'

// const Home = (props) => {
//   const [name, setName] = useState('')
//   useEffect(() => {
//     console.log('name---',name)
//     setName('hqj---')
//     return () => {
//       console.log('name2---',name)
//     }
//   }, [name])
//   return (
//     <h1>
//       { name }首页
//     </h1>
//   )
// }
// export default Home
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import JTable from '../../../components/JTable';
const data = [
  { name: '德玛', gender: '男', age: '22', nationality: '艾欧尼亚', nativePlace: '广东省广州市天河区', hobby: '蹲草丛' },
  { name: '卡莎', gender: '女', age: '20', nationality: '艾欧尼亚', nativePlace: '广东省佛山市顺德区', hobby: '打游戏' },
  { name: '亚索', gender: '男', age: '21', nationality: '艾欧尼亚', nativePlace: '广东省广州市白云区', hobby: '吹笛子' },
  { name: '盲僧', gender: '男', age: '26', nationality: '艾欧尼亚', nativePlace: '广东省广州市黄埔区', hobby: '装逼' },
  { name: '德玛', gender: '男', age: '22', nationality: '艾欧尼亚', nativePlace: '广东省广州市天河区', hobby: '蹲草丛' },
  { name: '卡莎', gender: '女', age: '20', nationality: '艾欧尼亚', nativePlace: '广东省佛山市顺德区', hobby: '打游戏' },
  { name: '亚索', gender: '男', age: '21', nationality: '艾欧尼亚', nativePlace: '广东省广州市白云区', hobby: '吹笛子' },
  { name: '盲僧', gender: '男', age: '26', nationality: '艾欧尼亚', nativePlace: '广东省广州市黄埔区', hobby: '装逼' },
]
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      username: '',
      tableConfig: {
        columns: [
          {
            title: '名称',
            dataIndex: 'name',
            width: 200,
            key: '1'
          },
          {
            title: '性别',
            dataIndex: 'gender',
            width: 100,
            key: '2'
          },
          {
            title: '年龄',
            dataIndex: 'age',
            width: 100,
            key: '3'
          },
          {
            title: '国籍',
            dataIndex: 'nationality',
            width: 150,
            key: '4'
          },
          {
            title: '籍贯',
            dataIndex: 'nativePlace',
            width: 200,
            key: '5'
          },
          {
            title: '爱好',
            dataIndex: 'hobby',
            width: 200,
            key: '6'
          }
        ],
        dataSource: data,
        pagination: 20,
        scroll: { y: 300 }
      }
    }
  }
  addnum = () => {
    this.setState((prevState) => {
      return {
        num: prevState.num + 1
      }
    })
    // console.log('username---',username)
  }
  static getDerivedStateFromProps () {
    // console.log('getDerivedStateFromProps---')
    return null
  }
  componentDidMount () {
    // console.log('componentDidMount---')
    // this.tableConfig.dataSource = data
  }
  componentWillUnmount () {
    // console.log('componentWillUnmount---')
  }
  render() {
    const { username } = this.props
    const { tableConfig, num } = this.state
    // console.log('render---',this.props)
    return (
      <>
        <h1>
          首页----{num} ----- <button onClick={this.addnum}>+</button>
        </h1>
        <h2>当前登录的用户名是---{username}</h2>
        {/* <JTable {...tableConfig} />, */}
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    username: state.user.user.username
  }
}
Home = connect(mapStateToProps)(Home)
export default Home