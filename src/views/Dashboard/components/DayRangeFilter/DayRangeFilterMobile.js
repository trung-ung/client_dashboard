import { Grid, Typography } from '@material-ui/core'
//import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import { formatDate, parseDate } from 'react-day-picker/moment'
import Helmet from 'react-helmet'
import DayRangeFilterInput from './DayRangeFilterInput'
import { useSelector } from 'react-redux'
import * as FilterActions from '../../../../actions/filter'
import * as BookingActions from '../../../../actions/bookingInfo'
import { useActions } from '../../../../actions'

import subMonths from 'date-fns/subMonths'
import { isToday, format } from 'date-fns'
import YearMonthForm from './YearMonthForm'
import { DatePicker } from '@material-ui/pickers'
import Toolbar from '@material-ui/core/Toolbar'
import { createMuiTheme } from '@material-ui/core/styles'
import { colors } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
const white = '#FFFFFF'
const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: white,
      dark: '#003366',
      main: '#0054a8',
      light: '#0072e5'
    },
    secondary: {
      contrastText: white,
      dark: colors.blue[900],
      main: colors.blue['A400'],
      light: colors.blue['A400']
    }
  }
})

export const DayRangeFilter = props => {
  const from = useSelector(state => state.filter.from)
  const to = useSelector(state => state.filter.to)
  //const [step, setStep] = useState(1)

  const oneMonthBeforeTo = subMonths(to, 1)

  const step = useSelector(store => store.filter.step)

  const filterActions = useActions(FilterActions)
  const bookingActions = useActions(BookingActions)

  const toText = useSelector(state => state.language.text.to)
  const fromText = useSelector(state => state.language.text.from)
  const todayText = useSelector(state => state.language.text.today)

  const handleFromChange = from => {
    filterActions.setFromFilter(from)
    filterActions.setDurationFilter('Custom')
    if (step < 2) {
      // setStep(step => step + 1)
      filterActions.setStepFilter(step + 1)
    }
  }

  const handleToChange = to => {
    filterActions.setToFilter(to)
    filterActions.setDurationFilter('Custom')
    if (step < 2) {
      // setStep(step => step + 1)
      filterActions.setStepFilter(step + 1)
    }
  }

  return (
    <>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
        <ThemeProvider theme={theme}>
          <DatePicker
            autoOk
            label={fromText}
            format="dd/MM/yyyy"
            inputVariant="outlined"
            disableFuture
            value={from}
            onChange={handleFromChange}
            style={{ width: '100%' }}
          />
        </ThemeProvider>
      </Grid>

      <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
        <ThemeProvider theme={theme}>
          <DatePicker
            // ToolbarComponent={props => {
            //   console.log('propsssssss', props)
            //   return (
            //     <Toolbar {...props}>
            //       <Typography></Typography>
            //       <Typography></Typography>
            //     </Toolbar>
            //   )
            // }}
            autoOk
            label={toText}
            format="dd/MM/yyyy"
            inputVariant="outlined"
            minDate={new Date(from)}
            disableFuture
            value={to}
            onChange={handleToChange}
            style={{ width: '100%' }}
          />
        </ThemeProvider>
      </Grid>
    </>
  )
}
export default DayRangeFilter
