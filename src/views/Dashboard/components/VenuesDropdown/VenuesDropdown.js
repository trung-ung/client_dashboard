import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import * as FilterActions from '../../../../actions/filter'
import { useActions } from '../../../../actions'

const venuesMock = [
  {
    value: 'The greatest show',
    label: 'TGS'
  },
  {
    value: 'Spiderman: Homing coming',
    label: 'SPI'
  },
  {
    value: 'London Clock',
    label: 'LC'
  },
  {
    value: 'Kamppi Mangoo',
    label: 'KM'
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

export const VenuesDropdown = () => {
  const [venues, setVenues] = useState(venuesMock)
  // const [venue, setVenue] = useState('')
  const venue = useSelector(state => state.filter.selectedVenue)
  const filterActions = useActions(FilterActions)

  const classes = useStyles()
  return (
    <TextField
      style={{ width: '100%' }}
      id="outlined-select"
      select
      label="Select"
      className={classes.textField}
      value={venue}
      onChange={e => filterActions.setSelectedVenue(e.target.value)}
      SelectProps={{
        MenuProps: {
          className: classes.menu
        }
      }}
      label="Venue"
      margin="normal"
      variant="outlined">
      {venues.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default VenuesDropdown
