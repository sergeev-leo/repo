import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Dialog from '@material-ui/core/Dialog/Dialog';

export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginState: false,
      login: '',
      password: ''
    }
  }

  handleLoginChange = e =>
    this.setState({
      login: e.target.value
    });

  handlePasswordChange = e =>
    this.setState({
      password: e.target.value
    });

  handleSubmit = () => {
    console.log(this.state.login, this.state.password);
  };

  handleCancel = () => {
    console.log('submitting cancelled');
    this.props.onCancel()
  };

  render() {
    const {
      login,
      password,
      loginState
    } = this.state;

    return (
      <Dialog
        open={this.props.isDialogModalOpen}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send
            updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange={this.handleLoginChange}
            value={login}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={this.handlePasswordChange}
            value={password}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

LoginForm.propTypes = {};
