import { Grid, Divider, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect } from 'react'
import {
  ConfirmedBookingValue,
  EventHeld,
  DayRangeFilter,
  LatestOrders,
  LatestProducts,
  LatestSales,
  SuccessBookingRate,
  RevenueEarned,
  TotalBookings,
  OverallStatus,
  VenuesDropdown,
  CancelBooking,
  DurationDropdown,
  AverageCount,
  UnconfirmedBookingValue
} from './components'
import PropTypes from 'prop-types'

import palette from '../../theme/palette'

import ScrollableAnchor, {
  goToAnchor,
  configureAnchors
} from 'react-scrollable-anchor'

import * as BookingInfoActions from '../../actions/bookingInfo'
import { useActions } from '../../actions'
import { useSelector, connect } from 'react-redux'
import { fetchBookingInfo } from '../../actions/bookingInfo'
import Loader from 'react-loader-spinner'

configureAnchors({ offset: -100, scrollDuration: 350 })

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  title: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2)
  }
}))

const Dashboard = ({ fetchBookingInfo, isLoading }) => {
  const classes = useStyles()
  // const bookingInfoActions = useActions(BookingInfoActions)

  //const isLoading = useSelector(state => state.bookingInfo.isLoading)

  // useEffect(() => {
  //   bookingInfoActions.fetchBookingInfo()
  // }, [bookingInfoActions])

  useEffect(() => {
    goToAnchor('section1')
  }, [])

  useEffect(() => {
    fetchBookingInfo()
  }, [fetchBookingInfo])

  return (
    <div className={classes.root}>
      <Grid container spacing={4} justify="flex-start">
        <Grid item lg={3} sm={12} md={3} xl={3} xs={12}>
          <VenuesDropdown></VenuesDropdown>
        </Grid>
        {/* <Hidden only={['xs', 'md', 'lg', 'xl']}>
          <Grid item sm={6}></Grid>
        </Hidden> */}

        <DayRangeFilter></DayRangeFilter>
        {/* <Grid item lg={3} sm={12} md={3} xl={3} xs={12}>
          <DurationDropdown></DurationDropdown>
        </Grid> */}
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Divider varient="middle" style={{}}></Divider>
        </Grid>
      </Grid>

      {isLoading ? (
        <Grid container spacing={4} justify="center">
          <Grid item>
            <Loader
              type="Puff"
              color={palette.primary.main}
              height={370}
              width={370}
              //timeout={3000} //3 secs
            />
          </Grid>
        </Grid>
      ) : (
        <>
          <Typography variant="h4" className={classes.title}>
            Future Figure
          </Typography>
          <Grid container spacing={4} justify="flex-start">
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              <ConfirmedBookingValue></ConfirmedBookingValue>
            </Grid>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              <UnconfirmedBookingValue></UnconfirmedBookingValue>
            </Grid>
          </Grid>
          <ScrollableAnchor id="section1">
            <Typography variant="h4" className={classes.title}>
              Selected Duration
            </Typography>
          </ScrollableAnchor>

          <ScrollableAnchor id={'section1'}>
            <Grid container spacing={4} justify="flex-start">
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <EventHeld />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <TotalBookings />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <SuccessBookingRate />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <RevenueEarned />
              </Grid>
              <Grid item lg={4} md={6} xl={3} xs={12}>
                <OverallStatus />
              </Grid>
              {/* <Grid item lg={8} md={12} xl={9} xs={12}>
<LatestSales />
</Grid> */}
              <Grid item lg={4} sm={6} xl={3} xs={12}>
                <CancelBooking></CancelBooking>
              </Grid>
              <Grid item lg={4} sm={6} xl={3} xs={12}>
                <AverageCount></AverageCount>
              </Grid>
              <Grid item xl={9} lg={8} md={8} sm={6} xs={12}>
                <LatestOrders />
              </Grid>
              {/* <Grid item lg={4} md={6} xl={3} xs={12}>
<LatestProducts />
</Grid> */}
              {/* <Grid item lg={8} md={12} xl={9} xs={12}>
<LatestOrders />
</Grid> */}
            </Grid>
          </ScrollableAnchor>
        </>
      )}
    </div>
  )
}

Dashboard.propTypes = {
  fetchBookingInfo: PropTypes.func,
  isLoading: PropTypes.bool
}

const mapStateToProps = state => ({
  isLoading: state.bookingInfo.isLoading
})

export default connect(
  mapStateToProps,
  { fetchBookingInfo }
)(Dashboard)
