import React from 'react'
import AverageCard from '../AverageCard'
import GroupIcon from '@material-ui/icons/Group'
import { makeStyles } from '@material-ui/styles'
import { Avatar, IconButton, Fade, Box } from '@material-ui/core'
import TimelapseIcon from '@material-ui/icons/Timelapse'
import WorkIcon from '@material-ui/icons/Work'
import formatMoney from '../../../../../helpers/formatMoney'
import { useSelector } from 'react-redux'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: theme.palette.warning.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  iconButton: {
    color: 'white'
  }
}))

const AverageConfirmedBooking = () => {
  const classes = useStyles()

  const averageDefiniteBookingValue = useSelector(
    state => state.bookingInfo.averageOrderValue
  )
  const averageDefiniteBookingValueText = useSelector(
    state => state.language.text.averageDefiniteBookingValue
  )

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
    <AverageCard
      title={averageDefiniteBookingValueText}
      number={`€${formatMoney(averageDefiniteBookingValue)}`}
      icon={
        <Avatar className={classes.avatar}>
          <IconButton className={classes.iconButton}>
            <WorkIcon className={classes.icon}></WorkIcon>
          </IconButton>
        </Avatar>
      }></AverageCard>
  )
}

export default AverageConfirmedBooking
