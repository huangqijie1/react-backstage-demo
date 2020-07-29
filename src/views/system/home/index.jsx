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

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      username: ''
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
  }
  componentWillUnmount () {
    // console.log('componentWillUnmount---')
  }
  render() {
    const { username } = this.props
    // console.log('render---',this.props)
    return (
      <>
        <h1>
          首页----{this.state.num} ----- <button onClick={this.addnum}>+</button>
        </h1>
        <h2>当前登录的用户名是---{username}</h2>
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