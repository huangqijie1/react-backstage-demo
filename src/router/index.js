// import Loadable from 'react-loadable'
import { lazy } from 'react'
import Home from '../views/system/home'
import UserSet from '../views/system/userSet'
import MenuSet from '../views/system/menuSet'

// const Home = lazy(()=> import('../views/system/home'));
// const UserSet = lazy(()=> import('../views/system/userSet'));
// const MenuSet = lazy(()=> import('../views/system/menuSet'));

// const UserSet = Loadable({
//   loder: () => import('../views/system/userSet'),
//   loading: () => import('../views/system/userSet')
// })
// const MenuSet = Loadable({
//   loder: () => import('../views/system/menuSet'),
//   loading: () => import('../views/system/menuSet')
// })
const routes = [
  {
    path: '/views/sys/home',
    name: 'Home',
    component: Home,
    title: '首页'
  },
  {
    path: '/views/sys/user',
    name: 'UserSet',
    component: UserSet,
    title: '用户管理'
  },
  {
    path: '/views/sys/menu',
    name: 'MenuSet',
    component: MenuSet,
    title: '菜单管理'
  }
]
export { routes }