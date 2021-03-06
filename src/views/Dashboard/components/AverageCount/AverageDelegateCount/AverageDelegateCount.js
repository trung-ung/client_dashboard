import React from 'react'
import AverageCard from '../AverageCard'
import GroupIcon from '@material-ui/icons/Group'
import { makeStyles } from '@material-ui/styles'
import {
  Avatar,
  IconButton,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Tooltip
} from '@material-ui/core'
import TimelapseIcon from '@material-ui/icons/Timelapse'
import WorkIcon from '@material-ui/icons/Work'
import formatMoney from '../../../../../helpers/formatMoney'
import { useSelector } from 'react-redux'
import Skeleton from '@material-ui/lab/Skeleton'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: theme.palette.success.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  iconButton: {
    color: 'white'
  },
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
  }
}))

const AverageDelegateCount = props => {
  const classes = useStyles()
  const { className, ...rest } = props

  const averageDelegateCount = useSelector(
    state => state.bookingInfo.averageDelegateValue
  )
  const averageDelegateCountText = useSelector(
    state => state.language.text.averageDelegateCount
  )

  const averageDelegateCountTooltip = useSelector(
    state => state.language.text.averageDelegateCountTooltip
  )

  const participants = useSelector(state => state.language.text.participants)
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
            <Tooltip title={averageDelegateCountTooltip}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="body2">
                {averageDelegateCountText}
              </Typography>
            </Tooltip>

            <Typography variant="h3">
              {Number(averageDelegateCount).toFixed(1)} {participants}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <IconButton className={classes.iconButton}>
                <GroupIcon className={classes.icon}></GroupIcon>
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

  // return (
  //   <AverageCard
  //     title={averageDefiniteBookingValueText}
  //     number={`€${formatMoney(averageDefiniteBookingValue)}`}
  //     icon={
  // <Avatar className={classes.avatar}>
  //   <IconButton className={classes.iconButton}>
  //     <WorkIcon className={classes.icon}></WorkIcon>
  //   </IconButton>
  // </Avatar>
  //     }></AverageCard>
  // )
}

AverageDelegateCount.propTypes = {
  className: PropTypes.string
}

export default AverageDelegateCount
