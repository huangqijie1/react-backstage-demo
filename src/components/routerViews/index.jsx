import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
import { Switch } from 'react-router'
import { renderRoutes } from 'react-router-config'
import { routes } from '../../router'
const RouterViews = (props) => {
  console.log('spin-------')
  return (
    <Switch>
      {renderRoutes(routes)}
    </Switch>
  )
}
export default RouterViews