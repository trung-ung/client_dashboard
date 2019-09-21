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
import TrendingDown from '@material-ui/icons/TrendingDown'
import { useSelector } from 'react-redux'
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
    color: theme.palette.success.dark
  },
  differenceValue: {
    color: theme.palette.success.dark,
    marginRight: theme.spacing(1)
  },
  iconButton: {
    color: 'white'
  }
}))

const Budget = props => {
  const { className, ...rest } = props
  const canceledBookings = useSelector(
    state => state.bookingInfo.canceledBookings
  )

  const canceledBookingText = useSelector(
    state => state.language.text.cancelBookings
  )

  const canceledBookingsSupport = useSelector(
    state => state.bookingInfo.canceledBookingsSupport
  )

  const duration = useSelector(state => state.filter.duration)

  const classes = useStyles()

  const isLoading = useSelector(state => state.bookingInfo.isLoading)
  if (isLoading) {
    return (
      <>
        <Box width="100%" height="96px">
          <Skeleton variant="rect" height="50%"></Skeleton>
          <Skeleton height="10%" />
          <Skeleton height="10%" width="60%" />
        </Box>
      </>
    )
  }

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
              {canceledBookingText}
            </Typography>
            <Typography variant="h3">{canceledBookings}</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <IconButton className={classes.iconButton}>
                <TrendingDown className={classes.icon} />
              </IconButton>
            </Avatar>
          </Grid>
        </Grid>

        {
          //   duration !== 'Custom' ? (
          //   <div className={classes.difference}>
          //     <ArrowDownwardIcon className={classes.differenceIcon} />
          //     <Typography className={classes.differenceValue} variant="body2">
          //       {canceledBookingsSupport}%
          //     </Typography>
          //     <Typography className={classes.caption} variant="caption">
          //       Since last month
          //     </Typography>
          //   </div>
          // ) : (
          //   <div className={classes.difference}>
          //     {/* <Typography className={classes.caption} variant="caption">
          //       Choose fixed duration to show more analytics
          //     </Typography> */}
          //   </div>
          // )
        }
        {/* <div className={classes.difference}>
          <ArrowDownwardIcon className={classes.differenceIcon} />
          <Typography className={classes.differenceValue} variant="body2">
            {canceledBookingsSupport}%
          </Typography>
          <Typography className={classes.caption} variant="caption">
            Since last month
          </Typography>
        </div>
        <div className={classes.difference}>
          <Typography className={classes.caption} variant="caption">
            Choose fixed duration to show more analytics
          </Typography>
        </div> */}
      </CardContent>
    </Card>
  )
}

Budget.propTypes = {
  className: PropTypes.string
}

export default Budget
