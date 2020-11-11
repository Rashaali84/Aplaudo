
import React, { Component } from 'react';

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ArtistPhoto: '',
            ArtistFirstName: '',
            ArtistLastName: '',
            ArtistNickName: '',
            EmailAddress: '',
            Password: '' 
        };
      }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

  handleSubmit = (e) => {
  
        e.preventDefault();
  
            fetch('/api/artists', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: { 
                    "Content-type": "application/json;charset=UTF-8"
                } 
              })
              .then((response) => response.text())
              .then((result) => {
                console.log('Success:', result);
              })
              .catch(error => {
                console.error('Error:', error);
              });    

  }
render (){
    return (
  
          <div className="signin-container">
            <div className="logo">
                <img src={''} alt="Logo" className="logo" />
            </div>
            <div className="login-wrapper">
                <div className="auth-inner">
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card photo"
                    />
                    <form className="container" name="form" onSubmit={this.handleSubmit}>
                        <h3>Create an account</h3>
                        <div className="form-group">
                            <label htmlFor="ArtistFirstName">First name</label>
                            <input
                                type="text"
                                name="ArtistFirstName"
                                //className={"form-control email" + (submitted && !user.ArtistFirstName ? ' is-invalid' : '')}
                                value={this.state.ArtistFirstName}
                                placeholder="Enter first name"
                                onChange={this.handleChange}
                            />
                                <div className="form-group">
                            <label htmlFor="ArtistLastName">Last name</label>
                            <input
                                type="text"
                                name="ArtistLastName"
                                //className={"form-control email" + (submitted && !user.ArtistLastName ? ' is-invalid' : '')}
                                value={this.state.ArtistLastName}
                                placeholder="Enter last name"
                                onChange={this.handleChange}
                            />
                          
                        </div>

                        <div className="form-group">
                            <label htmlFor="ArtistNickName">Nick name</label>
                            <input
                                type="text"
                                name="ArtistNickName"
                                className="form-control email"
                                value={this.state.ArtistNickName}
                                placeholder="Enter nick name"
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="EmailAddress">Email address</label>
                            <input
                                type="email"
                                name="EmailAddress"
                               // className={"form-control email" + (submitted && !user.EmailAddress ? ' is-invalid' : '')}
                                value={this.state.EmailAddress}
                                placeholder="Enter email"
                                onChange={this.handleChange}
                            />
                        
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password" >Password</label>
                            <input
                                type="password"
                                name="Password"
                                //className={"form-control password" + (submitted && !user.Password ? ' is-invalid' : '')}
                                value={this.state.Password}
                                placeholder="Enter password"
                                onChange={this.handleChange}
                            />
                        </div>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary">
                        Register
                    </button>
                            {/* <Link to="/signin" className="btn btn-link">Cancel</Link>*/}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )}
}


