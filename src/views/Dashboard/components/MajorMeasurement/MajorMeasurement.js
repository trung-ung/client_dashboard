import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Box
} from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { useSelector } from 'react-redux'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  // header: {
  //   backgroundColor: theme.palette.error.light
  // },

  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
}))

const MajorMeasurement = props => {
  const { className, ...rest } = props
  const [isDesc, setIsDesc] = useState(true)
  const classes = useStyles()

  // const [products] = useState(mockData)
  //   const reasons = useSelector(state => state.bookingInfo.canceledReasons)

  const eventsHeld = useSelector(state =>
    Number(state.bookingInfo.numberOfEvents)
  )
  const totalBookings = useSelector(state =>
    Number(state.bookingInfo.totalBookings)
  )
  const definiteBookings = useSelector(state =>
    Number(state.bookingInfo.confirms)
  )

  //   const topCancelReasonsText = useSelector(
  //     state => state.language.text.topCancelReasons
  //   )

  const canceledBookings = useSelector(
    state => state.bookingInfo.canceledBookings
  )

  const canceledBookingText = useSelector(
    state => state.language.text.cancelBookings
  )
  const reasonsText = useSelector(state => state.language.text.reasons)
  const timesText = useSelector(state => state.language.text.times)
  const viewAllText = useSelector(state => state.language.text.viewAll)

  const majorMeasurementText = useSelector(
    state => state.language.text.majorMeasurementText
  )
  const indicatorsText = useSelector(state => state.language.text.indicators)
  const unitText = useSelector(state => state.language.text.unit)
  const bookingsText = useSelector(state => state.language.text.bookings)
  const eventsText = useSelector(state => state.language.text.events)

  const evenstHeldText = useSelector(state => state.language.text.eventHeld)
  const definiteBookingsText = useSelector(
    state => state.language.text.definiteBookings
  )
  const totalBookingsText = useSelector(
    state => state.language.text.totalBookings
  )

  const isLoading = useSelector(state => state.bookingInfo.isLoading)

  if (isLoading) {
    return (
      <>
        <Box width="100%" height={202}>
          <Skeleton variant="rect" height="65%"></Skeleton>
          <Skeleton height="10%" />
          <Skeleton height="10%" width="60%" />
        </Box>
      </>
    )
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        title={majorMeasurementText}
        // action={
        //   <IconButton size="small">
        //     <CancelIcon />
        //   </IconButton>
        // }
        className={classes.header}
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{indicatorsText}</TableCell>

                <TableCell sortDirection={isDesc ? 'desc' : 'asc'}>
                  {/* <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel
                      active
                      direction={isDesc ? 'desc' : 'asc'}
                      onClick={() => {
                        setIsDesc(!isDesc)
                      }}>
                      {timesText}
                    </TableSortLabel>
                    
                  </Tooltip> */}
                  {unitText}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover key={totalBookingsText}>
                <TableCell>{totalBookingsText}</TableCell>
                <TableCell>
                  {totalBookings} {bookingsText}
                </TableCell>
              </TableRow>

              <TableRow hover key={definiteBookingsText}>
                <TableCell>{definiteBookingsText}</TableCell>
                <TableCell>
                  {definiteBookings} {bookingsText}
                </TableCell>
              </TableRow>

              <TableRow hover key={canceledBookingText}>
                <TableCell>{canceledBookingText}</TableCell>
                <TableCell>
                  {canceledBookings} {bookingsText}
                </TableCell>
              </TableRow>

              <TableRow hover key={evenstHeldText}>
                <TableCell>{evenstHeldText}</TableCell>
                <TableCell>
                  {eventsHeld} {eventsText}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      {/* <CardActions className={classes.actions}>
        <Button color="primary" size="small" variant="text">
          {viewAllText} <ArrowRightIcon />
        </Button>
      </CardActions> */}
    </Card>
  )
}

MajorMeasurement.propTypes = {
  className: PropTypes.string
}

export default MajorMeasurement
