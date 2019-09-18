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
  Fade
} from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import MoneyIcon from '@material-ui/icons/Money'
import ErrorIcon from '@material-ui/icons/Error'
import { useSelector } from 'react-redux'
import formatMoney from '../../../../helpers/formatMoney'

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
    backgroundColor: theme.palette.warning.main,
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

const UnconfirmedBookingValue = props => {
  const { className, ...rest } = props

  const classes = useStyles()
  const unconfirmedBookingValue = useSelector(
    state => state.bookingInfo.unconfirmedBookingValue
  )

  const confirmedBookingValueSupport = useSelector(
    state => state.bookingInfo.unconfirmedBookingValueSupport
  )
  const isLoading = useSelector(state => state.bookingInfo.isLoading)

  const duration = useSelector(state => state.filter.duration)

  const unconfirmedBookingValueText = useSelector(
    state => state.language.text.unconfirmedBookingValue
  )

  if (isLoading) {
    return <Skeleton variant="rect" height={136}></Skeleton>
  }

  return (
    <Fade in>
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="body2">
                {unconfirmedBookingValueText}
              </Typography>
              <Typography variant="h3">
                €{formatMoney(unconfirmedBookingValue)}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar className={classes.avatar}>
                <IconButton className={classes.iconButton}>
                  <ErrorIcon className={classes.icon} />
                </IconButton>
              </Avatar>
            </Grid>
          </Grid>
          {
            //   duration !== 'Custom' ? (
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
    </Fade>
  )
}

UnconfirmedBookingValue.propTypes = {
  className: PropTypes.string
}

export default UnconfirmedBookingValue
