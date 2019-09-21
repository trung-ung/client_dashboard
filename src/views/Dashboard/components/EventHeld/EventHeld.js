import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  IconButton,
  Box
} from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import MoneyIcon from '@material-ui/icons/Money'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import { useSelector } from 'react-redux'
import formatMoney from '../../../../helpers/formatMoney'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  },
  iconButton: {
    color: 'white'
  }
}))

const Budget = props => {
  const { className, ...rest } = props

  const classes = useStyles()
  const confirmedBookingValue = useSelector(
    state => state.bookingInfo.confirmedBookingValue
  )

  const confirmedBookingValueSupport = useSelector(
    state => state.bookingInfo.confirmedBookingValueSupport
  )

  const numberOfEvents = useSelector(state => state.bookingInfo.numberOfEvents)

  const duration = useSelector(state => state.filter.duration)

  const eventHeldText = useSelector(state => state.language.text.eventHeld)

  const isLoading = useSelector(state => state.bookingInfo.isLoading)
  const matches = useMediaQuery(theme => theme.breakpoints.down('md'))

  if (isLoading)
    return (
      <Box height={matches ? 96 : 124}>
        <Skeleton variant="rect" height="50%"></Skeleton>
        <Skeleton height={matches && '10%'} />
        <Skeleton height={matches && '10%'} width="60%" />
      </Box>
    )

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2">
              {eventHeldText}
            </Typography>
            <Typography variant="h3">
              {/* ${formatMoney(confirmedBookingValue)} */}
              {numberOfEvents}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <IconButton className={classes.iconButton}>
                <EventAvailableIcon className={classes.icon} />
              </IconButton>
            </Avatar>
          </Grid>
        </Grid>
        {
          //     duration !== 'Custom' ? (
          //   <div className={classes.difference}>
          //     <ArrowDownwardIcon className={classes.differenceIcon} />
          //     <Typography className={classes.differenceValue} variant="body2">
          //       {confirmedBookingValueSupport}%
          //     </Typography>
          //     <Typography className={classes.caption} variant="caption">
          //       Since last month
          //     </Typography>
          //   </div>
          // ) : (
          //   <div className={classes.difference}>
          //     {/* <Typography className={classes.caption} variant="caption">
          //     Choose fixed duration to show more analytics
          //   </Typography> */}
          //   </div>
          // )
        }
      </CardContent>
    </Card>
  )
}

Budget.propTypes = {
  className: PropTypes.string
}

export default Budget
