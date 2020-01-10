import React, { Component } from 'react';



class ForgotPassword extends Component {
  constructor(props) {
    super(props);
     this.state = {
      username: ''
    }

  }
   handleUsernameChange=(e)=> {
    this.setState({username: e.target.value});
  }

   handleSubmit= (e) => {
    e.preventDefault();
    alert('reset link sent to mail');
  }

  render() {
    return (
       <div class="wrapper ">
        <div id="formContent">
      <span><h2 className='header'>Reset your password</h2></span>
      <p> Enter your user account's verified email address and we will send you a password reset link..</p>

      <form className = 'form' onSubmit={this.handleSubmit}>
        <label>
          <strong>Email:</strong>
          <input
            id="username" type="text" class="fadeIn second"
            value={this.state.username}
            onChange={this.handleUsernameChange}  />

        </label>
       <input id="submit" type="submit" class="fadeIn fourth" value="send Password reset link" />
      </form>
    
      </div>
      </div>
    );
  }
}
export default ForgotPassword