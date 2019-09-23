import { Grid } from '@material-ui/core'
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
        <DatePicker
          autoOk
          label="From"
          format="dd/MM/yyyy"
          clearable
          inputVariant="outlined"
          disableFuture
          value={from}
          onChange={handleFromChange}
          style={{ width: '100%' }}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
        <DatePicker
          autoOk
          label="To"
          format="dd/MM/yyyy"
          inputVariant="outlined"
          clearable
          disableFuture
          value={to}
          onChange={handleToChange}
          style={{ width: '100%' }}
        />
      </Grid>
    </>
  )
}
export default DayRangeFilter
