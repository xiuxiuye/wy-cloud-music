import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Routes, { RouteObject } from './routes'

export type routeObject = RouteObject

interface RouterViewProps {
  routes?: Array<RouteObject>;
}

function RouterView ({ routes = Routes }: RouterViewProps) {
  return (
    <Switch>
      {routes.map(route => resolve(route))}
    </Switch>
  )
}

function resolve (route: RouteObject) {
  if (route.redirect && !route.component) {
    return <Redirect exact={route.exact} key={route.path} from={route.path} to={route.redirect} />
  }
  return <Route exact={route.exact} key={route.path} path={route.path} render={props => <route.component {...props} routes={route.children} />}></Route>
}
export default RouterView
