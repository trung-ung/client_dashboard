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
import { isToday } from 'date-fns'

// const style = createStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap'
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1)
//   },
//   dense: {
//     marginTop: theme.spacing(2)
//   },
//   menu: {
//     width: 200
//   }
// }))

// export default
export const DayRangeFilter = props => {
  // const from = new Date(useSelector(state => state.filter.from))
  // const to = new Date(useSelector(state => state.filter.to))
  const from = useSelector(state => state.filter.from)
  const to = useSelector(state => state.filter.to)
  // const newTo = { ...to }
  // const oneMonthBeforeTo = moment(newTo)
  //   .subtract(1, 'month')
  //   .toDate()

  const oneMonthBeforeTo = subMonths(to, 1)

  const filterActions = useActions(FilterActions)
  const bookingActions = useActions(BookingActions)

  // console.log('from', from)
  // console.log('to', to)
  // console.log('oneMonthBeforeTo', oneMonthBeforeTo)

  // const [to, setTo] = useState(new Date())
  // const [from, setFrom] = useState(
  //   moment(new Date())
  //     .subtract('1', 'month')
  //     .toDate()
  // )

  const toInputEl = useRef(null)

  // useEffect(() => {
  //   const showFromMonth = () => {
  //     if (!from) {
  //       return
  //     }
  //     //if (moment(to).diff(moment(from), 'months') < 2) {
  //     if (toInputEl.current.getDayPicker()) {
  //       toInputEl.current.getDayPicker().showMonth(oneMonthBeforeTo)
  //     }
  //     //}
  //   }
  //   showFromMonth()
  // }, [from, to, toInputEl,oneMonthBeforeTo])

  const handleFromChange = from => {
    // Change the from date and focus the "to" input field
    filterActions.setFromFilter(from)
    filterActions.setDurationFilter('Custom')
    // setFrom(from)
  }

  const handleToChange = to => {
    filterActions.setToFilter(to)
    filterActions.setDurationFilter('Custom')
    bookingActions.fetchBookingInfo()
    // setTo(to)
  }

  const modifiers = { start: from, end: to }

  return (
    <>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
        <div className="InputFromTo">
          <DayPickerInput
            style={{ width: '100%' }}
            component={DayRangeFilterInput}
            inputProps={{ label: 'From' }}
            value={from}
            placeholder="From"
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { after: to },
              toMonth: to,
              modifiers,
              numberOfMonths: 2,
              onDayClick: () => {
                toInputEl.current.getInput().focus()
              }
            }}
            onDayChange={e => {
              handleFromChange(e)
            }}
          />
        </div>
      </Grid>
      {/* <span className="InputFromTo-to"> */}
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
        <div className="InputFromTo">
          <span className="InputFromTo-to">
            <DayPickerInput
              style={{ width: '100%' }}
              component={DayRangeFilterInput}
              inputProps={{
                label: 'To',
                helperText: isToday(to) ? 'Today' : ''
              }}
              ref={el => (toInputEl.current = el)}
              value={to}
              placeholder="To"
              format="LL"
              formatDate={formatDate}
              parseDate={parseDate}
              dayPickerProps={{
                selectedDays: [from, { from, to }],
                disabledDays: { after: new Date() },
                modifiers,
                month: oneMonthBeforeTo,
                fromMonth: from,
                numberOfMonths: 2
              }}
              onDayChange={e => {
                handleToChange(e)
              }}
              onDayPickerShow={() => {
                toInputEl.current.getDayPicker().showMonth(oneMonthBeforeTo)
              }}
            />
          </span>
        </div>
      </Grid>
      {/* </span> */}
      <Helmet>
        <style>{`
  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #0072e5;
  }
  .InputFromTo .DayPicker-Day {
    border-radius: 0 !important;
  }
  .InputFromTo .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .InputFromTo .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .InputFromTo .DayPickerInput-Overlay {
    width: 550px;
  }
  .InputFromTo-to .DayPickerInput-Overlay {
    margin-left: -198px;
  }
`}</style>
      </Helmet>
      {/* </div> */}
    </>
  )
}

export default DayRangeFilter

//export default withStyles(style)(DayRangeFilter)
