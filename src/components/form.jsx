import React, { Component } from 'react';
import './form.css';
class Form extends Component {
    render() {
        return (
            <React.Fragment>
			    <div>
			        <form>
			            Username: <input type="text" name="username"/> <br />
			            Email: <input type="email" name="email"/> <br />
			            Password: <input type="password" name="password"/> <br />
			            <input type="submit" />
			        </form>
			    </div>
			</React.Fragment>
        );
    }
}

export default Form;