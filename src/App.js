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
import { useActions } from './actions'
const browserHistory = createBrowserHistory()

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
})

validate.validators = {
  ...validate.validators,
  ...validators
}

export const App = () => {
  const languageActions = useActions(LanguageActions)
  useEffect(() => {
    languageActions.fetchLanguage()
  }, [languageActions])

  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  )
}

export default App
