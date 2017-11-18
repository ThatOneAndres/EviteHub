import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Dashboard from './pages/dashboard'
import chooseEventAction from './pages/chooseEventAction'
import addEvent from './pages/addEvent'
import viewEvents from './pages/viewEvents'
import GuestList from './pages/guestList'
import SendInvites from './pages/sendInvites'
import Login from './pages/login'
import Registration from './pages/registration'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'

const drawerWidth = 250

const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    zIndex: 1
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  content: {
    flex: '1 1 100%',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: theme.spacing.unit * 2,
    marginTop: 56,
    marginBottom: 100,
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
      marginTop: 64,
      marginBottom: 100
    }
  }
})

class App extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <Router>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <NavBar />
            <SideBar />
            <main className={classes.content}>
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/events' component={chooseEventAction} />
                <Route exact path='/events/add' component={addEvent} />
                <Route exact path='/events/view' component={viewEvents} />
                <Route exact path='/guest-list' component={GuestList} />
                <Route exact path='/send-invites' component={SendInvites} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/registration' component={Registration} />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(App)
