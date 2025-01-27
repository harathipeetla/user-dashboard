import { Component } from "react";
import "./UserFrom.css"

class UserForm extends Component {
    state = {
      id: this.props.user?.id || "",
      
      name: this.props.user?.name || "",
      email: this.props.user?.email || "",
      gender: this.props.user?.gender || "",
      status: this.props.user?.status || "",
    };
  
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSave(this.state);
    };
  
    render() {
      const { id, name, email, gender, status } = this.state;
      return (
        <div className="user-form-conatiner">
          <form onSubmit={this.handleSubmit} className="user-form">
            {id && <p>ID: {id}</p>}
          
            <input
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
              required
            />
              <input
              type="text"
              name="gender"
              placeholder="gender"
              value={gender}
              onChange={this.handleChange}
            />
             <input
              type="text"
              name="status"
              placeholder="status"
              value={status}
              onChange={this.handleChange}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={this.props.onCancel}>Cancel</button>
          </form>
        </div>
      );
    }
  }
  
  export default UserForm;