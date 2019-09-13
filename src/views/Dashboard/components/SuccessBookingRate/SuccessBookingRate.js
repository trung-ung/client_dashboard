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
  IconButton
} from '@material-ui/core'
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined'
import { useSelector } from 'react-redux'

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
  const successBookingRate = useSelector(
    state => state.bookingInfo.successBookingRate
  )
  const classes = useStyles()

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
              SUCCESS BOOKING RATE
            </Typography>
            <Typography variant="h3">{successBookingRate}%</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <IconButton className={classes.iconButton}>
                <InsertChartIcon className={classes.icon} />
              </IconButton>
            </Avatar>
          </Grid>
        </Grid>
        <LinearProgress
          className={classes.progress}
          value={successBookingRate}
          variant="determinate"
        />
      </CardContent>
    </Card>
  )
}

TasksProgress.propTypes = {
  className: PropTypes.string
}

export default TasksProgress
