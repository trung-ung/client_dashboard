import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Box
} from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import PerfectScrollbar from 'react-perfect-scrollbar'

import mockData from './data'
import { useSelector } from 'react-redux'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  // header: {
  //   backgroundColor: theme.palette.error.light
  // },

  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
}))

const BookingSources = props => {
  const { className, ...rest } = props
  const [isDesc, setIsDesc] = useState(true)
  const [isValueDesc, setIsValueDesc] = useState(true)

  const [isTimeTurn, setIsTimeTurn] = useState(true)
  const [isValueTurn, setIsValueTurn] = useState(false)

  const classes = useStyles()

  // const [products] = useState(mockData)
  const sources = useSelector(state => state.bookingInfo.bookingSources)

  const sourceText = useSelector(state => state.language.text.source)
  const viewAllText = useSelector(state => state.language.text.viewAll)
  const timesText = useSelector(state => state.language.text.times)

  const isLoading = useSelector(state => state.bookingInfo.isLoading)
  if (isLoading) {
    return (
      <>
        <Box width="100%" height={202}>
          <Skeleton variant="rect" height="65%"></Skeleton>
          <Skeleton height="10%" />
          <Skeleton height="10%" width="60%" />
        </Box>
      </>
    )
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        subtitle={`${sources.length} in total`}
        title="Booking Sources"
        // action={
        //   <IconButton size="small">
        //     <CancelIcon />
        //   </IconButton>
        // }
        className={classes.header}
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{sourceText}</TableCell>

                <TableCell sortDirection={isDesc ? 'desc' : 'asc'}>
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel
                      // active
                      direction={isDesc ? 'desc' : 'asc'}
                      onClick={() => {
                        setIsDesc(!isDesc)
                        setIsValueTurn(false)
                        setIsTimeTurn(true)
                      }}>
                      {timesText}
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>

                <TableCell sortDirection={isValueDesc ? 'desc' : 'asc'}>
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel
                      //active
                      direction={isValueDesc ? 'desc' : 'asc'}
                      onClick={() => {
                        setIsValueDesc(!isValueDesc)
                        setIsValueTurn(true)
                        setIsTimeTurn(false)
                      }}>
                      Value
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sources
                .sort((a, b) => {
                  if (isTimeTurn) {
                    if (isDesc) {
                      return b.totalSourceBookings - a.totalSourceBookings
                    }
                    return a.totalSourceBookings - b.totalSourceBookings
                  }
                  return 0
                })
                .sort((a, b) => {
                  if (isValueTurn) {
                    if (isValueDesc) {
                      return (
                        b.totalBookingSourceValue - a.totalBookingSourceValue
                      )
                    }
                    return a.totalBookingSourceValue - b.totalBookingSourceValue
                  }
                  return 0
                })
                .map(source => (
                  <TableRow hover key={source.source}>
                    <TableCell>{source.source}</TableCell>
                    <TableCell>{source.totalSourceBookings}</TableCell>
                    <TableCell>€{source.totalBookingSourceValue}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button color="primary" size="small" variant="text">
          {viewAllText} <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  )
}

BookingSources.propTypes = {
  className: PropTypes.string
}

export default BookingSources

/* //old list
<List>
{products.map((product, i) => (
  <ListItem divider={i < products.length - 1} key={product.id}>
    <ListItemAvatar>
      <img
        alt="Product"
        className={classes.image}
        src={product.imageUrl}
      />
    </ListItemAvatar>
    <ListItemText
      primary={product.name}
      secondary={`Updated ${product.updatedAt.fromNow()}`}
    />
    <ListItemSecondaryAction>
      {product.number}
    </ListItemSecondaryAction>
    <IconButton edge="end" size="small">
      <MoreVertIcon />
    </IconButton>
  </ListItem>
))}
</List>
*/
