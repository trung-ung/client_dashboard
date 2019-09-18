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
  Tooltip
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
import { isBefore } from 'date-fns'
import { useSelector } from 'react-redux'

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
  delivered: 'success',
  pending: 'info',
  refunded: 'danger'
}

const LatestOrders = props => {
  const { className, ...rest } = props

  const classes = useStyles()

  const [isDesc, setIsDesc] = useState(true)

  const [orders] = useState(mockData)

  const latestUpdatedOrdersText = useSelector(
    state => state.language.text.latestUpdatedOrders
  )
  const orderRefText = useSelector(state => state.language.text.orderRef)
  const customerText = useSelector(state => state.language.text.customer)
  const dateText = useSelector(state => state.language.text.date)
  const statusText = useSelector(state => state.language.text.status)
  const viewAllText = useSelector(state => state.language.text.viewAll)

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
                      return isBefore(a.createdAt, b.createdAt) ? 1 : -1
                    }
                    return isBefore(a.createdAt, b.createdAt) ? -1 : 1
                  })
                  .map(order => (
                    <TableRow hover key={order.id}>
                      <TableCell>{order.ref}</TableCell>
                      <TableCell>{order.customer.name}</TableCell>
                      <TableCell>
                        {moment(order.createdAt).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell>
                        <div className={classes.statusContainer}>
                          <StatusBullet
                            className={classes.status}
                            color={statusColors[order.status]}
                            size="sm"
                          />
                          {order.status}
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
