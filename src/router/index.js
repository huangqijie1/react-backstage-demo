// import Loadable from 'react-loadable'
import Home from '../views/system/home'
import UserSet from '../views/system/userSet'
import MenuSet from '../views/system/menuSet'
// const Home = Loadable({
//   loder: () => import('@/views/system/home'),
//   loading: () => import('@/views/system/home')
// })
// const UserSet = Loadable({
//   loder: () => import('@/views/system/userSet'),
//   loading: () => import('@/views/system/userSet')
// })
// const MenuSet = Loadable({
//   loder: () => import('@/views/system/menuSet'),
//   loading: () => import('@/views/system/menuSet')
// })
const routes = [
  {
    path: '/sys/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sys/user',
    name: 'UserSet',
    component: UserSet,
  },
  {
    path: '/sys/menu',
    name: 'MenuSet',
    component: MenuSet
  }
]
export { routes }