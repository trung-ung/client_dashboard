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

const LatestProducts = props => {
  const { className, ...rest } = props
  const [isDesc, setIsDesc] = useState(true)
  const classes = useStyles()

  // const [products] = useState(mockData)
  const reasons = useSelector(state => state.bookingInfo.canceledReasons)

  const topCancelReasonsText = useSelector(
    state => state.language.text.topCancelReasons
  )
  const reasonsText = useSelector(state => state.language.text.reasons)
  const timesText = useSelector(state => state.language.text.times)
  const viewAllText = useSelector(state => state.language.text.viewAll)

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
        subtitle={`${reasons.length} in total`}
        title={topCancelReasonsText}
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
                <TableCell>{reasonsText}</TableCell>

                <TableCell sortDirection={isDesc ? 'desc' : 'asc'}>
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel
                      active
                      direction={isDesc ? 'desc' : 'asc'}
                      onClick={() => {
                        setIsDesc(!isDesc)
                      }}>
                      {timesText}
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reasons
                .sort((a, b) => {
                  if (isDesc) {
                    return b.number - a.number
                  }
                  return a.number - b.number
                })
                .map(reason => (
                  <TableRow hover key={reason.id}>
                    <TableCell>{reason.name}</TableCell>
                    <TableCell>{reason.number}</TableCell>
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

LatestProducts.propTypes = {
  className: PropTypes.string
}

export default LatestProducts

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
