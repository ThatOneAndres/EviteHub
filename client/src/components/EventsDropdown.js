import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import teal from 'material-ui/colors/teal'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Menu, { MenuItem } from 'material-ui/Menu'
import TodayIcon from 'material-ui-icons/Today'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: teal[500]
  }
})

const options = [
  'Housewarming Party',
  'Baby Shower',
  'View All'
]

class EventsDropdown extends Component {
  state = {
    anchorEl: null,
    open: false,
    selectedIndex: 0
  };

  button = undefined;

  handleClickListItem = event => {
    this.setState({ open: true, anchorEl: event.currentTarget })
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, open: false })
  };

  handleRequestClose = () => {
    this.setState({ open: false })
  };

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <List>
          <ListItem
            button
            aria-haspopup='true'
            aria-controls='lock-menu'
            aria-label='Event'
            onClick={this.handleClickListItem}
          >
            <ListItemIcon>
              <TodayIcon />
            </ListItemIcon>
            <ListItemText
              type='title'
              primary='Event'
              secondary={options[this.state.selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id='lock-menu'
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}

EventsDropdown.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EventsDropdown)
