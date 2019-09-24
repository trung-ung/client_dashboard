import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
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
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { StatusBullet } from '../../../../components'
import mockData from './data'
import { isBefore, format } from 'date-fns'
import { useSelector } from 'react-redux'
import Skeleton from '@material-ui/lab/Skeleton'
import { startOfDecade } from 'date-fns/esm'

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}))

const statusColors = {
  Confirmed: 'success',
  'Supplier should confirm': 'warning',
  Canceled: 'danger'
}

const LatestOrders = props => {
  const { className, ...rest } = props

  const classes = useStyles()

  const [isDesc, setIsDesc] = useState(true)

  const orders = useSelector(state => state.bookingInfo.latestUpdatedOrders)

  const latestUpdatedOrdersText = useSelector(
    state => state.language.text.latestUpdatedOrders
  )
  const orderRefText = useSelector(state => state.language.text.orderRef)
  const customerText = useSelector(state => state.language.text.customer)
  const dateText = useSelector(state => state.language.text.date)
  const statusText = useSelector(state => state.language.text.status)
  const viewAllText = useSelector(state => state.language.text.viewAll)

  const isLoading = useSelector(state => state.bookingInfo.isLoading)
  if (isLoading)
    return (
      <Box height={652}>
        <Skeleton variant="rect" height={52}></Skeleton>

        <Skeleton height={524} />

        <Skeleton height={48} />
      </Box>
    )

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        // action={
        //   <Button color="primary" size="small" variant="outlined">
        //     New entry
        //   </Button>
        // }
        title={latestUpdatedOrdersText}
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{orderRefText}</TableCell>
                  <TableCell>{customerText}</TableCell>
                  <TableCell sortDirection={isDesc ? 'desc' : 'asc'}>
                    <Tooltip enterDelay={300} title="Sort">
                      <TableSortLabel
                        active
                        direction={isDesc ? 'desc' : 'asc'}
                        onClick={() => {
                          setIsDesc(!isDesc)
                        }}>
                        {dateText}
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell>{statusText}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders
                  .sort((a, b) => {
                    if (isDesc) {
                      return isBefore(new Date(a.updated), new Date(b.updated))
                        ? 1
                        : -1
                    }
                    return isBefore(new Date(a.updated), new Date(b.updated))
                      ? -1
                      : 1
                  })
                  .map(order => (
                    <TableRow hover key={order.orderId}>
                      <TableCell>{order.orderId}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>
                        {/* {moment(order.updated).format('DD/MM/YYYY')} */}
                        {format(new Date(order.updated), 'dd/MM/yyyy')}
                      </TableCell>
                      <TableCell>
                        <div className={classes.statusContainer}>
                          <StatusBullet
                            className={classes.status}
                            color={statusColors[order.newStatus]}
                            size="sm"
                          />
                          {order.newStatus}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
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

LatestOrders.propTypes = {
  className: PropTypes.string
}

export default LatestOrders
