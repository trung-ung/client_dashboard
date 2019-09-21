import React from 'react'
import AverageCard from '../AverageCard'
import GroupIcon from '@material-ui/icons/Group'
import { makeStyles } from '@material-ui/styles'
import { Avatar, IconButton, Fade, Box } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Skeleton from '@material-ui/lab/Skeleton'

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
  }
}))

const AverageDelegateCount = () => {
  const classes = useStyles()
  const averageDelegateCount = useSelector(state =>
    Number(state.bookingInfo.averageDelegateValue)
  )
  const averageDelegateCountText = useSelector(
    state => state.language.text.averageDelegateCount
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
      title={averageDelegateCountText}
      number={!isNaN(averageDelegateCount) ? averageDelegateCount : 0}
      icon={
        <Avatar className={classes.avatar}>
          <IconButton className={classes.iconButton}>
            <GroupIcon className={classes.icon}></GroupIcon>
          </IconButton>
        </Avatar>
      }></AverageCard>
  )
}

export default AverageDelegateCount
