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
  LinearProgress,
  IconButton,
  Box
} from '@material-ui/core'
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined'
import { useSelector } from 'react-redux'
import toPercent from '../../../../helpers/toPercent'
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
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  progress: {
    marginTop: theme.spacing(3)
  },
  iconButton: {
    color: 'white'
  }
}))

const TasksProgress = props => {
  const { className, ...rest } = props
  const successBookingRate = useSelector(state =>
    Number(toPercent(state.bookingInfo.successBookingRate))
  )

  const definiteBookings = useSelector(state =>
    Number(state.bookingInfo.confirms)
  )

  const classes = useStyles()
  const definiteBookingPercentText = useSelector(
    state => state.language.text.definiteBookingPercent
  )

  const definiteBookingsText = useSelector(
    state => state.language.text.definiteBookings
  )

  const isLoading = useSelector(state => state.bookingInfo.isLoading)
  //const matches = useMediaQuery(theme => theme.breakpoints.down('xs'))

  if (isLoading)
    return (
      <Box height={96}>
        <Skeleton variant="rect" height="50%"></Skeleton>
        <Skeleton />
        <Skeleton width="60%" />
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
              {definiteBookingsText}
            </Typography>
            <Typography variant="h3">{definiteBookings}</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <IconButton className={classes.iconButton}>
                <InsertChartIcon className={classes.icon} />
              </IconButton>
            </Avatar>
          </Grid>
        </Grid>
        {/* <LinearProgress
          className={classes.progress}
          value={successBookingRate}
          variant="determinate"
        /> */}
      </CardContent>
    </Card>
  )
}

TasksProgress.propTypes = {
  className: PropTypes.string
}

export default TasksProgress
