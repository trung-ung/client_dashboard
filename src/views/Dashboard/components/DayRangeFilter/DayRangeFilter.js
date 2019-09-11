import { Grid } from '@material-ui/core'
import { createStyles, withStyles } from '@material-ui/styles'
import moment from 'moment'
import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import { formatDate, parseDate } from 'react-day-picker/moment'
import DayRangeFilterInput from './DayRangeFilterInput'

const style = createStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}))

// export default
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.handleFromChange = this.handleFromChange.bind(this)
    this.handleToChange = this.handleToChange.bind(this)
    this.state = {
      from: undefined,
      to: undefined
    }
  }

  showFromMonth() {
    const { from, to } = this.state
    if (!from) {
      return
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from)
    }
  }

  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from })
  }

  handleToChange(to) {
    this.setState({ to }, this.showFromMonth)
  }

  render() {
    const { classes } = this.props
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
      // <div className={classes.container}>
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
              onDayClick: () => this.to.getInput().focus()
            }}
            onDayChange={this.handleFromChange}
          />{' '}
        </Grid>

        {/* <span className="InputFromTo-to"> */}
        <Grid item lg={3} sm={3} xl={3} xs={12}>
          <DayPickerInput
            style={{ width: '100%' }}
            component={DayRangeFilterInput}
            inputProps={{ helperText: 'To' }}
            ref={el => (this.to = el)}
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
            onDayChange={this.handleToChange}
          />
        </Grid>
        {/* </span> */}
      </>
    )
  }
}

export default withStyles(style)(Example)
