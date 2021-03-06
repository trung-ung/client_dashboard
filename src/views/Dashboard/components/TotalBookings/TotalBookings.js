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
  Zoom,
  Box,
  Tooltip
} from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import PeopleIcon from '@material-ui/icons/PeopleOutlined'
import { useSelector } from 'react-redux'
import Skeleton from '@material-ui/lab/Skeleton'
import useMediaQuery from '@material-ui/core/useMediaQuery'

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

  const totalBookingsTooltip = useSelector(
    state => state.language.text.totalBookingsTooltip
  )

  const classes = useStyles()

  const isLoading = useSelector(state => state.bookingInfo.isLoading)
  //const matches = useMediaQuery(theme => theme.breakpoints.down('md'))

  if (isLoading)
    return (
      <Box height={96}>
        <Skeleton variant="rect" height="50%"></Skeleton>
        <Skeleton height={'10%'} />
        <Skeleton height={'10%'} width="60%" />
      </Box>
    )

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Tooltip title={totalBookingsTooltip}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="body2">
                {totalBookingsText}
              </Typography>
            </Tooltip>

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
