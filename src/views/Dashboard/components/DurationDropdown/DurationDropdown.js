import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import * as FilterActions from '../../../../actions/filter'
import { useActions } from '../../../../actions'
import moment from 'moment'

const durations = [
  {
    value: '1 month',
    label: '1 month'
  },
  {
    value: '3 month',
    label: '3 months'
  },
  {
    value: '6 month',
    label: '6 months'
  },
  {
    value: '1 year',
    label: '1 year'
  }
]

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {},
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}))

export const DurationDropdown = () => {
  const [duration, setDuration] = useState('1 month')
  const filterActions = useActions(FilterActions)
  const to = useSelector(state => state.filter.to)

  const classes = useStyles()
  return (
    <TextField
      style={{ width: '100%' }}
      id="outlined-select"
      select
      label="Select"
      className={classes.textField}
      value={duration}
      onChange={e => {
        setDuration(e.target.value)
        const [number, messure] = e.target.value.split(' ')
        // console.log('number', number)
        // console.log('messure', messure)
        filterActions.setFromFilter(
          moment(to)
            .subtract(number, messure)
            .toDate()
        )
      }}
      SelectProps={{
        MenuProps: {
          className: classes.menu
        }
      }}
      label="Duration"
      margin="normal"
      variant="outlined">
      {durations.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default DurationDropdown
