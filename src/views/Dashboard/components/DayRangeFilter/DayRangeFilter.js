import { Grid } from '@material-ui/core'
import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import { formatDate, parseDate } from 'react-day-picker/moment'
import DayRangeFilterInput from './DayRangeFilterInput'

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
  const [to, setTo] = useState(undefined)
  const [from, setFrom] = useState(undefined)
  const toInputEl = useRef(null)

  useEffect(() => {
    const showFromMonth = () => {
      if (!from) {
        return
      }
      if (moment(to).diff(moment(from), 'months') < 2) {
        toInputEl.current.getDayPicker().showMonth(from)
      }
    }
    showFromMonth()
  }, [from, to, toInputEl])

  const handleFromChange = from => {
    // Change the from date and focus the "to" input field
    setFrom(from)
  }

  const handleToChange = to => {
    setTo(to)
  }

  const modifiers = { start: from, end: to }

  return (
    <>
      <Grid item lg={3} sm={3} xl={3} xs={12}>
        <DayPickerInput
          style={{ width: '100%' }}
          component={DayRangeFilterInput}
          inputProps={{ helperText: 'From' }}
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
          onDayChange={handleFromChange}
        />
      </Grid>

      <Grid item lg={3} sm={3} xl={3} xs={12}>
        <DayPickerInput
          style={{ width: '100%' }}
          component={DayRangeFilterInput}
          inputProps={{ helperText: 'To' }}
          ref={el => (toInputEl.current = el)}
          value={to}
          placeholder="To"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { before: from },
            modifiers,
            month: from,
            fromMonth: from,
            numberOfMonths: 2
          }}
          onDayChange={handleToChange}
        />
      </Grid>
    </>
  )
}

export default DayRangeFilter

//export default withStyles(style)(DayRangeFilter)
