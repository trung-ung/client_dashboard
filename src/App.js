import { ThemeProvider } from '@material-ui/styles'
import { createBrowserHistory } from 'history'
import React, { Component } from 'react'
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

const browserHistory = createBrowserHistory()

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  // draw: chartjs.draw
})

validate.validators = {
  ...validate.validators,
  ...validators
}

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    )
  }
}
