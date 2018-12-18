import React, {Component} from 'react';
import { LoginForm } from '../forms/LoginForm';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';


export class LoginPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      isDialogOpen: true
    }
  }

  handleClose = () =>
    this.setState({isDialogOpen: false});

  render() {
    return (
      <Dialog
        open={this.state.isDialogOpen}
      >
        <DialogTitle
          id="simple-dialog-title"
          className="login-page__dialog-title"
        >
          Вход
        </DialogTitle>
        <LoginForm
          onCancel={this.handleClose}
        />
      </Dialog>
    );
  }
}

LoginPage.propTypes = {};

