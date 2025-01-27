import React, { Component } from "react";
import axios from "axios";
import UserList from "./components/UserList/UserList";
import UserForm from "./components/UserFrom/UserForm";
import "./index.css"


class App extends Component {
  state = {
    users: [],
    currentPage: 1,
    totalPages: 1,
    selectedUser: null,
    isLoading: true,
    error: null,
    showForm: false,
  };

  fetchUsers = async (page) => {
    try {
      this.setState({ isLoading: true });
      const response = await axios.get(`https://gorest.co.in/public-api/users?page=${page}`);
      this.setState({
        users: response.data.data,
        currentPage: page,
        totalPages: response.data.meta.pagination.pages,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      this.setState({ error: "Failed to fetch users", isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchUsers(1);
  }

  handleAddUser = async (user) => {
    try {
      const response = await axios.post("https://gorest.co.in/public-api/users", user, {
        headers: {
          Authorization: "Bearer d5aec417a1016ee49139849a83b7f54f40a97d1791c6fa3e38e4926d42759266",
        },
      });
      console.log("User Added:", response.data); // Log the response for debugging
      this.setState((prevState) => ({
        users: [response.data.data, ...prevState.users],
        showForm: false,
      }));
    } catch (error) {
      this.setState({ error: "Failed to add user" });
    }
  };
  
  

  handleEditUser = async (user) => {
    try {
      const response = await axios.put(`https://gorest.co.in/public-api/users/${user.id}`, user, {
        headers: {
          Authorization: "Bearer 2874d4523a9e4b7ba8e0290544fe533fd9ec7978e2a04679bb03aa1563d12ebe",
        },
      });
      this.setState((prevState) => ({
        users: prevState.users.map((u) => (u.id === user.id ? response.data.data : u)),
        selectedUser: null,
        showForm: false,
      }));
    } catch (error) {
      this.setState({ error: "Failed to edit user" });
    }
  };

  handleDeleteUser = async (id) => {
    try {
      await axios.delete(`https://gorest.co.in/public-api/users/${id}`, {
        headers: {
          Authorization: "Bearer d5aec417a1016ee49139849a83b7f54f40a97d1791c6fa3e38e4926d42759266",
        },
      });
      this.setState((prevState) => ({
        users: prevState.users.filter((user) => user.id !== id),
      }));
    } catch (error) {
      this.setState({ error: "Failed to delete user" });
    }
  };

  render() {
    const { users, currentPage, totalPages, isLoading, error, showForm, selectedUser } = this.state;
    return (
      <div className="app">
        <h1 className="app-header">User Management</h1>
        {showForm && (
          <UserForm
            user={selectedUser}
            onCancel={() => this.setState({ showForm: false })}
            onSave={selectedUser ? this.handleEditUser : this.handleAddUser}
          />
        )}
        {error && <div className="error">{error}</div>}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <button onClick={() => this.setState({ showForm: true, selectedUser: null })} className="add-user-btn">Add User</button>
            <UserList
              users={users}
              onEdit={(user) => this.setState({ selectedUser: user, showForm: true })}
              onDelete={this.handleDeleteUser}
            />
           <div className="pagination">
            <button 
            className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`} 
            disabled={currentPage === 1} 
            onClick={() => this.fetchUsers(currentPage - 1)}
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button 
            className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`} 
            disabled={currentPage === totalPages} 
            onClick={() => this.fetchUsers(currentPage + 1)}
            >
            Next
          </button>
      </div>
          </>
        )}
       
      </div>
    );
  }
}

export default App;