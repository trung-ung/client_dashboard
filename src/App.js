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
import * as AuthActions from './actions/auth'
import { useActions } from './actions'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
export const browserHistory = createBrowserHistory()

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
})

Chart.scaleService.updateScaleDefaults('linear', {
  ticks: {
    min: 0
  }
})

validate.validators = {
  ...validate.validators,
  ...validators
}

export const App = props => {
  const languageActions = useActions(LanguageActions)
  const filterActions = useActions(FilterActions)
  const authActions = useActions(AuthActions)
  // useEffect(() => {
  //   languageActions.fetchLanguage()
  //   // filterActions.setLanguageFilter()
  // }, [languageActions])

  useEffect(() => {
    authActions.loadUser()
  }, [authActions])

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  )
}

export default App
