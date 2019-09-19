import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import * as FilterActions from '../../../../actions/filter'
import * as BookingActions from '../../../../actions/bookingInfo'
import { useActions } from '../../../../actions'

// const venuesMock = [
//   {
//     value: 'All venues',
//     label: 'All venues'
//   },
//   {
//     value: 'The greatest show',
//     label: 'TGS'
//   },
//   {
//     value: 'Spiderman: Homing coming',
//     label: 'SPI'
//   },
//   {
//     value: 'London Clock',
//     label: 'LC'
//   },
//   {
//     value: 'Kamppi Mangoo',
//     label: 'KM'
//   }
// ]

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
  // const [venues, setVenues] = useState(venuesMock)
  const venues = useSelector(state => state.bookingInfo.venues)
  const showedVenues = ['All venues', ...venues]
  // const [venue, setVenue] = useState('')
  const venue = useSelector(state => state.filter.selectedVenue)
  const filterActions = useActions(FilterActions)
  const bookingActions = useActions(BookingActions)

  const venueText = useSelector(state => state.language.text.venue)

  const classes = useStyles()
  return (
    <TextField
      style={{ width: '100%' }}
      id="outlined-select"
      select
      className={classes.textField}
      value={venue}
      onChange={e => {
        filterActions.setSelectedVenue(e.target.value)
        bookingActions.fetchBookingInfo()
      }}
      SelectProps={{
        MenuProps: {
          className: classes.menu
        }
      }}
      label={venueText}
      margin="normal"
      variant="outlined">
      {showedVenues.map(option => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default VenuesDropdown
