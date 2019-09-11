import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'

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
  const [venue, setVenue] = useState('')
  const classes = useStyles()
  return (
    <TextField
      style={{ width: '100%' }}
      id="outlined-select"
      select
      label="Select"
      className={classes.textField}
      value={venue}
      onChange={e => setVenue(e.target.value)}
      SelectProps={{
        MenuProps: {
          className: classes.menu
        }
      }}
      helperText="Please select your venue"
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
