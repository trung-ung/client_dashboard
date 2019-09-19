import { ThemeProvider } from '@material-ui/styles'
import { createBrowserHistory } from 'history'
import React, { useEffect } from 'react'
import { Chart } from 'react-chartjs-2'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { Router } from 'react-router-dom'
import validate from 'validate.js'
import './assets/scss/index.scss'
import validators from './common/validators'
import { chartjs } from './helpers'
import Routes from './Routes'
import theme from './theme'
import 'chartjs-plugin-datalabels'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import * as LanguageActions from './actions/language'
import * as FilterActions from './actions/filter'
import { useActions } from './actions'
export const browserHistory = createBrowserHistory()

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
})

validate.validators = {
  ...validate.validators,
  ...validators
}

export const App = props => {
  const languageActions = useActions(LanguageActions)
  const filterActions = useActions(FilterActions)

  // useEffect(() => {
  //   languageActions.fetchLanguage()
  //   // filterActions.setLanguageFilter()
  // }, [languageActions])

  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  )
}

export default App
