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
  Zoom
} from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import PeopleIcon from '@material-ui/icons/PeopleOutlined'
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
    backgroundColor: theme.palette.success.main,
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

const TotalUsers = props => {
  const { className, ...rest } = props
  const totalBookings = useSelector(state => state.bookingInfo.totalBookings)
  const totalBookingsSupport = useSelector(
    state => state.bookingInfo.totalBookingsSupport
  )
  const duration = useSelector(state => state.filter.duration)

  const totalBookingsText = useSelector(
    state => state.language.text.totalBookings
  )

  const isLoading = useSelector(state => state.bookingInfo.isLoading)

  const classes = useStyles()

  if (isLoading)
    return (
      // <Card className={clsx(classes.root)}>
      //   <CardContent>
      //     {/* <Grid container justify="space-between">
      //       <Grid item>
      //       <Skeleton></Skeleton>
      //       </Grid>
      //     </Grid> */}
      //   </CardContent>

      //   <Skeleton></Skeleton>
      // </Card>
      <>
        <Skeleton variant="rect" height="50%"></Skeleton>
        <Skeleton />
        <Skeleton width="60%" />
      </>
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
              {totalBookingsText}
            </Typography>
            <Typography variant="h3">{totalBookings}</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <IconButton className={classes.iconButton}>
                <PeopleIcon className={classes.icon} />
              </IconButton>
            </Avatar>
          </Grid>
        </Grid>
        {
          //   duration !== 'Custom' ? (
          //   <div className={classes.difference}>
          //     <ArrowUpwardIcon className={classes.differenceIcon} />
          //     <Typography className={classes.differenceValue} variant="body2">
          //       {totalBookingsSupport}%
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
      </CardContent>
    </Card>
  )
}

TotalUsers.propTypes = {
  className: PropTypes.string
}

export default TotalUsers
