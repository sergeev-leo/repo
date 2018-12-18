import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from 'react-router-dom';
import './style.sass';
import {
  APP_TITLE_LABEL,
  SIGN_IN_LABEL
} from '../../utils/constants/labels';
import {LoginForm} from '../forms/LoginForm';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export class ButtonAppBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      isDialogOpen: null
    }
  }

  handleLoginButtonClick = () =>
    this.setState({isDialogOpen: true});

  handleLoginFormCloseButton = () =>
    this.setState({isDialogOpen: false});

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}

            >
              <NavLink
                to={'/'}
                color="inherit"
                className="app-title-label"
              >
                {APP_TITLE_LABEL}
              </NavLink>
            </Typography>
            <Button
              color="inherit"
              className="login-button"
              onClick={this.handleLoginButtonClick}
            >
              {SIGN_IN_LABEL}
            </Button>
          </Toolbar>
        </AppBar>
        <LoginForm
          isDialogModalOpen={this.state.isDialogOpen}
          onCancel={this.handleLoginFormCloseButton}
        />
      </div>
    );
  }
}


ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const NavigationBar = withStyles(styles)(ButtonAppBar);
