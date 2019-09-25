import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import { RouteWithLayout } from './components'
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts'

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views'
import { useSelector } from 'react-redux'

const Routes = () => {
  const currentLangcode = useSelector(state => state.language.langcode)

  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to={currentLangcode ? `/${currentLangcode}/dashboard` : '/en/dashboard'}
      />

      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/:langcode/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/:langcode/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/:langcode/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/:langcode/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/:langcode/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/:langcode/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/:langcode/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/:langcode/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/:langcode/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  )
}

export default Routes
